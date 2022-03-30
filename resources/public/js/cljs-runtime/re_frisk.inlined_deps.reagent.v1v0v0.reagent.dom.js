goog.provide('re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots !== 'undefined')){
} else {
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__82234 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__82235 = true;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__82235);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__82243 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__82244 = false;
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__82244);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots,cljs.core.assoc,container,comp);

re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__82243);
}}));
}finally {(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__82234);
}});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$re_render_component(comp,container){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$render(var_args){
var G__82255 = arguments.length;
switch (G__82255) {
case 2:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_();

var vec__82266 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82266,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82266,(1),null);
var f = (function (){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render_comp(f,container,callback);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_component_at_node = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$unmount_component_at_node(container){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.force_update_all = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$dom$force_update_all(){
re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_();

var seq__82282_82317 = cljs.core.seq(cljs.core.deref(re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.roots));
var chunk__82283_82318 = null;
var count__82284_82319 = (0);
var i__82285_82320 = (0);
while(true){
if((i__82285_82320 < count__82284_82319)){
var vec__82298_82325 = chunk__82283_82318.cljs$core$IIndexed$_nth$arity$2(null,i__82285_82320);
var container_82326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82298_82325,(0),null);
var comp_82327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82298_82325,(1),null);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component(comp_82327,container_82326);


var G__82331 = seq__82282_82317;
var G__82332 = chunk__82283_82318;
var G__82333 = count__82284_82319;
var G__82334 = (i__82285_82320 + (1));
seq__82282_82317 = G__82331;
chunk__82283_82318 = G__82332;
count__82284_82319 = G__82333;
i__82285_82320 = G__82334;
continue;
} else {
var temp__5753__auto___82335 = cljs.core.seq(seq__82282_82317);
if(temp__5753__auto___82335){
var seq__82282_82336__$1 = temp__5753__auto___82335;
if(cljs.core.chunked_seq_QMARK_(seq__82282_82336__$1)){
var c__4679__auto___82337 = cljs.core.chunk_first(seq__82282_82336__$1);
var G__82338 = cljs.core.chunk_rest(seq__82282_82336__$1);
var G__82339 = c__4679__auto___82337;
var G__82340 = cljs.core.count(c__4679__auto___82337);
var G__82341 = (0);
seq__82282_82317 = G__82338;
chunk__82283_82318 = G__82339;
count__82284_82319 = G__82340;
i__82285_82320 = G__82341;
continue;
} else {
var vec__82303_82345 = cljs.core.first(seq__82282_82336__$1);
var container_82346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82303_82345,(0),null);
var comp_82347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82303_82345,(1),null);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.re_render_component(comp_82347,container_82346);


var G__82348 = cljs.core.next(seq__82282_82336__$1);
var G__82349 = null;
var G__82350 = (0);
var G__82351 = (0);
seq__82282_82317 = G__82348;
chunk__82283_82318 = G__82349;
count__82284_82319 = G__82350;
i__82285_82320 = G__82351;
continue;
}
} else {
}
}
break;
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=re_frisk.inlined_deps.reagent.v1v0v0.reagent.dom.js.map
