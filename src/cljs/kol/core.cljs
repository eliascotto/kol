(ns kol.core
  (:require
   [day8.re-frame.http-fx]
   [reagent.dom :as rdom]
   [reagent.core :as r]
   [re-frame.core :as rf]
   [goog.events :as events]
   [goog.history.EventType :as HistoryEventType]
   [markdown.core :refer [md->html]]
   [kol.ajax :as ajax]
   [kol.events.core]
   [kol.subs]
   [kol.definitions]
   [kol.pages.create :refer [create-page]]
   [kol.pages.source :refer [source-page]]
   [kol.comp.organism.navbar :refer [navbar]]
   [reitit.core :as reitit]
   [reitit.frontend.easy :as rfe]
   [clojure.string :as string])
  (:import goog.History))

(defn about-page []
  [:section.section>div.container>div.content
   [:img {:src "/img/warning_clojure.png"}]])

(defn home-page []
  [:section.section>div.container>div.content
   [:div "Hello my friend"]])

(defn explore-page []
  [:div
   [:h1 "Explore"]])

(defn page []
  (when-let [page @(rf/subscribe [:common/page])]
    [:div {:class ["h-full" "flex" "flex-col"]}
     [navbar]
     [page]]))

;; --- Router -------------------

(defn navigate! [match _]
  (rf/dispatch [:common/navigate match]))

(def router
  (reitit/router
   [["/" {:name        :home
          :view        #'home-page}]
    ["/create" {:name :create
                :view #'create-page}]
    ["/explore" {:name :explore
                 :view #'explore-page}]
    ["/source" {:name :source
                :view #'source-page}]
    ["/about" {:name :about
               :view #'about-page}]]))

(defn start-router! []
  (rfe/start!
   router
   navigate!
   {}))

;; --- Initialize app -------------------------

(defn ^:dev/after-load mount-components []
  (rf/clear-subscription-cache!)
  (rdom/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (start-router!)
  (ajax/load-interceptors!)
  (mount-components)
  (rf/dispatch-sync [:initialize-db]))
