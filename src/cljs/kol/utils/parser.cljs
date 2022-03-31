(ns kol.utils.parser
  (:require
   [cljs.reader :refer [read-string]]))

;; Declare for clj-kondo
(declare _
         ?state
         ?text
         ?rest
         ?k
         ?stack
         ?old-stack)

(comment
  (require '[meander.epsilon :as m])
  (require '[meander.strategy.epsilon :as m*])

  (defn make-state [s]
    {:pre [(string? s)]}
    [s [:void] []])

  (defn step [state]
    (m/rewrite state

     ;; Error.
     [_ [:error & _] _ :as ?state]
     ?state

     ;; Atom.
     [(m/re #"(?s)([^\s[\[\]\(\)],]+)(.*)" [_ ?text ?rest]) ?k ?stack]
     [?rest ?k [& ?stack (m/app read-string ?text)]]
     ;; -----------------^^^^^^^^^^^^^^^^^^^^^^^^^ Push the atom.

     ;; Whitespace.
     [(m/re #"(?s)(?:\s+|,)(.*)" [_ ?rest]) ?k ?stack]
     [?rest ?k ?stack]

     ;; List rules
     ;; ----------

     ;; List Start
     [(m/re #"(?s)\((.*)" [_ ?rest]) ?k ?stack]
     [?rest [:make-list ?k ?stack] []]

     ;; List End
     [(m/re #"(?s)\)(.*)" [_ ?rest]) [:make-list ?k ?old-stack] ?stack]
     [?rest ?k [& ?old-stack (& ?stack)]]
     ;; ---------------------^^^^^^^^^^ Push the list.

     ;; Optional integrity check.
     ;;[(m/re #"(?s)\)(.*)" [?s ?rest]) ?k ?stack]
     ;;[?s [:error ?k "Invalid state"] ?stack]

     ["" [:make-list & _ :as ?k] ?stack]
     ["" [:error ?k "Unclosed list"] ?stack]

     ;; Vector rules
     ;; ------------

     ;; Vector Start
     [(m/re #"(?s)\[(.*)" [_ ?rest]) ?k ?stack]
     [?rest [:make-vector ?k ?stack] []]

     ;; Vector End
     [(m/re #"(?s)\](.*)" [_ ?rest]) [:make-vector ?k ?old-stack] ?stack]
     [?rest ?k [& ?old-stack ?stack]]
     ;; ---------------------^^^^^^ Push the vector.

     ;; Optional integrity check.
     ;;[(m/re #"(?s)\](.*)" [?s ?rest]) ?k ?stack]
     ;;[?s [:error ?k "Invalid state"] ?stack]

     ["" [:make-vector & _ :as ?k] ?stack]
     ["" [:error ?k "Unclosed vector"] ?stack]

     ?state
     ?state))

     (read-string "ciao")
     
     (step (make-state "foo bar"))
     
     (-> (make-state "(foo bar)")
          ;;    [S          K                       V        ]
         step  ;; => ["foo bar)" [:make-list [:void] []] []       ]
         step step step) ;; => [""         [:void]                 [(foo bar)]]
     
     (let [l (read-string "(foo (bar uno))")]
       (-> l
           second
           second))
     
     (type (symbol 'uno))
     )
