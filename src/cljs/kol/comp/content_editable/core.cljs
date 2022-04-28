(ns kol.comp.content-editable.core
  (:require
   [reagent.core :as r]))

;; Source 
;; https://javascript.plainenglish.io/how-to-find-the-caret-inside-a-contenteditable-element-955a5ad9bf81
(defn caret-index
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

(defn replace-caret
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

(defn emit-change [component last-html set-last props]
  (let [html (-> (.-innerHTML component)
                 ;; Remove non-breaking space
                 (.replace "&nbsp;" ""))]
    ;; Emit change only if html content has changed
    (when (and (:on-change props) (not= last-html html))
      ((:on-change props) {:html html
                           :value (.-innerText component)}))
    (set-last html)))

(defn content-editable
  "Editable div with props `value`, `placeholder`, `class`
  and events `on-change`, `on-blur`, `on-key-down`."
  [props]
  (r/with-let [div-ref (r/atom nil)
               last-html (r/atom nil)
               set-last #(reset! last-html %)]
    (let [ref (if (contains? props :ref) (:ref props) div-ref)
          get-el #(deref ref)]
      (r/create-class
       {:display-name "content-editable-component"

        :component-did-mount
        (fn [_]
          (when (:autofocus props)
            (.focus (get-el))))

        :component-did-update
        (fn [this prev]
          (let [new-argv (first (rest (r/argv this)))
                old-argv (first (rest prev))]
            ;; Update caret position when :value has changed
            (when (not= (:value new-argv) (:value old-argv))
              (replace-caret (get-el)))))

        :reagent-render
        (fn [props]
          [:div {:class (:class props)
                 :ref #(reset! ref %)
                 :on-input #(emit-change (get-el)
                                         @last-html
                                         set-last
                                         props)
                 :on-blur (:on-blur props)
                 :on-key-down (:on-key-down props)
                 :placeholder (:placeholder props)
                 :contentEditable true
                 :dangerouslySetInnerHTML {:__html (:value props)}}])}))))
