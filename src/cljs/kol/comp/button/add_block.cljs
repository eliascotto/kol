(ns kol.comp.button.add-block
  (:require
   [kol.comp.icon.core :refer [icon]]))

(defn button [props]
  [:div {:class ["px-1" "cursor-pointer"
                 "text-neutral-500"
                 "hover:text-neutral-300"]
         :title "Add a new block"}
   [icon "plus"
    {:class ["w-3" "h-3"]
     :on-click (:on-click props)}]])
