(ns kol.comp.repl.visual
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [kol.comp.content-editable.core :refer [content-editable]]
   [kol.env :refer [debug]]
   [kol.server :as server]
   [kol.utils.core :as utils]
   [kol.macros :refer [for-indexed]]
   [kol.comp.repl.utils :as repl-utils]
   ["date-fns/format" :default format]))

(declare repl-input-el
         repl-history-output
         repl-history-el
         eval-expr
         on-input
         on-input-keydown)

(defn visual-repl
  "Visual REPL component."
  []
  ;; Initially try to create a new session
  (r/with-let [_ (repl-utils/open-vrepl-session)]
    (let [sidebar-width @(rf/subscribe [:sidebar-width])]
      [:div {:class ["bg-slate-800" "flex" "flex-row"]
             :style {:width (str sidebar-width "px")}}
       [:div {:class ["h-full" "w-0.5" "bg-slate-500"
                      "hover:bg-slate-400"
                      "cursor-col-resize"]}]
       [repl-history-output]])))


(defn repl-history-output
  []
  (let [vrepl-history-values @(rf/subscribe [:vrepl-history-values])]
    [:div {:class ["flex" "flex-col" "w-full" "h-full"
                   "px-2" "pt-1" "pb-2" "overflow-auto"]
           :ref #(rf/dispatch [:set-vrepl-input-ref %])}
     (for-indexed [[idx item] vrepl-history-values]
                  ^{:key (str "repl-history-item-" idx)}
                  [repl-history-el item])]))


(defn repl-history-el
  [{:keys [value err timestamp]}]
  (let [error? (not (nil? err))]
    [:div {:class ["text-[13px]" "font-mono"]}
     [:div {:class ["text-[11px]" "text-slate-600" "text-right"]}
      (format timestamp "yyyy-MM-dd HH:mm:ss.SSS")]
     [:div {:class ["text-slate-300" (when error? "text-red-400")]}
      (or value err)]]))


(defn eval-expr
  "Evaluate expr."
  [expr]
  (let [session (repl-utils/vrepl-session)]
    (->> (fn [reply]
           (debug "REPL eval\n" reply)
           (repl-utils/vrepl-append-history reply))
         (server/eval-expr {:expr expr
                            :session session}))))


(defn repl-input-el []
  (let [value @(rf/subscribe [:vrepl-input])]
    [:div {:class ["flex" "flex-row" "px-2" "py-1" "bg-slate-700"]}
     [:div {:class ["text-slate-400" "text-[13px]" "font-mono"
                    "pr-2"]}
      "Eval:"]
     [:textarea {:class ["w-full" "text-[13px]"
                         "font-mono" "bg-transparent"
                         "shadow-md"
                         "text-white" "outline-none"
                         "h-5" "max-h-40"
                         "resize-none" "overflow-auto"]
                 :on-key-down on-input-keydown
                 :value value
                 :on-input on-input}]]))


(defn on-input [e]
  (let [el (.-target e)]
    ;; Resize height of input textarea
    (set! (.. el -style -height) (str (.-scrollHeight el) "px"))
    (rf/dispatch [:set-vrepl-input (utils/get-val e)])))


(defn on-input-keydown
  "Manage the keydown events for the vREPL input.
  See comment for each case."
  [e]
  (let [keycode (.-code e)
        value (-> e .-target .-value)]
    (case keycode
      ;; On enter, evaluate the expr if shift key is pressed
      "Enter" (when-not (.-shiftKey e)
                (utils/stop-propagation e)
                (eval-expr value)
                (rf/dispatch [:reset-vrepl-input]))
      ;; default
      nil)))
