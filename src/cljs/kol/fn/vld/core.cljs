(ns kol.fn.vld.core
  "Visual Language Document."
  (:require
   [re-frame.core :as rf]
   [kol.server :as server]
   [kol.comp.block.utils :refer [create-item-key]]))


(defn fetch
  "Fetch the src from the server and set it into the app-db."
  ([]
   (fetch @(rf/subscribe [:source])))
  ([src]
   (->> (fn [reply]
          (rf/dispatch [:set-source-esexpr reply]))
        (server/source->esexpr src))))


(defn add-new-block
  "Creates a new block a the end of the source."
  []
  (->> (fn [reply]
         (rf/dispatch [:update-source reply]))
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


(defn update-source
  "Update the source code (and the visual block structure)
  replacing the `esexpr-node` with a new one derived from `expr`."
  [esexpr-node expr]
  (let [source @(rf/subscribe [:source])]
    (server/update-expr
     source      ; source
     esexpr-node ; esexpr-node of the block
     expr        ; new expression
     (fn [{:keys [source esexpr]}]
       (rf/dispatch [:set-source-with-esexpr source esexpr])))))


(defn insert-item-right
  [esexpr-node item-key]
  (let [source @(rf/subscribe [:source])]
    (server/insert-right
     source      ; source
     esexpr-node ; esexpr-node of the block
     nil         ; value of new item
     (fn [{:keys [source esexpr]}]
       (let [new-item-key (create-item-key {:block-id (:id item-key)
                                            :row-idx (:row item-key)
                                            :col-idx (inc (:col item-key))})]
         (rf/dispatch [:set-empty-item new-item-key]))
       (rf/dispatch [:set-source-with-esexpr source esexpr])))))


(defn update-and-insert-expr
  [esexpr-node expr]
  (let [source @(rf/subscribe [:source])]
    (server/update-and-insert-expr
     source      ; source
     esexpr-node ; esexpr-node of the block
     expr
     (fn [{:keys [source esexpr]}]
       (rf/dispatch [:set-source-with-esexpr source esexpr])))))


(defn remove-expr
  [esexpr-node]
  (let [source @(rf/subscribe [:source])]
    (server/remove-expr
     source      ; source
     esexpr-node ; esexpr-node of the block
     (fn [{:keys [source esexpr]}]
       (rf/dispatch [:set-source-with-esexpr source esexpr])))))