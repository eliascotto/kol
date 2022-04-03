(ns kol.macros)

(defmacro for-indexed [[[i x] coll] & body]
  `(for [[~i ~x] (map-indexed vector ~coll)] ~@body))
