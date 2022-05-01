(ns kol.fn.parser
  (:require
   [re-frame.core :as rf]
   [rewrite-clj.zip :as z]
   [kol.utils.log :as log]
   [kol.utils.core :as utils]
   [kol.fn.esexpr :as sexpr-fn]
   [kol.comp.block.core :refer [block]]
   [kol.comp.block.code-wrappers :as wrapper]
   [kol.comp.block.common :as common]
   [kol.comp.block.input :refer [block-input]]))

(declare save-esexpr-db)

(defn esxepr->blk
  "Convert an extended symbolic expression into a block
   structure."
  [esexpr]
  (save-esexpr-db esexpr)
  (->> esexpr
       (map
        (fn [ex]
          (let [sexpr (:sexpr ex)]
            (case (:type ex)
              :list
              (let [id (sexpr-fn/block-id ex)]
                [block-input id])

              :vector
              [wrapper/vector (esxepr->blk (:children ex))]

              :map
              [wrapper/map (esxepr->blk (:children ex))]

              :keyword
              [common/expr-el [wrapper/keyword sexpr]]

              :symbol
              [wrapper/symbol (str sexpr)]

              :string
              [wrapper/string (str "\"" sexpr "\"")]

              :number
              [common/expr-el [wrapper/number sexpr]]

              (if (contains? ex :newlines)
                nil
                (do (log/error "SEXPR unknown type: " (:type ex))
                    (println (pr-str ex))))))))
       ;; Filter nil elements and new lines
       (filter identity)))


(defn create-block-ref [expr]
  (let [id (sexpr-fn/block-id expr)]
    {:id id
     :selected? false     ;; is element selected
     :items []            ;; reference to input elements
     :esexpr expr}))


(defn save-esexpr-db
  "Store all esexpr into the db as a flatten vector."
  [esexpr]
  (loop [exs esexpr]
    (when-not (empty? exs)
      (let [ex (first exs)
            t (:tag ex)]
        ;; If :list append it to block reference
        (when (= t :list)
          (rf/dispatch [:append-block-to-blocks-list (create-block-ref ex)]))
        ;; If :list/:vector/:map append children to the list
        (if (utils/in? [:vector :map :list] t)
          (recur (concat (rest exs) (:children ex)))
          (recur (rest exs)))))))


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
