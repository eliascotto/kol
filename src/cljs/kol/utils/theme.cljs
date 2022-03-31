(ns kol.utils.theme
  (:require
   ["@codemirror/view" :refer [EditorView]]
   ["@codemirror/highlight" :refer [HighlightStyle tags]]))

(defn create-theme [props]
  (.theme EditorView (clj->js props)))

(defn create-highlight [props]
  (.define HighlightStyle (clj->js props)))

(def t tags)
