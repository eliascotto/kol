(ns kol.subs.sidebar
  (:require
   [re-frame.core :as rf :refer [reg-sub]]))

;; ----------------------
;; Sidebar
;; ----------------------

(reg-sub
 :sidebar
 (fn [db _]
   (get-in db [:sidebar :current])))

(reg-sub
 :sidebar-width
 (fn [db _]
   (get-in db [:sidebar :width])))