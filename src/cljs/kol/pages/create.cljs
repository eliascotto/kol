(ns kol.pages.create
  (:require
   [re-frame.core :as rf]
   [kol.comp.workspace.core :refer [workspace]]
   [kol.comp.block.properties-editor :refer [properties-editor]]
   [kol.comp.repl.visual :refer [visual-repl]]))

(defn create-page []
  (let [sidebar @(rf/subscribe [:sidebar])]
    [:div {:class ["flex" "flex-row" "w-full"]
           :style {:height "calc(100vh - 2rem)"}}
     ;; Blocks bar
     [:div {:class ["flex-1" "bg-slate-600" "overflow-auto"]}
      [workspace]]
     ;; Sidebar
     ;;  [properties-editor]
     (when (= sidebar :repl)
       [visual-repl])]))
