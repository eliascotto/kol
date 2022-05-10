(ns kol.subs.repl
  (:require
   [re-frame.core :as rf :refer [reg-sub]]
   [kol.comp.repl.utils :as repl-utils]))

(reg-sub
 :repl
 (fn [db _]
   (-> db :repl)))

;; Collection of maps with the REPL command history.
(reg-sub
 :repl-history
 :<- [:repl]
 (fn [repl _]
   (:history repl)))

;; Store the REPL input while typed in the input el
(reg-sub
 :repl-input
 :<- [:repl]
 (fn [repl _]
   (:input repl)))

;; Store a multiline command as a single string
(reg-sub
 :repl-multiline
 :<- [:repl]
 (fn [repl _]
   (:multiline repl)))

;; Set a command input placeholder in case of EOF error
(reg-sub
 :repl-placeholder
 :<- [:repl]
 (fn [repl _]
   (:placeholder repl)))


;; ----------------------
;; vREPL - Visual REPL
;; ----------------------

(reg-sub
 :vrepl-session
 (fn [db _]
   (get-in db [:vrepl :session])))

(reg-sub
 :vrepl-history
 (fn [db _]
   (get-in db [:vrepl :history])))

(reg-sub
 :vrepl-history-values
 :<- [:vrepl-history]
 (fn [history _]
   (repl-utils/extract-value-from-history history)))

(reg-sub
 :vrepl-input
 (fn [db _]
   (get-in db [:vrepl :input])))

(reg-sub
 :vrepl-input-ref
 (fn [db _]
   (get-in db [:vrepl :input-ref])))