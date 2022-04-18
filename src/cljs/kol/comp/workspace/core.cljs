(ns kol.comp.workspace.core
  (:require
   [re-frame.core :as rf]
   [kol.fn.parser :refer [esxepr->blk]]
   [kol.fn.rewrite :as rew]
   [kol.socket :as socket]
   [kol.comp.button.add-block :as add-block]))

(defn block-wrapper [blk]
  [:div
   blk
   [add-block/button
    {:on-click #()}]])

(defn workspace []
  (let [exsrc  @(rf/subscribe [:source-esexpr])]
    [:div {:class ["px-5" "py-3" "h-full" "overflow-y-auto"]
           :on-click #(rf/dispatch [:blocks-reset-selected])}
     [:div {:class ["flex" "flex-col" "items-start" "justify-start"]}
      (for [blk (esxepr->blk exsrc)]
        [block-wrapper blk])]]))
