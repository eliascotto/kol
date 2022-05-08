(ns kol.comp.content-editable.core
  (:require
   [reagent.core :as r]
   [kol.comp.content-editable.utils :as utils]))


(declare emit-change)


(defn content-editable
  "Editable div with props `value`, `placeholder`, `class`
  and events `on-change`, `on-blur`, `on-key-down`.
  The property `attr` is to set custom attribute to the div
  element."
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

        :get-snapshot-before-update
        (fn []
          (utils/get-caret-index (get-el)))

        :component-did-update
        (fn [this prev _ snapshot]
          (let [new-argv (first (rest (r/argv this)))
                old-argv (first (rest prev))]
            ;; Update caret position when :value has changed
            (when (not= (:value new-argv) (:value old-argv))
              (try (if snapshot
                     (utils/set-caret-at-pos (get-el) snapshot)
                     (utils/place-caret (get-el)))
                   (catch js/Error e
                     (println "Falied to set caret"))))))

        :reagent-render
        (fn [{:keys [value set-ref class attrs placeholder disabled
                     on-change on-focus on-blur on-key-down]}]
          [:div (merge
                 {:class class
                  :ref #(if (fn? set-ref) (set-ref %) (reset! ref %))
                  :on-input #(emit-change (get-el) on-change)
                  :on-focus on-focus
                  :on-blur on-blur
                  :on-key-down on-key-down
                  :placeholder placeholder
                  :contentEditable (not disabled)
                  :dangerouslySetInnerHTML {:__html value}}
                 attrs)])}))))


(defn emit-change [component on-change]
  (let [html (-> (.-innerHTML component)
                 ;; Remove non-breaking space
                 (.replace "&nbsp;" ""))]
    (on-change {:html html
                :value (.-innerText component)})))
