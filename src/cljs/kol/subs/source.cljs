(ns kol.subs.source
  (:require
   [re-frame.core :as rf :refer [reg-sub]]))

(reg-sub
 :source
 (fn [db _]
   (-> db :source)))

(reg-sub
 :source-esexpr
 (fn [db _]
   (-> db :source-esexpr)))