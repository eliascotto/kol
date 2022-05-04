(ns kol.subs
  (:require
   [re-frame.core :as rf :refer [reg-sub]]
   [kol.fn.esexpr :refer [get-block-by-id]]))

(defn db-get [& keys]
  (fn [db _]
    (get-in db keys)))

(defn def-sub
  ([k]
   (def-sub k k))
  ([k-sub k]
   (reg-sub k-sub (db-get k))))

;; Subscriptions

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

;; Source code
(def-sub :source)

(def-sub :source-esexpr)

;;
;; BLOCKS
;;

(reg-sub
 :blocks
 (fn [db _]
   (-> db :blocks)))

(reg-sub
 :selected-block
 :<- [:blocks]
 (fn [blocks _]
   (:selected blocks)))

(reg-sub
 :blocks-list
 :<- [:blocks]
 (fn [blocks _]
   (:list blocks)))

;;
;; BLOCK
;;

;; Signal function
;; see: https://day8.github.io/re-frame/subscriptions/#reg-sub
(reg-sub
 :block
 :<- [:blocks-list]
 (fn [blocks [_ id]]
   (get-block-by-id blocks id)))

(reg-sub
 :sexpr-list
 :<- [:block]
 (fn [block []]
   (:sexpr-list block)))

(reg-sub
 :sexpr-first
 :<- [:block]
 (fn [block _]
   (first (:sexpr-list block))))

(reg-sub
 :sexpr-input-value
 :<- [:block]
 (fn [block _]
   (:input block)))

(reg-sub
 :sexpr-input-string?
 :<- [:block]
 (fn [block _]
   (:input-string? block)))

(reg-sub
 :focused-item
 :<- [:blocks]
 (fn [blocks _]
   (get-in blocks [:focused-item :ref])))

(reg-sub
 :focused-item-value
 :<- [:blocks]
 (fn [blocks _]
   (get-in blocks [:focused-item :value])))

(reg-sub
 :blocks-items
 :<- [:blocks]
 (fn [blocks _]
   (:items blocks)))

(reg-sub
 :item
 :<- [:blocks-items]
 (fn [items [_ k]]
   (get items k)))
