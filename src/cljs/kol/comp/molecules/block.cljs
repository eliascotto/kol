(ns kol.comp.molecules.block
  (:require
   [kol.icons :refer [settings-icon]]
   [kol.indents :refer [indents]]))

(defn block-bg [lvl]
  (->> ;;(- 800 (* lvl 100))
   (if (even? lvl) 800 700)
   (str "bg-slate-")))

(defn block-color [bg-color]
  "text-slate-200")

(defn inline-args-count [f]
  (get-in indents [(symbol f) :block]))

(defn args-even? [f]
  (get-in indents [(symbol f) :even]))

(defn block-header [opts]
  (let [func (:func opts)
        pre (:pre opts)
        post (:post opts)]
    [:div {:class ["px-2" "py-1.5"
                   "flex-row"
                   "items-center"
                   "justify-start"
                   "flex"]}
     (when pre
       [:div {:class ["text-xs"
                      "font-normal"
                      "pr-2"
                      ;; "text-[#BBB]"
                      "text-[#FF79C6]"]}
        pre])
     (when func
       [:div {:class ["font-medium"
                      "pr-2"
                      (when (not pre)
                        "text-[#67E480]")]
              :style
              {:font-feature-settings "\"liga\" 0, \"calt\" 0"
               :forced-color-adjust "none"
               :text-size-adjust "100%"}}
        func])
     (when post
       [:div {:class ["text-xs"]}
        post])
  ;;  [:span {:class ["cursor-pointer"
  ;;                  "text-neutral-300"
  ;;                  "text-xs"]}
  ;;   [settings-icon]]
     ]))

(defn block [opts args]
  (let [lvl (or (:level opts) 0)
        bg-color (block-bg lvl)
        func (:func opts)
        pcount (inline-args-count func)
        inline-args (when pcount (take pcount args))
        args (nthrest args pcount)]
    [:<>
     [:div {:class [bg-color
                    "w-fit"
                    "min-w-[200px]"
                    "shadow-md"
                    "rounded-md"
                    "px-1.5"
                    (when args "py-1")
                    "my-1"
                    "font-mono"
                    "font-normal"
                    "text-[13px]"
                    (block-color bg-color)
                    (when (zero? lvl) "border 
                                       border-slate-500
                                       border")]}
     ;; Header
      [block-header
       (if (and (not (:post opts)) pcount)
         (assoc opts :post inline-args)
         opts)]
     ;; Content
      [:div {:class ["px-2"]}
       (if (args-even? func)
        ;; Args grid for event arguments
         [:div {:class ["grid"]
                :style {:grid-template-columns "min-content 1fr"}}
          (for [a args]
            [:div {:class ["overflow-hidden"]}
             a])]
         args)]]]))
