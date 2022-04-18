(ns kol.comp.block.core
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [clojure.string :as string]
   [kol.indents :refer [indents]]
   [kol.utils.core :as utils]
   [kol.utils.sexpr :as sexpr]
   [kol.macros :refer [for-indexed map-keys]]
   [kol.comp.block.code-wrappers :as wrapper]
   [kol.comp.block.common :refer [block-pre block-fun]]
   [kol.comp.block.input :refer [block-input]]))

(defn block-bg-color
  "Return a string of the background class for the block."
  [lvl]
  (str "bg-slate-" (if (even? lvl) 800 700)))

(defn inline-args-count
  "Get the number of inline argument based on the
  function f."
  [f]
  (if f (get-in indents [(symbol f) :block]) 0))

(defn args-even?
  "Returns true if arguments has to be indented evenly."
  [f]
  (when f
    (get-in indents [(symbol f) :even])))

(defn on-block-click [e esexpr]
  (utils/stop-propagation e)
  (let [clicks (.-details e)]
    (if (> clicks 1)
      ()
      (rf/dispatch [:blocks-set-selected esexpr]))))

(defn calc-inline-args [func args fn-call?]
  (let [inline-count (inline-args-count func)
        inline-args (if inline-count
                      ;; Default inline arguments as defined inside 'kol.indents
                      (take inline-count args)
                      ;; If not defined, inline arguments until not a list
                      ;; (take-while (complement list?) args)
                      (when (and fn-call? (sexpr/every-not-fn? args))
                        args))]
    ;; Arguments on new line
    [inline-args (nthrest args (count inline-args))]))

(defn extract-args
  "Extract function arguments based on the function type."
  [args fun fun-call?]
  (if fun-call?
    (rest args)
    (case fun
      defn (nthrest args 3)
      fn   (nthrest args 2)
      def  (nthrest args 1))))

(defn table-args [args]
  [:div {:class ["grid"]
         :style {:grid-template-columns "min-content 1fr"}}
   (for-indexed [[idx a] args]
                [:div {:class ["overflow-hidden" "px-1" (when (even? idx) "pl-0")]}
                 a])])

(defn block-header [{:keys [fun pre post child]}]
  [:div {:class ["px-1" "py-0.5"
                 "flex" "flex-row"
                 "items-start" "justify-start"]}
   (when pre [block-pre pre])
   (when fun [block-fun fun pre])
   (when post
     [:div {:class [(when fun "pl-2")]}
      post])
   (when child
     [:div {:class ["text-xs" "flex" "flex-row" "items-center"
                    "space-x-1" "px-1" "leading-[19.5px]"]}
      child])])

(defn block-el
  [{:keys [esexpr fun lvl fun-call? args parsed-args header]}]
  (let [bg-color (block-bg-color lvl)
        selected? (= @(rf/subscribe [:blocks-selected]) esexpr)
        [inline-args newline-args] parsed-args
        indent-args? (and fun-call?
                          (empty? inline-args)
                          (not-empty newline-args))]
    [:div {:class [bg-color "text-slate-200"
                   "w-fit" "min-w-[90px]"
                   "shadow-md" "rounded-md"
                   "px-1" (when args "py-1") "my-1"
                   "font-mono" "font-normal" "text-[13px]"
                   "border"
                   (str "border-slate-" (if selected?
                                          400
                                          (if (zero? lvl) 700 800)))]
           :on-click #(on-block-click % esexpr)}
     (if (empty? (:sexpr esexpr))
       [block-input]
       [:div {:class ["flex" (if indent-args? "flex-row" "flex-col")]}
        ;; Header
        header
        ;; Content
        [:div {:class ["px-1" "flex" "flex-col" "items-start"]}
         (if (args-even? fun)
           ;; Args grid for event arguments
           [table-args newline-args]
           newline-args)]])]))

(defn block [esexpr args]
  (let [lvl (dec (count (:location esexpr)))
        fun (first (:sexpr esexpr))
        ;; def/defn/fn or function call
        fun-call? (every? #(not= % fun) ['def 'defn 'fn])
        args (extract-args args fun fun-call?)
        parsed-args (calc-inline-args fun args fun-call?)
        [inline-args _] parsed-args]
    [block-el
     (merge (map-keys esexpr fun lvl fun-call? args parsed-args)
            {:header
             [block-header
              (if fun-call?
                {:fun fun
                 :child inline-args}
                (let [sexpr (:sexpr esexpr)
                      fn-args (nth sexpr 2)]
                  {:pre (if (= fun 'defn) "function" "fn")
                   :fun (second sexpr)
                   :post [wrapper/arguments fn-args]}))]})]))
