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

(defn newline? [expr]
  (= expr "\n"))

(defn parse-expr-el [expr]
  (let [el (cond
             (newline? expr) ; new line
             nil
             (utils/numeric? expr) ; numeric
             [wrapper/number expr]
             (re-find #"^\".*\"$" expr) ; string
             [wrapper/string expr]
             (re-find #"^:.*" expr) ; keyword
             [wrapper/keyword expr]
             :else expr)]
    (when el
      [expr-el el])))

(comment
  (re-find #"^\".*\"$" "\"ciao\"")
  (re-find #"^:.*" "cokme"))

(defn expr-input-keydown
  [e values actions]
  (let [{:keys [inside-str? input-value sexpr-coll]} values
        {:keys [blur-input append-sexpr toggle-str reset-value
                set-sexpr-coll set-value place-caret]} actions
        keycode (.-code e)]
    (case keycode
      ;; Blur when user preff escape
      "Escape" (blur-input)
      ;; Add new sexpr when user press space and is not inside a string
      "Space" (when (not inside-str?)
                (append-sexpr (string/trim input-value))
                (reset-value)
                (utils/stop-propagation e))
      ;; When `"` -> open/close the string
      ;; or is the beginning of the string 
      "Quote" (when (or (and (not inside-str?) (empty? input-value))
                         ;; or is the end (without `\`)
                        (and inside-str?
                             (not-empty input-value)
                             (not= (last input-value) "\\")))
                (toggle-str))
      ;; stop execution with meta+\ if in dev mode
      "Backslash" (when (and env/DEBUG (true? (.-metaKey e)))
                    (js-debugger))
      ;; Add a new line if user press enter
      "Enter" (do (when input-value
                    (append-sexpr (string/trim input-value)))
                  (append-sexpr "\n")
                  (reset-value)
                  (utils/stop-propagation e))
      ;; Remove expr if user press backspace
      "Backspace" (when (empty? input-value)
                    (let [last-expr-newline? (= (last sexpr-coll) "\n")
                          last-expr (if last-expr-newline?
                                      (peek (pop sexpr-coll))
                                      (peek sexpr-coll))]
                      ;; Remove last exp plus \newline if present
                      (-> (if last-expr-newline?
                            (subvec sexpr-coll 0 (- (count sexpr-coll) 2))
                            (pop sexpr-coll))
                          (set-sexpr-coll))
                      (set-value last-expr)
                      (utils/async-delay #(place-caret))))
      ;; default
      nil)))

(defn expr-input-blur
  "On input blur, save the content of the block."
  [e esexpr {:keys [sexpr-coll input-value]} actions]
  (let [last-input (when input-value (string/trim input-value))
        ;; append last input to the expr collection, if not empty
        coll-str (->> (if (empty? last-input)
                        sexpr-coll
                        (conj sexpr-coll last-input))
                      (filter #(not (newline? %)))
                      (string/join " "))
        new-expr (str "(" coll-str ")")]
    (update-source (edn/read-string new-expr) esexpr)))

(defn args-row [& child]
  [:div {:class ["flex" "flex-row"]}
   child])

(defn input-el
  ([input-ref esexpr values actions]
   (input-el input-ref esexpr values actions {}))
  ([input-ref
    esexpr
    {:keys [input-value] :as values}
    {:keys [set-value] :as actions}
    props]
   [content-editable
    {:ref input-ref
     :class ["bg-transparent" "outline-none" "text-[13px]"
             "font-mono" "w-auto" "min-w-[24px]"]
     :value input-value
     :autofocus true
     :on-change #(set-value (:value %))
    ;;  :on-blur #(expr-input-blur % esexpr values actions)
     :on-key-down #(expr-input-keydown % values actions)}]))

(defn extract-args
  "Returns a vector composed by the collections of argument
  to the expr divided by `prev` and `last`."
  [sexpr-coll]
  (let [coll (rest sexpr-coll)
        last-expr-newline? (= (last coll) "\n")
        split-at-newline (fn [coll] (partition-by #(newline? %) coll))
        remove-newline (fn [coll] (filter #(not= % '("\n")) coll))]
    (if last-expr-newline?
      [(-> (butlast coll)
           split-at-newline
           remove-newline)
       (list "\n")]
      (let [args (-> coll
                     split-at-newline
                     remove-newline)
            [prv lst] (split-at (dec (count args)) args)]
        [prv (first lst)]))))

(defn expr-input [esexpr]
  (r/with-let [sexpr-coll   (r/atom []) ; collection of sexpr inside the expr
               input-value  (r/atom nil)
               inside-str?  (r/atom false)
               input-ref    (r/atom nil)
               set-value    #(reset! input-value %)
               reset-value  #(reset! input-value nil)
               append-sexpr #(swap! sexpr-coll conj %)
               set-sexpr-coll #(reset! sexpr-coll %)
               toggle-str   #(swap! inside-str? not)
               blur-input   #(.blur @input-ref)
               place-caret  #(ce/replace-caret @input-ref)
               actions (map-keys set-value
                                 reset-value
                                 append-sexpr
                                 toggle-str
                                 set-sexpr-coll
                                 blur-input
                                 place-caret)]
    ;; Using `let` because values mutate
    (let [values {:sexpr-coll @sexpr-coll
                  :input-value @input-value
                  :inside-str? @inside-str?}
          expr-fn (first @sexpr-coll)
          last-newline? (= (last @sexpr-coll) "\n")
          [rows last-row] (extract-args @sexpr-coll)]
      [:div {:class ["px-1" "flex" "flex-row" "items-start" "justify-start"]}
       (when expr-fn
         [expr-el-fn expr-fn])
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
           [input-el input-ref esexpr values actions
            {:inline true}]])]
       (when (empty? last-row)
         [input-el input-ref esexpr values actions])])))

(comment
  (let [x  (->> (rest ["foo" "1" "\n"])
                (partition-by #(newline? %))
                (filter #(not= % '("\n"))))]
    (split-at (dec (count x)) x)))
