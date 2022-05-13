(ns kol.events.workspace
  (:require
   [re-frame.core :as rf :refer [reg-event-db]]))

(reg-event-db
 :set-workspace-type
 (fn [db [_ t]]
   (assoc db :workspace-type t)))
