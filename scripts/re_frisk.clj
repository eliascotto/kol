(ns re-frisk
  (:require [re-frisk-remote.core :as re-frisk-remote]))

;; To run it
;; $ clj -M:dev scripts/re_frisk.clj

(re-frisk-remote/start)
