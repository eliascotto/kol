(ns kol.pages.source
  (:require
   [kol.utils.css :refer [css]]
   [kol.comp.organism.repl :as repl]
   [kol.comp.organism.editor :refer [editor]]))

(defn source-page []
  [:div {:class ["flex" "flex-row"
                 "h-full" "w-full"
                 "overflow-hidden"]}
   ;; Editor
   [:div (css "flex-1")
    [editor]]
   ;; REPL
   [:div {:class ["flex-1" "overflow-hidden"]}
    [repl/view]]])
