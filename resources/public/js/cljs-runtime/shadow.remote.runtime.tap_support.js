goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__76149,p__76150){
var map__76152 = p__76149;
var map__76152__$1 = cljs.core.__destructure_map(map__76152);
var svc = map__76152__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76152__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76152__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76152__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__76153 = p__76150;
var map__76153__$1 = cljs.core.__destructure_map(map__76153);
var msg = map__76153__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76153__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76153__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76153__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76153__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__76173,p__76174){
var map__76176 = p__76173;
var map__76176__$1 = cljs.core.__destructure_map(map__76176);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76176__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__76177 = p__76174;
var map__76177__$1 = cljs.core.__destructure_map(map__76177);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76177__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__76192,p__76193){
var map__76194 = p__76192;
var map__76194__$1 = cljs.core.__destructure_map(map__76194);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76194__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76194__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__76195 = p__76193;
var map__76195__$1 = cljs.core.__destructure_map(map__76195);
var msg = map__76195__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76195__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__76206,tid){
var map__76208 = p__76206;
var map__76208__$1 = cljs.core.__destructure_map(map__76208);
var svc = map__76208__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76208__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__76227 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__76228 = null;
var count__76229 = (0);
var i__76230 = (0);
while(true){
if((i__76230 < count__76229)){
var vec__76241 = chunk__76228.cljs$core$IIndexed$_nth$arity$2(null,i__76230);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76241,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76241,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__76260 = seq__76227;
var G__76261 = chunk__76228;
var G__76262 = count__76229;
var G__76263 = (i__76230 + (1));
seq__76227 = G__76260;
chunk__76228 = G__76261;
count__76229 = G__76262;
i__76230 = G__76263;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__76227);
if(temp__5753__auto__){
var seq__76227__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76227__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__76227__$1);
var G__76264 = cljs.core.chunk_rest(seq__76227__$1);
var G__76265 = c__4679__auto__;
var G__76266 = cljs.core.count(c__4679__auto__);
var G__76267 = (0);
seq__76227 = G__76264;
chunk__76228 = G__76265;
count__76229 = G__76266;
i__76230 = G__76267;
continue;
} else {
var vec__76244 = cljs.core.first(seq__76227__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76244,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76244,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__76269 = cljs.core.next(seq__76227__$1);
var G__76270 = null;
var G__76271 = (0);
var G__76272 = (0);
seq__76227 = G__76269;
chunk__76228 = G__76270;
count__76229 = G__76271;
i__76230 = G__76272;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__76211_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__76211_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__76213_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__76213_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__76214_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__76214_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__76215_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__76215_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__76249){
var map__76250 = p__76249;
var map__76250__$1 = cljs.core.__destructure_map(map__76250);
var svc = map__76250__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76250__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76250__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
