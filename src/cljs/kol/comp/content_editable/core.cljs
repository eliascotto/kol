(ns kol.comp.content-editable.core
  (:require
   [reagent.core :as r]))

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
      (when (instance? el js/HTMLElement)
        (.focus el)))))

(defn emit-change [component last-html set-last props]
  (let [html (.replace (.-innerHTML component) "&nbsp;" "")]
    (when (and (:on-change props) (not= last-html html))
      ((:on-change props) {:html html
                           :value (.-innerText component)}))
    (set-last html)))

(defn content-editable [props]
  (r/with-let [div-ref (r/atom nil)
               last-html (r/atom nil)
               set-last #(reset! last-html %)]
    (r/create-class
     {:display-name "content-editable-component"
      
      :component-did-update
      (fn [_ _]
        (replace-caret @div-ref))

      :reagent-render
      (fn []
        [:div {:class (:class props)
               :ref #(reset! div-ref %)
               :on-input #(emit-change @div-ref
                                       @last-html
                                       set-last
                                       props)
               :on-blur #(emit-change @div-ref
                                      @last-html
                                      set-last
                                      props)
               :contentEditable true
               :dangerouslySetInnerHTML {:__html (:value props)}}])})))
