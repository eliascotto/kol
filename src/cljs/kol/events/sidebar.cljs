(ns kol.events.sidebar
  (:require
   [re-frame.core :as rf :refer [reg-event-db]]
   [day8.re-frame.tracing :refer-macros [fn-traced]]))

(reg-event-db
 :set-sidebar
 (fn [db [_ bar]]
   (assoc-in db [:sidebar :current] bar)))

(reg-event-db
 :reset-sidebar
 (fn [db [_ bar]]
   (assoc-in db [:sidebar :current] nil)))

(reg-event-db
 :set-sidebar-width
 (fn [db [_ width]]
   (assoc-in db [:sidebar :width] width)))