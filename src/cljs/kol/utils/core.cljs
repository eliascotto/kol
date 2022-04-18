(ns kol.utils.core)

(defn now
  "Return actual datetime."
  []
  (.now js/Date))

(defn get-val
  "Get the value from event target."
  [evt]
  (-> evt .-target .-value))

(defn stop-propagation
  "Stop event propagation."
  [evt]
  (.preventDefault evt)
  (.stopPropagation evt))

(defn in?
  "Returns true if `coll` contains `el`."
  [coll el]
  (some #(= el %) coll))

(def mac-os?
  "Return true if platform is MacOS."
  (and (exists? js/navigator)
       (.test #"Mac" (.-platform js/navigator))))
