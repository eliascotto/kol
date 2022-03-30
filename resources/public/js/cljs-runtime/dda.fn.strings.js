goog.provide('dda.fn.strings');
/**
 * Return the string formatted in PascalCase.
 * 
 *   PascalCase has every word starts with an uppercase
 *   letter. Hypens (`-`) are removed.
 */
dda.fn.strings.pascal_case = (function dda$fn$strings$pascal_case(s){
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(s,/-/," ")," ");
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words));
});

//# sourceMappingURL=dda.fn.strings.js.map
