(ns kol.server
  (:refer-clojure :exclude [fn?])
  (:require
   [taoensso.sente :as sente]
   [kol.socket :as socket :refer [chsk-send!]]
   [kol.utils.log :as log]
   [kol.macros :refer [map-keys]]))


(defn- handle-error [event reply]
  (log/error (str "Error in ws request: " event)
             reply))


(defn- send-msg! 
  "Send a message to the server via websocket."
  [event callback]
  (chsk-send! event 200 ; max timeout
              (fn [reply]
                (if (sente/cb-success? reply)
                  (callback reply)
                  (handle-error (first event) reply)))))


(defn fn?
  "Verify if a symbol is a function on the server."
  [s callback]
  (send-msg! [:symbol/fn? s] callback))


(defn doc
  "Verify if a symbol is a function on the server."
  [s callback]
  (send-msg! [:fn/doc s] callback))


(defn source->esexpr
  "Transform a sexpr into an enhanced symbolic expression,
   on the server."
  [s callback]
  (send-msg! [:expr/parse-source s] callback))


(defn update-expr
  "Transform a sexpr into an enhanced symbolic expression,
   on the server."
  [source node expr callback]
  (-> [:expr/update (map-keys source node expr)]
      (send-msg! callback)))


(defn add-block
  "Add a new block."
  [source callback]
  (send-msg! [:expr/add-block source] callback))


(defn insert-right
  "Insert `expr` on the left of the `node`."
  [source node expr callback]
  (send-msg! [:expr/insert (map-keys source node expr)] callback))


(defn update-and-insert-expr
  "Update expr and insert a new one on the right."
  ([source node expr callback]
   (update-and-insert-expr source node expr nil callback))
  ([source node expr new-expr callback]
   (send-msg! [:expr/update-and-insert (map-keys source node expr new-expr)] 
              callback)))


(defn remove-expr
  "Insert `expr` on the left of the `node`."
  [source node callback]
  (send-msg! [:expr/remove (map-keys source node)] callback))
