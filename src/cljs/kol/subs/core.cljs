(ns kol.subs.core
  (:require
   [re-frame.core :as rf :refer [reg-sub]]
   [kol.subs.repl]
   [kol.subs.sidebar]
   [kol.subs.blocks]
   [kol.subs.source]
   [kol.subs.workspace]))

(reg-sub
 :common/route
 (fn [db _]
   (-> db :common/route)))

(reg-sub
 :route/page-id
 :<- [:common/route]
 (fn [route _]
   (-> route :data :name)))

(reg-sub
 :common/page
 :<- [:common/route]
 (fn [route _]
   (-> route :data :view)))

(reg-sub
 :common/error
 (fn [db _]
   (:common/error db)))

