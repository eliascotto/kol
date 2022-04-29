(ns kol.events.core
  (:require
   [re-frame.core :as rf]
   [ajax.core :as ajax]
   [reitit.frontend.easy :as rfe]
   [reitit.frontend.controllers :as rfc]
   [kol.events.repl]
   [kol.events.blocks]
   [kol.events.source]
   [kol.events.sexpr]
   [kol.fn.esexpr :as esexpr]))

;; ----------------------
;; Helpers
;; ----------------------

(def base-url
  "http://localhost:3000/api/")

(defn api-url [route]
  (str base-url route))

(def default-db
  {;; Repl configuration
   :repl
   {:history [{:type :special
               :value "Clojure REPL v1.0"}]}
   ;; Current edited block
   :blocks
   {:selected nil}
   ;; Current file source
   :source "(defn fizz-buzz [n]
  (case n
    15 \"fizzbuzz\"
    3  \"fizz\"
    5  \"buzz\"
    n))
  
()"
   ;; esexpr extracted from server
   :source-esexpr nil})

;; ----------------------
;; Dispatchers
;; ----------------------

(rf/reg-event-fx
 :initialize-db
 ; gets user from localstore, and puts into coeffects arg
 (fn [_ _]
   {:db default-db}))

(rf/reg-event-db
 :set-error
 (fn [db [_ key error]]
   (assoc-in db [:errors key] error)))

;; usage (dispatch [:api-request-error
;;        {:request-type <error-to-log-as>,
;;         :loading <loading-to-turn-off>}])
;;
;; :loading is optional and defaults to the :request-type input.
;; triggered when we get request-error from the server
;; `response` is implicitly conj'ed as the last entry by :http-xhrio event.
(rf/reg-event-db
 :api-request-error
 (fn [db [_ {:keys [request-type loading]} response]]
   (let [status (:status response)
         error (get-in response [:response :error])]
     (when (or (= status 403)
               (and (= status 401) (= error "Access not authorized.")))
       (rf/dispatch [:logout]))
     (let [error-kw (-> (name request-type) (str "-error") (keyword))]
       (-> db
           (assoc-in [:errors error-kw] error)
           (assoc-in [:loading (or loading request-type)] false))))))

(rf/reg-event-db
 :common/navigate
 (fn [db [_ match]]
   (let [old-match (:common/route db)
         new-match (assoc
                    match
                    :controllers
                    (rfc/apply-controllers (:controllers old-match) match))]
     (assoc db :common/route new-match))))

(rf/reg-fx
 :common/navigate-fx!
 (fn [[k & [params query]]]
   (try (rfe/push-state k params query)
        (catch js/Error e (println "Error HERE!!!!")))))

(rf/reg-event-fx
 :navigate!
 (fn [_ [_ url-key params query]]
   {:common/navigate-fx! [url-key params query]}))
