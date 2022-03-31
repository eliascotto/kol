(ns kol.themes.dark
  (:require
   [kol.utils.theme :refer [create-theme create-highlight t]]))

(def colors
  {:cyan "#78D1E1"
   :green "#67E480"
   :orange "#E89E64"
   :pink "#FF79C6"
   :purple "#988BC7"
   :red "#E96379"
   :yellow "#E7DE79"})

(def element-colors
  {:bg "#191622"
   :fg "#E1E1E6"
   :selection "#41414D"
   :comment "#483C67"
   :currentLine "#44475a"
   :bgLighter "#252131"
   :bgLight "#201B2D"
   :bgDark "#13111B"
   :bgDarker "#15121E"})

(defn color [k]
  (or (get colors k)
      (get element-colors k)))

;; Your Clojure file
(defn fizz-buzz [n]
  (condp (fn [a b] (zero? (mod b a))) n
    15 "fizzbuzz"
    3  "fizz"
    5  "buzz"
    n))

(def theme
  (create-theme
   {"&" {:color (color :fg)
         :background-color "transparent"
         :font-size "12px"}
    ".cm-content" {:caret-color (color :fg)}
    ".cm-cursor, .cm-dropCursor" {:border-left-color (color :fg)}

    "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection" {:background-color (color :selection)}

    ".cm-panels" {:background-color (color :bgDarker)
                  :color (color :fg)}
    ".cm-panels.cm-panels-top" {:border-bottom "2px solid black"}
    ".cm-panels.cm-panels-bottom" {:border-top "2px solid black"}
    
    ".cm-gutters" {:background-color "transparent"
                   :color (color :fg)
                   :border "none"}}))

(def highlight
  (create-highlight
   [{:tag (.-keyword t), :color (color :pink)}
    {:tag
     [(.-name t) (.-deleted t) (.-character t) (.-propertyName t)
      (.-macroName t)],
     :color (color :yellow)}
    {:tag  [(.function t (.-variableName t)) (.-labelName t)],
     :color (color :green)}
    {:tag
     [(.-color t) (.constant t (.-name t)) (.standard t (.-name t))],
     :color (color :yellow)}
    {:tag  [(.definition t (.-name t)) (.-separator t)], :color (color :fg)}
    {:tag
     [(.-typeName t) (.-className t) (.-number t) (.-changed t)
      (.-annotation t) (.-modifier t) (.-self t) (.-namespace t)],
     :color (color :cyan)}
    {:tag
     [(.-operator t) (.-operatorKeyword t) (.-url t) (.-escape t)
      (.-regexp t) (.-link t) (.special t (.-string t))],
     :color (color :yellow)} 
    {:tag  [(.-meta t) (.-comment t)], :color (color :comment)}
    {:tag (.-strong t), :fontWeight "bold"}
    {:tag (.-emphasis t), :fontStyle "italic"}
    {:tag (.-strikethrough t), :textDecoration "line-through"}
    {:tag (.-link t), :textDecoration "underline"}
    {:tag (.-heading t), :fontWeight "bold"}
    {:tag  [(.-atom t) (.-bool t) (.special t (.-variableName t))],
     :color (color :red)}
    {:tag  [(.-processingInstruction t) (.-string t) (.-inserted t)],
     :color (color :yellow)} 
    {:tag (.-invalid t), :color (color :red)}]))

