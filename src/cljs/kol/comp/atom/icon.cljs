(ns kol.comp.atom.icon
  (:require
   ["@heroicons/react/solid" :as herosolid]
   ["@heroicons/react/outline" :as herooutline]
   [goog.object :as g]
   [kol.fn.strings :refer [pascal-case]]))

(defn icon
  "TODO: add comment"
  [icon-name & {:as props}]
  (let [full-name (str (pascal-case icon-name) "Icon")
        default-class {:class ["h-5" "w-5" "inline-block"]}
        icon-set (if (-> props :outline true?) herooutline herosolid)]
    [:div
     (->> (dissoc props :outline)
          (merge-with into default-class))
     [(g/get icon-set full-name)]]))
