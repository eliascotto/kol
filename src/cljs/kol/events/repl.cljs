(ns kol.events.repl
  (:require
   [re-frame.core :as rf]))

(rf/reg-event-db
 :repl-history-append
 (fn [db [_ item]]
   (let [history (-> db :repl :history)]
     (assoc-in
      db
      [:repl :history]
      (conj history item)))))

(rf/reg-event-db
 :repl-input-set
 (fn [db [_ value]]
   (assoc-in db [:repl :input] value)))

(rf/reg-event-db
 :repl-input-reset
 (fn [db _]
   (assoc-in db [:repl :input] nil)))

(rf/reg-event-db
 :repl-multiline-append
 (fn [db [_ value]]
   (let [old (get-in db [:repl :multiline])]
     (assoc-in db [:repl :multiline] (str old value)))))

;; Reset completely the current input into the REPL
(rf/reg-event-db
 :repl-reset-all
 (fn [db _]
   (update-in db [:repl] merge {:input nil
                                :multiline nil
                                :placeholder nil})))
(rf/reg-event-db
 :repl-set-placeholder
 (fn [db [_ value]]
   (assoc-in db [:repl :placeholder] value)))
