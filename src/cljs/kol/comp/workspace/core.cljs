(ns kol.comp.workspace.core
  (:require
   [re-frame.core :as rf]
   [kol.fn.parser :refer [src->blk]]
   [kol.fn.rewrite :as rew]
   [kol.socket :as socket]
   [kol.comp.button.add-block :as add-block]))

(defn block-wrapper [blk]
  [:div
   blk
   [add-block/button
    {:on-click #()}]])

(defn workspace [src]
  [:div {:class ["px-5" "py-3" "h-full" "overflow-y-auto"]
         :on-click #(rf/dispatch [:blocks-reset-selected])}
   [:div {:class ["flex" "flex-col" "items-start" "justify-start"]}
    (for [blk (src->blk src)]
      [block-wrapper blk])]])
