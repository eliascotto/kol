(ns kol.comp.organism.properties-editor
  (:require
   [reagent.core :as r]
   [re-frame.core :as rf]
   [kol.fn.parser :as parser]
   [kol.definitions :as defs]
   [kol.comp.atom.icon :refer [icon]]))

(defn remove-brackets [sexpr]
  (-> sexpr str rest drop-last))

(defn convert-str [sexpr]
  (if (string? sexpr)
    (str "\"" sexpr "\"")
    (str sexpr)))

(def input-style ["bg-neutral-800" "outline-none"
                  "border" "border-neutral-800"
                  "focus:border-neutral-700"
                  "text-sm" "rounded-md" "w-full" "px-2" "py-0.5"])

(defn empty-container []
  [:div {:class ["text-neutral-800" "h-full" "flex" "items-center"
                 "justify-center"]}
   "Selection empty"])

(defn type-select [selected]
  [:select {:name "type-select"
            :class ["bg-neutral-800" "rounded-md" "w-full" "outline-none"
                    "text-neutral-500" "p-1" "mb-2"]}
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

(defn form-option [label child]
  [:div {:class ["flex" "flex-col" "justify-center"]}
   [:div {:class ["text-neutral-500" "text-sm" "pr-2"]}
    label]
   [:div {:class ["text-neutral-300" "my-1.5"]}
    child]])

(defn go-to-block-btn [sexpr]
  (let [blk @(rf/subscribe [:blocks-selected])
        chld-blk (parser/find-child-block blk sexpr)]
    [:div {:class ["bg-neutral-800" "flex" "flex-row"
                   "items-center" "justify-between" "text-neutral-500"
                   "p-1" "rounded-md" "text-sm" "cursor-pointer"
                   "hover:text-neutral-300"]
           :on-click #(rf/dispatch [:blocks-set-selected chld-blk])}
     [:span {:class ["truncate" "pl-1"]}
      (remove-brackets sexpr)]
     [icon "chevron-right"
      {:class ["w-5" "h-auto" "ml-4"]}]]))

(defn type-symbol
  ([s]
   (type-symbol s nil))
  ([s on-click]
   [:div {:class ["inline-block" "text-xs" "text-neutral-400"
                  "rounded-full" "bg-neutral-900" "cursor-pointer"
                  "py-[3px]" "px-[6px]" "w-fit" "whitespace-nowrap"
                  "mr-1" "select-none"]
          :on-click on-click}
    s]))

(defn vector-list [sexpr]
  (r/with-let [open? (r/atom false)]
    [:div {:class [(if @open? "flex-col" "flex-row")
                   "flex" "my-1" "py-1" "text-sm"
                   "group" "px-1" "rounded-md" "bg-neutral-800"]}
     (if @open?
       [:div {:class ["flex" "flex-row" "items-center" "justify-between"]}
        [type-symbol "[ ]" #(swap! open? not)]
        [:div {:class ["text-neutral-600" "text-xs" "pr-1"]} "Edit vector"]]
       [type-symbol "[ ]" #(swap! open? not)])
     [:div {:class (into ["truncate"
                          "group-hover:text-neutral-300"]
                         (if @open?
                           ["flex" "flex-col" "mt-1" "text-neutral-300"
                            "border" "border-neutral-700" "rounded-md"]
                           ["text-neutral-500"]))}
      (for [s sexpr]
        (if @open?
          [:input {:class (into (filterv
                                 #(and (not= % "border")
                                       (not= % "rounded-md"))
                                 input-style)
                                ["border-b" "border-neutral-700"
                                 "last:border-b-0"])
                   :value (convert-str s)}]
          [:span {:class ["px-1.5"]} (convert-str s)]))]]))

(defn map-list [sexpr]
  (r/with-let [open? (r/atom false)]
    [:div {:class [(if @open? "flex-col" "flex-row")
                   "flex" "my-1" "py-1" "text-sm"
                   "group" "px-1" "rounded-md" "bg-neutral-800"]}
     (if @open?
       [:div {:class ["flex" "flex-row" "items-center" "justify-between"]}
        [type-symbol "{ }" #(swap! open? not)]
        [:div {:class ["text-neutral-600" "text-xs" "pr-1"]} "Edit map"]]
       [type-symbol "{ }" #(swap! open? not)])
     [:div {:class (into ["truncate"
                          "group-hover:text-neutral-300"]
                         (if @open?
                           ["flex" "flex-col" "mt-1" "text-neutral-300"
                            "border" "border-neutral-700" "rounded-md"]
                           ["text-neutral-500"]))}
      (for [[k v] sexpr]
        (if @open?
          [:div {:class ["flex" "flex-row" "border-b" "border-neutral-700"
                         "last:border-b-0"]}
           [:input {:class (concat (filterv
                                    #(and (not= % "border")
                                          (not= % "rounded-md"))
                                    input-style)
                                   ["border-r" "border-neutral-700"])
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
                   "group" "px-1" "rounded-md" "bg-neutral-800"]}
     (if @open?
       [:div {:class ["flex" "flex-row" "items-center" "justify-between"]}
        [type-symbol "{ }" #(swap! open? not)]
        [:div {:class ["text-neutral-600" "text-xs" "pr-1"]} "Edit function"]]
       [type-symbol "{ }" #(swap! open? not)])]))

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
             :value sexpr}]))

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

(defn list-form [props]
  [:div {:class ["flex" "flex-col" "space-y-2" "py-1"]}
   [form-option "function"
    [:input {:class input-style
             :value (:function props)}]]
   [form-option "arguments"
    (let [args (:arguments props)]
      (map arg-view args))]])

(defn fields [props]
  [:div {:class ["flex" "flex-col" "space-y-2" "py-1"]}
   (for [[k v] props]
     ^{:key (str "fields-" k v)}
     [:div {:class ["flex" "flex-col" "justify-center"]}
      [:div {:class ["text-neutral-500" "text-sm" "pr-2"]}
       (str (name k))]
      [:div {:class ["text-neutral-300" "my-1"]}
       (if (vector? v)
         [items v]
         [:input {:class ["bg-transparent" "outline-none"
                          "border" "border-neutral-700"
                          "text-sm" "rounded-md" "w-full" "px-2" "py-0.5"]
                  :value v}])]])])

(defn properties-editor []
  [:div {:class ["h-full" "w-[25%]"]}
   (if-let [blk @(rf/subscribe [:blocks-selected])]
     (let [props (parser/parse-sexpr blk)
           t (:type props)]
       [:div {:class ["py-4" "px-4"]}
        [:div {:class ["text-neutral-600" "text-sm" "font-normal"]}
         [type-select t]]
        (case t
          :function [defn-form props]
          :list [list-form props]
          ;; default
          [fields (dissoc props :type)])])
     [empty-container])])
