goog.provide('kol.env');
/**
 * @define {boolean}
 */
kol.env.DEBUG = goog.define("kol.env.DEBUG",false);
kol.env.debug = (function kol$env$debug(var_args){
var args__4870__auto__ = [];
var len__4864__auto___73677 = arguments.length;
var i__4865__auto___73678 = (0);
while(true){
if((i__4865__auto___73678 < len__4864__auto___73677)){
args__4870__auto__.push((arguments[i__4865__auto___73678]));

var G__73679 = (i__4865__auto___73678 + (1));
i__4865__auto___73678 = G__73679;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return kol.env.debug.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(kol.env.debug.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(kol.env.DEBUG){
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["DEBUG "], null),args)));
} else {
return null;
}
}));

(kol.env.debug.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kol.env.debug.cljs$lang$applyTo = (function (seq73676){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73676));
}));


//# sourceMappingURL=kol.env.js.map
