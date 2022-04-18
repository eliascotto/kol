(ns kol.fn.parser
  (:require
   [re-frame.core :as rf]
   [rewrite-clj.zip :as z]
   [kol.comp.block.core :refer [block]]
   [kol.comp.block.code-wrappers :as wrapper]
   [kol.definitions :refer [Block]]))

(declare sexpr->blk
         defn->block
         fn->block)

(defn create-block-ref
  "Create a new block record, used to modifiy the 
  content of the block."
  [sexpr pos lvl parent]
  (Block. sexpr pos lvl parent))

(defn push-block-ref! [blk]
  (rf/dispatch [:blocks-append-to-list blk]))

(defn args->blk
  "Translate arguments to block/wrapper depending
  on the sexpr type.
  `zip` is a "
  [zip lvl parent]
  (loop [zloc zip
         args ()]
    (if (z/end? zloc)
      args
      (let [sexpr (z/sexpr zloc)
            node (cond
                   (list? sexpr)
                   (sexpr->blk zloc (inc lvl) parent)

                   (vector? sexpr)
                   [wrapper/vector
                    (args->blk (z/next zloc) lvl parent)]

                   (map? sexpr)
                   [wrapper/map
                    (args->blk (z/next zloc) lvl parent)]

                   (keyword? sexpr)
                   [wrapper/keyword sexpr]

                   (symbol? sexpr)
                   [wrapper/symbol (str sexpr)]

                   (string? sexpr)
                   [wrapper/string sexpr]

                   (number? sexpr)
                   [wrapper/number sexpr])]
        (recur
         (z/right zloc)
         (concat args (list node)))))))

(defn sexpr->blk
  "Convert a sexpr to a hiccup block with opts and
  args."
  [zloc lvl parent]
  (if (z/list? zloc)
    (let [f (-> zloc z/next z/sexpr)
          args (-> zloc z/next z/right)
          sexpr (z/sexpr zloc)
          ;; Save block position
          pos (z/position zloc)]
      ^{:key (str "block-" sexpr)}
      (case f
        defn (defn->block sexpr args pos lvl parent)
        fn (fn->block sexpr args pos lvl parent)
        ;; default
        (let [block-ref (create-block-ref sexpr pos lvl parent)
              _ (push-block-ref! block-ref)]
          [block {:func (str f)}
           block-ref
           (args->blk args lvl block-ref)])))
    (args->blk zloc 0 parent)))

(defn src->blk
  "Convert a list of sexprs to block components.
  `src` is a string containing Clojure source code."
  [src]
  (rf/dispatch [:blocks-reset-list])
  (let [zip (z/of-string src {:track-position? true})]
    (loop [zloc zip
           blocks ()]
      (if (z/end? zloc)
        blocks
        (recur
         (z/right zloc)
         (concat blocks
                 (list (sexpr->blk zloc 0 nil))))))))

(defn esxepr->blk
  "Convert an extended symbolic expression into a block
   structure."
  [esexpr]
  (map
   (fn [es]
     (let [sexpr (:sexpr es)]
       (case (:type es)
         :list
         [block es (esxepr->blk (:children es))]

         :vector
         [wrapper/vector  (esxepr->blk (:children es))]

         :map
         [wrapper/map (esxepr->blk (mapcat identity (:children es)))]

         :keyword
         [wrapper/keyword sexpr]

         :symbol
         [wrapper/symbol (str sexpr)]

         :string
         [wrapper/string sexpr]

         :number
         [wrapper/number sexpr])))
   esexpr))

(defn defn->block
  "Parse a `defn` expr into a block component."
  [sexpr args pos lvl parent]
  (let [fn-name (z/sexpr args)
        fn-args (-> args z/right z/sexpr)
        block-ref (create-block-ref sexpr pos lvl parent)
        _ (push-block-ref! block-ref)]
    [block {:pre "function"
            :func fn-name
            :post [wrapper/arguments fn-args]}
     block-ref
     (args->blk (-> args z/right z/right) lvl block-ref)]))

(defn fn->block
  "Parse a `fn` expr into a block component."
  [sexpr args pos lvl parent]
  (let [fn-args (-> args z/sexpr)
        block-ref (create-block-ref sexpr pos lvl parent)
        _ (push-block-ref! block-ref)]
    [block {:pre "fn"
            :post [wrapper/arguments fn-args]}
     block-ref
     (args->blk (-> args z/right) lvl block-ref)]))

(defn parse-sexpr
  "Returns the information extracted from the block 
  reference `blk`."
  [blk]
  (let [zloc (-> (:sexpr blk)
                 str
                 (z/of-string {:track-position? true}))
        sexpr (z/sexpr zloc)
        f (first sexpr)]
    (case f
      defn
      (let [f-name (second sexpr)
            params (nth sexpr 2)
            body (nthrest sexpr 3)]
        {:type :function
         :name f-name
         :params params
         :body body})
      ;; default
      (let [args (rest sexpr)]
        {:type :list
         :function f
         :arguments (into [] args)}))))

(defn find-child-block
  "Returns a `Block` with `:parent` equals to `parent-blk` and
  sexpr equuals to `child-sexpr`."
  [parent-blk child-sexpr]
  (let [block-list @(rf/subscribe [:blocks-list])]
    (-> (filter
         (fn [blk]
           ;; TO-FIX 
           ;; a child block could be present multiple
           ;; times in a single parent. This find
           ;; is not unique.
           (and (= (:parent blk) parent-blk)
                (= (:sexpr blk) child-sexpr)))
         block-list)
        first)))
