(ns kol.events.blocks
  (:require
   [re-frame.core :as rf :refer [reg-event-db]]
   [day8.re-frame.tracing :refer-macros [fn-traced]]))

(reg-event-db
 :blocks-set-selected
 (fn [db [_ blk]]
   (assoc-in db [:blocks :selected] blk)))

(reg-event-db
 :blocks-reset-selected
 (fn [db [_]]
   (assoc-in db [:blocks :selected] nil)))

(reg-event-db
 :reset-blocks-list
 (fn [db [_]]
   (assoc-in db [:blocks :list] [])))

(reg-event-db
 :append-block-to-list
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
