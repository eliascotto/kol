(ns kol.comp.navbar.core
  (:require
   [re-frame.core :as rf]
   [clojure.string :as string]))

(defn page-item [page selected?]
  [:div {:class ["px-2" "py-0.5" "text-gray-400" "font-medium"
                 "cursor-pointer" "z-10" "select-none"
                 (when selected?
                   "border-b border-slate-400")]
         :style {:WebkitAppRegion "no-drag"}
         :on-click (fn []
                     (rf/dispatch [:navigate! page]))}
   (-> page
       name
       string/capitalize)])

(defn navbar []
  (let [page @(rf/subscribe [:route/page-id])]
    [:div {:class ["w-full"
                   "h-8"
                   "flex"
                   "flex-row"
                   "items-center"
                   "justify-center"
                   "shadow-md"
                   "sticky"
                   "top-0"
                   "bg-slate-800"]
           :style {:WebkitAppRegion "drag"}}
     [:div {:class ["flex" "flex-row" "items-center" "justify-center"
                    "text-xs" "text-slate-400"
                    "w-4" "h-4"]
            :style {:WebkitAppRegion "no-drag"}}
      (for [p [:create :source :explore]]
        ^{:key (str "page-header-title-" p)}
        [page-item p (= page p)])]]))
