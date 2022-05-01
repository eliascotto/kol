(ns kol.comp.block.input
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [clojure.string :as string]
   [clojure.edn :as edn]
   [kol.env :as env]
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
         on-input-focus
         on-block-click
         split-rows
         create-expr
         block-bg-color
         input-el
         vector-container
         row-container
         function-el
         extract-args)


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


(defn newline? [expr] (= expr "\n"))


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
      (create-expr (first rows) 0 id)]
     ;; Block arguments
     (for-indexed [[idx row] (rest rows)]
                  [row-container
                   (create-expr row (inc idx) id)])]))

(comment
  (let [x  (->> (rest ["foo" "1" "\n"])
                (partition-by #(newline? %))
                (filter #(not= % '("\n"))))]
    (split-at (dec (count x)) x)))


(defn split-rows
  "Returns a vector of tokens divided by rows."
  [esexpr]
  (->> (:children esexpr)
       (partition-by #(contains? % :newlines))
       (filter #(not (contains? (first %) :newlines)))
       (map vec)))

(comment
  (let [c {:children '({:sexpr case, :position [3 2], :tag :token, :type :symbol, :arglists ([e & clauses]), :doc "Takes an expression, and a set of clauses.\n\n  Each clause can take the form of either:\n\n  test-constant result-expr\n\n  (test-constant1 ... test-constantN)  result-expr\n\n  The test-constants are not evaluated. They must be compile-time\n  literals, and need not be quoted.  If the expression is equal to a\n  test-constant, the corresponding result-expr is returned. A single\n  default expression can follow the clauses, and its value will be\n  returned if no clause matches. If no default expression is provided\n  and no clause matches, an IllegalArgumentException is thrown.\n\n  Unlike cond and condp, case does a constant-time dispatch, the\n  clauses are not considered sequentially.  All manner of constant\n  expressions are acceptable in case, including numbers, strings,\n  symbols, keywords, and (Clojure) composites thereof. Note that since\n  lists are used to group multiple constants that map to the same\n  expression, a vector can be used to match a list if needed. The\n  test-constants need not be all of the same type.", :ns "clojure.core"} {:sexpr n, :position [3 7], :tag :token, :type :symbol} {:newlines 1} {:sexpr 1, :position [4 3], :tag :token, :type :number} {:sexpr 2, :position [4 5], :tag :token, :type :number} {:newlines 1} {:sexpr 2, :position [5 3], :tag :token, :type :number} {:sexpr 3, :position [5 5], :tag :token, :type :number} {:newlines 1} {:sexpr 4, :position [6 3], :tag :token, :type :number} {:sexpr 5, :position [6 5], :tag :token, :type :number})}]
    (split-rows c)))


(defn create-expr
  "Parse expr content (eventually row by row).
  Does not manage new lines!
  `header?` is to differentiate the first line."
  [exs row-idx block-id]
  (map-indexed
   (fn [col-idx expr]
     (let [sexpr (:sexpr expr)]
       (case (:type expr)
         :list
         [block-input (esexpr-fn/block-id expr)]

         :vector
          ;; add vector element
         [vector-container sexpr]

         :map
          ;; add map element
         nil

         :symbol
         (if (and (zero? row-idx) (zero? col-idx))
           [function-el expr]
           [input-el (map-keys expr row-idx col-idx block-id)])

         (:number :keyword :string)
         [input-el (map-keys expr row-idx col-idx block-id)])))
   exs))


(defn create-item-ref
  "Return a reference map for the item."
  [{:keys [row-idx col-idx block-id]}]
  {:id block-id :row row-idx :col col-idx})


(defn focused?
  "Returns true if the block pointed by parameters is
  selected."
  [blk]
  (let [focused-item @(rf/subscribe [:focused-item])]
    (= focused-item (create-item-ref blk))))


(defn input-el
  "Element that wrap the content of the item with a
  contentEditable div.
  Manages the focus and the caret position."
  [{:keys [expr row-idx col-idx block-id]}]
  (let [focused (focused? (map-keys row-idx col-idx block-id))
        expr-type (:type expr)
        value (if focused
                @(rf/subscribe [:focused-item-value])
                (:sexpr expr))]
    [content-editable
     {:class ["bg-transparent" "outline-none" "text-[13px]"
              "font-mono" "w-auto" "min-w-[24px]"
              (when (= expr-type :keyword) "text-[#78D1E1]")
              (when (= expr-type :number) "text-[#78D1E1]")
              (when (= expr-type :string) "text-[#E7DE79]")
              (when (and (zero? row-idx) (zero? col-idx))
                "text-[#67E480]")]
      :value (pr-str value)
      :autofocus true
      :on-change on-input-change
      :on-focus #(on-input-focus % (map-keys expr row-idx col-idx block-id))
    ;;  :on-blur #(on-input-blur % esexpr)
      :on-key-down on-input-keydown}]))


(defn on-input-keydown [e]
  (let [sexpr-input-value @(rf/subscribe [:sexpr-input-value]) ; current input value of sexpr
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


(defn on-input-focus
  [_ {:keys [expr row-idx col-idx block-id]}]
  (let [item-ref (create-item-ref (map-keys row-idx col-idx block-id))
        value (pr-str (:sexpr expr))]
    (rf/dispatch [:set-focused-item item-ref])
    (rf/dispatch [:set-focused-item-value value])))


(defn on-input-blur
  "On input blur, save the content of the block."
  [e esexpr]
  (let [sexpr-list        @(rf/subscribe [:sexpr-list])
        sexpr-input-value @(rf/subscribe [:sexpr-input-value])
        last-input (when sexpr-input-value (string/trim sexpr-input-value))
        ;; append last input to the expr collection, if not empty
        coll-str (->> (if (empty? last-input)
                        sexpr-list
                        (conj sexpr-list last-input))
                      (filter #(not (newline? %)))
                      (string/join " "))
        new-expr (str "(" coll-str ")")]
    (update-source (edn/read-string new-expr) esexpr)))


(defn on-input-change
  "On input change"
  [{:keys [value]}]
  (rf/dispatch-sync [:set-sexpr-input-value value]))


(defn on-block-click [e id]
  (utils/stop-propagation e)
  (rf/dispatch [:set-selected-block id]))


(defn function-el [esexpr]
  [:div {:class ["px-1.5" "rounded-br-md" "rounded-tl-md"
                 "border" "border-slate-500" "mr-2"]}
   [input-el esexpr 0 0]])


(defn vector-container [sexpr]
  (str "["
       sexpr
       "]"))


(defn row-container [& child]
  [:div {:class ["flex" "flex-row" "items-center"]}
   child])


(defn extract-args
  "Returns a vector composed by the collections of argument
  to the expr divided by `prev` and `last`."
  []
  (let [sexpr-list @(rf/subscribe [:sexpr-list])
        coll (rest sexpr-list)
        last-expr-newline? (= (last coll) "\n")
        split-at-newline (fn [xs] (partition-by #(newline? %) xs))
        remove-newline (fn [xs] (filter #(not= % '("\n")) xs))]
    (if last-expr-newline?
      [(-> (butlast coll)
           split-at-newline
           remove-newline)
       (list "\n")]
      (let [args (split-at-newline (remove-newline coll))
            [prv lst] (split-at (dec (count args)) args)]
        [prv (first lst)]))))


(defn block-bg-color
  "Return a string of the background class for the block."
  [depth]
  (str "bg-slate-" (if (even? depth) 800 700)))
