(ns kol.comp.repl.visual
  (:require
   [re-frame.core :as rf]))

(declare)

(defn visual-repl
  "Visual REPL component,"
  []
  (let [sidebar-width @(rf/subscribe [:sidebar-width])]
    [:div {:class ["bg-slate-800" "flex" "flex-row"]
           :style {:width (str sidebar-width "px")}}
     [:div {:class ["h-full" "w-0.5" "bg-slate-500"
                    "hover:bg-slate-400"
                    "cursor-col-resize"]}]
     [:div {:class ["flex" "flex-col" "w-full"]}
      [:div {:class ["flex-1"]}]
      [:div {:class ["bg-slate-700" "h-12"]}]]]))