goog.provide('dda.comp.atom.icon');
goog.scope(function(){
  dda.comp.atom.icon.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$$heroicons$react$solid$index=shadow.js.require("module$node_modules$$heroicons$react$solid$index", {});
var module$node_modules$$heroicons$react$outline$index=shadow.js.require("module$node_modules$$heroicons$react$outline$index", {});
/**
 * TODO: add comment
 */
dda.comp.atom.icon.icon = (function dda$comp$atom$icon$icon(var_args){
var args__4870__auto__ = [];
var len__4864__auto___67410 = arguments.length;
var i__4865__auto___67411 = (0);
while(true){
if((i__4865__auto___67411 < len__4864__auto___67410)){
args__4870__auto__.push((arguments[i__4865__auto___67411]));

var G__67412 = (i__4865__auto___67411 + (1));
i__4865__auto___67411 = G__67412;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return dda.comp.atom.icon.icon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(dda.comp.atom.icon.icon.cljs$core$IFn$_invoke$arity$variadic = (function (icon_name,p__67408){
var map__67409 = p__67408;
var map__67409__$1 = cljs.core.__destructure_map(map__67409);
var props = map__67409__$1;
var full_name = [dda.fn.strings.pascal_case(icon_name),"Icon"].join('');
var default_class = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["h-5","w-5","inline-block"], null)], null);
var icon_set = ((new cljs.core.Keyword(null,"outline","outline",793464534).cljs$core$IFn$_invoke$arity$1(props) === true)?module$node_modules$$heroicons$react$outline$index:module$node_modules$$heroicons$react$solid$index);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_class,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"outline","outline",793464534))], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dda.comp.atom.icon.goog$module$goog$object.get(icon_set,full_name)], null)], null);
}));

(dda.comp.atom.icon.icon.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dda.comp.atom.icon.icon.cljs$lang$applyTo = (function (seq67406){
var G__67407 = cljs.core.first(seq67406);
var seq67406__$1 = cljs.core.next(seq67406);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67407,seq67406__$1);
}));


//# sourceMappingURL=dda.comp.atom.icon.js.map
