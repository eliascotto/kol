(ns kol.utils.css)

(defn css
  "Return a new map with :class and a vector with arguments."
  [& classes]
  {:class (into [] classes)})
