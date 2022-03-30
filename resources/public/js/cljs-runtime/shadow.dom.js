goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_74942 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_74942(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_74943 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_74943(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__73784 = coll;
var G__73786 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__73784,G__73786) : shadow.dom.lazy_native_coll_seq.call(null,G__73784,G__73786));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__73804 = arguments.length;
switch (G__73804) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__73815 = arguments.length;
switch (G__73815) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__73824 = arguments.length;
switch (G__73824) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__73835 = arguments.length;
switch (G__73835) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__73847 = arguments.length;
switch (G__73847) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__73873 = arguments.length;
switch (G__73873) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e73886){if((e73886 instanceof Object)){
var e = e73886;
return console.log("didnt support attachEvent",el,e);
} else {
throw e73886;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__73896 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__73897 = null;
var count__73898 = (0);
var i__73899 = (0);
while(true){
if((i__73899 < count__73898)){
var el = chunk__73897.cljs$core$IIndexed$_nth$arity$2(null,i__73899);
var handler_74964__$1 = ((function (seq__73896,chunk__73897,count__73898,i__73899,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__73896,chunk__73897,count__73898,i__73899,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_74964__$1);


var G__74965 = seq__73896;
var G__74966 = chunk__73897;
var G__74967 = count__73898;
var G__74968 = (i__73899 + (1));
seq__73896 = G__74965;
chunk__73897 = G__74966;
count__73898 = G__74967;
i__73899 = G__74968;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__73896);
if(temp__5753__auto__){
var seq__73896__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73896__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__73896__$1);
var G__74969 = cljs.core.chunk_rest(seq__73896__$1);
var G__74970 = c__4679__auto__;
var G__74971 = cljs.core.count(c__4679__auto__);
var G__74972 = (0);
seq__73896 = G__74969;
chunk__73897 = G__74970;
count__73898 = G__74971;
i__73899 = G__74972;
continue;
} else {
var el = cljs.core.first(seq__73896__$1);
var handler_74973__$1 = ((function (seq__73896,chunk__73897,count__73898,i__73899,el,seq__73896__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__73896,chunk__73897,count__73898,i__73899,el,seq__73896__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_74973__$1);


var G__74974 = cljs.core.next(seq__73896__$1);
var G__74975 = null;
var G__74976 = (0);
var G__74977 = (0);
seq__73896 = G__74974;
chunk__73897 = G__74975;
count__73898 = G__74976;
i__73899 = G__74977;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__73932 = arguments.length;
switch (G__73932) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__73947 = cljs.core.seq(events);
var chunk__73948 = null;
var count__73949 = (0);
var i__73950 = (0);
while(true){
if((i__73950 < count__73949)){
var vec__73964 = chunk__73948.cljs$core$IIndexed$_nth$arity$2(null,i__73950);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73964,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73964,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__74980 = seq__73947;
var G__74981 = chunk__73948;
var G__74982 = count__73949;
var G__74983 = (i__73950 + (1));
seq__73947 = G__74980;
chunk__73948 = G__74981;
count__73949 = G__74982;
i__73950 = G__74983;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__73947);
if(temp__5753__auto__){
var seq__73947__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73947__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__73947__$1);
var G__74985 = cljs.core.chunk_rest(seq__73947__$1);
var G__74986 = c__4679__auto__;
var G__74987 = cljs.core.count(c__4679__auto__);
var G__74988 = (0);
seq__73947 = G__74985;
chunk__73948 = G__74986;
count__73949 = G__74987;
i__73950 = G__74988;
continue;
} else {
var vec__73973 = cljs.core.first(seq__73947__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73973,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73973,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__74989 = cljs.core.next(seq__73947__$1);
var G__74990 = null;
var G__74991 = (0);
var G__74992 = (0);
seq__73947 = G__74989;
chunk__73948 = G__74990;
count__73949 = G__74991;
i__73950 = G__74992;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__73981 = cljs.core.seq(styles);
var chunk__73982 = null;
var count__73983 = (0);
var i__73984 = (0);
while(true){
if((i__73984 < count__73983)){
var vec__74005 = chunk__73982.cljs$core$IIndexed$_nth$arity$2(null,i__73984);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74005,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74005,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__74993 = seq__73981;
var G__74994 = chunk__73982;
var G__74995 = count__73983;
var G__74996 = (i__73984 + (1));
seq__73981 = G__74993;
chunk__73982 = G__74994;
count__73983 = G__74995;
i__73984 = G__74996;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__73981);
if(temp__5753__auto__){
var seq__73981__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73981__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__73981__$1);
var G__74997 = cljs.core.chunk_rest(seq__73981__$1);
var G__74998 = c__4679__auto__;
var G__74999 = cljs.core.count(c__4679__auto__);
var G__75000 = (0);
seq__73981 = G__74997;
chunk__73982 = G__74998;
count__73983 = G__74999;
i__73984 = G__75000;
continue;
} else {
var vec__74013 = cljs.core.first(seq__73981__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74013,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74013,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__75005 = cljs.core.next(seq__73981__$1);
var G__75006 = null;
var G__75007 = (0);
var G__75008 = (0);
seq__73981 = G__75005;
chunk__73982 = G__75006;
count__73983 = G__75007;
i__73984 = G__75008;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__74020_75009 = key;
var G__74020_75010__$1 = (((G__74020_75009 instanceof cljs.core.Keyword))?G__74020_75009.fqn:null);
switch (G__74020_75010__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_75019 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_75019,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_75019,"aria-");
}
})())){
el.setAttribute(ks_75019,value);
} else {
(el[ks_75019] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__74047){
var map__74048 = p__74047;
var map__74048__$1 = cljs.core.__destructure_map(map__74048);
var props = map__74048__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74048__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__74049 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74049,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74049,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74049,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__74056 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__74056,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__74056;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__74060 = arguments.length;
switch (G__74060) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__74068){
var vec__74069 = p__74068;
var seq__74070 = cljs.core.seq(vec__74069);
var first__74071 = cljs.core.first(seq__74070);
var seq__74070__$1 = cljs.core.next(seq__74070);
var nn = first__74071;
var first__74071__$1 = cljs.core.first(seq__74070__$1);
var seq__74070__$2 = cljs.core.next(seq__74070__$1);
var np = first__74071__$1;
var nc = seq__74070__$2;
var node = vec__74069;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__74072 = nn;
var G__74073 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__74072,G__74073) : create_fn.call(null,G__74072,G__74073));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__74074 = nn;
var G__74075 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__74074,G__74075) : create_fn.call(null,G__74074,G__74075));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__74079 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74079,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74079,(1),null);
var seq__74084_75028 = cljs.core.seq(node_children);
var chunk__74085_75029 = null;
var count__74086_75030 = (0);
var i__74087_75031 = (0);
while(true){
if((i__74087_75031 < count__74086_75030)){
var child_struct_75032 = chunk__74085_75029.cljs$core$IIndexed$_nth$arity$2(null,i__74087_75031);
var children_75033 = shadow.dom.dom_node(child_struct_75032);
if(cljs.core.seq_QMARK_(children_75033)){
var seq__74174_75034 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_75033));
var chunk__74176_75035 = null;
var count__74177_75036 = (0);
var i__74178_75037 = (0);
while(true){
if((i__74178_75037 < count__74177_75036)){
var child_75038 = chunk__74176_75035.cljs$core$IIndexed$_nth$arity$2(null,i__74178_75037);
if(cljs.core.truth_(child_75038)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_75038);


var G__75039 = seq__74174_75034;
var G__75040 = chunk__74176_75035;
var G__75041 = count__74177_75036;
var G__75042 = (i__74178_75037 + (1));
seq__74174_75034 = G__75039;
chunk__74176_75035 = G__75040;
count__74177_75036 = G__75041;
i__74178_75037 = G__75042;
continue;
} else {
var G__75043 = seq__74174_75034;
var G__75044 = chunk__74176_75035;
var G__75045 = count__74177_75036;
var G__75046 = (i__74178_75037 + (1));
seq__74174_75034 = G__75043;
chunk__74176_75035 = G__75044;
count__74177_75036 = G__75045;
i__74178_75037 = G__75046;
continue;
}
} else {
var temp__5753__auto___75047 = cljs.core.seq(seq__74174_75034);
if(temp__5753__auto___75047){
var seq__74174_75048__$1 = temp__5753__auto___75047;
if(cljs.core.chunked_seq_QMARK_(seq__74174_75048__$1)){
var c__4679__auto___75049 = cljs.core.chunk_first(seq__74174_75048__$1);
var G__75050 = cljs.core.chunk_rest(seq__74174_75048__$1);
var G__75051 = c__4679__auto___75049;
var G__75052 = cljs.core.count(c__4679__auto___75049);
var G__75053 = (0);
seq__74174_75034 = G__75050;
chunk__74176_75035 = G__75051;
count__74177_75036 = G__75052;
i__74178_75037 = G__75053;
continue;
} else {
var child_75054 = cljs.core.first(seq__74174_75048__$1);
if(cljs.core.truth_(child_75054)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_75054);


var G__75055 = cljs.core.next(seq__74174_75048__$1);
var G__75056 = null;
var G__75057 = (0);
var G__75058 = (0);
seq__74174_75034 = G__75055;
chunk__74176_75035 = G__75056;
count__74177_75036 = G__75057;
i__74178_75037 = G__75058;
continue;
} else {
var G__75059 = cljs.core.next(seq__74174_75048__$1);
var G__75060 = null;
var G__75061 = (0);
var G__75062 = (0);
seq__74174_75034 = G__75059;
chunk__74176_75035 = G__75060;
count__74177_75036 = G__75061;
i__74178_75037 = G__75062;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_75033);
}


var G__75063 = seq__74084_75028;
var G__75064 = chunk__74085_75029;
var G__75065 = count__74086_75030;
var G__75066 = (i__74087_75031 + (1));
seq__74084_75028 = G__75063;
chunk__74085_75029 = G__75064;
count__74086_75030 = G__75065;
i__74087_75031 = G__75066;
continue;
} else {
var temp__5753__auto___75067 = cljs.core.seq(seq__74084_75028);
if(temp__5753__auto___75067){
var seq__74084_75068__$1 = temp__5753__auto___75067;
if(cljs.core.chunked_seq_QMARK_(seq__74084_75068__$1)){
var c__4679__auto___75069 = cljs.core.chunk_first(seq__74084_75068__$1);
var G__75071 = cljs.core.chunk_rest(seq__74084_75068__$1);
var G__75072 = c__4679__auto___75069;
var G__75073 = cljs.core.count(c__4679__auto___75069);
var G__75074 = (0);
seq__74084_75028 = G__75071;
chunk__74085_75029 = G__75072;
count__74086_75030 = G__75073;
i__74087_75031 = G__75074;
continue;
} else {
var child_struct_75075 = cljs.core.first(seq__74084_75068__$1);
var children_75076 = shadow.dom.dom_node(child_struct_75075);
if(cljs.core.seq_QMARK_(children_75076)){
var seq__74207_75077 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_75076));
var chunk__74210_75078 = null;
var count__74211_75079 = (0);
var i__74212_75080 = (0);
while(true){
if((i__74212_75080 < count__74211_75079)){
var child_75081 = chunk__74210_75078.cljs$core$IIndexed$_nth$arity$2(null,i__74212_75080);
if(cljs.core.truth_(child_75081)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_75081);


var G__75082 = seq__74207_75077;
var G__75083 = chunk__74210_75078;
var G__75084 = count__74211_75079;
var G__75085 = (i__74212_75080 + (1));
seq__74207_75077 = G__75082;
chunk__74210_75078 = G__75083;
count__74211_75079 = G__75084;
i__74212_75080 = G__75085;
continue;
} else {
var G__75086 = seq__74207_75077;
var G__75087 = chunk__74210_75078;
var G__75088 = count__74211_75079;
var G__75089 = (i__74212_75080 + (1));
seq__74207_75077 = G__75086;
chunk__74210_75078 = G__75087;
count__74211_75079 = G__75088;
i__74212_75080 = G__75089;
continue;
}
} else {
var temp__5753__auto___75090__$1 = cljs.core.seq(seq__74207_75077);
if(temp__5753__auto___75090__$1){
var seq__74207_75091__$1 = temp__5753__auto___75090__$1;
if(cljs.core.chunked_seq_QMARK_(seq__74207_75091__$1)){
var c__4679__auto___75092 = cljs.core.chunk_first(seq__74207_75091__$1);
var G__75093 = cljs.core.chunk_rest(seq__74207_75091__$1);
var G__75094 = c__4679__auto___75092;
var G__75095 = cljs.core.count(c__4679__auto___75092);
var G__75096 = (0);
seq__74207_75077 = G__75093;
chunk__74210_75078 = G__75094;
count__74211_75079 = G__75095;
i__74212_75080 = G__75096;
continue;
} else {
var child_75097 = cljs.core.first(seq__74207_75091__$1);
if(cljs.core.truth_(child_75097)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_75097);


var G__75098 = cljs.core.next(seq__74207_75091__$1);
var G__75099 = null;
var G__75100 = (0);
var G__75101 = (0);
seq__74207_75077 = G__75098;
chunk__74210_75078 = G__75099;
count__74211_75079 = G__75100;
i__74212_75080 = G__75101;
continue;
} else {
var G__75102 = cljs.core.next(seq__74207_75091__$1);
var G__75103 = null;
var G__75104 = (0);
var G__75105 = (0);
seq__74207_75077 = G__75102;
chunk__74210_75078 = G__75103;
count__74211_75079 = G__75104;
i__74212_75080 = G__75105;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_75076);
}


var G__75107 = cljs.core.next(seq__74084_75068__$1);
var G__75108 = null;
var G__75109 = (0);
var G__75110 = (0);
seq__74084_75028 = G__75107;
chunk__74085_75029 = G__75108;
count__74086_75030 = G__75109;
i__74087_75031 = G__75110;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__74237 = cljs.core.seq(node);
var chunk__74238 = null;
var count__74239 = (0);
var i__74240 = (0);
while(true){
if((i__74240 < count__74239)){
var n = chunk__74238.cljs$core$IIndexed$_nth$arity$2(null,i__74240);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__75120 = seq__74237;
var G__75121 = chunk__74238;
var G__75122 = count__74239;
var G__75123 = (i__74240 + (1));
seq__74237 = G__75120;
chunk__74238 = G__75121;
count__74239 = G__75122;
i__74240 = G__75123;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__74237);
if(temp__5753__auto__){
var seq__74237__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74237__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__74237__$1);
var G__75124 = cljs.core.chunk_rest(seq__74237__$1);
var G__75125 = c__4679__auto__;
var G__75126 = cljs.core.count(c__4679__auto__);
var G__75127 = (0);
seq__74237 = G__75124;
chunk__74238 = G__75125;
count__74239 = G__75126;
i__74240 = G__75127;
continue;
} else {
var n = cljs.core.first(seq__74237__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__75131 = cljs.core.next(seq__74237__$1);
var G__75132 = null;
var G__75133 = (0);
var G__75134 = (0);
seq__74237 = G__75131;
chunk__74238 = G__75132;
count__74239 = G__75133;
i__74240 = G__75134;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__74248 = arguments.length;
switch (G__74248) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__74261 = arguments.length;
switch (G__74261) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__74274 = arguments.length;
switch (G__74274) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___75143 = arguments.length;
var i__4865__auto___75144 = (0);
while(true){
if((i__4865__auto___75144 < len__4864__auto___75143)){
args__4870__auto__.push((arguments[i__4865__auto___75144]));

var G__75145 = (i__4865__auto___75144 + (1));
i__4865__auto___75144 = G__75145;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__74305_75146 = cljs.core.seq(nodes);
var chunk__74306_75147 = null;
var count__74307_75148 = (0);
var i__74308_75149 = (0);
while(true){
if((i__74308_75149 < count__74307_75148)){
var node_75150 = chunk__74306_75147.cljs$core$IIndexed$_nth$arity$2(null,i__74308_75149);
fragment.appendChild(shadow.dom._to_dom(node_75150));


var G__75151 = seq__74305_75146;
var G__75152 = chunk__74306_75147;
var G__75153 = count__74307_75148;
var G__75154 = (i__74308_75149 + (1));
seq__74305_75146 = G__75151;
chunk__74306_75147 = G__75152;
count__74307_75148 = G__75153;
i__74308_75149 = G__75154;
continue;
} else {
var temp__5753__auto___75155 = cljs.core.seq(seq__74305_75146);
if(temp__5753__auto___75155){
var seq__74305_75156__$1 = temp__5753__auto___75155;
if(cljs.core.chunked_seq_QMARK_(seq__74305_75156__$1)){
var c__4679__auto___75158 = cljs.core.chunk_first(seq__74305_75156__$1);
var G__75159 = cljs.core.chunk_rest(seq__74305_75156__$1);
var G__75160 = c__4679__auto___75158;
var G__75161 = cljs.core.count(c__4679__auto___75158);
var G__75162 = (0);
seq__74305_75146 = G__75159;
chunk__74306_75147 = G__75160;
count__74307_75148 = G__75161;
i__74308_75149 = G__75162;
continue;
} else {
var node_75163 = cljs.core.first(seq__74305_75156__$1);
fragment.appendChild(shadow.dom._to_dom(node_75163));


var G__75165 = cljs.core.next(seq__74305_75156__$1);
var G__75166 = null;
var G__75167 = (0);
var G__75168 = (0);
seq__74305_75146 = G__75165;
chunk__74306_75147 = G__75166;
count__74307_75148 = G__75167;
i__74308_75149 = G__75168;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq74297){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74297));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__74316_75169 = cljs.core.seq(scripts);
var chunk__74317_75170 = null;
var count__74318_75171 = (0);
var i__74319_75172 = (0);
while(true){
if((i__74319_75172 < count__74318_75171)){
var vec__74327_75173 = chunk__74317_75170.cljs$core$IIndexed$_nth$arity$2(null,i__74319_75172);
var script_tag_75174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74327_75173,(0),null);
var script_body_75175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74327_75173,(1),null);
eval(script_body_75175);


var G__75176 = seq__74316_75169;
var G__75177 = chunk__74317_75170;
var G__75178 = count__74318_75171;
var G__75179 = (i__74319_75172 + (1));
seq__74316_75169 = G__75176;
chunk__74317_75170 = G__75177;
count__74318_75171 = G__75178;
i__74319_75172 = G__75179;
continue;
} else {
var temp__5753__auto___75180 = cljs.core.seq(seq__74316_75169);
if(temp__5753__auto___75180){
var seq__74316_75181__$1 = temp__5753__auto___75180;
if(cljs.core.chunked_seq_QMARK_(seq__74316_75181__$1)){
var c__4679__auto___75182 = cljs.core.chunk_first(seq__74316_75181__$1);
var G__75183 = cljs.core.chunk_rest(seq__74316_75181__$1);
var G__75184 = c__4679__auto___75182;
var G__75185 = cljs.core.count(c__4679__auto___75182);
var G__75186 = (0);
seq__74316_75169 = G__75183;
chunk__74317_75170 = G__75184;
count__74318_75171 = G__75185;
i__74319_75172 = G__75186;
continue;
} else {
var vec__74330_75187 = cljs.core.first(seq__74316_75181__$1);
var script_tag_75188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74330_75187,(0),null);
var script_body_75189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74330_75187,(1),null);
eval(script_body_75189);


var G__75191 = cljs.core.next(seq__74316_75181__$1);
var G__75192 = null;
var G__75193 = (0);
var G__75194 = (0);
seq__74316_75169 = G__75191;
chunk__74317_75170 = G__75192;
count__74318_75171 = G__75193;
i__74319_75172 = G__75194;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__74336){
var vec__74340 = p__74336;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74340,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74340,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__74360 = arguments.length;
switch (G__74360) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__74408 = cljs.core.seq(style_keys);
var chunk__74409 = null;
var count__74410 = (0);
var i__74411 = (0);
while(true){
if((i__74411 < count__74410)){
var it = chunk__74409.cljs$core$IIndexed$_nth$arity$2(null,i__74411);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__75203 = seq__74408;
var G__75204 = chunk__74409;
var G__75205 = count__74410;
var G__75206 = (i__74411 + (1));
seq__74408 = G__75203;
chunk__74409 = G__75204;
count__74410 = G__75205;
i__74411 = G__75206;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__74408);
if(temp__5753__auto__){
var seq__74408__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__74408__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__74408__$1);
var G__75207 = cljs.core.chunk_rest(seq__74408__$1);
var G__75208 = c__4679__auto__;
var G__75209 = cljs.core.count(c__4679__auto__);
var G__75210 = (0);
seq__74408 = G__75207;
chunk__74409 = G__75208;
count__74410 = G__75209;
i__74411 = G__75210;
continue;
} else {
var it = cljs.core.first(seq__74408__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__75211 = cljs.core.next(seq__74408__$1);
var G__75212 = null;
var G__75213 = (0);
var G__75214 = (0);
seq__74408 = G__75211;
chunk__74409 = G__75212;
count__74410 = G__75213;
i__74411 = G__75214;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k74434,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__74452 = k74434;
var G__74452__$1 = (((G__74452 instanceof cljs.core.Keyword))?G__74452.fqn:null);
switch (G__74452__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74434,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__74458){
var vec__74459 = p__74458;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74459,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74459,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74433){
var self__ = this;
var G__74433__$1 = this;
return (new cljs.core.RecordIter((0),G__74433__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74435,other74436){
var self__ = this;
var this74435__$1 = this;
return (((!((other74436 == null)))) && ((((this74435__$1.constructor === other74436.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74435__$1.x,other74436.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74435__$1.y,other74436.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74435__$1.__extmap,other74436.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k74434){
var self__ = this;
var this__4509__auto____$1 = this;
var G__74505 = k74434;
var G__74505__$1 = (((G__74505 instanceof cljs.core.Keyword))?G__74505.fqn:null);
switch (G__74505__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k74434);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__74433){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__74513 = cljs.core.keyword_identical_QMARK_;
var expr__74514 = k__4511__auto__;
if(cljs.core.truth_((pred__74513.cljs$core$IFn$_invoke$arity$2 ? pred__74513.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__74514) : pred__74513.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__74514)))){
return (new shadow.dom.Coordinate(G__74433,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74513.cljs$core$IFn$_invoke$arity$2 ? pred__74513.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__74514) : pred__74513.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__74514)))){
return (new shadow.dom.Coordinate(self__.x,G__74433,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__74433),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__74433){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__74433,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__74439){
var extmap__4542__auto__ = (function (){var G__74548 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__74439,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__74439)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74548);
} else {
return G__74548;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__74439),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__74439),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k74563,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__74567 = k74563;
var G__74567__$1 = (((G__74567 instanceof cljs.core.Keyword))?G__74567.fqn:null);
switch (G__74567__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k74563,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__74570){
var vec__74571 = p__74570;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74571,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74571,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__74562){
var self__ = this;
var G__74562__$1 = this;
return (new cljs.core.RecordIter((0),G__74562__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this74564,other74565){
var self__ = this;
var this74564__$1 = this;
return (((!((other74565 == null)))) && ((((this74564__$1.constructor === other74565.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74564__$1.w,other74565.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74564__$1.h,other74565.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this74564__$1.__extmap,other74565.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k74563){
var self__ = this;
var this__4509__auto____$1 = this;
var G__74598 = k74563;
var G__74598__$1 = (((G__74598 instanceof cljs.core.Keyword))?G__74598.fqn:null);
switch (G__74598__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k74563);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__74562){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__74602 = cljs.core.keyword_identical_QMARK_;
var expr__74603 = k__4511__auto__;
if(cljs.core.truth_((pred__74602.cljs$core$IFn$_invoke$arity$2 ? pred__74602.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__74603) : pred__74602.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__74603)))){
return (new shadow.dom.Size(G__74562,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__74602.cljs$core$IFn$_invoke$arity$2 ? pred__74602.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__74603) : pred__74602.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__74603)))){
return (new shadow.dom.Size(self__.w,G__74562,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__74562),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__74562){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__74562,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__74566){
var extmap__4542__auto__ = (function (){var G__74619 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__74566,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__74566)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__74619);
} else {
return G__74619;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__74566),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__74566),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__75240 = (i + (1));
var G__75241 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__75240;
ret = G__75241;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74670){
var vec__74671 = p__74670;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74671,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74671,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__74684 = arguments.length;
switch (G__74684) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__75259 = ps;
var G__75260 = (i + (1));
el__$1 = G__75259;
i = G__75260;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__74746 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74746,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74746,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74746,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__74750_75264 = cljs.core.seq(props);
var chunk__74751_75265 = null;
var count__74752_75266 = (0);
var i__74753_75267 = (0);
while(true){
if((i__74753_75267 < count__74752_75266)){
var vec__74773_75271 = chunk__74751_75265.cljs$core$IIndexed$_nth$arity$2(null,i__74753_75267);
var k_75272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74773_75271,(0),null);
var v_75273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74773_75271,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_75272);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_75272),v_75273);


var G__75274 = seq__74750_75264;
var G__75275 = chunk__74751_75265;
var G__75276 = count__74752_75266;
var G__75277 = (i__74753_75267 + (1));
seq__74750_75264 = G__75274;
chunk__74751_75265 = G__75275;
count__74752_75266 = G__75276;
i__74753_75267 = G__75277;
continue;
} else {
var temp__5753__auto___75278 = cljs.core.seq(seq__74750_75264);
if(temp__5753__auto___75278){
var seq__74750_75279__$1 = temp__5753__auto___75278;
if(cljs.core.chunked_seq_QMARK_(seq__74750_75279__$1)){
var c__4679__auto___75280 = cljs.core.chunk_first(seq__74750_75279__$1);
var G__75281 = cljs.core.chunk_rest(seq__74750_75279__$1);
var G__75282 = c__4679__auto___75280;
var G__75283 = cljs.core.count(c__4679__auto___75280);
var G__75284 = (0);
seq__74750_75264 = G__75281;
chunk__74751_75265 = G__75282;
count__74752_75266 = G__75283;
i__74753_75267 = G__75284;
continue;
} else {
var vec__74787_75285 = cljs.core.first(seq__74750_75279__$1);
var k_75286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74787_75285,(0),null);
var v_75287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74787_75285,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_75286);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_75286),v_75287);


var G__75288 = cljs.core.next(seq__74750_75279__$1);
var G__75289 = null;
var G__75290 = (0);
var G__75291 = (0);
seq__74750_75264 = G__75288;
chunk__74751_75265 = G__75289;
count__74752_75266 = G__75290;
i__74753_75267 = G__75291;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__74802 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74802,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74802,(1),null);
var seq__74806_75293 = cljs.core.seq(node_children);
var chunk__74808_75294 = null;
var count__74809_75295 = (0);
var i__74810_75296 = (0);
while(true){
if((i__74810_75296 < count__74809_75295)){
var child_struct_75297 = chunk__74808_75294.cljs$core$IIndexed$_nth$arity$2(null,i__74810_75296);
if((!((child_struct_75297 == null)))){
if(typeof child_struct_75297 === 'string'){
var text_75298 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_75298),child_struct_75297].join(''));
} else {
var children_75299 = shadow.dom.svg_node(child_struct_75297);
if(cljs.core.seq_QMARK_(children_75299)){
var seq__74866_75302 = cljs.core.seq(children_75299);
var chunk__74868_75303 = null;
var count__74869_75304 = (0);
var i__74870_75305 = (0);
while(true){
if((i__74870_75305 < count__74869_75304)){
var child_75307 = chunk__74868_75303.cljs$core$IIndexed$_nth$arity$2(null,i__74870_75305);
if(cljs.core.truth_(child_75307)){
node.appendChild(child_75307);


var G__75308 = seq__74866_75302;
var G__75309 = chunk__74868_75303;
var G__75310 = count__74869_75304;
var G__75311 = (i__74870_75305 + (1));
seq__74866_75302 = G__75308;
chunk__74868_75303 = G__75309;
count__74869_75304 = G__75310;
i__74870_75305 = G__75311;
continue;
} else {
var G__75312 = seq__74866_75302;
var G__75313 = chunk__74868_75303;
var G__75314 = count__74869_75304;
var G__75315 = (i__74870_75305 + (1));
seq__74866_75302 = G__75312;
chunk__74868_75303 = G__75313;
count__74869_75304 = G__75314;
i__74870_75305 = G__75315;
continue;
}
} else {
var temp__5753__auto___75316 = cljs.core.seq(seq__74866_75302);
if(temp__5753__auto___75316){
var seq__74866_75317__$1 = temp__5753__auto___75316;
if(cljs.core.chunked_seq_QMARK_(seq__74866_75317__$1)){
var c__4679__auto___75318 = cljs.core.chunk_first(seq__74866_75317__$1);
var G__75319 = cljs.core.chunk_rest(seq__74866_75317__$1);
var G__75320 = c__4679__auto___75318;
var G__75321 = cljs.core.count(c__4679__auto___75318);
var G__75322 = (0);
seq__74866_75302 = G__75319;
chunk__74868_75303 = G__75320;
count__74869_75304 = G__75321;
i__74870_75305 = G__75322;
continue;
} else {
var child_75323 = cljs.core.first(seq__74866_75317__$1);
if(cljs.core.truth_(child_75323)){
node.appendChild(child_75323);


var G__75325 = cljs.core.next(seq__74866_75317__$1);
var G__75326 = null;
var G__75327 = (0);
var G__75328 = (0);
seq__74866_75302 = G__75325;
chunk__74868_75303 = G__75326;
count__74869_75304 = G__75327;
i__74870_75305 = G__75328;
continue;
} else {
var G__75330 = cljs.core.next(seq__74866_75317__$1);
var G__75331 = null;
var G__75332 = (0);
var G__75333 = (0);
seq__74866_75302 = G__75330;
chunk__74868_75303 = G__75331;
count__74869_75304 = G__75332;
i__74870_75305 = G__75333;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_75299);
}
}


var G__75335 = seq__74806_75293;
var G__75336 = chunk__74808_75294;
var G__75337 = count__74809_75295;
var G__75338 = (i__74810_75296 + (1));
seq__74806_75293 = G__75335;
chunk__74808_75294 = G__75336;
count__74809_75295 = G__75337;
i__74810_75296 = G__75338;
continue;
} else {
var G__75339 = seq__74806_75293;
var G__75340 = chunk__74808_75294;
var G__75341 = count__74809_75295;
var G__75342 = (i__74810_75296 + (1));
seq__74806_75293 = G__75339;
chunk__74808_75294 = G__75340;
count__74809_75295 = G__75341;
i__74810_75296 = G__75342;
continue;
}
} else {
var temp__5753__auto___75343 = cljs.core.seq(seq__74806_75293);
if(temp__5753__auto___75343){
var seq__74806_75345__$1 = temp__5753__auto___75343;
if(cljs.core.chunked_seq_QMARK_(seq__74806_75345__$1)){
var c__4679__auto___75346 = cljs.core.chunk_first(seq__74806_75345__$1);
var G__75347 = cljs.core.chunk_rest(seq__74806_75345__$1);
var G__75348 = c__4679__auto___75346;
var G__75349 = cljs.core.count(c__4679__auto___75346);
var G__75350 = (0);
seq__74806_75293 = G__75347;
chunk__74808_75294 = G__75348;
count__74809_75295 = G__75349;
i__74810_75296 = G__75350;
continue;
} else {
var child_struct_75352 = cljs.core.first(seq__74806_75345__$1);
if((!((child_struct_75352 == null)))){
if(typeof child_struct_75352 === 'string'){
var text_75353 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_75353),child_struct_75352].join(''));
} else {
var children_75355 = shadow.dom.svg_node(child_struct_75352);
if(cljs.core.seq_QMARK_(children_75355)){
var seq__74885_75356 = cljs.core.seq(children_75355);
var chunk__74887_75357 = null;
var count__74888_75358 = (0);
var i__74889_75359 = (0);
while(true){
if((i__74889_75359 < count__74888_75358)){
var child_75360 = chunk__74887_75357.cljs$core$IIndexed$_nth$arity$2(null,i__74889_75359);
if(cljs.core.truth_(child_75360)){
node.appendChild(child_75360);


var G__75362 = seq__74885_75356;
var G__75363 = chunk__74887_75357;
var G__75364 = count__74888_75358;
var G__75365 = (i__74889_75359 + (1));
seq__74885_75356 = G__75362;
chunk__74887_75357 = G__75363;
count__74888_75358 = G__75364;
i__74889_75359 = G__75365;
continue;
} else {
var G__75366 = seq__74885_75356;
var G__75367 = chunk__74887_75357;
var G__75368 = count__74888_75358;
var G__75369 = (i__74889_75359 + (1));
seq__74885_75356 = G__75366;
chunk__74887_75357 = G__75367;
count__74888_75358 = G__75368;
i__74889_75359 = G__75369;
continue;
}
} else {
var temp__5753__auto___75370__$1 = cljs.core.seq(seq__74885_75356);
if(temp__5753__auto___75370__$1){
var seq__74885_75371__$1 = temp__5753__auto___75370__$1;
if(cljs.core.chunked_seq_QMARK_(seq__74885_75371__$1)){
var c__4679__auto___75372 = cljs.core.chunk_first(seq__74885_75371__$1);
var G__75373 = cljs.core.chunk_rest(seq__74885_75371__$1);
var G__75374 = c__4679__auto___75372;
var G__75375 = cljs.core.count(c__4679__auto___75372);
var G__75376 = (0);
seq__74885_75356 = G__75373;
chunk__74887_75357 = G__75374;
count__74888_75358 = G__75375;
i__74889_75359 = G__75376;
continue;
} else {
var child_75377 = cljs.core.first(seq__74885_75371__$1);
if(cljs.core.truth_(child_75377)){
node.appendChild(child_75377);


var G__75378 = cljs.core.next(seq__74885_75371__$1);
var G__75379 = null;
var G__75380 = (0);
var G__75381 = (0);
seq__74885_75356 = G__75378;
chunk__74887_75357 = G__75379;
count__74888_75358 = G__75380;
i__74889_75359 = G__75381;
continue;
} else {
var G__75382 = cljs.core.next(seq__74885_75371__$1);
var G__75383 = null;
var G__75384 = (0);
var G__75385 = (0);
seq__74885_75356 = G__75382;
chunk__74887_75357 = G__75383;
count__74888_75358 = G__75384;
i__74889_75359 = G__75385;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_75355);
}
}


var G__75386 = cljs.core.next(seq__74806_75345__$1);
var G__75387 = null;
var G__75388 = (0);
var G__75389 = (0);
seq__74806_75293 = G__75386;
chunk__74808_75294 = G__75387;
count__74809_75295 = G__75388;
i__74810_75296 = G__75389;
continue;
} else {
var G__75390 = cljs.core.next(seq__74806_75345__$1);
var G__75391 = null;
var G__75392 = (0);
var G__75393 = (0);
seq__74806_75293 = G__75390;
chunk__74808_75294 = G__75391;
count__74809_75295 = G__75392;
i__74810_75296 = G__75393;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___75403 = arguments.length;
var i__4865__auto___75404 = (0);
while(true){
if((i__4865__auto___75404 < len__4864__auto___75403)){
args__4870__auto__.push((arguments[i__4865__auto___75404]));

var G__75405 = (i__4865__auto___75404 + (1));
i__4865__auto___75404 = G__75405;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq74899){
var G__74900 = cljs.core.first(seq74899);
var seq74899__$1 = cljs.core.next(seq74899);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74900,seq74899__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__74913 = arguments.length;
switch (G__74913) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__70472__auto___75411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_74921){
var state_val_74922 = (state_74921[(1)]);
if((state_val_74922 === (1))){
var state_74921__$1 = state_74921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74921__$1,(2),once_or_cleanup);
} else {
if((state_val_74922 === (2))){
var inst_74918 = (state_74921[(2)]);
var inst_74919 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_74921__$1 = (function (){var statearr_74926 = state_74921;
(statearr_74926[(7)] = inst_74918);

return statearr_74926;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_74921__$1,inst_74919);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__70289__auto__ = null;
var shadow$dom$state_machine__70289__auto____0 = (function (){
var statearr_74927 = [null,null,null,null,null,null,null,null];
(statearr_74927[(0)] = shadow$dom$state_machine__70289__auto__);

(statearr_74927[(1)] = (1));

return statearr_74927;
});
var shadow$dom$state_machine__70289__auto____1 = (function (state_74921){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_74921);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e74928){var ex__70292__auto__ = e74928;
var statearr_74929_75420 = state_74921;
(statearr_74929_75420[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_74921[(4)]))){
var statearr_74930_75421 = state_74921;
(statearr_74930_75421[(1)] = cljs.core.first((state_74921[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__75423 = state_74921;
state_74921 = G__75423;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
shadow$dom$state_machine__70289__auto__ = function(state_74921){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__70289__auto____0.call(this);
case 1:
return shadow$dom$state_machine__70289__auto____1.call(this,state_74921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__70289__auto____0;
shadow$dom$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__70289__auto____1;
return shadow$dom$state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_74933 = f__70473__auto__();
(statearr_74933[(6)] = c__70472__auto___75411);

return statearr_74933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
