(ns kol.comp.content-editable.core
  (:require
   [reagent.core :as r]))

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

(defn emit-change [component on-change]
  (let [html (-> (.-innerHTML component)
                 ;; Remove non-breaking space
                 (.replace "&nbsp;" ""))]
    (on-change {:html html
                :value (.-innerText component)})))

(defn content-editable
  "Editable div with props `value`, `placeholder`, `class`
  and events `on-change`, `on-blur`, `on-key-down`."
  [props]
  (r/with-let [div-ref (r/atom nil)]
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
        (fn [{:keys [value class placeholder on-change on-focus 
                     on-blur on-key-down]}]
          [:div {:class class
                 :ref #(reset! ref %)
                 :on-input #(emit-change (get-el) on-change)
                 :on-focus on-focus
                 :on-blur on-blur
                 :on-key-down on-key-down
                 :placeholder placeholder
                 :contentEditable true
                 :dangerouslySetInnerHTML {:__html value}}])}))))
