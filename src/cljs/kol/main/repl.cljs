(ns kol.main.repl
  (:refer-clojure :exclude [eval])
  (:require
   ["net" :as net]
   [cljs.reader :as reader]))

(def ^:private default-port 7001)

;; net.Socket
(def socket (atom nil))
;; Session id obtained from nREPL with {:op "clone"}
(def session (atom nil))
;; Callback from repl reply
(def on-response (atom nil))

(defn write [data]
  (.write @socket (str data)))

(defn on-connect []
  (println "Connected to nREPL")
  ;; Request a new session
  (write {:op "clone"}))

(defn status-done? [data]
  (contains? (:status data) :done))

(defn on-socket-data [buffer]
  (let [data (reader/read-string (.toString buffer))]
    (println (str "Received data " data))
    (cond (and (status-done? data) (contains? data :new-session))
          (reset! session (:new-session data))
          
          (fn? @on-response)
          (@on-response data))))

(defn connect [opts]
  (let [cl (net/Socket.)]
    (reset! socket cl)
    (.connect cl (or (:port opts) default-port) on-connect)
    (.on cl "data" on-socket-data)
    (when (contains? opts :on-response)
      ;; Save callback for later use
      (reset! on-response (:on-response opts)))))

(defn close []
  (write {:op "interrupt" :session @session})
  (.end @socket)
  (println "Closed nREPL connection"))

(defn eval [code]
  (let [params {:op "eval" :code code :session @session}]
    (println (str "Sending " params))
    (write params)))
