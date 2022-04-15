(ns kol.handlers
  (:require
   [clojure.tools.logging :as log]
   [kol.utils :as utils]))

(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id ; Dispatch on event-id
  )

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  ; Handle event-msgs on a single thread
  (-event-msg-handler ev-msg)
  ;; Handle event-msgs on a thread pool
  ;; (future (-event-msg-handler ev-msg))
  )

(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event id ?data ring-req ?reply-fn send-fn]}]
  (let [session (:session ring-req)
        uid     (:uid     session)]
    (log/debug "Unhandled event: " event)
    (when ?reply-fn
      (?reply-fn {:umatched-event-as-echoed-from-server event}))))

(defmethod -event-msg-handler :symbol/fn?
  [{:as ev-msg :keys [?data ?reply-fn]}]
  (when (and ?reply-fn ?data)
    (let [sym (symbol ?data)]
      (?reply-fn (-> sym resolve deref fn?)))))

(defmethod -event-msg-handler :fn/doc
  [{:as ev-msg :keys [?data ?reply-fn]}]
  (when (and ?reply-fn ?data)
    (if (symbol? ?data)
      (?reply-fn (-> ?data utils/sym->meta utils/fn-docs))
      (?reply-fn nil))))

(defmethod -event-msg-handler :ese/parse-source
  [{:as ev-msg :keys [?data :?reply-fn]}]
  (when (and ?data ?reply-fn)
    (?reply-fn (utils/parse-source ?data))))

(comment
  (resolve :mc)
  (let [s "str"]
    (ns-resolve *ns* (symbol s))
    (symbol s)
    (-> s
        symbol
        resolve
        deref
        fn?)))
