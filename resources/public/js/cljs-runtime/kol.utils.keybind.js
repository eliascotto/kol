goog.provide('kol.utils.keybind');
/**
 * Map from keywords to event attributes names.
 */
kol.utils.keybind.key_evt_attrs = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shift","shift",997140064),"shiftKey",new cljs.core.Keyword(null,"ctrl","ctrl",361402094),"ctrlKey",new cljs.core.Keyword(null,"alt","alt",-3214426),"altKey",new cljs.core.Keyword(null,"meta","meta",1499536964),"metaKey",new cljs.core.Keyword(null,"key","key",-1516042587),"key"], null);
/**
 * Default keymap representing a key binding.
 */
kol.utils.keybind.default_keymap = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shift","shift",997140064),false,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),false,new cljs.core.Keyword(null,"alt","alt",-3214426),false,new cljs.core.Keyword(null,"meta","meta",1499536964),false,new cljs.core.Keyword(null,"key","key",-1516042587),null], null);
/**
 * Return a keymap extracted from a key binding.
 * 
 *   e.g.
 *   (convert-keys :cmd-p)
 *   ;; => {:shift false, :ctrl false, :alt false, :meta true, :key "p"}
 */
kol.utils.keybind.convert_keys = (function kol$utils$keybind$convert_keys(keybind_kw){
var keybind = cljs.core.name(keybind_kw);
var parts = keybind.split(/-/);
var keymap = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(kol.utils.keybind.default_keymap,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.last(parts));
if((cljs.core.count(parts) > (1))){
var metas = cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts);
var km = keymap;
while(true){
if(cljs.core.empty_QMARK_(metas)){
return km;
} else {
var G__79900 = cljs.core.rest(metas);
var G__79901 = (function (){var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(metas));
if(cljs.core.truth_(kol.utils.core.in_QMARK_(cljs.core.keys(km),k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(km,k,true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"cmd","cmd",-302931143))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(km,(cljs.core.truth_(kol.utils.core.mac_os_QMARK_)?new cljs.core.Keyword(null,"meta","meta",1499536964):new cljs.core.Keyword(null,"ctrl","ctrl",361402094)),true);
} else {
throw (new Error(["Invalid meta key for binding: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keybind_kw)].join('')));
}
}
})();
metas = G__79900;
km = G__79901;
continue;
}
break;
}
} else {
return keymap;
}
});
/**
 * Return a new map with all keymaps from m associated 
 *   with the respective function.
 */
kol.utils.keybind.bind_keys = (function kol$utils$keybind$bind_keys(m){
var coll = cljs.core.seq(m);
var bindings = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(coll)){
return bindings;
} else {
var vec__79863 = cljs.core.first(coll);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79863,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79863,(1),null);
var G__79902 = cljs.core.rest(coll);
var G__79903 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,kol.utils.keybind.convert_keys(k),v);
coll = G__79902;
bindings = G__79903;
continue;
}
break;
}
});
/**
 * Reagent component that bind all key combinations
 *   from m into the respective callback functions.
 *   It automatically remove all the listeners.
 */
kol.utils.keybind.with_keybind = (function kol$utils$keybind$with_keybind(m,_){
var with_let79873 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let79873","with-let79873",-1393747192));
var temp__5757__auto___79904 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___79904 == null)){
} else {
var c__74512__auto___79905 = temp__5757__auto___79904;
if((with_let79873.generation === c__74512__auto___79905.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let79873.generation = c__74512__auto___79905.ratomGeneration);
}

var init79874 = (with_let79873.length === (0));
var bindings = ((((init79874) || (cljs.core.not(with_let79873.hasOwnProperty((0))))))?(with_let79873[(0)] = cljs.core.deref(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(kol.utils.keybind.bind_keys(m)))):(with_let79873[(0)]));
var res79875 = (function (){var kd_handler = (function (e){
var evt_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function kol$utils$keybind$with_keybind_$_iter__79882(s__79883){
return (new cljs.core.LazySeq(null,(function (){
var s__79883__$1 = s__79883;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__79883__$1);
if(temp__5753__auto__){
var s__79883__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79883__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__79883__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__79885 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__79884 = (0);
while(true){
if((i__79884 < size__4651__auto__)){
var vec__79888 = cljs.core._nth(c__4650__auto__,i__79884);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79888,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79888,(1),null);
cljs.core.chunk_append(b__79885,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null));

var G__79906 = (i__79884 + (1));
i__79884 = G__79906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79885),kol$utils$keybind$with_keybind_$_iter__79882(cljs.core.chunk_rest(s__79883__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79885),null);
}
} else {
var vec__79891 = cljs.core.first(s__79883__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79891,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79891,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null),kol$utils$keybind$with_keybind_$_iter__79882(cljs.core.rest(s__79883__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(kol.utils.keybind.key_evt_attrs);
})());
var evt_map__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(evt_map,new cljs.core.Keyword(null,"key","key",-1516042587),clojure.string.lower_case(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(evt_map)));
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(bindings,evt_map__$1);
if(cljs.core.truth_(temp__5753__auto__)){
var bind_fn = temp__5753__auto__;
return (bind_fn.cljs$core$IFn$_invoke$arity$1 ? bind_fn.cljs$core$IFn$_invoke$arity$1(e) : bind_fn.call(null,e));
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"keybinding component",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return window.addEventListener("keydown",kd_handler,false);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return window.removeEventListener("keydown",kd_handler);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (___$1,children){
return children;
})], null));
})();
return res79875;
});

//# sourceMappingURL=kol.utils.keybind.js.map
