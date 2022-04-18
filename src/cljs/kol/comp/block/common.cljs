(ns kol.comp.block.common)

(defn block-pre [pre]
  [:div {:class ["text-[13px]" "font-normal" "text-[#FF79C6]" "pr-2"]}
   pre])

(defn block-fun [fun pre]
  [:div {:class ["font-medium" (when (not pre) "text-[#67E480]")]
         :style
         {:font-feature-settings "\"liga\" 0, \"calt\" 0"
          :forced-color-adjust "none"
          :text-size-adjust "100%"}}
   fun])
