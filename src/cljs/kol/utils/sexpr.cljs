(ns kol.utils.sexpr)

(defn fn-call?
  "Returns true if the sexpr contains a function call."
  [sexpr]
  (every? #(not= % (first sexpr)) ['defn 'fn]))

(defn every-not-fn? [sexpr]
  (every?
   (fn [e]
     (cond
       (vector? e) (every-not-fn? e)
       (map? e) (and (every-not-fn? (keys e))
                     (every-not-fn? (vals e)))
       (list? e) false
       :else true))
   sexpr))
