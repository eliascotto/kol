(ns kol.pages.create
  (:require
   [re-frame.core :as rf]
   [kol.comp.workspace.core :refer [workspace]]
   [kol.comp.block.properties-editor :refer [properties-editor]]))

(defn create-page []
  (let [source @(rf/subscribe [:source])]
    [:div {:class ["flex" "flex-row" "w-full"]
           :style {:height "calc(100vh - 2rem)"}}
     ;; Blocks bar
     [:div {:class ["flex-1" "bg-slate-600"]}
      [workspace source]]
     ;; Parameters bar
     [properties-editor]]))
