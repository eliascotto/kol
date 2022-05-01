(ns kol.events.blocks
  (:require
   [re-frame.core :as rf :refer [reg-event-db reg-event-fx]]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   [kol.fn.esexpr :refer [get-block-by-id]]))

(reg-event-db
 :blocks-set-selected
 (fn [db [_ blk]]
   (assoc-in db [:blocks :selected] blk)))

(reg-event-fx
 :reset-selected-block
 (fn [{:keys [db]} [_]]
   {:db (assoc-in db [:blocks :selected] nil)
    :dispatch [:reset-focused-item]}))

(reg-event-db
 :reset-blocks-list
 (fn [db [_]]
   (assoc-in db [:blocks :list] [])))

(reg-event-db
 :append-block-to-blocks-list
 (fn [db [_ item]]
   (update-in db [:blocks :list] (fnil conj []) item)))

(reg-event-db
 :append-sexpr
 (fn [db [_ sexpr]]
   (update-in db [:block :sexpr-list] (fnil conj []) sexpr)))

(reg-event-db
 :set-sexpr-list
 (fn [db [_ sexpr-list]]
   (assoc-in db [:block :sexpr-list] sexpr-list)))

(reg-event-db
 :set-sexpr-input-value
 (fn [db [_ value]]
   (assoc-in db [:block :input] value)))

(reg-event-db
 :reset-sexpr-input-value
 (fn [db _]
   (assoc-in db [:block :input] "")))

(reg-event-db
 :toggle-sexpr-input-string
 (fn [db _]
   (update-in db [:block :input-string?] (fnil not true))))

(reg-event-db
 :append-item-to-block
 (fn [db [_ index row item]]
   (update-in db [:blocks :list index row] (fnil conj []) item)))

(reg-event-db
 :set-focused-item
 (fn [db [_ item-ref]]
   (assoc-in db [:blocks :focused-item :ref] item-ref)))

(reg-event-db
 :reset-focused-item
 (fn [db [_]]
   (assoc-in db [:blocks :focused-item] {})))

(reg-event-db
 :set-focused-item-value
 (fn [db [_ value]]
   (assoc-in db [:blocks :focused-item :value] value)))

