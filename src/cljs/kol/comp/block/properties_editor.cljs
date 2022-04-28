(ns kol.comp.block.properties-editor
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [kol.fn.parser :as parser]
   [kol.definitions :as defs]
   [kol.comp.icon.core :refer [icon]]
   [kol.server :as server]
   [clojure.edn :as edn]))

(defn remove-brackets [sexpr]
  (-> sexpr str rest drop-last))

(defn convert-str [sexpr]
  (if (string? sexpr)
    (str "\"" sexpr "\"")
    (str sexpr)))

(def input-style ["bg-slate-700" "outline-none"
                  "border" "border-slate-700"
                  "focus:border-slate-500"
                  "w-full" "px-1" ;"py-0.5"
                  "text-[13px]" "font-mono"])

(defn empty-container []
  [:div {:class ["text-slate-600" "h-full" "flex" "items-center"
                 "justify-center"]}
   "Selection empty"])

(defn type-select [selected]
  [:select {:name "type-select"
            :class ["bg-slate-700" "rounded-md" "w-full" 
                    "outline-none" "text-slate-400" "p-1" "mb-2"]}
   (for [t defs/block-types]
     [:option
      {:selected (= (:type t) selected)
       :value (:type t)
       :label (:label t)}])])

(defn items [coll]
  [:div {:class ["flex" "flex-col" "my-1"
                 "space-y-2"]}
   (for [c coll]
     ^{:key (str "table-item-" (gensym))}
     [:input {:class input-style :value c}])])

