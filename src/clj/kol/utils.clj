(ns kol.utils
  (:require
   [rewrite-clj.zip :as z]))

(defn sym->meta
  "Returns the meta of a symbol, if is resolved 
  inside the curent namespace."
  [s]
  (when-let [varquoted (resolve s)]
    (meta varquoted)))

(defn fn-docs
  "Returns a map with :doc and :arglists for documentation."
  [f]
  (when-let [m (meta f)]
    {:arglist (pr-str (:arglists m))
     :doc (:doc m)}))

(defn parse-args [])

(defn parse-sexpr [])

(defn parse-source [src]
  (let [zip (z/of-string (str src))]
    (-> zip
        z/up
        (z/postwalk
         (fn [zloc]
           (let [sexpr (z/sexpr zloc)]
             (cond
               (list? sexpr) {:type :list
                              :sexpr sexpr}
               :else {:type (type sexpr)
                      :sexpr sexpr})))))))

(comment
  (meta #'map)
  (meta nil))
