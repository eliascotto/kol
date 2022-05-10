(ns kol.comp.block.core
  (:require
   [re-frame.core :as rf]
   [clojure.string :as string]
   [clojure.edn :as edn]
   [kol.env :as env :refer [debug]]
   [kol.utils.core :as utils]
   [kol.utils.string :refer [kebab-case]]
   [kol.fn.vld.core :as vld]
   [kol.macros :refer [map-keys for-indexed]]
   [kol.comp.content-editable.core :as ce :refer [content-editable]]
   [kol.comp.content-editable.utils :as ce-utils]
   [kol.comp.block.utils :as blk-utils :refer [create-item-key
                                               next-item-key
                                               focus-prev-item-row
                                               focus-next-item-row
                                               focus-prev-row
                                               focus-next-row
                                               select-item-content]]))


(declare on-input-blur
         on-input-keydown
         on-input-change
         on-input-focus
         on-block-click
         split-rows
         create-expr
         block-bg-color
         create-editable-item
         editable-el
         vector-container
         map-container
         item-container
         row-container
         header-container
         function-el
         blur-input)


(def default-fn
  "Default empty function."
  '(defn undef [] nil))


(defn block
  "Component to make a block editable.
  Receive the id for the block."
  [id]
  (let [block @(rf/subscribe [:block id])
        selected @(rf/subscribe [:selected-block])
        selected? (= selected id)
        esexpr (:esexpr block)
        rows (split-rows esexpr)
        depth (dec (count (:location esexpr)))
        bg-color (block-bg-color depth)]
    [:div {:class [bg-color "text-slate-200"
                   "w-fit" "min-w-[90px]"
                   "shadow-md" "rounded-sm"
                   "flex" "flex-col" "items-start" "justify-start"
                   "border" "cursor-pointer"
                   (when (pos? depth)
                     "my-1")
                   (if selected?
                     "border-slate-400" "border-transparent")]
           :on-click #(on-block-click % id)}
     ;; Block header
     (let [row (first rows)
           fn-call (first row)
           args (rest row)]
       [header-container
        ^{:key (str "block-function-" (kebab-case (str id)))}
        [function-el fn-call id]
        (create-expr {:exs args
                      :row-idx 0
                      :block-id id
                      :col-idx-offset 1})])
     ;; Block arguments
     (for-indexed [[idx row] (rest rows)]
                  ^{:key (str "block-row-" (kebab-case (str id))
                              "row-" idx)}
                  [row-container
                   (create-expr {:exs row
                                 :row-idx (inc idx)
                                 :block-id id})])]))


(defn create-expr
  "Parse expr content (eventually row by row).
  Does not manage new lines!
  `header?` is to differentiate the first line."
  [{:keys [exs row-idx block-id col-idx-offset]
    :or {col-idx-offset 0}}]
  (map-indexed
   (fn [idx expr]
     (let [col-idx (+ col-idx-offset idx)
           key (str row-idx col-idx (string/join (first block-id)))]
       (case (:type expr)
         :list
         ^{:key key}
         [block (vld/block-id expr)]

         :vector
         ^{:key key}
         [vector-container
          (map-keys expr row-idx col-idx block-id)]

         :map
         ^{:key key}
         [map-container (map-keys expr row-idx col-idx block-id)]

         (:symbol :number :keyword :string :nil)
         ^{:key key}
         [item-container
          (create-editable-item expr row-idx col-idx block-id)]

         (println "Not-matching-type" (:type expr)))))
   exs))


(defn create-editable-item
  "Create a new editable element and push item
  reference into the app db."
  [expr row-idx col-idx block-id]
  (let [item-key (create-item-key (map-keys row-idx col-idx block-id))
        value (pr-str (:sexpr expr))]
    ;; Save initial state of the item inside the db:
    ;; value, data type
    (rf/dispatch [:update-item item-key {:value value :type (:type expr)}])
    [editable-el (map-keys expr row-idx col-idx block-id)]))


(defn editable-el
  "Element that wrap the content of the item with a
  contentEditable div.
  Manages the focus and the caret position."
  [{:keys [expr row-idx col-idx block-id]}]
  (let [item-key (create-item-key (map-keys row-idx col-idx block-id))
        {:keys [value type]} @(rf/subscribe [:item item-key])]
    [content-editable
     {:class ["bg-transparent" "outline-none" "text-[12px]"
              "font-mono" "w-auto" "cursor-text"
              (when (= type :keyword) "text-[#78D1E1]")
              (when (= type :number) "text-[#78D1E1]")
              (when (= type :string) "text-[#E7DE79]")
              (when (and (zero? row-idx) (zero? col-idx))
                "text-[#67E480]")]

      :ref (rf/subscribe [:item-ref item-key])
      :set-ref #(rf/dispatch [:update-item-ref item-key %])
      :value value
      :on-change   #(on-input-change % item-key)
      :on-focus    #(on-input-focus item-key)
      :on-blur     #(on-input-blur % expr item-key)
      :on-key-down #(on-input-keydown % expr item-key)

      :attrs {:auto-complete "off"
              :auto-correct "off"
              :auto-capitalize "off"
              :spell-check "false"}}]))


(defn on-input-keydown
  "Manage the behaviour of the entire block input 
  based on the key pressed."
  [e esexpr item-key]
  (let [{value :value item-type :type input-ref :ref}
        @(rf/subscribe [:item item-key])
        keycode (.-code e)]
    (case keycode
      ;; Blur when user press escape
      "Escape" (blur-input)
      ;; Stop execution with meta+\ if in dev mode
      "Backslash" (when (and env/DEBUG (true? (.-metaKey e)))
                    (js-debugger))
      ;; Focus on prev item if caret is at the beginning of the string
      "ArrowLeft" (when (zero? (ce-utils/get-caret-index input-ref))
                    (focus-prev-item-row item-key))
      ;; Focus on next item if caret is at the end of the string
      "ArrowRight" (when (= (count value) (ce-utils/get-caret-index input-ref))
                     (focus-next-item-row item-key))
      "ArrowUp"   (focus-prev-row item-key)
      "ArrowDown" (focus-next-row item-key)
      ;; Add new sexpr when user press space and is not inside a string,
      ;; save the current expr
      "Space" (when-not (= item-key :string)
                (utils/stop-propagation e)
                (vld/update-and-insert-expr esexpr (edn/read-string value))
                (utils/set-timeout
                 (fn []
                   (focus-next-item-row item-key)
                   (select-item-content (next-item-key item-key)))
                 100))
      ;; When user press backspace and input is empty, remove the current node
      "Backspace" (when (empty? value)
                    (utils/stop-propagation e)
                    (vld/remove-expr esexpr)
                    (utils/set-timeout #(focus-prev-item-row item-key) 100))
      ;; When quote: add another quote if not a quote on the next character
      ;; "Quote" (let [caret-index (ce-utils/get-caret-index input-ref)
      ;;               next-char (get value (inc caret-index))]
      ;;           (if-not (= next-char "\"")
      ;;             (println value)))
      ;; "Space" (when (not input-string?)
      ;;           (when-let [s (string/trim sexpr-input-value)]
      ;;             (rf/dispatch [:append-sexpr s])
      ;;             (rf/dispatch [:reset-sexpr-input-value])
      ;;             (utils/stop-propagation e)))
      ;; ;; When `"` -> open/close the string
      ;; ;; or is the beginning of the string 
      ;; "Quote" (when (or (and (not input-string?) (empty? sexpr-input-value))
      ;;                    ;; or is the end (without `\`)
      ;;                   (and input-string?
      ;;                        (not-empty sexpr-input-value)
      ;;                        (not= (last sexpr-input-value) "\\")))
      ;;           (rf/dispatch [:toggle-sexpr-input-string]))
      ;; ;; Add a new line if user press enter
      ;; "Enter" (do (when sexpr-input-value
      ;;               (rf/dispatch [:append-sexpr (string/trim sexpr-input-value)]))
      ;;             (rf/dispatch [:append-sexpr "\n"])
      ;;             (rf/dispatch [:reset-sexpr-input-value])
      ;;             (utils/stop-propagation e))
      ;; Remove expr if user press backspace
      ;; "Backspace" (when (empty? sexpr-input-value)
      ;;               (let [sexpr-list @(rf/subscribe [:sexpr-list])
      ;;                     last-expr-newline? (= (last sexpr-list) "\n")
      ;;                     last-expr (if last-expr-newline?
      ;;                                 (peek (pop sexpr-list))
      ;;                                 (peek sexpr-list))]
      ;;                 ;; Remove last exp plus \newline if present
      ;;                 (when (not-empty sexpr-list)
      ;;                   (->> (if last-expr-newline?
      ;;                          (subvec sexpr-list 0 (- (count sexpr-list) 2))
      ;;                          (pop sexpr-list))
      ;;                        (vector :set-sexpr-list)
      ;;                        (rf/dispatch)))
      ;;                 (rf/dispatch [:set-sexpr-input-value last-expr])
      ;;                 ;; (utils/async-delay #(place-caret))
      ;;                 (utils/stop-propagation e)))
      ;; default
      nil)))


(defn on-input-focus [item-key]
  (rf/dispatch [:set-item-selected item-key]))


(defn on-input-blur
  "Send the item value to the server and update
  the code structure."
  [_ esexpr item-key]
  (let [origin (pr-str (:sexpr esexpr))
        value @(rf/subscribe [:item-value item-key])]
    (when (not= origin value)
      (vld/update-source esexpr (edn/read-string value)))
    (rf/dispatch [:reset-item-selected item-key])))


(defn on-input-change
  "On input change"
  [{:keys [value]} item-key]
  (let [new-item-type (blk-utils/extract-value-type value)]
    ;; Update the state of the item
    (rf/dispatch-sync [:update-item item-key {:value value
                                              :type new-item-type}])))


(defn on-block-click [e id]
  (utils/stop-propagation e)
  (rf/dispatch [:set-selected-block id]))


(defn function-el [esexpr block-id]
  [:div {:class [;;"rounded-br-md" "rounded-tl-md"  "border" "border-slate-500"
                 "mr-2"]}
   (create-editable-item esexpr 0 0 block-id)])


(defn vector-container
  [{:keys [expr row-idx col-idx block-id]}]
  [:div {:class ["flex" "flex-row" "text-[12px]" "rounded-sm"
                 "px-1" "items-center"]}
   [:div {:class ["mr-1"]} "["]
   [:div {:class ["flex" "flex-row" "items-center"]}
    (create-expr {:exs (:children expr)
                  :row-idx row-idx
                  :block-id block-id
                  :col-idx-offset col-idx})]
   [:div {:class ["ml-1"]} "]"]])


(defn map-container
  [{:keys [expr row-idx col-idx block-id]}]
  [:div {:class ["flex" "flex-row" "text-[12px]" "items-center"]}
   [:div {:class ["mr-1"]} "{"]
   [:div {:class ["flex" "flex-row" "items-center"]}
    (create-expr {:exs (:children expr)
                  :row-idx row-idx
                  :block-id block-id
                  :col-idx-offset col-idx})]
   [:div {:class ["ml-1"]} "}"]
   ])


(defn item-container
  [& child]
  [:div {:class ["mr-2" "last:mr-0"]}
   child])


(defn header-container [& child]
  [:div {:class ["flex" "flex-row" "items-center"
                 "w-full" "py-1" "px-2"]}
   child])


(defn row-container [& child]
  [:div {:class ["flex" "flex-row" "items-center"
                 "px-2"]}
   child])


(defn block-bg-color
  "Return a string of the background class for the block."
  [depth]
  (str "bg-slate-" (if (even? depth) 800 700)))


(defn blur-input
  "Blur current input element."
  []
  (let [active-el (.-activeElement js/document)]
    (.blur active-el)
    (rf/dispatch [:reset-selected-block])))


(defn split-rows
  "Returns a vector of tokens divided by rows,
  when matching the :newlines key in the sexpr."
  [esexpr]
  (->> (:children esexpr)
       (partition-by #(contains? % :newlines))
       (filter #(not (contains? (first %) :newlines)))
       (map vec)))