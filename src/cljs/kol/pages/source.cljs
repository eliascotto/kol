(ns kol.pages.source
  (:require
   [kol.comp.organism.repl :as repl]
   [kol.comp.organism.editor :refer [editor]]))

(defn source-page []
  [:div {:class ["flex" "flex-row"
                 "h-full" "w-full"
                 "overflow-hidden"]}
   ;; Editor
   [:div {:class ["flex-1"
                  "border-r"
                  "border-neutral-800"
                  "border-solid"]}
    [editor]]
   ;; REPL
   [:div {:class ["flex-1" "overflow-hidden"]}
    [repl/view]]])
