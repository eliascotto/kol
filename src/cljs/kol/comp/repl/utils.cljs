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
                       (assoc :err (get item :err))
                       (contains? item :timestamp)
                       (assoc :timestamp (get item :timestamp)))))
              (into {})))
       history))
