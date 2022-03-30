goog.provide('re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template');
goog.scope(function(){
  re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.NativeWrapper = (function (tag,id,className){
this.tag = tag;
this.id = id;
this.className = className;
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.NativeWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null)], null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.NativeWrapper.cljs$lang$type = true);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "re-frisk.inlined-deps.reagent.v1v0v0.reagent.impl.template/NativeWrapper");

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"re-frisk.inlined-deps.reagent.v1v0v0.reagent.impl.template/NativeWrapper");
}));

/**
 * Positional factory function for re-frisk.inlined-deps.reagent.v1v0v0.reagent.impl.template/NativeWrapper.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.__GT_NativeWrapper = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$__GT_NativeWrapper(tag,id,className){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.NativeWrapper(tag,id,className));
});

re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.adapt_react_class = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$adapt_react_class(c){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.__GT_NativeWrapper(c,null,null);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.hiccup_tag_QMARK_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$hiccup_tag_QMARK_(x){
return ((re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_(x)) || (typeof x === 'string'));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.valid_tag_QMARK_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$valid_tag_QMARK_(x){
return ((re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.hiccup_tag_QMARK_(x)) || (((cljs.core.ifn_QMARK_(x)) || ((x instanceof re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.NativeWrapper)))));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.cache_get = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.goog$module$goog$object.get(o,k);
} else {
return null;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.cached_prop_name = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$cached_prop_name(k){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_(k)){
var temp__5755__auto__ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.cache_get(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.prop_name_cache,cljs.core.name(k));
if((temp__5755__auto__ == null)){
var v = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.dash_to_prop_name(k);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.goog$module$goog$object.set(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.prop_name_cache,cljs.core.name(k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5755__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.kv_conv = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$kv_conv(o,k,v){
var G__82145 = o;
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.goog$module$goog$object.set(G__82145,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.cached_prop_name(k),(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1 ? re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_prop_value.cljs$core$IFn$_invoke$arity$1(v) : re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_prop_value.call(null,v)));

return G__82145;
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_prop_value = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$convert_prop_value(x){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__82227__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__82227 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82228__i = 0, G__82228__a = new Array(arguments.length -  0);
while (G__82228__i < G__82228__a.length) {G__82228__a[G__82228__i] = arguments[G__82228__i + 0]; ++G__82228__i;}
  args = new cljs.core.IndexedSeq(G__82228__a,0,null);
} 
return G__82227__delegate.call(this,args);};
G__82227.cljs$lang$maxFixedArity = 0;
G__82227.cljs$lang$applyTo = (function (arglist__82229){
var args = cljs.core.seq(arglist__82229);
return G__82227__delegate(args);
});
G__82227.cljs$core$IFn$_invoke$arity$variadic = G__82227__delegate;
return G__82227;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.custom_prop_name_cache = ({});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.cached_custom_prop_name = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$cached_custom_prop_name(k){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_(k)){
var temp__5755__auto__ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.cache_get(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.custom_prop_name_cache,cljs.core.name(k));
if((temp__5755__auto__ == null)){
var v = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.dash_to_prop_name(k);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.goog$module$goog$object.set(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.custom_prop_name_cache,cljs.core.name(k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__5755__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.custom_kv_conv = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$custom_kv_conv(o,k,v){
var G__82146 = o;
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.goog$module$goog$object.set(G__82146,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.cached_custom_prop_name(k),re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_prop_value(v));

return G__82146;
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_custom_prop_value = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$convert_custom_prop_value(x){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.clj__GT_js(x);
} else {
if(cljs.core.ifn_QMARK_(x)){
return (function() { 
var G__82236__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(x,args);
};
var G__82236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__82237__i = 0, G__82237__a = new Array(arguments.length -  0);
while (G__82237__i < G__82237__a.length) {G__82237__a[G__82237__i] = arguments[G__82237__i + 0]; ++G__82237__i;}
  args = new cljs.core.IndexedSeq(G__82237__a,0,null);
} 
return G__82236__delegate.call(this,args);};
G__82236.cljs$lang$maxFixedArity = 0;
G__82236.cljs$lang$applyTo = (function (arglist__82238){
var args = cljs.core.seq(arglist__82238);
return G__82236__delegate(args);
});
G__82236.cljs$core$IFn$_invoke$arity$variadic = G__82236__delegate;
return G__82236;
})()
;
} else {
return cljs.core.clj__GT_js(x);

}
}
}
}
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.set_id_class = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$set_id_class(props,id_class){
var id = id_class.id;
var class$ = id_class.className;
var G__82147 = props;
var G__82147__$1 = (((((!((id == null)))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82147,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__82147);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82147__$1,new cljs.core.Keyword(null,"class","class",-2030961996),re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$2(class$,(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
}
})()));
} else {
return G__82147__$1;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_props = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$convert_props(props,id_class){
var class$ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.set_id_class((function (){var G__82148 = props;
if(cljs.core.truth_(class$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82148,new cljs.core.Keyword(null,"class","class",-2030961996),re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.class_names.cljs$core$IFn$_invoke$arity$1(class$));
} else {
return G__82148;
}
})(),id_class);
if(cljs.core.truth_(id_class.custom)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_custom_prop_value(props__$1);
} else {
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_prop_value(props__$1);
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.make_element = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$make_element(this$,argv,component,jsprops,first_child){
var G__82149 = (cljs.core.count(argv) - first_child);
switch (G__82149) {
case (0):
return module$node_modules$react$index.createElement(component,jsprops);

break;
case (1):
return module$node_modules$react$index.createElement(component,jsprops,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(this$,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first_child,null)));

break;
default:
return module$node_modules$react$index.createElement.apply(null,cljs.core.reduce_kv((function (a,k,v){
if((k >= first_child)){
a.push(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(this$,v));
} else {
}

return a;
}),[component,jsprops],argv));

}
});

/**
* @constructor
*/
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.HiccupTag = (function (tag,id,className,custom){
this.tag = tag;
this.id = id;
this.className = className;
this.custom = custom;
});

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.HiccupTag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"className","className",-342755530,null),new cljs.core.Symbol(null,"custom","custom",1980683475,null)], null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.HiccupTag.cljs$lang$type = true);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.HiccupTag.cljs$lang$ctorStr = "re-frisk.inlined-deps.reagent.v1v0v0.reagent.impl.template/HiccupTag");

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.HiccupTag.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"re-frisk.inlined-deps.reagent.v1v0v0.reagent.impl.template/HiccupTag");
}));

