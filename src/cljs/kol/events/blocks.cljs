(ns kol.events.blocks
  (:require
   [re-frame.core :as rf]))

(rf/reg-event-db
 :blocks-set-selected
 (fn [db [_ blk]]
   (rf/dispatch [:blocks-set-input-value (:sexpr blk)])
   (assoc-in db [:blocks :selected] blk)))

(rf/reg-event-db
 :blocks-reset-selected
 (fn [db [_]]
   (assoc-in db [:blocks :selected] nil)))

(rf/reg-event-db
 :blocks-set-input-value
 (fn [db [_ value]]
   (assoc-in db [:blocks :input-value] value)))
