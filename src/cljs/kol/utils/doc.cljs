(ns cljs.kol.utils.doc
  (:require
   [cljs.repl :refer [doc]]))

(defn params
  "Return a list of possible function
  parameters in a vector."
  [x]
  (with-out-str (doc (str x))))

(comment
  (params 'fn))
