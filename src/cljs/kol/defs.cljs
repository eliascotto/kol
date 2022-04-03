(ns kol.defs)

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
