(ns kol.comp.block.input
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [clojure.string :as string]
   [clojure.edn :as edn]
   [kol.env :as env]
   [kol.utils.core :as utils]
   [kol.macros :refer [map-keys]]
   [kol.comp.content-editable.core :as ce :refer [content-editable]]
   [kol.comp.block.code-wrappers :as wrapper]
   [kol.comp.block.common :refer [expr-el-def expr-el-fn expr-el]]
   [kol.server :as server]))


(declare on-input-blur
         on-input-keydown
         on-input-change
         parse-expr-el
         args-row
         input-el)


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


(defn block-input
  "Component to make a block editable.
  Receive the current extended sexpr for the block."
  [esexpr]
  (r/with-let [sexpr-list @(rf/subscribe [:sexpr-list])]
    ;; Using `let` because values mutate
    (let [sexpr-first @(rf/subscribe [:sexpr-first])
          last-newline? (= (last sexpr-list) "\n")
          [rows last-row] (extract-args)]
      [:div {:class ["px-1" "flex" "flex-row" "items-start"
                     "justify-start"]}
       (when sexpr-first
         [expr-el-fn sexpr-first])
       [:div {:class ["flex" "flex-col"]}
        ;; previous argument rows
        (when (not-empty rows)
          (for [row rows]
            ^{:key (str "arg-row-" row)}
            [args-row
             (for [sexpr row]
               ^{:key (str "sexpr-element-" sexpr)}
               (parse-expr-el sexpr))]))
        ;; last argument row, shown if has arguments or if 
        ;; last expr was a new line
        (when (or last-row last-newline?)
          [args-row
           (for [sexpr last-row]
             ^{:key (str "sexpr-element-" sexpr)}
             (parse-expr-el sexpr))
           [input-el esexpr]])]
       (when (empty? last-row)
         [input-el esexpr])])))

(comment
  (let [x  (->> (rest ["foo" "1" "\n"])
                (partition-by #(newline? %))
                (filter #(not= % '("\n"))))]
    (split-at (dec (count x)) x)))


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


(defn parse-expr-el [expr]
  (let [el (cond
             (newline? expr) ; new line
             nil

             (re-find #"^\".*\"$" expr) ; string
             [wrapper/string expr]

             (re-find #"^:.*" expr) ; keyword
             [wrapper/keyword expr]

             (utils/numeric? expr) ; numeric
             [wrapper/number expr]

             :else expr)]
    (when el
      [expr-el el])))


(defn args-row [& child]
  [:div {:class ["flex" "flex-row"]}
   child])


(defn input-el
  [esexpr]
  (let [value @(rf/subscribe [:sexpr-input-value])]
    [content-editable
     {:class ["bg-transparent" "outline-none" "text-[13px]"
              "font-mono" "w-auto" "min-w-[24px]"]
      :value value
      :autofocus true
      :on-change on-input-change
    ;;  :on-blur #(on-input-blur % esexpr)
      :on-key-down on-input-keydown}]))
