(ns kol.env
  (:require
    [selmer.parser :as parser]
    [clojure.tools.logging :as log]
    [kol.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[kol started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[kol has shut down successfully]=-"))
   :middleware wrap-dev})
