(ns kol.comp.block.input
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [clojure.string :as string]
   [kol.utils.core :as utils]
   [kol.macros :refer [map-keys]]
   [kol.comp.content-editable.core :refer [content-editable]]
   [kol.comp.block.code-wrappers :as wrapper]
   [kol.comp.block.common :refer [block-pre block-fun]]))

(defn on-block-input-change
  [e block-type {:keys [update-value update-type]}]
  (let [input-val (utils/get-val e)
        val (string/triml input-val)]
    (if (and (not-empty val) (= \space (last val)))
      ;; If last char is space, analyze what has been typed
      (do
        (case val
          "function " (update-type :function))
        (update-value ""))
      (update-value input-val))))

(defn on-block-input-keydown
  [e focus input-value {:keys [update-focus update-value update-type]}]
  (let [keycode (.-code e)]
    (case keycode
      "Tab" (update-focus (if (= focus :name) :args :body))
      "Backspace" (if (and (empty? input-value) (= focus :name))
                    (do (update-value "function")
                        (update-type nil)))
      nil)))

(defn block-input-el [props]
  [:input (merge {:class ["bg-transparent" "outline-none"
                          "text-[13px]" "font-mono" "w-auto"]}
                 props)])

(defn block-editable-el [props]
  [content-editable
   (merge {:class ["bg-transparent" "outline-none"
                   "text-[13px]" "font-mono" "w-auto" "min-w-16"]}
          props)])

(defn block-input-function [actions]
  (r/with-let [fn-name (r/atom "")
               fn-args (r/atom nil)
               focus   (r/atom :name)
               update-focus   #(reset! focus %)
               update-fn-name #(reset! fn-name %)
               update-fn-args #(reset! fn-args %)
               ext-action (merge actions (map-keys update-focus))]
    [:div {:class ["px-1" "py-0.5"
                   "flex" "flex-row" "items-start" "justify-start"]}
     [block-pre "function"]
     (if (= @focus :name)
       [block-editable-el
        {:value @fn-name
         :on-change
         (fn [e]
           (when (not= (last (:value e)) \space)
             (update-fn-name (:value e))))
         :on-key-down
         #(on-block-input-keydown %
                                  @focus
                                  @fn-name
                                  ext-action)}]
       [block-fun @fn-name true])
     (if (= @focus :args)
       [wrapper/arguments-container
        [block-editable-el
         {:value @fn-args
          :on-change
          (fn [e] (update-fn-args (:value e)))
          :on-key-down
          #(on-block-input-keydown %
                                   @focus
                                   @fn-args
                                   ext-action)}]]
       [wrapper/arguments @fn-args])]))

(defn block-input []
  (r/with-let [block-type (r/atom nil)
               input-value (r/atom "")
               update-type #(reset! block-type %)
               update-value #(reset! input-value %)
               actions (map-keys update-type update-value)]
    (case @block-type
      :function
      [block-input-function actions]
      ;; default
      [:div {:class ["px-1" "py-0.5"
                     "flex" "flex-row" "items-start" "justify-start"]}
       [block-input-el
        {:value @input-value
         :on-change #(on-block-input-change % @block-type actions)
         :on-key-down
         #(println %)}]])))
