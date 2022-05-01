(ns kol.utils)


(defn index-of
  "Macro that returns the index of the all
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
