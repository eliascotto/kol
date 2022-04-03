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

(declare update-source)

(defonce extensions
  #js[theme
      highlight
      (history)
      (view/drawSelection)
      (lineNumbers)
      (fold/foldGutter)
      (.. EditorState -allowMultipleSelections (of true))
      (if false
        ;; use live-reloading grammar
        #js[(cm-clj/syntax live-grammar/parser)
            (.slice cm-clj/default-extensions 1)]
        cm-clj/default-extensions)
      (.of view/keymap cm-clj/complete-keymap)
      (.of view/keymap historyKeymap)
      (.of (.-updateListener EditorView)
           (fn [^js v]
             (when (.-docChanged v)
               (update-source (.. v -state -doc toString)))))])

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

(defn update-source [source]
  (rf/dispatch [:source-update source]))

(defn editor-el [source]
  (r/with-let [editor-view (r/atom nil)
               editor-ref (r/atom nil)
               editor-state (r/atom nil)]
    (r/create-class
     {:display-name "editor-component"

      :component-did-mount
      (fn []
        (let [state (make-state #js[extensions] source)
              editor-params (j/lit {:state state
                                    :parent @editor-ref})]
          (when @editor-ref
            (reset! editor-state state)
            (reset! editor-view (new EditorView editor-params)))))

      :component-will-unmount
      (fn []
        (when @editor-view
          (j/call @editor-view :destroy)))

      :reagent-render
      (fn []
        (.log js/console @editor-state)
        [:div {:class ["rounded-md"
                       "mb-0"
                       "text-sm"
                       "monospace"
                       "overflow-auto"]
               :ref #(reset! editor-ref %)}])})))

(defn editor []
  (let [source @(rf/subscribe [:source])]
    [:div {:class ["px-2" "py-1"]}
     [editor-el source]]))
