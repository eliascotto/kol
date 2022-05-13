(ns kol.subs.workspace
  (:require
   [re-frame.core :as rf :refer [reg-sub]]))

(reg-sub
 :workspace-type
 (fn [db _]
   (get db :workspace-type)))
