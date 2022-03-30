goog.provide('kol.utils.css');
/**
 * Return a new map with :class and a vector with arguments.
 */
kol.utils.css.css = (function kol$utils$css$css(var_args){
var args__4870__auto__ = [];
var len__4864__auto___79652 = arguments.length;
var i__4865__auto___79653 = (0);
while(true){
if((i__4865__auto___79653 < len__4864__auto___79652)){
args__4870__auto__.push((arguments[i__4865__auto___79653]));

var G__79654 = (i__4865__auto___79653 + (1));
i__4865__auto___79653 = G__79654;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return kol.utils.css.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(kol.utils.css.css.cljs$core$IFn$_invoke$arity$variadic = (function (classes){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,classes)], null);
}));

(kol.utils.css.css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kol.utils.css.css.cljs$lang$applyTo = (function (seq79632){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq79632));
}));


//# sourceMappingURL=kol.utils.css.js.map
