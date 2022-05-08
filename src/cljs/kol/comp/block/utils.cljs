(ns kol.comp.block.utils
  (:require
   [re-frame.core :as rf]
   [kol.utils.core :as utils]
   [kol.comp.content-editable.utils :as ce-utils]))


(defn create-item-key
  "Return a reference map for the item."
  [{:keys [row-idx col-idx block-id]}]
  {:id block-id :row row-idx :col col-idx})


(defn next-item-key
  "Return a reference to the next element
  given the item-key of the previous."
  [{:keys [row col id]}]
  (create-item-key {:row-idx row
                    :col-idx (inc col)
                    :block-id id}))


(defn- focus-on-item
  "Focus on the item element with key
  composed of `row`, `col` and `id`.
  Use `start?` to set the caret at the beginning
  of the input."
  ([row col id]
   (focus-on-item row col id false))
  ([row col id start?]
   (let [item-key (create-item-key {:row-idx row
                                    :col-idx col
                                    :block-id id})]
     (when-let [item-ref @(rf/subscribe [:item-ref item-key])]
       (.focus item-ref)
       (ce-utils/set-caret item-ref start?)))))


(defn focus-prev-item-row
  "Focus on the previous item on the same row,
  if an item is present."
  [{:keys [row col id]}]
  (when (pos? col)
    (focus-on-item row (dec col) id)))


(defn focus-next-item-row
  "Focus on the next item on the same row, 
  if an item is present."
  [{:keys [row col id]}]
  (focus-on-item row (inc col) id true))


(defn focus-prev-row
  "Focus on the previous row item on the same column,
  or the last of the row."
  [{:keys [row col id]}]
  (when (pos? row)
    (let [prev-rows-items @(rf/subscribe [:items-by-row id row])
          count-index (dec (count prev-rows-items))
          prev-item-col (if (>= count-index col)
                          col count-index)]
      (focus-on-item (dec row) prev-item-col id))))


(defn focus-next-row
  "Focus on the next row item on the same column,
  or the last of the row."
  [{:keys [row col id]}]
  (let [next-row-items @(rf/subscribe [:items-by-row id (inc row)])]
    (when-not (empty? next-row-items)
      (println (count next-row-items))
      (let [count-index (dec (count next-row-items))
            next-item-col (if (>= count-index col)
                            col count-index)]
        (focus-on-item (inc row) next-item-col id)))))


(defn extract-value-type
  "Extract the expr type from the string value."
  [value]
  (cond
    (utils/numeric? value) :number
    (re-find #"^\".*\"" value) :string
    (re-find #"^:.*" value) :keyword
    (= value "nil") :nil
    :else :symbol))


(defn select-item-content 
  [item-key]
  (when-let [item-ref @(rf/subscribe [:item-ref item-key])]
    (ce-utils/select-content item-ref)))
