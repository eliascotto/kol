(ns kol.comp.block.core
  (:require
   [re-frame.core :as rf]
   [kol.indents :refer [indents]]
   [kol.utils.sexpr :as sexpr]))

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
    [:div {:class ["px-1" "py-0.5"
                   "flex-row"
                   "items-start"
                   "justify-start"
                   "flex"]}
     (when pre
       [:div {:class ["text-sm"
                      "font-normal"
                      "pr-2"
                      ;; "text-[#BBB]"
                      "text-[#FF79C6]"]}
        pre])
     (when func
       [:div {:class ["font-medium"
                      
                      (when (not pre)
                        "text-[#67E480]")]
              :style
              {:font-feature-settings "\"liga\" 0, \"calt\" 0"
               :forced-color-adjust "none"
               :text-size-adjust "100%"}}
        func])
     (when post
       [:div {:class [(when func "pl-2")]}
        post])
     (when chld
       [:div {:class ["text-xs" "flex" "flex-row"
                      "items-center" "space-x-1"
                      "px-1"]}
        chld])]))

(defn on-block-click [e blk]
  (.preventDefault e)
  (.stopPropagation e)
  (let [clicks (.-details e)]
    (if (> clicks 1)
      ()
      (rf/dispatch [:blocks-set-selected blk]))))

(defn calc-inline-args [func args fn-call?]
  (let [inline-count (inline-args-count func)
        inline-args (if inline-count
                      ;; Default inline arguments as defined inside 'kol.indents
                      (take inline-count args)
                      ;; If not defined, inline arguments until not a list
                      ;; (take-while (complement list?) args)
                      (when (and fn-call? (sexpr/every-not-fn? args))
                        args))]
    [inline-args
     ;; Arguments on new line
     (nthrest args (count inline-args))]))

(defn block [opts blk args]
  (let [fn-call? (sexpr/fn-call? (:sexpr blk))
        lvl (or (:level blk) 0)
        bg-color (block-bg lvl)
        func (:func opts)
        selected @(rf/subscribe [:blocks-selected])
        focused? (= selected blk)
        [inline-args newline-args] (calc-inline-args func args fn-call?)
        indent? (and fn-call? (empty? inline-args) (not-empty newline-args))]
    [:div {:class [bg-color
                   "w-fit"
                   "min-w-[90px]"
                   "shadow-md"
                   "rounded-md"
                   "px-1"
                   (when args "py-1")
                   "my-1"
                   "font-mono"
                   "font-normal"
                  ;;  "absolute"
                  ;;  "relative right-[-5px]"
                   "text-[13px]"
                   (block-color bg-color)
                   "border"
                   (if focused?
                     "border-slate-400"
                     (if (zero? lvl)
                       "border-slate-700"
                       "border-transparent"))]
           :on-click #(on-block-click % blk)
           :data-block-id (:index blk)}
     [:div {:class ["flex" (if indent? "flex-row" "flex-col")]}
        ;; Header
      [block-header opts inline-args]
        ;; Content
      [:div {:class ["px-1" "flex" "flex-col" "items-start"]}
       (if (args-even? func)
           ;; Args grid for event arguments
         [:div {:class ["grid"]
                :style {:grid-template-columns "min-content 1fr"}}
          (for [a newline-args]
            [:div {:class ["overflow-hidden"]}
             a])]
         newline-args)]]]))
