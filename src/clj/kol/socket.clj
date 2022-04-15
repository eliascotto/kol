(ns kol.socket
  (:require
   [taoensso.sente :as sente]
   [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
   [kol.handlers :refer [event-msg-handler]]
   [clojure.core.async :as async :refer (<! go-loop)]
   [clojure.tools.logging :as log]
   [mount.core :as mount]))

(def config
  {:packer :edn
   :csrf-token-fn nil})

(let [{:keys [ch-recv send-fn connected-uids ajax-post-fn
              ajax-get-or-ws-handshake-fn]}
      (sente/make-channel-socket-server! (get-sch-adapter) config)]
  ;; Handlers for router
  (def ring-ajax-post ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)

  ;; ChannelSocket's receive channel
  (def ch-chsk ch-recv)
  ;; ChannelSocket's send API fn
  (def chsk-send! send-fn)
  ;; Watchable, read-only atom
  (def connected-uids connected-uids))

;; We can watch this atom for changes if we like
(add-watch connected-uids :connected-uids
           (fn [_ _ old new]
             (when (not= old new)
               (log/info "Connected uids change: %s" new))))

(defonce router_ (atom nil))

(defonce broadcast-enabled?_ (atom true))

(defn start-example-broadcaster!
  "As an example of server>user async pushes, setup a loop to broadcast an
  event to all connected users every 10 seconds"
  []
  (let [broadcast!
        (fn [i]
          (let [uids (:any @connected-uids)]
            (log/debug "Broadcasting server>user: %s uids" (count uids))
            (doseq [uid uids]
              (chsk-send! uid
                          [:some/broadcast
                           {:what-is-this "An async broadcast pushed from server"
                            :how-often "Every 10 seconds"
                            :to-whom uid
                            :i i}]))))]

    (go-loop [i 0]
      (<! (async/timeout 10000))
      (when @broadcast-enabled?_ (broadcast! i))
      (recur (inc i)))))

(mount/defstate socket-server
  :start
  (->> (sente/start-server-chsk-router! ch-chsk event-msg-handler)
       (reset! router_))
  :stop
  (when-let [stop-fn @router_] (stop-fn)))
