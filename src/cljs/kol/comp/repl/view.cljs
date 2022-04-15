(ns kol.comp.repl.view
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [kol.utils.core :refer [get-val]]
   [kol.utils.keybind :refer [with-keybind]]))

(defn- scroll-bottom
  "Scroll DOM element `el` to the bottom."
  [el _]
  (when el
    ;; Push the callback at the bottom of the call stack
    (js/setTimeout
     #(set! (.-scrollTop el) (.-scrollHeight el))
     0)))

(defn prompt-el
  "Render the prompt element, extracting color and text
  from the session."
  []
  [:span {:class ["pr-2" "text-amber-500 dark:text-amber-400"]}
   "user>"])

(defn history-el
  "Render a list of div containing the command history
  of the REPL."
  []
  (let [repl-history @(rf/subscribe [:repl-history])]
    [:<>
     (for [[index {:keys [type value]}] (map-indexed vector repl-history)]
       ^{:key (str "repl-part-" index)}
       [:div {:class ["pl-1" (when (= type :special) "mt-1 mb-2")]}
        ;; Show prompt if item is input
        (condp = type
          :input [prompt-el]
          :input-multi [:span {:class ["pr-1"]} ">"]
          nil)
        [:span {:class ["whitespace-pre-wrap"
                        (when (= type :error) "text-red-400")
                        (when (= type :special) "text-gray-500 italic")]}
         value]])]))

(defn repl-view [{:keys [on-keydown]}]
  (r/with-let [container-el (r/atom nil)
               has-focus (r/atom false)
               repl-history (rf/subscribe [:repl-history])
               ;; Include repl-history to track any change to the atom
               ;; and scroll to the bottom when new items are added
               scroll-watch (r/track! #(scroll-bottom
                                        @container-el
                                        @repl-history))]
    (let [repl-input @(rf/subscribe [:repl-input])
          repl-multiline @(rf/subscribe [:repl-multiline])
          repl-placeholder @(rf/subscribe [:repl-placeholder])]
      [with-keybind {:ctrl-c (fn [e]
                               (rf/dispatch [:repl-reset-all])
                               (.preventDefault e))}
       [:div {:class ["border"
                      "border-gray-300"
                      "dark:border-0"
                      "rounded-md"
                      "font-mono"
                      "text-xs"
                      "text-black"
                      "dark:text-white"
                      "overflow-auto"
                      "h-full"
                      "p-3"]
              :ref #(reset! container-el %)}
        [history-el]
        [:div {:class ["flex" "flex-row" "pl-1"]}
         (if (empty? repl-multiline)
           [prompt-el]
           [:span {:class ["pl-1" "pr-2"]} ">"])
         [:input {:class ["flex-1"
                          "outline-none"
                          "bg-transparent"]
                  :type "text"
                  :autoComplete "off"
                  :autoCorrect "off"
                  :autoCapitalize "off"
                  :spellCheck "false"
                  :placeholder (or repl-placeholder "")
                  :value repl-input
                  :on-focus #(reset! has-focus true)
                  :on-blur #(reset! has-focus false)
                  :on-key-down on-keydown
                  :on-change #(rf/dispatch [:repl-input-set (get-val %)])}]]]])
    (finally (r/dispose! scroll-watch))))
