(ns ^:dev/once kol.app
  (:require
    [kol.core :as core]
    [cljs.spec.alpha :as s]
    [expound.alpha :as expound]))

(extend-protocol IPrintWithWriter
  js/Symbol
  (-pr-writer [sym writer _]
    (-write writer (str "\"" (.toString sym) "\""))))

(set! s/*explain-out* expound/printer)

(enable-console-print!)

(core/init!)
