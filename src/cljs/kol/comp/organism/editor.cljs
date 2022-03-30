(ns kol.comp.organism.editor
  (:require
   [reagent.core :as r]
   ["@codemirror/closebrackets" :refer [closeBrackets]]
   ["@codemirror/fold" :as fold]
   ["@codemirror/gutter" :refer [lineNumbers]]
   ["@codemirror/highlight" :as highlight]
   ["@codemirror/history" :refer [history historyKeymap]]
   ["@codemirror/state" :refer [EditorState]]
   ["@codemirror/view" :as view :refer [EditorView]]
   [nextjournal.clojure-mode :as cm-clj]
   [nextjournal.clojure-mode.extensions.close-brackets :as close-brackets]
   [nextjournal.clojure-mode.extensions.formatting :as format]
   [nextjournal.clojure-mode.extensions.selection-history :as sel-history]
   [nextjournal.clojure-mode.keymap :as keymap]
   [nextjournal.clojure-mode.live-grammar :as live-grammar]
   [nextjournal.clojure-mode.node :as n]
   [nextjournal.clojure-mode.selections :as sel]
   [nextjournal.clojure-mode.test-utils :as test-utils]))

(defonce source (r/atom ";; Your Clojure file"))

(def theme
  (.theme
   EditorView
   (clj->js {".cm-content" {:white-space "pre-wrap"
                            :padding "10px 0"}
             "&.cm-focused" {:outline "none"}
             ".cm-line" {:padding "0 9px"
                         :line-height "1.6"
                         :font-size "16px"
                         :font-family "var(--code-font)"}
             ".cm-matchingBracket" {:border-bottom "1px solid var(--teal-color)"
                                    :color "inherit"}
             ".cm-gutters" {:background "transparent"
                            :border "none"}
             ".cm-gutterElement" {:margin-left "5px"}
                  ;; only show cursor when focused
             ".cm-cursor" {:visibility "hidden"}
             "&.cm-focused .cm-cursor" {:visibility "visible"}})))

(defn editor []
  [:div "fooo"])
