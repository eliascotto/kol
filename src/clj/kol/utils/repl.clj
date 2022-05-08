(ns kol.utils.repl
  (:refer-clojure :exclude [connect])
  (:require
   [nrepl.core :as nrepl]
   [kol.config :refer [env]]))


;; nREPL connection
(def conn (atom nil))
;; nREPL session, obtained with `clone`
(def session (atom nil))


(declare on-connect)


(defn connect
  "Create a new connection with the REPL."
  ([]
   (connect (env :nrepl-port)))
  ([port]
   (reset! conn (nrepl/connect :port port))
   (on-connect)))


(defn eval-expr
  [expr]
  (-> (nrepl/client @conn 1000)    ; message receive timeout required
      (nrepl/message {:op "eval" :code expr})
      nrepl/response-values))


(defn on-connect
  []
  (-> (nrepl/client @conn 1000)    ; message receive timeout required
      (nrepl/message {:op "clone"})
      first))

(comment
  (connect 7000)
  (eval-expr "(time (reduce + (range 1e6)))")
  )
