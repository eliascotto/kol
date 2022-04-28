(ns kol.events.source
  (:require
   [re-frame.core :as rf]
   [kol.fn.esexpr :as esexpr]))

;; Effect used to computer esexpr on the server
(rf/reg-fx
 :compute-esexpr
 (fn [src]
   (esexpr/fetch src)))

(rf/reg-event-db
 :source-set-esexpr
 (fn [db [_ esexpr]]
   (assoc db :source-esexpr esexpr)))

(rf/reg-event-db
 :source-set
 (fn [db [_ src]]
   (assoc db :source src)))

(rf/reg-event-db
 :source-set-with-esexpr
 (fn [db [_ source esexpr]]
   (-> db
       (assoc :source source)
       (assoc :source-esexpr esexpr))))

(rf/reg-event-fx
 :source-update
 (fn [{:keys [db]} [_ src]]
   {:db (assoc db :source src)
    :compute-esexpr src}))
