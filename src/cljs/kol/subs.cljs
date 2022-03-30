(ns kol.subs
  (:require
   [re-frame.core :as rf]))

(defn db-get [& keys]
  (fn [db _]
    (get-in db keys)))

(defn def-sub-handler
  ([k]
   (def-sub-handler k k))
  ([k-sub k]
   (rf/reg-sub k-sub (db-get k))))

;; Subscriptions

(rf/reg-sub
 :common/route
 (fn [db _]
   (-> db :common/route)))

(rf/reg-sub
 :common/page-id
 :<- [:common/route]
 (fn [route _]
   (-> route :data :name)))

(rf/reg-sub
 :common/page
 :<- [:common/route]
 (fn [route _]
   (-> route :data :view)))

(rf/reg-sub
 :common/error
 (fn [db _]
   (:common/error db)))

(rf/reg-sub
 :repl
 (fn [db _]
   (-> db :repl)))

;; Collection of maps with the REPL command history.
(rf/reg-sub
 :repl-history
 :<- [:repl]
 (fn [repl _]
   (:history repl)))

;; Store the REPL input while typed in the input el
(rf/reg-sub
 :repl-input
 :<- [:repl]
 (fn [repl _]
   (:input repl)))

;; Store a multiline command as a single string
(rf/reg-sub
 :repl-multiline
 :<- [:repl]
 (fn [repl _]
   (:multiline repl)))

;; Set a command input placeholder in case of EOF error
(rf/reg-sub
 :repl-placeholder
 :<- [:repl]
 (fn [repl _]
   (:placeholder repl)))
