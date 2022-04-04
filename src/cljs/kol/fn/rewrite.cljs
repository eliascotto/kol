(ns kol.fn.rewrite
  (:require
   [re-frame.core :as rf]
   [rewrite-clj.zip :as z]))

(defn append-list-global []
  (let [src @(rf/subscribe [:source])
        zp (z/of-string src)]
    (rf/dispatch [:source-update
                  (-> zp
                      (z/insert-right '())
                      (z/insert-newline-right)
                      (z/insert-newline-right)
                      z/root
                      str)])))

(comment
  (let [x "(defn foo [] 42)"
        zloc (z/of-string x)]
    (-> zloc
        (z/insert-right '(foo))

        (z/insert-newline-right)
        z/root
        str
        )))
