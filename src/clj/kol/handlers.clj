(ns kol.handlers
  (:require
   [clojure.tools.logging :as log]
   [kol.utils.core :as utils]
   [kol.utils.esexpr :as esexpr]))

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
      (?reply-fn (utils/fn-docs ?data))
      (?reply-fn nil))))

(defmethod -event-msg-handler :chsk/ws-ping
  [{:as ev-msg :keys [?reply-fn]}]
  (when ?reply-fn
    (?reply-fn "pong")))

;;/////////////////
;; Expr
;;/////////////////

(defmethod -event-msg-handler :expr/parse-source
  [{:as ev-msg :keys [?data :?reply-fn]}]
  (when (and ?data ?reply-fn)
    (let [esexpr (esexpr/source->esexpr ?data)]
      (?reply-fn esexpr))))

(defmethod -event-msg-handler :expr/update-expr
  [{:as ev-msg :keys [?data :?reply-fn]}]
  (when (and ?data ?reply-fn)
    (let [resp (esexpr/update-expr ?data)]
      (?reply-fn resp))))

(defmethod -event-msg-handler :expr/add-block
  [{:as ev-msg :keys [?data :?reply-fn]}]
  (when (and ?data ?reply-fn)
    (let [resp (esexpr/add-block ?data)]
      (?reply-fn resp))))

(defmethod -event-msg-handler :expr/insert-expr
  [{:as ev-msg :keys [?data :?reply-fn]}]
  (when (and ?data ?reply-fn)
    (let [resp (esexpr/insert-expr ?data)]
      (?reply-fn resp))))

(defmethod -event-msg-handler :expr/remove-expr
  [{:as ev-msg :keys [?data :?reply-fn]}]
  (when (and ?data ?reply-fn)
    (let [resp (esexpr/remove-expr ?data)]
      (?reply-fn resp))))

(comment
  (resolve :mc)
  (-> #'str
      meta
      :ns
      str)
  (let [s "str"]
    (ns-resolve *ns* (symbol s))
    (symbol s)
    (-> s
        symbol
        resolve
        deref
        fn?)))
