(ns kol.events.repl
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf :refer [reg-event-db
                                 reg-event-fx]]
   [kol.comp.repl.utils :as repl-utils]))

;; ----------------------
;; REPL
;; ----------------------

(reg-event-db
 :append-repl-history-item
 (fn [db [_ item]]
   (let [history (-> db :repl :history)]
     (assoc-in
      db
      [:repl :history]
      (conj history item)))))

(reg-event-db
 :set-repl-input
 (fn [db [_ value]]
   (assoc-in db [:repl :input] value)))

(reg-event-db
 :reset-repl-input
 (fn [db _]
   (assoc-in db [:repl :input] nil)))

(reg-event-db
 :append-repl-multiline-value
 (fn [db [_ value]]
   (let [old (get-in db [:repl :multiline])]
     (assoc-in db [:repl :multiline] (str old value)))))

;; Reset completely the current input into the REPL
(reg-event-db
 :reset-repl-all
 (fn [db _]
   (update-in db [:repl] merge {:input nil
                                :multiline nil
                                :placeholder nil})))
(reg-event-db
 :set-repl-placeholder
 (fn [db [_ value]]
   (assoc-in db [:repl :placeholder] value)))


;; ----------------------
;; vREPL - Visual REPL
;; ----------------------

(rf/reg-fx
 :focus-to-vrepl-input
 (fn [ref]
   (r/after-render #(repl-utils/scroll-bottom-vrepl ref))))

(reg-event-db
 :set-vrepl-session
 (fn [db [_ session]]
   (assoc-in db [:vrepl :session] session)))

(reg-event-fx
 :append-vrepl-history-item
 (fn [{:keys [db]} [_ item]]
   {:db (update-in db [:vrepl :history] (fnil conj []) item)
    :focus-to-vrepl-input (get-in db [:vrepl :input-ref])}))

(reg-event-db
 :set-vrepl-input
 (fn [db [_ value]]
   (assoc-in db [:vrepl :input] value)))

(reg-event-db
 :reset-vrepl-input
 (fn [db _]
   (assoc-in db [:vrepl :input] "")))

(reg-event-db
 :set-vrepl-input-ref
 (fn [db [_ ref]]
   (assoc-in db [:vrepl :input-ref] ref)))

(reg-event-db
 :append-vrepl-history-input
 (fn [db _]
   (let [value (get-in db [:vrepl :input])]
     (update-in db [:vrepl :history-input] (fnil conj []) value))))

(reg-event-db
 :set-input-history-index
 (fn [db [_ index]]
   (assoc-in db [:vrepl :history-input-index] index)))
