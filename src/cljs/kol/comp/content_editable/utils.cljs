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

;; function getCaretPosition(editableDiv) {
;;   var caretPos = 0,
;;     sel, range;
;;   if (window.getSelection) {
;;     sel = window.getSelection();
;;     if (sel.rangeCount) {
;;       range = sel.getRangeAt(0);
;;       if (range.commonAncestorContainer.parentNode == editableDiv) {
;;         caretPos = range.endOffset;
;;       }
;;     }
;;   } else if (document.selection && document.selection.createRange) {
;;     range = document.selection.createRange();
;;     if (range.parentElement() == editableDiv) {
;;       var tempEl = document.createElement("span");
;;       editableDiv.insertBefore(tempEl, editableDiv.firstChild);
;;       var tempRange = range.duplicate();
;;       tempRange.moveToElementText(tempEl);
;;       tempRange.setEndPoint("EndToEnd", range);
;;       caretPos = tempRange.text.length;
;;     }
;;   }
;;   return caretPos;
;; }

(defn get-caret-position
  [el]
  (if-let [sel (.getSelection js/window)]
    (if (.-rangeCount sel)
      (let [range (.getRangeAt sel 0)]
        (if (= (.. range -commonAncestorContainer -parentNode) el)
          (.-endOffset range)
          0))
      0)
    0))

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


(defn set-caret
  "Set the input caret position of the element `el`.
  Set `start?` to set the caret at the start (default at the end)."
  ([el]
   (set-caret el false))
  ([el start?]
   (let [range (.createRange js/document)]
     (.selectNodeContents range el)
     (.collapse range start?)
     (let [sel (.getSelection js/window)]
       (.removeAllRanges sel)
       (.addRange sel range)))))


(defn place-caret
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
