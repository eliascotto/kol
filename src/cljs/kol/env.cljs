(ns kol.env
  (:require
   [kol.utils.core :refer [now]]))

(goog-define DEBUG false)

(defn debug [& args]
  (when DEBUG
    (->> (into ["DEBUG: "] args)
         (apply str)
         (.log js/console))))
