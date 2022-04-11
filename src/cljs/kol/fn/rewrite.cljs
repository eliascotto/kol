(ns kol.fn.rewrite
  (:require
   [rewrite-clj.zip :as z]))

(defn rewrite-src
  "Returns a"
  [src]
  (z/of-string (str src) {:track-position? true}))

(defn expr= [expr]
  (fn [n]
    (= (z/sexpr n) expr)))



(comment
  (let [zloc (rewrite-src
              "(defn foo [x] (+ 1 2))\n(map str [1 2 3 4])")]
    (-> zloc
        z/rightmost
        (z/insert-right '(foo))
        (z/insert-newline-right)
        z/root
        str)
    ;; (-> zloc
    ;;     z/position)
    (-> zloc
        (z/find-value z/next '1)
        z/sexpr)
    (-> zloc
        (z/find (fn [e]
                  ;; (println e)
                  false)))
    (-> "(defn foo [] 42)\n(map str [1 2 3 4])"
        p/parse-string-all
        n/tag)
    ;; (-> zloc
    ;;     z/up
    ;;     (z/postwalk
    ;;      (fn [n] (list? (z/sexpr n)))
    ;;      (fn [n]
    ;;        (print (z/position n))
    ;;        (print (z/node n))
    ;;        (print (z/tag n))
    ;;        (println (z/sexpr n)))))
    ;; (-> zloc
    ;;     z/up
    ;;     (z/prewalk
    ;;      (fn [n] (not= :forms (z/tag n)))
    ;;      (fn [n]
    ;;        (print (z/position n))
    ;;        (print (z/node n))
    ;;        (print (z/tag n))
    ;;        (println (z/sexpr n)))))
    (-> zloc
        (z/find (expr= '(map str [1 2 3 4])))))
  ;; To apply find multiple time, you need to shift right the
  ;; current node
  (-> (rewrite-src
       "(defn foo [x] (+ 1 2))\n(map str [1 2 3 4])\n(+ 1 2)\n(map str [1 2 3 4])")
      (z/find (expr= '(map str [1 2 3 4])))
      z/right
      (z/find (expr= '(map str [1 2 3 4]))))
  (-> (rewrite-src '{:class ["flex" "flex-col" "items-start" "justify-start"]})
      z/next
      z/sexpr)
  )
