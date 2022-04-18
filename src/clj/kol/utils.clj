(ns kol.utils
  (:require
   [rewrite-clj.zip :as z]))

(declare parse-sexpr)

(defn sym->meta
  "Returns the meta of a symbol, if is resolved 
  inside the current namespace."
  [s]
  (when s
    (when-let [varquoted (resolve s)]
      (meta varquoted))))

(defn fn-docs
  "Returns a map with :doc and :arglists for documentation."
  [f]
  (when-let [m (sym->meta f)]
    {:arglist (pr-str (:arglists m))
     :doc (:doc m)}))

(defn fn-ext-meta
  "Returns a map with extended function meta."
  [f]
  (when-let [m (sym->meta f)]
    (merge (select-keys m [:arglists :doc])
           ;; :ns is a clojure.lang.Namespace data type
           {:ns (-> m :ns str)})))

(defn parse-expr
  "Parse an expression rapresented by an atom or a sexpr."
  [zloc loc]
  (let [sexpr (z/sexpr zloc)
        common {:sexpr sexpr :position (z/position zloc)}
        with-type #(merge common {:type %})
        with-child (fn [sexpr]
                     (when-not (empty? sexpr)
                       {:children (parse-sexpr (z/next zloc) loc)}))]
    (cond
      (symbol? sexpr)
      (let [base (with-type :symbol)
            docs (fn-ext-meta sexpr)]
        (if docs
          (merge base docs)
          base))

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
             :sexpr sexpr})))

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
  "Parse a symbolic expression `()` - the content of a list."
  [zip loc]
  (loop [zloc zip
         ast  ()
         idx  1]
    (if (z/end? zloc)
      (reverse ast)
      (let [l? (z/list? zloc)]
        (recur (z/right zloc)
               (conj ast (parse-expr zloc
                                     (if l? (conj loc idx) loc)))
               (if l? (inc idx) idx))))))

(defn source->esexpr
  "Returns an extended-symbolic-expression extracted from sources."
  [src]
  (let [zip (z/of-string (str src) {:track-position? true})]
    (parse-sexpr zip [])))

(comment
  (source->esexpr
   "(defn prop []
      (let [a (+ 1 2)]
        a))
    [1 2]")
  (-> "[] ()"
      str
      (z/of-string {:track-position? true})
      z/next
      z/sexpr)
  (reverse '(1 2 3))
  (conj [3] 4)
  (first '())
  (-> 'defn fn-ext-meta)
  (meta (resolve 'defn))
  (conj () {:a 1})
  (resolve nil))
