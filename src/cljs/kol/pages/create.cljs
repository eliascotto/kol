(ns kol.pages.create
  (:require
   [kol.icons :refer [settings-icon]]))

(defn block [opts & childs]
  [:div {:class [(let [lvl (or (:level opts) 0)]
                   (str "bg-slate-" (str (- 700 (* lvl 100)))))
                 "w-fit"
                 "min-w-[200px]"
                 "shadow-md"
                 "rounded-md"
                 "px-1"
                 (when childs "py-1")
                 "my-1"
                 (when (nil? (:level opts)) "my-7")]}
   ;; Title
   [:div {:class ["px-2" "py-1"
                  "flex" "flex-row"
                  "items-center"
                  "justify-between"]}
    [:div {:class ["text-white" "text-sm" "font-light"]}
     (or (:title opts) "Untitled")]
    [:span {:class ["cursor-pointer"
                    "text-neutral-300"
                    "text-xs"]}
     [settings-icon]]]
   ;; Content
   [:div {:class ["px-1"]}
    childs]])

(defn blocks-container []
  [:div {:class ["px-5" "py-3"
                 "h-full"
                 "flex"
                 "flex-col"
                 "justify-center"
                 "items-center"]}
   [:div
    [block {:title "Send email to all customers"}
     [block {:title "let" :level 1}
      [:div {:class ["text-slate-300" "text-xs" "flex" "flex-row" "items-center"]}
       "customers: "
       [block {:title "Read file" :level 2}]]
      [:div {:class ["text-slate-300" "text-xs" "flex" "flex-row" "items-center"]}
       "email-bodies: "
       [block {:title "Compile Template" :level 2}]]]
     [block {:title "for each [customer] in [customers]" :level 1}
      [block {:title "Send email" :level 2}]]]
    [block {:title "Copy text from Insta to Twitter"}
     [block {:title "let" :level 1}
      [:div {:class ["text-slate-300" "text-xs" "flex" "flex-row" "items-center"]}
       "insta-text: "
       [block {:title "Copy Ig photo desc" :level 2}]]]
     [block {:title "Write Tweet" :level 1}]]]])

(defn create-page []
  [:div {:class ["flex" "flex-row" "h-full" "w-full"]}
   ;; Blocks bar
   [:div {:class ["h-full" "flex-1"
                  "bg-neutral-800"]}
    [blocks-container]]
   ;; Parameters bar
   [:div {:class ["h-full" "w-[25%]"]}]])
