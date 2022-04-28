(ns kol.utils.log)

(def error
  (.-error js/console))

(def debug
  (.-log js/console))

(def warn
  (.-warn js/console))
