(ns kol.fn.strings
  (:require
   [clojure.string :as string]))

(defn pascal-case
  "Return the string formatted in PascalCase.
   
  PascalCase has every word starts with an uppercase
  letter. Hypens (`-`) are removed."
  [s]
  (let [words (-> s
                  (string/replace #"-" " ")
                  (string/split " "))]
    (-> (map string/capitalize words)
        (string/join))))
