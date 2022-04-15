(ns kol.comp.icon.core
  (:require
   ["@heroicons/react/solid" :as herosolid]
   ["@heroicons/react/outline" :as herooutline]
   [goog.object :as g]
   [kol.fn.strings :refer [pascal-case]]))

(defn icon
  "TODO: add comment"
  [icon-name props]
  (let [full-name (str (pascal-case icon-name) "Icon")
        default-props {:class ["h-5" "w-5" "inline-block"]}
        icon-set (if (-> props :outline true?) herooutline herosolid)]
    [:div (->> (dissoc props :outline)
               (merge-with into default-props))
     [:> (g/get icon-set full-name)]]))
