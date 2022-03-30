(ns kol.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[kol started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[kol has shut down successfully]=-"))
   :middleware identity})
