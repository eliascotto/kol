(ns kol.socket
  (:require
   [taoensso.sente :as sente]
   [taoensso.sente.server-adapters.http-kit :refer (get-sch-adapter)]
   [kol.handlers :refer [event-msg-handler]]
   [clojure.core.async :as async :refer (<! go-loop)]
   [clojure.tools.logging :as log]
   [mount.core :as mount]
   [kol.utils.repl :as repl]))

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

(mount/defstate socket-server
  :start
  (->> (sente/start-server-chsk-router! ch-chsk event-msg-handler)
       (reset! router_))
  :stop
  (when-let [stop-fn @router_] 
    (stop-fn)
    (repl/close)))
