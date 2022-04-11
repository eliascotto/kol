(ns kol.comp.organism.block
  (:require
   [re-frame.core :as rf]
   [kol.indents :refer [indents]]))

(defn block-bg
  "Return a string of the background class for the block."
  [lvl]
  (->> ;;(- 800 (* lvl 100))
   (if (even? lvl) 800 700)
   (str "bg-slate-")))

(defn block-color
  "Return a string of the text color class for the block."
  [bg-color]
  "text-slate-200")

(defn inline-args-count
  "Get the number of inline argument based on the
  function f."
  [f]
  (if (not f)
    0
    (get-in indents [(symbol f) :block])))

(defn args-even?
  "Returns true if arguments has to be indented evenly."
  [f]
  (when f
    (get-in indents [(symbol f) :even])))

(defn block-header [opts chld]
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
       [:div
        post])
     (when chld
       [:div {:class ["text-xs" "flex" "flex-row"
                      "items-center" "space-x-1"]}
        chld])]))

(defn on-block-click [blk]
  (rf/dispatch [:blocks-set-selected blk]))

(defn block [opts blk args]
  (let [lvl (or (:level blk) 0)
        bg-color (block-bg lvl)
        func (:func opts)
        inline-count (inline-args-count func)
        inline-args (when inline-count
                      (take inline-count args))
        newline-args (nthrest args inline-count)
        selected @(rf/subscribe [:blocks-selected])
        focused? (= selected blk)]
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
                   "border"
                   (if focused?
                     "border-slate-500"
                     (if (zero? lvl)
                       "border-slate-700"
                       "border-transparent"))]
           :on-click (fn [e]
                       (.preventDefault e)
                       (.stopPropagation e)
                       (on-block-click blk))}
     [:div {:class ["flex" "flex-col"]}
        ;; Header
      [block-header opts inline-args]
        ;; Content
      [:div {:class ["px-2"]}
       (if (args-even? func)
           ;; Args grid for event arguments
         [:div {:class ["grid"]
                :style {:grid-template-columns "min-content 1fr"}}
          (for [a newline-args]
            [:div {:class ["overflow-hidden"]}
             a])]
         newline-args)]]]))
