(ns kol.pages.create
  (:require
   [re-frame.core :as rf]
   [kol.comp.organism.workspace :refer [workspace]]
   [kol.comp.organism.properties-editor :refer [properties-editor]]))

(defn create-page []
  (let [source @(rf/subscribe [:source])]
    [:div {:class ["flex" "flex-row" "h-full" "w-full"]}
     ;; Blocks bar
     [:div {:class ["h-full" "flex-1" "bg-neutral-800"]}
      [workspace source]]
     ;; Parameters bar
     [properties-editor]]))
