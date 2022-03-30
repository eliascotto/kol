(ns kol.events
  (:require
   [re-frame.core :as rf]
   [ajax.core :as ajax]
   [reitit.frontend.easy :as rfe]
   [reitit.frontend.controllers :as rfc]))

;; ----------------------
;; Helpers
;; ----------------------

(def base-url
  "http://localhost:3000/api/")

(defn api-url [route]
  (str base-url route))

(def default-db
  {:repl
   {:history [{:type :special
               :value "Clojure REPL v1.0"}]}})

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
   (rfe/push-state k params query)))

(rf/reg-event-fx
 :navigate!
 (fn [_ [_ url-key params query]]
   {:common/navigate-fx! [url-key params query]}))

(rf/reg-event-db
 :repl-history-append
 (fn [db [_ item]]
   (let [history (-> db :repl :history)]
     (assoc-in
      db
      [:repl :history]
      (conj history item)))))

(rf/reg-event-db
 :repl-input-set
 (fn [db [_ value]]
   (assoc-in db [:repl :input] value)))

(rf/reg-event-db
 :repl-input-reset
 (fn [db _]
   (assoc-in db [:repl :input] nil)))

(rf/reg-event-db
 :repl-multiline-append
 (fn [db [_ value]]
   (let [old (get-in db [:repl :multiline])]
     (assoc-in db [:repl :multiline] (str old value)))))

;; Reset completely the current input into the REPL
(rf/reg-event-db
 :repl-reset-all
 (fn [db _]
   (update-in db [:repl] merge {:input nil
                                :multiline nil
                                :placeholder nil})))
(rf/reg-event-db
 :repl-set-placeholder
 (fn [db [_ value]]
   (assoc-in db [:repl :placeholder] value)))
