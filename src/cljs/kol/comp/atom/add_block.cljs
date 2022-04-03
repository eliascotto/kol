(ns kol.comp.atom.add-block
  (:require
   [kol.comp.atom.icon :refer [icon]]))

(defn button []
  [:div {:class ["p-1" "cursor-pointer"
                 "text-neutral-500"
                 "hover:text-neutral-300"]
         :title "Add a new block"}
   [icon "plus"
    {:class ["w-4" "h-4"]}]])
