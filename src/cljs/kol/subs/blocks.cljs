(ns kol.subs.blocks
  (:require
   [re-frame.core :as rf :refer [reg-sub]]
   [kol.fn.vld.core :refer [get-block-by-id]]
   [kol.utils :refer [filter-kv]]))

;; ----------------------
;; BLOCKS
;; ----------------------

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

;; ----------------------
;; BLOCK
;; ----------------------

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
 :blocks-items
 :<- [:blocks]
 (fn [blocks _]
   (:items blocks)))

(reg-sub
 :items-by-row
 :<- [:blocks-items]
 (fn [items [_ id row]]
   (filter-kv (fn [key _]
                (and (= (:id key) id)
                     (= (:row key) row)))
              items)))

(reg-sub
 :item
 :<- [:blocks-items]
 (fn [items [_ k]]
   (get items k)))

(reg-sub
 :item-value
 :<- [:blocks-items]
 (fn [items [_ k]]
   (get-in items [k :value])))

(reg-sub
 :item-ref
 :<- [:blocks-items]
 (fn [items [_ k]]
   (get-in items [k :ref])))

(reg-sub
 :item-type
 :<- [:blocks-items]
 (fn [items [_ k]]
   (get-in items [k :type])))