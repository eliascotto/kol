(ns kol.comp.repl.core
  (:require
   [re-frame.core :as rf]
   [cljs.reader :as reader]
   [clojure.string :as string]
   [edamame.core :as edamame]
   [reagent.core :as r]
   [kol.env :refer [debug]]
   [kol.comp.repl.view :refer [repl-view]]))

(defn- multiline?
  "Return true if the current input is multiline."
  []
  (not-empty @(rf/subscribe [:repl-multiline])))

(defn- write-repl
  "Append `s` to the REPL history.
  Optional keyword `k` to use as a type."
  ([s]
   (write-repl s :output))
  ([s k]
   (rf/dispatch [:repl-history-append {:type k :value s}])))

(defn- append-multiline
  "Append `val` to the multiline expression."
  [val]
  (rf/dispatch [:repl-multiline-append val]))

(defn- update-multiline
  "If `repl-multiline` is not empty, append `in` value to it."
  [in]
  (when (multiline?)
    (append-multiline in)))

(defn- input-expr
  "Return the entire code typed into the REPL for evaluation."
  [in]
  (if (multiline?)
    (let [multi @(rf/subscribe [:repl-multiline])]
      (str multi in))
    in))

(defn- write-input-to-repl
  "Append `in` to the REPL history."
  [in]
  (if (multiline?)
    (write-repl in :input-multi)
    (write-repl in :input)))

(defn- eval-input [in]
  (.eval (.-electronAPI js/window) in))

(defn- reset-repl-input
  "Clear the REPL input."
  []
  (rf/dispatch [:repl-input-reset]))

(defn- reset-repl
  "Reset the REPL state, except the history."
  []
  (rf/dispatch [:repl-reset-all]))

(defn- set-placeholder [val]
  (rf/dispatch [:repl-set-placeholder val]))

(defn- parse-expr
  "Try parsing the input expression. Throw an exception if catches a missing
  delimiter or returns the original expression."
  [cmd]
  (try
    (when (edamame/parse-string-all cmd)
      cmd)
    (catch ExceptionInfo e
      (let [err-data (ex-data e)
            delimiter (:edamame/expected-delimiter err-data)]
        (if delimiter
          (-> (str "Expected delimiter '" delimiter
                   "' on column: " (:col err-data))
              (throw))
          cmd)))))

(defn- handle-keydown
  "on-keydown event for the REPL input."
  [e]
  (let [repl-input @(rf/subscribe [:repl-input])]
    (condp = (.-key e)
      "Enter"
      (let [in (str repl-input \newline)
            empty-expr? (empty? (string/trim in))]
        (debug "REPL input:" (pr-str in))
        (update-multiline in)
        (write-input-to-repl in)
        (when-not empty-expr?
          (let [expr (input-expr in)]
            (try
              (debug "Parsing expr: " expr)
              (parse-expr expr)
              (eval-input expr)
              (reset-repl)
              (catch :default e
                (debug "Missing delimiter on expression.")
                (set-placeholder e)
                (append-multiline expr)))))
        (reset-repl-input))
      nil)))

;; [event data]
(defn- handle-repl-response
  "Handler for REPL responses.
  Write output/values/errors to the REPL history."
  [_ data-str]
  (let [data (reader/read-string data-str)]
    (debug "Received data from nREPL " (pr-str data))
    (when (or (contains? data :value) (contains? data :out))
      (write-repl (or (:value data) (:out data))))
    (when (contains? data :err)
      (write-repl (:err data) :error))))

(defn view []
  (r/create-class
   {:display-name "repl-view-component"

    :component-did-mount
    (fn []
      (-> (.-electronAPI js/window)
          (.handleResponse handle-repl-response)))

    :reagent-render
    (fn []
      [repl-view
       {:on-keydown handle-keydown}])}))
