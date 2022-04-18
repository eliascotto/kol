(ns kol.events.source
  (:require
   [re-frame.core :as rf]
   [kol.server :as server]))

;; Effect used to computer esexpr on the server
(rf/reg-fx
 :compute-esexpr
 (fn [src]
   (->> (fn [reply]
          (rf/dispatch [:source-set-esexpr reply]))
        (server/source->esexpr src))))

(rf/reg-event-db
 :source-set-esexpr
 (fn [db [_ esexpr]]
   (assoc db :source-esexpr esexpr)))

(rf/reg-event-fx
 :source-update
 (fn [{:keys [db]} [_ src]]
   {:db (assoc db :source src)
    :compute-esexpr src}))
