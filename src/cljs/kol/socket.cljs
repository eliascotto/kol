(ns kol.socket
  (:require
   [taoensso.sente :as sente]
   [kol.handlers :as handlers]))

(def router_ (atom nil))

(def config {:type :auto
             :packer :edn
             :host "localhost"
             :port "3000"
             :protocol "http:"})

(defn state-watcher [_key _atom _old-state new-state]
  (.warn js/console "New state" new-state))

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket-client! "/api/chsk" nil config)]
  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  (add-watch state :state-watcher state-watcher))

(defn stop-router! [] 
  (when-let [stop-f @router_] 
    (stop-f)))

(defn start! []
  (stop-router!)
  (->> handlers/event-msg-handler
       (sente/start-client-chsk-router! ch-chsk)
       (reset! router_)))
