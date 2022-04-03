(ns kol.comp.molecules.code-wrappers
  (:refer-clojure :exclude [symbol vector])
  (:require
   [kol.macros :refer [for-indexed]]))

(def font-size "text-[13px]")

(defn defaul [x]
  [:span {:class ["mx-1" font-size]}
   x])

(defn symbol [s]
  [:span {:class ["mx-1" font-size]}
   s])

(defn string [s]
  [:span {:class ["mx-1" font-size "text-[#E7DE79]"]}
   (str "\"" s "\"")])

(defn number [s]
  [:span {:class ["mx-1" font-size "text-[#78D1E1]"]}
   s])

(defn item [p i len]
  [:span {:class ["px-1"
                  (cond (= len 1) ;; Single
                        "px-0"
                        (zero? i) ;; First
                        "pl-0"
                        (= i (dec len)) ;; Last
                        "pr-0")
                  "cursor-pointer"]}
   p])

(defn vector [x]
  [:div {:class ["bg-slate-800"
                 "text-[#CCCCCC]"
                 "shadow-md"
                 "rounded-sm"
                 "border"
                 "border-slate-500"
                 "rounded-md"
                 "px-1.5"]}
   (for-indexed [[index item] x]
                ^{:key (str "vector-opt-" item x)}
                [item item index (count x)])])
