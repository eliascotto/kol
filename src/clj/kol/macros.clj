(ns kol.macros)

;; Usage:
;; (for-indexed [[index item] x]
;;   ...)
(defmacro for-indexed
  "Macro to use a for loop with indexed items in
  the form [index item].
   
  Usage: `(for-indexed [[index item] x] ...)`"
  [[[i x] coll] & body]
  `(for [[~i ~x] (map-indexed vector ~coll)] ~@body))


(defmacro rep->
  "Apply `form` to `x`, `n` times, using thread macro `->`."
  [n x form]
  `(-> ~x ~@(repeat n form)))

(comment
  (macroexpand-1 '(rep-> 2 'a 'next)) ; => (clojure.core/-> 'a 'next 'next)
  )

(defmacro map-keys
  "Macro that creates a map with keys the name
  of the variables inside the vector `coll`. Better
  used with named variables."
  [& args]
  `(zipmap (map keyword '~args) [~@args]))

(comment
  (let [a 1 b 2]
    (map-keys a b) ; => {:a 1, :b 2}
    ;; (macroexpand-1 '(map-keys a b))
    ))

(defmacro when-let*
  "When-let multiple bindings version.
  All bindings are evaluated before checking for falsyness."
  [bindings & body]
  (if (seq bindings)
    `(when-let [~(first bindings) ~(second bindings)]
       (when-let* ~(drop 2 bindings) ~@body))
    `(do ~@body)))

(comment
  (when-let* [a 1
              b 2
              c (+ a b)]
             (println "yeah!")
             c)
  (macroexpand-1 '(when-let* [a 1
                              b 2
                              c (+ a b)]
                             (println "yeah!")
                             c)))
