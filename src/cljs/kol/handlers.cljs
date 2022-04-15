(ns kol.handlers)

(defn log [message data]
  (.log js/console message (.stringify js/JSON (clj->js data))))

(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id ; Dispatch on event-id
  )

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event]}]
  (log "Unhandled event: %s" event))

(defmethod -event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (when (vector? ?data)
    (let [[old-map new-map] ?data]
      (if (:first-open? new-map)
        (log "Channel socket successfully established!: %s" new-map)
       ;;(log "Channel socket state change: %s" ?data)
        (log "Socket not connected" nil)))))

(defmethod -event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  (log "Push event from server: %s" ?data))

(defmethod -event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (log "Handshake: %s" ?data)))
