(ns kol.utils.parser
  (:require
   [cljs.reader :refer [read]]
   [cljs.tools.reader.reader-types :as reader-types]
   [kol.comp.molecules.block :refer [block]]
   [kol.comp.molecules.code-wrappers :as wrapper]))

(declare sexpr->blk)

(defn read-expr
  "Read a string `s` and convert it to sexpr."
  [s]
  (let [pbr (reader-types/string-push-back-reader s)
        sentinel ::eof]
    (take-while #(not= sentinel %)
                (repeatedly #(read {:eof sentinel} pbr)))))

(defn args->blk [args lvl]
  (map
   (fn [ch]
     (cond
       ;; List
       (list? ch)
       (sexpr->blk ch (inc lvl))
       ;; Vector
       (vector? ch)
       [wrapper/vector (args->blk ch lvl)]
       ;; Symbol
       (symbol? ch)
       [wrapper/symbol (str ch)]
       ;; String
       (string? ch)
       [wrapper/string ch]
       ;; Number
       (number? ch)
       [wrapper/number ch]))
   args))

(defn defn->block
  "Curstom parser for defn."
  [xs lvl]
  (let [f-name (second xs)
        doc (nth xs 2)
        has-doc? (string? doc)
        args (if has-doc? (nth xs 3) doc)
        body (nthrest xs (if has-doc? 4 3))]
    [block {:func (str f-name)
            :pre "def"
            :post [wrapper/vector (map str args)]
            :level lvl}
     (args->blk body lvl)]))

(defn fn->block
  "Custom parser for fn."
  [xs lvl]
  (println "fn" xs)
  (let [f-name (second xs)
        has-name? (string? f-name)
        args (if has-name? (nth xs 2) f-name)
        body (nthrest xs (if has-name? 3 2))]
    [block {:pre "fn"
            :post [wrapper/vector (map str args)]
            :level lvl}
     (args->blk body lvl)]))

(defn sexpr->blk
  [xs lvl]
  (if (list? xs)
    (let [f (first xs)
          args (rest xs)]
      (case f
        defn (defn->block xs lvl)
        fn (fn->block xs lvl)
        ;; default
        ^{:key (str "block-" xs lvl)}
        [block {:func (str f) :level lvl}
         (args->blk args lvl)]))
    (args->blk [xs] lvl)))

(comment
  (sexpr->blk 's 0))

(defn src->blk
  "Convert a list of sexprs to block rappresentation."
  [src]
  (->> (read-expr src)
       (map #(sexpr->blk % 0))))
