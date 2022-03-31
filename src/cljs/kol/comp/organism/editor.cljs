(ns kol.comp.organism.editor
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [clojure.string :as string]
   ["@codemirror/closebrackets" :refer [closeBrackets]]
   ["@codemirror/fold" :as fold]
   ["@codemirror/gutter" :refer [lineNumbers]]
   ["@codemirror/highlight" :as highlight]
   ["@codemirror/history" :refer [history historyKeymap]]
   ["@codemirror/state" :refer [EditorState EditorSelection]]
   ["@codemirror/view" :as view :refer [EditorView]]
   [applied-science.js-interop :as j]
   [nextjournal.clojure-mode :as cm-clj]
   [nextjournal.clojure-mode.extensions.close-brackets :as close-brackets]
   [nextjournal.clojure-mode.extensions.formatting :as format]
   [nextjournal.clojure-mode.extensions.selection-history :as sel-history]
   [nextjournal.clojure-mode.keymap :as keymap]
   [nextjournal.clojure-mode.live-grammar :as live-grammar]
   [nextjournal.clojure-mode.node :as n]
   [nextjournal.clojure-mode.selections :as sel]
   [nextjournal.clojure-mode.test-utils :as test-utils]
   [kol.themes.dark :refer [theme highlight]]))

(defonce extensions
  #js[theme
      highlight
      (history)
      ;; highlight/defaultHighlightStyle
      (view/drawSelection)
      ;(lineNumbers)
      (fold/foldGutter)
      (.. EditorState -allowMultipleSelections (of true))
      (if false
        ;; use live-reloading grammar
        #js[(cm-clj/syntax live-grammar/parser)
            (.slice cm-clj/default-extensions 1)]
        cm-clj/default-extensions)
      (.of view/keymap cm-clj/complete-keymap)
      (.of view/keymap historyKeymap)])

(defn make-state [extensions doc]
  (let [[doc ranges]
        (->> (re-seq #"\||<[^>]*?>|[^<>|]+" doc)
             (reduce
              (fn [[^string doc ranges] match]
                (cond (= match "|")
                      [doc (conj ranges (.cursor EditorSelection (count doc)))]

                      (string/starts-with? match "<")
                      [(str doc (subs match 1 (dec (count match))))
                       (conj ranges (.range
                                     EditorSelection
                                     (count doc)
                                     (+ (count doc) (- (count match) 2))))]
                      :else
                      [(str doc match) ranges])) ["" []]))]
    (.create
     EditorState
     #js{:doc doc
         :selection (if (seq ranges)
                      (.create EditorSelection (to-array ranges))
                      js/undefined)
         :extensions (cond->
                      #js[(.. EditorState -allowMultipleSelections (of true))]
                       extensions
                       (j/push! extensions))})))


(defn create-editor
  "Create a new CodeMirror editor instance."
  [el view source]
  (let [editor-params (j/lit
                       {:state
                        (make-state
                         #js[extensions]
                         source)
                        :parent el})]
    (when el
      (reset! view (new EditorView editor-params)))))

(defn editor-el [source]
  (r/with-let [editor-view (r/atom nil)]
    [:div {:class ["rounded-md"
                   "mb-0"
                   "text-sm"
                   "monospace"
                   "overflow-auto"]
           :ref #(create-editor % editor-view source)}]
    (finally
      (when-let [view @editor-view]
        (j/call view :destroy)))))

(defn editor []
  (let [source @(rf/subscribe [:source])]
    [:div {:class ["px-2" "py-1"]}
     [editor-el source]]))