(defn form-option
  ([label child]
   (form-option label child {}))
  ([label child opts]
   (r/with-let [open? (r/atom false)]
     [:div {:class ["flex" "flex-col" "justify-center"]}
      [:div {:class ["text-slate-500" "text-sm" "pr-2"]}
       label]
      [:div {:class ["text-slate-300" "my-1.5"]}
       child]
      (when (:extended opts)
        [:div {:class ["w-full" "flex" "flex-col" "items-center"]}
         (when @open?
           (:extended opts))
         [icon {:class ["w-3" "text-slate-600"
                        "m-auto" "cursor-pointer"]
                :on-click #(swap! open? not)}
          (if @open? "chevron-up" "chevron-down")]])])))

(defn go-to-block-btn [sexpr]
  (let [blk @(rf/subscribe [:blocks-selected])
        chld-blk (parser/find-child-block blk sexpr)]
    [:div {:class ["bg-slate-700" "flex" "flex-row" "my-1"
                   "items-center" "justify-between" "text-slate-400"
                   "p-1" "rounded-md" "cursor-pointer"
                   "hover:text-slate-300"
                   "text-[13px]" "font-mono"]
           :on-click #(rf/dispatch [:blocks-set-selected chld-blk])}
     [:span {:class ["truncate" "pl-1"]}
      (remove-brackets sexpr)]
     [:div {:class ["h-5"]}
      [icon {:class ["w-5" "h-auto" "ml-4"]}]
      "chevron-right"]]))

(defn argument-type-icon
  ([s]
   (argument-type-icon s nil))
  ([s on-click]
   [:div {:class ["inline-block" "text-xs" "text-slate-400"
                  "rounded-full" "bg-slate-800" "cursor-pointer"
                  "py-[3px]" "px-[6px]" "w-fit" "whitespace-nowrap"
                  "mr-1" "select-none"]
          :on-click on-click}
    s]))

(defn vector-list [sexpr]
  (r/with-let [open? (r/atom false)]
    [:div {:class [(if @open? "flex-col" "flex-row")
                   "flex" "my-1" "py-1" "text-sm"
                   "group" "px-1" "rounded-md" "bg-slate-700"]}
     (if @open?
       [:div {:class ["flex" "flex-row" "items-center" "justify-between"]}
        [argument-type-icon "[ ]" #(swap! open? not)]
        [:div {:class ["text-slate-500" "text-xs" "pr-1"]} "Edit vector"]]
       [argument-type-icon "[ ]" #(swap! open? not)])
     [:div {:class (into ["truncate"
                          "group-hover:text-slate-300"]
                         (if @open?
                           ["flex" "flex-col" "mt-1" "text-slate-300"
                            "border" "border-slate-500" "rounded-md"]
                           ["text-slate-400"]))}
      (for [s sexpr]
        (if @open?
          [:input {:class (into (filterv
                                 #(and (not= % "border")
                                       (not= % "rounded-md"))
                                 input-style)
                                ["border-b" "border-slate-200"
                                 "last:border-b-0"])
                   :value (convert-str s)}]
          [:span {:class ["px-1.5"]} (convert-str s)]))]]))

(defn map-list [sexpr]
  (r/with-let [open? (r/atom false)]
    [:div {:class [(if @open? "flex-col" "flex-row")
                   "flex" "my-1" "py-1" "text-sm"
                   "group" "px-1" "rounded-md" "bg-slate-500"]}
     (if @open?
       [:div {:class ["flex" "flex-row" "items-center" "justify-between"]}
        [argument-type-icon "{ }" #(swap! open? not)]
        [:div {:class ["text-slate-600" "text-xs" "pr-1"]} "Edit map"]]
       [argument-type-icon "{ }" #(swap! open? not)])
     [:div {:class (into ["truncate"
                          "group-hover:text-slate-300"]
                         (if @open?
                           ["flex" "flex-col" "mt-1" "text-slate-300"
                            "border" "border-slate-200" "rounded-md"]
                           ["text-slate-500"]))}
      (for [[k v] sexpr]
        (if @open?
          [:div {:class ["flex" "flex-row" "border-b" "border-slate-200"
                         "last:border-b-0"]}
           [:input {:class (concat (filterv
                                    #(and (not= % "border")
                                          (not= % "rounded-md"))
                                    input-style)
                                   ["border-r" "border-slate-200"])
                    :value (convert-str k)}]
           [:input {:class (filterv
                            #(and (not= % "border")
                                  (not= % "rounded-md"))
                            input-style)
                    :value (convert-str v)}]]
          [:<>
           [:span {:class ["px-1.5"]} (convert-str k)]
           [:span {:class ["px-1.5"]} (convert-str v)]]))]]))

(defn fn-list [sexpr]
  (r/with-let [open? (r/atom false)]
    [:div {:class [(if @open? "flex-col" "flex-row")
                   "flex" "my-1" "py-1" "text-sm"
                   "group" "px-1" "rounded-md" "bg-slate-500"]}
     (if @open?
       [:div {:class ["flex" "flex-row" "items-center" "justify-between"]}
        [argument-type-icon "{ }" #(swap! open? not)]
        [:div {:class ["text-slate-600" "text-xs" "pr-1"]} "Edit function"]]
       [argument-type-icon "{ }" #(swap! open? not)])]))

(defn arg-view [sexpr]
  (cond
    (list? sexpr)
    [go-to-block-btn sexpr]
    (vector? sexpr)
    [vector-list sexpr]
    (map? sexpr)
    [map-list sexpr]
    (fn? sexpr)
    [fn-list sexpr]
    :else
    [:input {:class (distinct (into input-style ["my-1"]))
             :value (if (string? sexpr)
                      (str "\"" sexpr "\"")
                      sexpr)}]))

(defn defn-form [props]
  [:div {:class ["flex" "flex-col" "space-y-2" "py-1"]}
   [form-option "name"
    [:input {:class input-style
             :value (:name props)}]]
   [form-option "params"
    [:input {:class input-style
             :value (:params props)}]]
   [form-option "body"
    (let [body (:body props)]
      (map arg-view body))]])

(defn fn-doc-extension [doc]
  (when doc
    (let [args (edn/read-string (:arglist doc))]
      [:div {:class ["text-xs" "text-slate-400"]}
       "Arguments"
       (for [arg args]
         [:div {:class ["p-2" "rounded-md" "my-1"
                        "border" "border-slate-600"]}
          (str arg)])
       [:div {:class ["py-1"]}]
       "Documentation"
       [:div {:class ["max-h-56" "overflow-y-auto" "p-2" "mt-1"
                      "border" "border-slate-600"
                      "rounded-md"]}
        (:doc doc)]])))

(defn list-form [props]
  (r/with-let [fn-doc (r/atom nil)
               current-fn (r/atom nil)]
    (let [f (:function props)
          _ (when (not= f @current-fn)
              (reset! current-fn f)
              (server/doc f (fn [d] (reset! fn-doc d))))]
      [:div {:class ["flex" "flex-col" "space-y-2" "py-1"]}
       [form-option "function"
        [:input {:class input-style
                 :value f}]
        {:extended [fn-doc-extension @fn-doc]}]
       [form-option "arguments"
        (let [args (:arguments props)]
          (map arg-view args))]])))

(defn fields [props]
  [:div {:class ["flex" "flex-col" "space-y-2" "py-1"]}
   (for [[k v] props]
     ^{:key (str "fields-" k v)}
     [:div {:class ["flex" "flex-col" "justify-center"]}
      [:div {:class ["text-slate-500" "text-sm" "pr-2"]}
       (str (name k))]
      [:div {:class ["text-slate-300" "my-1"]}
       (if (vector? v)
         [items v]
         [:input {:class ["bg-transparent" "outline-none"
                          "border" "border-slate-200"
                          "text-sm" "rounded-md" "w-full" "px-2" "py-0.5"]
                  :value v}])]])])

(defn properties-editor []
  (r/with-let [open? (r/atom true)]
    [:div {:class ["flex" "flex-row" "bg-slate-800"
                   (when @open? "w-[16.5rem]")]}
     [:div {:class ["h-full" "w-0.5"
                    "hover:bg-blue-600" "cursor-ew-resize"]
            :on-click #(swap! open? not)}]
     (when @open?
       [:div {:class ["h-full" "w-full"]}
        (if-let [blk @(rf/subscribe [:blocks-selected])]
          (let [props (parser/parse-sexpr blk)
                t (:type props)]
            [:div {:class ["py-4" "px-4"]}
             [:div {:class ["text-slate-600" "text-sm" "font-normal"]}
              [type-select t]]
             (case t
               :function [defn-form props]
               :list [list-form props]
          ;; default
               [fields (dissoc props :type)])])
          [empty-container])])]))
