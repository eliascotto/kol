(ns kol.events.blocks
  (:require
   [re-frame.core :as rf :refer [reg-event-db reg-event-fx]]
   [day8.re-frame.tracing :refer-macros [fn-traced]]))

(reg-event-db
 :set-selected-block
 (fn [db [_ blk]]
   (assoc-in db [:blocks :selected] blk)))

(reg-event-fx
 :reset-selected-block
 (fn [{:keys [db]} [_]]
   {:db (assoc-in db [:blocks :selected] nil)}))

(reg-event-db
 :reset-blocks-list
 (fn [db [_]]
   (assoc-in db [:blocks :list] [])))

(reg-event-db
 :append-block-to-blocks-list
 (fn [db [_ item]]
   (update-in db [:blocks :list] (fnil conj []) item)))

;; ----------------------
;; Item
;; ----------------------

(reg-event-db
 :save-item
 (fn [db [_ k v]]
   (assoc-in db [:blocks :items k] v)))

(reg-event-db
 :update-item
 (fn [db [_ k v]]
   (update-in db [:blocks :items k] merge v)))

(reg-event-db
 :update-item-value
 (fn [db [_ k v]]
   (update-in db [:blocks :items k] assoc :value v)))

(reg-event-db
 :update-item-ref
 (fn [db [_ k v]]
   (update-in db [:blocks :items k] assoc :ref v)))

(reg-event-db
 :set-item-selected
 (fn [db [_ k]]
   (update-in db [:blocks :items k] assoc :selected true)))

(reg-event-db
 :reset-item-selected
 (fn [db [_ k]]
   (update-in db [:blocks :items k] dissoc :selected)))
