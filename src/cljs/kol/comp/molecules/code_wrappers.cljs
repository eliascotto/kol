(ns kol.comp.molecules.code-wrappers
  (:refer-clojure :exclude [symbol vector keyword map])
  (:require
   [kol.macros :refer [for-indexed]]))

(def font-size "text-[13px]")

(defn default [x]
  [:span {:class ["mx-0.5" font-size]}
   x])

(defn symbol [s]
  [:span {:class ["mx-0.5" font-size]}
   s])

(defn string [s]
  [:span {:class ["mx-0.5" font-size "text-[#E7DE79]"]}
   (str "\"" s "\"")])

(defn number [s]
  [:span {:class ["mx-0.5" font-size "text-[#78D1E1]"]}
   s])

(defn keyword [s]
  [:span {:class ["mx-0.5" font-size "text-[#78D1E1]"]}
   (str s)])

(defn map [s]
  [:span {:class ["mx-0.5" font-size]}
   "{" s "}"])

(defn vector [x]
  [:span {:class ["transparent"
                  "text-[#CCCCCC]"
                ;;  "shadow-md"
                ;;  "rounded-sm"
                ;;  "border"
                ;;  "border-slate-500"
                  "rounded-md"
                  "px-1"]}

   "["
   (for-indexed [[index item] x]
                ^{:key (str "vector-opt-" item x)}
                (let [len (count x)]
                  [:span {:class ["px-1"
                                  (cond (= len 1) ;; Single
                                        "px-0"
                                        (zero? index) ;; First
                                        "pl-0"
                                        (= index (dec len)) ;; Last
                                        "pr-0")
                                  "cursor-pointer"]}
                   item]))
   "]"])

(defn arguments [x]
  [:span {:class ["transparent"
                  "text-[#CCCCCC]"
                  "shadow-md"
                  "rounded-sm"
                  "border"
                  "border-slate-500"
                  "rounded-md"
                  "px-1"]}
   (for-indexed [[index item] x]
                ^{:key (str "vector-opt-" item x)}
                (let [len (count x)]
                  [:span {:class ["px-1"
                                  (cond (= len 1) ;; Single
                                        "px-0"
                                        (zero? index) ;; First
                                        "pl-0"
                                        (= index (dec len)) ;; Last
                                        "pr-0")
                                  "cursor-pointer"]}
                   item]))])
