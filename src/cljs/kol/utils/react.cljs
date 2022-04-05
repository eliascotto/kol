(ns kol.utils.react)

(defn with-keys
  "Returns the input collection enhanced with 
  :key unique metadata."
  [coll]
  (doall (map-indexed #(with-meta %2 {:key %1}) coll)))
