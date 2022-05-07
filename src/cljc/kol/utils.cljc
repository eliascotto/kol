(ns kol.utils)


(defn index-of
  "Returns the index of the all
  the elements in the collection
  that satisfy a certain predicate."
  [pred coll]
  (keep-indexed (fn [i x] (when (pred x) i))
                coll))

(comment
  (let [predicate #(> % 3)
        sequence [3 2 4 1 5 6 7]]
    (keep-indexed (fn [i x] (when (predicate x) i))
                  sequence)
    (index-of predicate sequence)))


(defn filter-kv
  "Filter a map in which `(pred item)` returns true."
  [pred map]
  (reduce-kv (fn [accumulator key value]
               (if (pred key value)
                 (assoc accumulator key value)
                 accumulator)) {} map))

(comment
  (filter-kv (fn [key _]
               (not (= key "a"))) {"a" {:some "a"}
                                   "b" {:some "b"}
                                   "c" {:some "c"}})
  )