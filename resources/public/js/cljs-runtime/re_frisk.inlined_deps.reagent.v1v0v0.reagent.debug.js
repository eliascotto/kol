goog.provide('re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug');
re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.has_console = (typeof console !== 'undefined');
re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = false;
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_console !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__81000__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__81000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81005__i = 0, G__81005__a = new Array(arguments.length -  0);
while (G__81005__i < G__81005__a.length) {G__81005__a[G__81005__i] = arguments[G__81005__i + 0]; ++G__81005__i;}
  args = new cljs.core.IndexedSeq(G__81005__a,0,null);
} 
return G__81000__delegate.call(this,args);};
G__81000.cljs$lang$maxFixedArity = 0;
G__81000.cljs$lang$applyTo = (function (arglist__81006){
var args = cljs.core.seq(arglist__81006);
return G__81000__delegate(args);
});
G__81000.cljs$core$IFn$_invoke$arity$variadic = G__81000__delegate;
return G__81000;
})()
);

(o.error = (function() { 
var G__81007__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__81007 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81012__i = 0, G__81012__a = new Array(arguments.length -  0);
while (G__81012__i < G__81012__a.length) {G__81012__a[G__81012__i] = arguments[G__81012__i + 0]; ++G__81012__i;}
  args = new cljs.core.IndexedSeq(G__81012__a,0,null);
} 
return G__81007__delegate.call(this,args);};
G__81007.cljs$lang$maxFixedArity = 0;
G__81007.cljs$lang$applyTo = (function (arglist__81013){
var args = cljs.core.seq(arglist__81013);
return G__81007__delegate(args);
});
G__81007.cljs$core$IFn$_invoke$arity$variadic = G__81007__delegate;
return G__81007;
})()
);

return o;
})();
}
re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_warnings = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$debug$track_warnings(f){
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings);
cljs.core.reset_BANG_(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.warnings,null);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.js.map
