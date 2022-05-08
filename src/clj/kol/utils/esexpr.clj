(ns kol.utils.esexpr
  (:refer-clojure :exclude [update remove])
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

          (nil? sexpr) (with-type :nil)

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
   n)\n\n()"))


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


(defn- find-source-node
  "Get the node in the source code."
  [source node]
  (-> source
      str
      (z/of-string {:track-position? true})
      z/up
      (z/find-tag-by-pos (:position node)
                         (:tag node))))


(defn update
  "Update an expression pointed by `node`
  with the `expr` value, inside the source code. 
  Returns a map composed by the new :esexpr and :source."
  [{:keys [source node expr]}]
  (let [new-source (-> (find-source-node source node)
                       (z/replace expr)
                       z/root-string)]
    {:source new-source
     :esexpr (source->esexpr new-source)}))


(defn add-block
  "Add a new block returning the source code string."
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


(defn insert
  "Add a new node with content `expr` at the
  `side` of `node`. On the :right side by default.
  Returns a map composed by the new :esexpr and :source."
  [{:keys [source node expr side] :or {side :right}}]
  (let [insert-fn (if (= side :left) 
                    z/insert-left
                    z/insert-right)
        new-source (-> (find-source-node source node)
                       (insert-fn expr)
                       z/root-string)]
    {:source new-source
     :esexpr (source->esexpr new-source)}))


(defn update-and-insert
  "Update the node with expr and add another node
  on the right."
  [{:keys [source node expr new-expr] :or {new-expr nil}}]
  (let [new-source (-> (find-source-node source node)
                       (z/replace expr)
                       (z/insert-right new-expr)
                       z/root-string)]
    {:source new-source
     :esexpr (source->esexpr new-source)}))


(defn remove
  "Remove the node pointer by `node`.
  Returns a map composed by the new :esexpr and :source."
  [{:keys [source node]}]
  (let [new-source (-> (find-source-node source node)
                       (z/remove)
                       z/root-string)]
    {:source new-source
     :esexpr (source->esexpr new-source)}))