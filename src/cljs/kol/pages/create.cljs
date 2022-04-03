(ns kol.pages.create
  (:require
   [re-frame.core :as rf]
   [kol.utils.parser :refer [src->blk]]
   [kol.comp.atom.add-block :as add-block]))

(defn block-wrapper []
  )

(defn visual-container [src]
  [:div {:class ["px-5" "py-3" "h-full"
                 "flex" "flex-col" "justify-center" "items-center"]}
   [:div
    (src->blk src)
    [add-block/button]]])

(defn create-page []
  (let [source @(rf/subscribe [:source])]
    [:div {:class ["flex" "flex-row" "h-full" "w-full"]}
     ;; Blocks bar
     [:div {:class ["h-full" "flex-1" "bg-neutral-800"]}
      [visual-container source]]
     ;; Parameters bar
     [:div {:class ["h-full" "w-[25%]"]}]]))
