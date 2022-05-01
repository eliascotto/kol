(ns kol.fn.esexpr
  (:require
   [re-frame.core :as rf]
   [kol.server :as server]
   [kol.utils :refer [index-of]]))


(defn fetch
  "Fetch the src from the server and set it into the app-db."
  ([]
   (fetch @(rf/subscribe [:source])))
  ([src]
   (->> (fn [reply]
          (rf/dispatch [:source-set-esexpr reply]))
        (server/source->esexpr src))))


(defn add-new-block
  "Creates a new block a the end of the source."
  []
  (->> (fn [reply]
         (rf/dispatch [:source-update reply]))
       (server/add-block @(rf/subscribe [:source]))))


(defn block-id
  "Returns a vector with position and tag to get
  an univoque id for the block from the expr."
  [expr]
  [(:position expr) (:tag expr)])


(defn get-block-by-id 
  "Returns a block from blocks vector by its id."
  [blocks id]
  (-> #(= (:id %) id)
      (filter blocks)
      (first)))


(defn get-block-index-by-id
  "Returns the index of the block by id,
  in the blocks list saved into app db."
  [id]
  (let [bls @(rf/subscribe [:blocks-list])]
    (first (index-of #(= (:id %) id) bls))))
