(ns kol.definitions)

(def block-colors
  ["bg-slate-900"
   "bg-slate-800"
   "bg-slate-700"
   "bg-slate-600"
   "bg-slate-500"
   "bg-slate-400"
   "bg-slate-300"
   "bg-slate-200"
   "bg-slate-100"])

(comment
  (for [i (range 7)]
    (str "bg-slate-"  (str (- 700 (* i 100))))))

;; Record for define each block inside the visual workspace.
;; Each block should be unique and updated when a user updates 
;; the workspace or the source. Is this a good way to maintain 1:1?
;; sexpr the content of the list
;; index of the list in the parent
;; level is the depth of the list
(defrecord Block [sexpr index level parent])

(comment
  (let [b (Block. '(map 1) 0 0)
        a (Block. '(map 1) 1 0)]
    (:level b)
    (:arra b)
    (= a b)))

(def block-types
  [{:type :function :label "Define a function"}
   {:type :fn :label "Inline function"}
   {:type :list :label "Call a function"}])
