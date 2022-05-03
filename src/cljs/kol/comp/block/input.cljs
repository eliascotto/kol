(ns kol.comp.block.input
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [clojure.string :as string]
   [clojure.edn :as edn]
   [kol.env :as env :refer [debug]]
   [kol.utils.core :as utils]
   [kol.fn.esexpr :as esexpr-fn]
   [kol.macros :refer [map-keys for-indexed]]
   [kol.comp.content-editable.core :as ce :refer [content-editable]]
   [kol.comp.block.code-wrappers :as wrapper]
   [kol.comp.block.common :as common :refer [expr-el-def expr-el-fn expr-el]]
   [kol.server :as server]))


(declare on-input-blur
         on-input-keydown
         on-input-change
         on-block-click
         split-rows
         create-expr
         block-bg-color
         editable-el
         vector-container
         map-container
         item-container
         row-container
         function-el
         create-item-key)


(defn update-source
  "Update the source code (and the visual block structure)
  replacing the `esexpr-node` with a new one derived from `expr`."
  [expr esexpr-node]
  (let [source @(rf/subscribe [:source])]
    (server/update-expr
     source      ; source
     esexpr-node ; esexpr-node of the block
     expr        ; new expression
     (fn [{:keys [source esexpr]}]
       (rf/dispatch [:source-set-with-esexpr source esexpr])))))


