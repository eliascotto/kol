(ns kol.utils.core)

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
