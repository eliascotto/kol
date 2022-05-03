(ns kol.comp.content-editable.utils
  (:require
   [kol.macros :refer [when-let*]]))

;; Source 
;; https://javascript.plainenglish.io/how-to-find-the-caret-inside-a-contenteditable-element-955a5ad9bf81
(defn get-caret-index
  "Returns the index of the caret inside the 
  element `el`."
  [el]
  (let [sel (.getSelection js/window)]
    (if-not (zero? (.-rangeCount sel))
      (let [range (.getRangeAt (.getSelection js/window) 0)
            preCaretRange (.cloneRange range)]
        (.selectNodeContents preCaretRange el)
        (.setEnd preCaretRange (.-endContainer range) (.-endOffset range))
        (count (str preCaretRange)))
      0)))


;; Source
;; https://stackoverflow.com/questions/4576694/saving-and-restoring-caret-position-for-contenteditable-div
(defn set-caret-at-pos
  "Set the caret of the element at the
  position `pos`."
  [el pos]
  (when (= (.-activeElement js/document) el)
    (when-let* [sel (.getSelection js/window)
                node (aget (.-childNodes el) 0)]
      (let [range (.createRange js/document)]
        (.setStart range node pos)
        (.removeAllRanges sel)
        (.addRange sel range)))))


(defn set-caret-at-end
  "Place the caret at the end of the element."
  [el]
  (let [target (.createTextNode js/document "")]
    (.appendChild el target)
    (if (and target
             (.-nodeValue target)
             (= (.-activeElement js/document) el))
      (when-let [sel (.getSelection js/window)]
        (let [range (.createRange js/document)]
          (.setStart range target (count (.-nodeValue target)))
          (.collapse range true)
          (.removeAllRanges sel)
          (.addRange sel range)))
      (when (instance? js/HTMLElement el)
        (.focus el)))))
