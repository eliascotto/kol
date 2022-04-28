(ns kol.fn.parser
  (:require
   [re-frame.core :as rf]
   [rewrite-clj.zip :as z]
   [kol.utils.log :as log]
   [kol.comp.block.core :refer [block]]
   [kol.comp.block.code-wrappers :as wrapper]
   [kol.comp.block.common :as common]))

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
         [wrapper/vector (esxepr->blk (:children es))]

         :map
         [wrapper/map (esxepr->blk (:children es))]

         :keyword
         [common/expr-el [wrapper/keyword sexpr]]

         :symbol
         [wrapper/symbol (str sexpr)]

         :string
         [wrapper/string (str "\"" sexpr "\"")]

         :number
         [common/expr-el [wrapper/number sexpr]]

         (do (log/error "SEXPR unknown type: " (:type es))
             (println (pr-str es))))))
   esexpr))

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
