goog.provide('dda.utils.css');
/**
 * Return a new map with :class and a vector with arguments.
 */
dda.utils.css.css = (function dda$utils$css$css(var_args){
var args__4870__auto__ = [];
var len__4864__auto___92750 = arguments.length;
var i__4865__auto___92751 = (0);
while(true){
if((i__4865__auto___92751 < len__4864__auto___92750)){
args__4870__auto__.push((arguments[i__4865__auto___92751]));

var G__92752 = (i__4865__auto___92751 + (1));
i__4865__auto___92751 = G__92752;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return dda.utils.css.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(dda.utils.css.css.cljs$core$IFn$_invoke$arity$variadic = (function (classes){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,classes)], null);
}));

(dda.utils.css.css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(dda.utils.css.css.cljs$lang$applyTo = (function (seq92744){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq92744));
}));


//# sourceMappingURL=dda.utils.css.js.map
