(ns kol.events.source
  (:require
   [re-frame.core :as rf]
   [kol.fn.vld.core :as vld]))

;; Effect used to computer esexpr on the server
(rf/reg-fx
 :compute-esexpr
 (fn [src]
   (vld/fetch src)))

(rf/reg-event-db
 :set-source-esexpr
 (fn [db [_ esexpr]]
   (assoc db :source-esexpr esexpr)))

(rf/reg-event-db
 :set-source
 (fn [db [_ src]]
   (assoc db :source src)))

(rf/reg-event-db
 :set-source-with-esexpr
 (fn [db [_ source esexpr]]
   (-> db
       (assoc :source source)
       (assoc :source-esexpr esexpr))))

(rf/reg-event-fx
 :update-source
 (fn [{:keys [db]} [_ src]]
   {:db (assoc db :source src)
    :compute-esexpr src}))
