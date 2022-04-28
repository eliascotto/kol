(ns kol.fn.esexpr
  (:require
   [re-frame.core :as rf]
   [kol.server :as server]))

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
