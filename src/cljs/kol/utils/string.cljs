(ns kol.utils.string
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


(defn kebab-case
  "Return the string formatted in kebab-case.
   
  Kebab-case has every word separated with an hypen `-`."
  [s]
  (when (string? s)
    (string/replace s #"\s+" "-")))