/**
 * Positional factory function for re-frisk.inlined-deps.reagent.v1v0v0.reagent.impl.template/HiccupTag.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.__GT_HiccupTag = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$__GT_HiccupTag(tag,id,className,custom){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.HiccupTag(tag,id,className,custom));
});

re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.parse_tag = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$parse_tag(hiccup_tag){
var vec__82150 = cljs.core.next(cljs.core.re_matches(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82150,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82150,(1),null);
var className = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82150,(2),null);
var className__$1 = (((className == null))?null:clojure.string.replace(className,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name()].join(''),"\n","tag"].join('')));
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.__GT_HiccupTag(tag,id,className__$1,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),tag.indexOf("-")));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.reag_element = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$reag_element(tag,v,compiler){
var c = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.as_class(tag,compiler);
var jsprops = ({});
(jsprops.argv = v);

var temp__5757__auto___82259 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.react_key_from_vec(v);
if((temp__5757__auto___82259 == null)){
} else {
var key_82262 = temp__5757__auto___82259;
(jsprops.key = key_82262);
}

return module$node_modules$react$index.createElement(c,jsprops);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.function_element = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$function_element(tag,v,first_arg,compiler){
var jsprops = ({});
(jsprops.reagentRender = tag);

(jsprops.argv = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,first_arg));

var temp__5757__auto___82265 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.react_key_from_vec(v);
if((temp__5757__auto___82265 == null)){
} else {
var key_82269 = temp__5757__auto___82265;
(jsprops.key = key_82269);
}

return module$node_modules$react$index.createElement(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.functional_render_fn(compiler,tag),jsprops);
});
/**
 * If given tag is a Class, use it as a class,
 *   else wrap in Reagent function wrapper.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.maybe_function_element = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$maybe_function_element(tag,v,compiler){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.react_class_QMARK_(tag)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.reag_element(tag,v,compiler);
} else {
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.function_element(tag,v,(1),compiler);
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.fragment_element = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$fragment_element(argv,compiler){
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = (function (){var or__4253__auto__ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_prop_value(((hasprops)?props:null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ({});
}
})();
var first_child = ((1) + ((hasprops)?(1):(0)));
var temp__5757__auto___82272 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.react_key_from_vec(argv);
if((temp__5757__auto___82272 == null)){
} else {
var key_82273 = temp__5757__auto___82272;
(jsprops.key = key_82273);
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.make_element(compiler,argv,module$node_modules$react$index.Fragment,jsprops,first_child);
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.tag_name_cache = ({});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.cached_parse = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$cached_parse(x){
var temp__5755__auto__ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.cache_get(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.tag_name_cache,x);
if((temp__5755__auto__ == null)){
var v = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.parse_tag(x);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.goog$module$goog$object.set(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.tag_name_cache,x,v);

return v;
} else {
var s = temp__5755__auto__;
return s;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.native_element = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$native_element(parsed,argv,first,compiler){
var component = parsed.tag;
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_(props)));
var jsprops = (function (){var or__4253__auto__ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.convert_props(((hasprops)?props:null),parsed);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ({});
}
})();
var first_child = (first + ((hasprops)?(1):(0)));
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.input.input_component_QMARK_(component)){
var input_class = (function (){var or__4253__auto__ = compiler.reagentInput;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var x = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.create_class(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.input.input_spec,compiler);
(compiler.reagentInput = x);

return x;
}
})();
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_class,argv,component,jsprops,first_child,compiler], null),cljs.core.meta(argv)));
} else {
var temp__5757__auto___82286 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.get_react_key(cljs.core.meta(argv));
if((temp__5757__auto___82286 == null)){
} else {
var key_82290 = temp__5757__auto___82286;
(jsprops.key = key_82290);
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.make_element(compiler,argv,component,jsprops,first_child);
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.raw_element = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$raw_element(comp,argv,compiler){
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(2),null);
var jsprops = (function (){var or__4253__auto__ = props;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ({});
}
})();
var temp__5757__auto___82291 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.get_react_key(cljs.core.meta(argv));
if((temp__5757__auto___82291 == null)){
} else {
var key_82292 = temp__5757__auto___82291;
(jsprops.key = key_82292);
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.make_element(compiler,argv,comp,jsprops,(3));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.expand_seq = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$expand_seq(s,compiler){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82159_SHARP_){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,p1__82159_SHARP_);
}),s));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.expand_seq_dev = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$expand_seq_dev(s,o,compiler){
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (val){
if(((cljs.core.vector_QMARK_(val)) && ((re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.react_key_from_vec(val) == null)))){
(o.no_key = true);
} else {
}

return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.as_element(compiler,val);
}),s));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.expand_seq_check = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$expand_seq_check(x,compiler){
var ctx = ({});
var vec__82166 = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.check_derefs((function (){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.expand_seq_dev(x,ctx,compiler);
}));
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82166,(0),null);
var derefed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82166,(1),null);
if(cljs.core.truth_(derefed)){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.has_console){
((re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).warn(["Warning: ",re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Reactive deref not supported in lazy seq, ","it should be wrapped in doall"], 0))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_(ctx.no_key)){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.has_console){
((re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?re_frisk.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).warn(["Warning: ",re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(x,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Every element in a seq should have a unique :key"], 0))].join(''));
} else {
}
} else {
}

return res;
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.hiccup_element = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$hiccup_element(v,compiler){
while(true){
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
var n = cljs.core.name(tag);
var pos = n.indexOf(">");
var G__82177 = pos;
switch (G__82177) {
case (-1):
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.native_element(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.cached_parse(n),v,(1),compiler);

break;
case (0):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",n)){
return null;
} else {
throw (new Error(["Assert failed: ",re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup tag"], 0)),"\n","(= \">\" n)"].join('')));
}

break;
default:
var G__82307 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),pos),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta(v,null),(0),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(pos + (1))))], null),cljs.core.meta(v));
var G__82308 = compiler;
v = G__82307;
compiler = G__82308;
continue;

}
break;
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.vec_to_elem = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$vec_to_elem(v,compiler,fn_to_element){
if((compiler == null)){
console.error("vec-to-elem",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0)));
} else {
}

if((cljs.core.count(v) > (0))){
} else {
throw (new Error(["Assert failed: ",re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hiccup form should not be empty"], 0)),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),null);
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.valid_tag_QMARK_(tag)){
} else {
throw (new Error(["Assert failed: ",re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.hiccup_err.cljs$core$IFn$_invoke$arity$variadic(v,re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.component.comp_name(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid Hiccup form"], 0)),"\n","(valid-tag? tag)"].join('')));
}

var G__82191 = tag;
var G__82191__$1 = (((G__82191 instanceof cljs.core.Keyword))?G__82191.fqn:null);
switch (G__82191__$1) {
case ">":
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.native_element(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.__GT_HiccupTag(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null),null,null,null),v,(2),compiler);

break;
case "r>":
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.raw_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null),v,compiler);

break;
case "f>":
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.function_element(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null),v,(2),compiler);

break;
case "<>":
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.fragment_element(v,compiler);

break;
default:
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.hiccup_tag_QMARK_(tag)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.hiccup_element(v,compiler);
} else {
if((tag instanceof re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.NativeWrapper)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.native_element(tag,v,(1),compiler);
} else {
return (fn_to_element.cljs$core$IFn$_invoke$arity$3 ? fn_to_element.cljs$core$IFn$_invoke$arity$3(tag,v,compiler) : fn_to_element.call(null,tag,v,compiler));

}
}

}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.as_element = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$as_element(this$,x,fn_to_element){
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.js_val_QMARK_(x)){
return x;
} else {
if(cljs.core.vector_QMARK_(x)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.vec_to_elem(x,this$,fn_to_element);
} else {
if(cljs.core.seq_QMARK_(x)){
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.expand_seq_check(x,this$);

} else {
if(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.util.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;

}
}
}
}
}
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.create_compiler = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$create_compiler(opts){
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var fn_to_element = (cljs.core.truth_(new cljs.core.Keyword(null,"function-components","function-components",1492814963).cljs$core$IFn$_invoke$arity$1(opts))?re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.maybe_function_element:re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.reag_element);
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.inlined_deps !== 'undefined') && (typeof re_frisk.inlined_deps.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template !== 'undefined') && (typeof re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.protocols.Compiler}
 * @implements {cljs.core.IWithMeta}
*/
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217 = (function (opts,id,fn_to_element,meta82218){
this.opts = opts;
this.id = id;
this.fn_to_element = fn_to_element;
this.meta82218 = meta82218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_82219,meta82218__$1){
var self__ = this;
var _82219__$1 = this;
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217(self__.opts,self__.id,self__.fn_to_element,meta82218__$1));
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_82219){
var self__ = this;
var _82219__$1 = this;
return self__.meta82218;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$protocols$Compiler$ = cljs.core.PROTOCOL_SENTINEL);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$protocols$Compiler$get_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$protocols$Compiler$as_element$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.as_element(this$__$1,x,self__.fn_to_element);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217.prototype.re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$protocols$Compiler$make_element$arity$5 = (function (this$,argv,component,jsprops,first_child){
var self__ = this;
var this$__$1 = this;
return re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.make_element(this$__$1,argv,component,jsprops,first_child);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"fn-to-element","fn-to-element",-1764467095,null),new cljs.core.Symbol(null,"meta82218","meta82218",70731567,null)], null);
}));

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217.cljs$lang$type = true);

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217.cljs$lang$ctorStr = "re-frisk.inlined-deps.reagent.v1v0v0.reagent.impl.template/t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217");

(re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"re-frisk.inlined-deps.reagent.v1v0v0.reagent.impl.template/t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217");
}));

/**
 * Positional factory function for re-frisk.inlined-deps.reagent.v1v0v0.reagent.impl.template/t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217.
 */
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.__GT_t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217 = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$create_compiler_$___GT_t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217(opts__$1,id__$1,fn_to_element__$1,meta82218){
return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217(opts__$1,id__$1,fn_to_element__$1,meta82218));
});

}

return (new re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.t_re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template82217(opts,id,fn_to_element,cljs.core.PersistentArrayMap.EMPTY));
});
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler_STAR_ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.create_compiler(cljs.core.PersistentArrayMap.EMPTY);
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler = re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler_STAR_;
re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.set_default_compiler_BANG_ = (function re_frisk$inlined_deps$reagent$v1v0v0$reagent$impl$template$set_default_compiler_BANG_(compiler){
return (re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.default_compiler = compiler);
});

//# sourceMappingURL=re_frisk.inlined_deps.reagent.v1v0v0.reagent.impl.template.js.map
