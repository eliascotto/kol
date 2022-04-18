(ns kol.events.blocks
  (:require
   [re-frame.core :as rf]
   [day8.re-frame.tracing :refer-macros [fn-traced]]))

(rf/reg-event-db
 :blocks-set-selected
 (fn [db [_ blk]]
   (assoc-in db [:blocks :selected] blk)))

(rf/reg-event-db
 :blocks-reset-selected
 (fn [db [_]]
   (assoc-in db [:blocks :selected] nil)))

(rf/reg-event-db
 :blocks-reset-list
 (fn [db [_]]
   (assoc-in db [:blocks :list] [])))

(rf/reg-event-db
 :blocks-append-to-list
 (fn [db [_ item]]
   (update-in db [:blocks :list] conj item)))

