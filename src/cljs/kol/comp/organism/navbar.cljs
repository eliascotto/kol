(ns kol.comp.organism.navbar
  (:require
   [re-frame.core :as rf]))

(defn navbar []
  [:div {:class ["w-full"
                 "h-8"
                 "flex"
                 "flex-row"
                 "items-center"
                 "justify-center"
                 "shadow-lg"
                ;;  "border-b"
                ;;  "border-solid"
                ;;  "border-neutral-700"
                 ]
         :style {:WebkitUserSelect "none"
                 :WebkitAppRegion "drag"}}
   [:div {:class ["bg-neutral-700"
                  "flex" "flex-row" "items-center" "justify-center"
                  "text-xs" "text-neutral-400"
                  "w-4" "h-4"]
          :style {:WebkitAppRegion "no-drag"}}
    [:button {:class ["px-2" "py-0.5" "bg-neutral-700"
                      "rounded-l-md"]
              :style {:WebkitAppRegion "no-drag"}
              :on-click #(rf/dispatch [:navigate! :create])}
     "Create"]
    [:button {:class ["px-2" "py-0.5" "bg-neutral-700"]
              :style {:WebkitAppRegion "no-drag"}
              :on-click #(rf/dispatch [:navigate! :source])}
     "Source"]
    [:button {:class ["px-2" "py-0.5" "bg-neutral-700"
                       "rounded-r-md"]
              :style {:WebkitAppRegion "no-drag"}
              :on-click #(rf/dispatch [:navigate! :explore])}
     "Explore"]]])
