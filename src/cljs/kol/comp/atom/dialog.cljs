(ns cljs.kol.comp.atom.dialog
  (:require
   [re-frame.core :as rf]
   [kol.utils.react :refer [with-keys]]
   ["@headlessui/react" :refer [Dialog Transition]]
   ["react" :refer [Fragment]]))

(defn dialog 
  "Dialog components. Receive :open into `props` and
  a coll of `children`."
  [props & children]
  [:> Transition
   {:appear true
    :show (:open props)
    :as Fragment}
   [:> Dialog
    {:as "div"
     :class ["fixed"
             "inset-0"
             "z-10"
             "overflow-y-auto"
             "bg-gray-700/50"]
     :onClose #(rf/dispatch [:close-blocks-palette])}
    [:div
     {:class ["min-h-screen"
              "px-4"
              "text-center"]}
     [:> (.-Child Transition)
      {:as Fragment
       :enter "ease-out duration-100"
       :enterFrom "opacity-0"
       :enterTo "opacity-100"
       :leave "ease-in duration-100"
       :leaveFrom "opacity-100"
       :leaveTo "opacity-0"}
      [:> (.-Overlay Dialog)
       {:class ["fixed" "inset-0"]}]]
     [:span {:class ["inline-block"
                     "h-56"
                     "align-middle"]
             :aria-hidden "true"}]
     [:> (.-Child Transition)
      {:as Fragment
       :enter "ease-out duration-100"
       :enterFrom "opacity-0 scale-95"
       :enterTo "opacity-100 scale-100"
       :leave "ease-in duration-100"
       :leaveFrom "opacity-100 scale-100"
       :leaveTo "opacity-0 scale-95"}
      [:div
       {:class ["inline-block"
                "w-full"
                "max-w-lg"
                "p-1"
                "border"
                "my-8"
                "overflow-hidden"
                "text-left"
                "align-middle"
                "transition-all"
                "transform"
                "bg-white"
                "shadow"
                "rounded"]}
       (with-keys children)]]]]])
