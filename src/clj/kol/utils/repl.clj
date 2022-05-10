(ns kol.utils.repl
  (:refer-clojure :exclude [connect])
  (:require
   [nrepl.core :as nrepl]
   [clojure.tools.logging :as log]
   [kol.utils :refer [in?]]
   [kol.config :refer [env]]))

;; nREPL connection
(def conn (atom nil))


(defn connect
  "Create a new connection with the REPL."
  ([]
   (connect (env :nrepl-port)))
  ([port]
   (if-not @conn
     (let [new-conn (nrepl/connect :port port)]
       (log/info "Connected to REPL on port " port)
       (reset! conn new-conn)
       new-conn)
     @conn)))


(defn send-message!
  "Send a message to the REPL, creating a new
  connection if necessary.
  Receives named arguments as
   - `op`: string or keyword for operation (default \"eval\")
   - `code`: string containing code."
  [msg]
  (when (nil? @conn)
    (connect))
  (-> (nrepl/client @conn 1000)   ; message receive timeout required
      (nrepl/message msg)
      doall))


(defn close
  "Close the connection with the REPL."
  []
  (when @conn
    (send-message! {:op "close"})))


(defn eval-expr
  "Evaluate an expression into the REPL and
  associate a `timestamp` to the reply.
  Accepts an optional session string."
  [& {:keys [expr session] :or {session nil}}]
  (->> (cond-> {:op "eval"
                :code expr}
         (string? session) (assoc :session session))
       (send-message!)
       (map (fn [rep]
              ;; Append a new #inst timestamp to the map with :status => "done" 
              (if (and (contains? rep :status)
                       (in? (:status rep) "done"))
                (assoc rep :timestamp (java.util.Date.))
                rep)))))

(comment
  (connect 7000)
  (send-message! {:op "clone"})
  (eval-expr {:expr "(time (reduce + (range 1e6)))" :session "aa5e7764-1d56-4005-89c8-4aba492b0033"})
  (eval-expr :expr "1")
  (eval-expr :expr "*1")
  (send-message! {:op "describe"})
  )
