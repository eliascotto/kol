(ns kol.macros)

(defmacro for-indexed [[[i x] coll] & body]
  `(for [[~i ~x] (map-indexed vector ~coll)] ~@body))

(defmacro rep->
  "Apply `form` to `x`, `n` times, using a `->` macro."
  [n x form]
  `(-> ~x ~@(repeat n form)))

(comment
  (macroexpand-1 '(rep-> 2 'a 'next))
  )
