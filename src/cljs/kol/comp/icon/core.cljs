(ns kol.comp.icon.core
  (:require
   ["@heroicons/react/solid" :as herosolid]
   ["@heroicons/react/outline" :as herooutline]
   [goog.object :as g]
   [kol.fn.strings :refer [pascal-case]]))

(defn icon
  "Add an icon from https://heroicons.com.
  `icon-name` as from the website (e.g. `plus-circle`)
  `props` is a map with :class, :outline (default `false`), etc."
  ([icon-name]
   (icon {} icon-name))
  ([props icon-name]
   (let [full-name (str (pascal-case icon-name) "Icon")
         default-props {:class ["inline-block"]}
         icon-set (if (-> props :outline true?) herooutline herosolid)]
     [:div (->> (dissoc props :outline)
                (merge-with into default-props))
      [:> (g/get icon-set full-name)]])))