(def default-fn
  "Default empty function."
  '(defn undef [] nil))


(defn block-input
  "Component to make a block editable.
  Receive the id for the block."
  [id]
  (let [block @(rf/subscribe [:block id])
        esexpr (:esexpr block)
        rows (split-rows esexpr)
        depth (dec (count (:location esexpr)))
        bg-color (block-bg-color depth)]
    [:div {:class [bg-color "text-slate-200"
                   "w-fit" "min-w-[90px]"
                   "shadow-md" "rounded-md"
                   "my-2"
                   "flex" "flex-col" "items-start" "justify-start"]
           :on-click #(on-block-click % id)}
     ;; Block header
     [row-container
      (create-expr {:exs      (first rows)
                    :row-idx  0
                    :block-id id})]
     ;; Block arguments
     (for-indexed [[idx row] (rest rows)]
                  [row-container
                   (create-expr {:exs      row
                                 :row-idx  (inc idx)
                                 :block-id id})])]))


(defn split-rows
  "Returns a vector of tokens divided by rows."
  [esexpr]
  (->> (:children esexpr)
       (partition-by #(contains? % :newlines))
       (filter #(not (contains? (first %) :newlines)))
       (map vec)))


(defn create-editable-item
  "Create a new editable element and push item
  reference into the app db."
  [expr row-idx col-idx block-id]
  (let [item-key (create-item-key (map-keys row-idx col-idx block-id))
        item (pr-str (:sexpr expr))]
    (rf/dispatch [:save-item item-key item])
    [editable-el (map-keys expr row-idx col-idx block-id)]))


(defn create-expr
  "Parse expr content (eventually row by row).
  Does not manage new lines!
  `header?` is to differentiate the first line."
  [{:keys [exs row-idx block-id col-idx-offset]
    :or {col-idx-offset 0}}]
  (map-indexed
   (fn [idx expr]
     (let [col-idx (+ col-idx-offset idx)]
       (case (:type expr)
         :list
         [block-input (esexpr-fn/block-id expr)]

         :vector
         [vector-container
          (map-keys expr row-idx col-idx block-id)]

         :map
         [map-container (map-keys expr row-idx col-idx block-id)]

         :symbol
         (if (and (zero? row-idx) (zero? col-idx))
           [function-el expr block-id]
           [item-container
            (create-editable-item expr row-idx col-idx block-id)])

         (:number :keyword :string)
         [item-container
          (create-editable-item expr row-idx col-idx block-id)]

         (println "Not-maching-type" (:type expr)))))
   exs))


(defn editable-el
  "Element that wrap the content of the item with a
  contentEditable div.
  Manages the focus and the caret position."
  [{:keys [expr row-idx col-idx block-id]}]
  (let [item-key (create-item-key (map-keys row-idx col-idx block-id))
        expr-type (:type expr)
        value @(rf/subscribe [:item item-key])]
    [content-editable
     {:class ["bg-transparent" "outline-none" "text-[13px]"
              "font-mono" "w-auto"
              (when (= expr-type :keyword) "text-[#78D1E1]")
              (when (= expr-type :number) "text-[#78D1E1]")
              (when (= expr-type :string) "text-[#E7DE79]")
              (when (and (zero? row-idx) (zero? col-idx))
                "text-[#67E480]")]
      :value value
      :on-change #(on-input-change % item-key)
      :on-blur #(on-input-blur % expr item-key)
      ;; :on-key-down on-input-keydown
      :attrs {:auto-complete "off"
              :auto-correct "off"
              :auto-capitalize "off"
              :spell-check "false"}}]))


(defn on-input-keydown [e]
  (let [sexpr-input-value @(rf/subscribe [:sexpr-input-value])   ; current input value of sexpr
        input-string?     @(rf/subscribe [:sexpr-input-string?]) ; true if current input is inside `""`
        keycode (.-code e)]
    (case keycode
      ;; Blur when user preff escape
      "Escape" nil;;(blur-input)
      ;; Add new sexpr when user press space and is not inside a string
      "Space" (when (not input-string?)
                (when-let [s (string/trim sexpr-input-value)]
                  (rf/dispatch [:append-sexpr s])
                  (rf/dispatch [:reset-sexpr-input-value])
                  (utils/stop-propagation e)))
      ;; When `"` -> open/close the string
      ;; or is the beginning of the string 
      "Quote" (when (or (and (not input-string?) (empty? sexpr-input-value))
                         ;; or is the end (without `\`)
                        (and input-string?
                             (not-empty sexpr-input-value)
                             (not= (last sexpr-input-value) "\\")))
                (rf/dispatch [:toggle-sexpr-input-string]))
      ;; stop execution with meta+\ if in dev mode
      "Backslash" (when (and env/DEBUG (true? (.-metaKey e)))
                    (js-debugger))
      ;; Add a new line if user press enter
      "Enter" (do (when sexpr-input-value
                    (rf/dispatch [:append-sexpr (string/trim sexpr-input-value)]))
                  (rf/dispatch [:append-sexpr "\n"])
                  (rf/dispatch [:reset-sexpr-input-value])
                  (utils/stop-propagation e))
      ;; Remove expr if user press backspace
      "Backspace" (when (empty? sexpr-input-value)
                    (let [sexpr-list @(rf/subscribe [:sexpr-list])
                          last-expr-newline? (= (last sexpr-list) "\n")
                          last-expr (if last-expr-newline?
                                      (peek (pop sexpr-list))
                                      (peek sexpr-list))]
                      ;; Remove last exp plus \newline if present
                      (when (not-empty sexpr-list)
                        (->> (if last-expr-newline?
                               (subvec sexpr-list 0 (- (count sexpr-list) 2))
                               (pop sexpr-list))
                             (vector :set-sexpr-list)
                             (rf/dispatch)))
                      (rf/dispatch [:set-sexpr-input-value last-expr])
                      ;; (utils/async-delay #(place-caret))
                      (utils/stop-propagation e)))
      ;; default
      nil)))


(defn on-input-blur
  "Send the item value to the server and update
  the code structure."
  [_ esexpr item-key]
  (let [origin (pr-str (:sexpr esexpr))
        value @(rf/subscribe [:item item-key])]
    (when (not= origin value)
      (update-source (edn/read-string value) esexpr))))


(defn on-input-change
  "On input change"
  [{:keys [value]} item-key]
  (rf/dispatch-sync [:save-item item-key value]))


(defn on-block-click [e id]
  (utils/stop-propagation e)
  (rf/dispatch [:set-selected-block id]))


(defn function-el [esexpr block-id]
  [:div {:class ["px-1.5" "rounded-br-md" "rounded-tl-md"
                 "border" "border-slate-500" "mr-2"]}
   (create-editable-item esexpr 0 0 block-id)])


(defn vector-container
  [{:keys [expr row-idx col-idx block-id]}]
  [:div {:class ["flex" "flex-row" "text-[13px]"]}
   [:div {:class ["mr-1"]} "["]
   [:div {:class ["flex" "flex-row"]}
    (create-expr {:exs (:children expr)
                  :row-idx row-idx
                  :block-id block-id
                  :col-idx-offset col-idx})]
   [:div {:class ["ml-1"]} "]"]])


(defn map-container
  [{:keys [expr row-idx col-idx block-id]}]
  [:div {:class ["flex" "flex-row" "text-[13px]"]}
   [:div {:class ["mr-1"]} "{"]
   [:div {:class ["flex" "flex-row"]}
    (create-expr {:exs (:children expr)
                  :row-idx row-idx
                  :block-id block-id
                  :col-idx-offset col-idx})]
   [:div {:class ["ml-1"]} "}"]])


(defn item-container
  [& child]
  [:div {:class ["mr-2" "last:mr-0"]}
   child])


(defn row-container [& child]
  [:div {:class ["flex" "flex-row" "items-center"]}
   child])


(defn block-bg-color
  "Return a string of the background class for the block."
  [depth]
  (str "bg-slate-" (if (even? depth) 800 700)))


(defn create-item-key
  "Return a reference map for the item."
  [{:keys [row-idx col-idx block-id]}]
  {:id block-id :row row-idx :col col-idx})

