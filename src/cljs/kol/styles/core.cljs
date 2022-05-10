(ns kol.styles.core)

(def code-text-style
  {:font-size 13 ; px
   :font-family "mono"})

(defn gen-text-style
  [m]
  (cond-> {}
    (contains? m :font-size) (assoc :font-size "13px")))

