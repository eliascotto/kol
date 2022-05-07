(ns kol.comp.workspace.core
  (:require
   [re-frame.core :as rf]
   [kol.fn.parser.core :refer [esxepr->blk]]
   [kol.fn.vld.core :as vld]
   [kol.comp.icon.core :refer [icon]]))

(defn workspace []
  (let [exsrc @(rf/subscribe [:source-esexpr])
        _ (rf/dispatch [:reset-blocks-list])]
    [:div {:class ["px-5" "py-3" "h-full" "overflow-y-auto"]
           :on-click #(rf/dispatch [:reset-selected-block])}
     [:div {:class ["flex" "flex-col" "items-start" "justify-start"]}
      (for [blk (esxepr->blk exsrc)]
        ^{:key (str "block-" (second blk))}
        [:div {:class ["my-2"]}
         blk])
      [:div {:class ["text-xs" "text-slate-400" "mt-2"
                     "select-none" "cursor-pointer"
                     "flex" "items-center"]
             :title "Click to add a new block"
             :on-click #(vld/add-new-block)}
       [icon {:class ["w-3.5" "h-3.5" "mr-1"]}
        "plus"]
       "Add block"]]]))
