(ns kol.comp.repl.utils
  (:require
   [re-frame.core :as rf]
   [kol.server :as server]))


(defn vrepl-append-history
  "Append a new item to the vrepl history."
  [item]
  (rf/dispatch [:append-vrepl-history-item item]))


(defn vrepl-session
  "REPL session id."
  []
  @(rf/subscribe [:vrepl-session]))


(defn open-vrepl-session
  "Create a new session, if no one is present."
  []
  (when-not (vrepl-session)
    (->> (fn [reply]
           (let [new-session (:new-session (first reply))]
             (rf/dispatch [:set-vrepl-session new-session])))
         (server/new-repl-session))))


(defn extract-value-from-history
  "Extract a map with value and timestamp."
  [history]
  (map (fn [reply]
         (->> reply
              (map (fn [item]
                     (cond-> {}
                       (contains? item :value)
                       (assoc :value (get item :value))
                       (contains? item :err)
                       (assoc :err (get item :err)))))
                       ;;(contains? item :timestamp)
                       ;;(assoc :timestamp (get item :timestamp))
              (into {})))
       history))


(defn scroll-bottom-vrepl
  "Scroll vREPL history to the bottom."
  [ref]
  (set! (.-scrollTop ref) (.-scrollHeight ref)))


(defn reset-vrepl-history-input-index []
  (rf/dispatch [:set-input-history-index 0]))


(defn set-prev-history-vrepl-input
  "Set the previous value of the vREPL as the current
  input."
  []
  (let [current-index @(rf/subscribe [:vrepl-history-input-index])
        history-input @(rf/subscribe [:vrepl-history-input])
        idx (- (count history-input) (inc current-index))]
    (when (> idx -1)
      (rf/dispatch [:set-input-history-index (inc current-index)])
      (let [new-value (get history-input idx)]
        (println "Set input" idx new-value)
        (rf/dispatch [:set-vrepl-input new-value])))))


(defn set-next-history-vrepl-input
  "Set the next value of the vREPL as the current
  input."
  []
  (let [current-index @(rf/subscribe [:vrepl-history-input-index])
        history-input @(rf/subscribe [:vrepl-history-input])
        idx (- (count history-input) current-index)]
    (when (> current-index 0)
      (rf/dispatch [:set-input-history-index (dec current-index)])
      (let [new-value (get history-input idx)]
          (rf/dispatch [:set-vrepl-input new-value])))))
