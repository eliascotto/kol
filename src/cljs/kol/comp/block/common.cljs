(ns kol.comp.block.common)

(defn expr-el-def [pre]
  [:div {:class ["text-[13px]" "font-normal" "text-[#FF79C6]" "pr-2"]}
   pre])

(defn expr-el-fn
  [fun fn-name?]
  [:div {:class ["font-medium" (when (not fn-name?) "text-[#67E480]")
                 "pr-2"]
         :style
         {:font-feature-settings "\"liga\" 0, \"calt\" 0"
          :forced-color-adjust "none"
          :text-size-adjust "100%"}}
   fun])

(defn expr-el
  [val]
  [:div {:class ["text-[13px]" "font-normal" "pr-2"
                 "last:pr-0"]}
   val])
