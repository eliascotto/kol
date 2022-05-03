(ns kol.utils.esexpr
  (:require
   [rewrite-clj.zip :as z]
   [kol.utils.core :refer [fn-ext-meta]]))

(declare parse-sexpr)


(defn parse-expr
  "Parse an expression rapresented by an atom or a sexpr."
  [zloc loc]
  (if (= (z/tag zloc) :newline)
    {:newlines (count (z/string zloc))}
    (when-not (z/whitespace? zloc)
      (let [sexpr (z/sexpr zloc)
            common {:sexpr sexpr
                    :position (z/position zloc)
                    :tag (z/tag zloc)}
            with-type #(merge common {:type %})
            with-child (fn [sexpr]
                         (when-not (empty? sexpr)
                           {:children (parse-sexpr (z/next zloc) loc)}))]
        (cond
          (symbol? sexpr) (let [base (with-type :symbol)
                                docs (fn-ext-meta sexpr)]
                            (if docs (merge base docs) base))

          (list? sexpr)   (merge (with-type :list)
                                 {:location loc}
                                 (with-child sexpr))

          (vector? sexpr) (merge (with-type :vector)
                                 (with-child sexpr))

          (map? sexpr)    (merge (with-type :map)
                                 (with-child sexpr))

          (keyword? sexpr) (with-type :keyword)
          (number? sexpr)  (with-type :number)
          (string? sexpr)  (with-type :string)

          :else {:type (type sexpr)
                 :sexpr sexpr})))))


;; Location represent the index of the list inside
;; the structure. Every level of depth is a new entry in
;; the vector [1 2 1 3 ...] and the integer value
;; represent the index of the list inside the parent
;; list. The length of the list represent the depth.
;; 
;; ; foo has location [1]
;; (defn foo [] ; let has location [1 1]
;;   (let [a (+ 1 2)  ;=> (+ 1 2) has location [1 1 1]
;;         b (+ 2 3)] ;=> (+ 2 3) has location [1 1 2]
;;      (+ a b))) ;=> (+ a b) has location [1 1 3] 
(defn parse-sexpr
  "Parse a symbolic expression `()` - the content of a list,
  including new lines."
  [zip loc]
  (loop [zloc zip
         ast  ()
         idx  0]
    (if (z/end? zloc)
      (reverse ast)
      (let [l? (z/list? zloc)
            new-loc (if l? (conj loc idx) loc)]
        (recur (z/right* zloc)
               (if-let [ext (parse-expr zloc new-loc)]
                 (conj ast ext)
                 ast)
               (if l? (inc idx) idx))))))

(comment
  (source->esexpr
   "(defn fizz-buzz [n]
   n)\n\n()")
  )


(defn source->esexpr
  "Returns an extended-symbolic-expression extracted from sources."
  [src]
  (let [zip (z/of-string (str src) {:track-position? true})]
    (parse-sexpr zip [])))


(defn esexpr->source
  "Returns a source code string extracted from the `esexpr`."
  [esexpr]
  (loop [exs esexpr
         src []]
    (if (empty? exs)
      (apply list src)
      (let [ex (first exs)
            x (case (:type ex)
                :list   (esexpr->source (:children ex))

                :vector (-> (esexpr->source (:children ex))
                            (into []))

                :map    (->> (esexpr->source (:children ex))
                             (apply hash-map))
                ;; default
                (:sexpr ex))]
        (recur (rest exs) (conj src x))))))


(defn update-expr
  "Update an expression pointed by `node`
  with the `expr` value, inside the source code 
  and returns a map composed by the new :esexpr and :source."
  [{:keys [source node expr]}]
  (let [new-source (-> source
                       (z/of-string {:track-position? true})
                       z/up
                       (z/find-tag-by-pos (:position node)
                                          (:tag node))
                       (z/replace expr)
                       z/root-string)]
    {:source new-source
     :esexpr (source->esexpr new-source)}))

(comment
  (update-expr
   {:source "(defn fizz-buzz (n) n)  ()"
    :node {:sexpr (), :position [1 25], :tag :list, :type :list, :location [1]}
    :expr '(defn undef [] nil)})
  (source->esexpr
   "(defn fizz-buzz [n] n)\n\n()")
  (let [s (str "(defn fizz-buzz (n) n)  ()")]
    (-> s
        (z/of-string {:track-position? true})
        z/up
        (z/find-tag-by-pos [1 25] :list)
        (z/replace '(defn undef [] nil))
        z/root-string))
  (-> "(defn fizz-buzz (n) n)
(defn undef [] nil)"
      (z/of-string {:track-position? true})
      z/up
      (z/find-tag-by-pos [1 18] :token))
  (reverse '(1 2 3))
  (conj [3] 4)
  (first '())
  (-> 'defn fn-ext-meta)
  (meta (resolve 'defn))
  (conj () {:a 1})
  (resolve nil))


(defn add-block
  [source]
  (-> source
      str
      z/of-string
      z/rightmost
      (z/insert-right* '())
      z/insert-newline-right
      z/insert-newline-right
      z/root-string))

(comment
  (add-block "(defn fizz-buzz (n) n)  ()")
  (-> "(defn foo [] 1)\n\n()\n"
      z/of-string
      z/next
      z/right*))

(comment
  (z/of-string "{:a 1}"))
