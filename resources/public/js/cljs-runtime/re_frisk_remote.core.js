goog.provide('re_frisk_remote.core');
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.send_state !== 'undefined')){
} else {
re_frisk_remote.core.send_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.initialized !== 'undefined')){
} else {
re_frisk_remote.core.initialized = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.chsk_send !== 'undefined')){
} else {
re_frisk_remote.core.chsk_send = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.normalize_db_fn !== 'undefined')){
} else {
re_frisk_remote.core.normalize_db_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.ignore_events !== 'undefined')){
} else {
re_frisk_remote.core.ignore_events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frisk_remote.core.send = (function re_frisk_remote$core$send(message){
if(cljs.core.truth_((function (){var and__4251__auto__ = message;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = cljs.core.deref(re_frisk_remote.core.send_state);
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.deref(re_frisk_remote.core.chsk_send);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
var G__77159 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","message","refrisk/message",-1493324332),message], null);
var fexpr__77158 = cljs.core.deref(re_frisk_remote.core.chsk_send);
return (fexpr__77158.cljs$core$IFn$_invoke$arity$1 ? fexpr__77158.cljs$core$IFn$_invoke$arity$1(G__77159) : fexpr__77158.call(null,G__77159));
} else {
return null;
}
});
re_frisk_remote.core.get_db = (function re_frisk_remote$core$get_db(){
var db = cljs.core.deref(re_frame.db.app_db);
if(cljs.core.truth_(cljs.core.deref(re_frisk_remote.core.normalize_db_fn))){
var fexpr__77160 = cljs.core.deref(re_frisk_remote.core.normalize_db_fn);
return (fexpr__77160.cljs$core$IFn$_invoke$arity$1 ? fexpr__77160.cljs$core$IFn$_invoke$arity$1(db) : fexpr__77160.call(null,db));
} else {
return db;
}
});
re_frisk_remote.core.send_subs_delta = (function re_frisk_remote$core$send_subs_delta(){
var subs = re_frisk.utils.get_subs();
var temp__5753__auto__ = re_frisk_remote.delta.delta.delta(new cljs.core.Keyword(null,"prev-subs","prev-subs",982800397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk_remote.core.send_state)),subs);
if(cljs.core.truth_(temp__5753__auto__)){
var d = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk_remote.core.send_state,cljs.core.assoc,new cljs.core.Keyword(null,"prev-subs","prev-subs",982800397),subs);

return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","subs-delta","refrisk/subs-delta",1998434908),d], null));
} else {
return null;
}
});
re_frisk_remote.core.send_app_db_delta = (function re_frisk_remote$core$send_app_db_delta(){
var db = re_frisk_remote.core.get_db();
var temp__5753__auto__ = re_frisk_remote.delta.delta.delta(new cljs.core.Keyword(null,"prev-app-db","prev-app-db",-402688638).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk_remote.core.send_state)),db);
if(cljs.core.truth_(temp__5753__auto__)){
var d = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk_remote.core.send_state,cljs.core.assoc,new cljs.core.Keyword(null,"prev-app-db","prev-app-db",-402688638),db);

return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","app-db-delta","refrisk/app-db-delta",-1494883613),d], null));
} else {
return null;
}
});
re_frisk_remote.core.send_db_and_subs = (function re_frisk_remote$core$send_db_and_subs(){
re_frisk_remote.core.send_subs_delta();

return re_frisk_remote.core.send_app_db_delta();
});
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.init_stat_sent !== 'undefined')){
} else {
re_frisk_remote.core.init_stat_sent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
re_frisk_remote.core.send_init_stat = (function re_frisk_remote$core$send_init_stat(){
if(cljs.core.truth_(cljs.core.deref(re_frisk_remote.core.init_stat_sent))){
return null;
} else {
cljs.core.reset_BANG_(re_frisk_remote.core.init_stat_sent,true);

return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","init-stat","refrisk/init-stat",-1295270684),re_frisk.stat.get_re_frame_handlers()], null));
}
});
re_frisk_remote.core.post_event_callback = (function re_frisk_remote$core$post_event_callback(value,queue){
if(cljs.core.truth_(cljs.core.deref(re_frisk_remote.core.send_state))){
var db = re_frisk_remote.core.get_db();
var diff = re_frisk.diff.diff.diff(new cljs.core.Keyword(null,"prev-event-app-db","prev-event-app-db",555318997).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk_remote.core.send_state)),db);
re_frisk_remote.core.send_init_stat();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk_remote.core.send_state,cljs.core.assoc,new cljs.core.Keyword(null,"prev-event-app-db","prev-event-app-db",555318997),db);

if(((cljs.core.not(cljs.core.deref(re_frisk_remote.core.ignore_events))) || (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk_remote.core.ignore_events),cljs.core.first(value)))))){
re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","event","refrisk/event",1355100504),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",301435442),value,new cljs.core.Keyword(null,"app-db-diff","app-db-diff",709588713),diff,new cljs.core.Keyword(null,"queue","queue",1455835879),queue], null)], null));
} else {
}

return re_frisk.utils.call_and_chill(re_frisk_remote.core.send_db_and_subs,(500));
} else {
return null;
}
});
re_frisk_remote.core.send_views = (function re_frisk_remote$core$send_views(views){
if(cljs.core.seq(views)){
return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","views","refrisk/views",396542973),views], null));
} else {
return null;
}
});
re_frisk_remote.core.trace_cb = (function re_frisk_remote$core$trace_cb(traces){
if(cljs.core.truth_(cljs.core.deref(re_frisk_remote.core.send_state))){
re_frisk_remote.core.send_init_stat();

re_frisk.utils.call_and_chill(re_frisk_remote.core.send_db_and_subs,(500));

var traces__$1 = re_frisk.trace.update_views_and_get_traces(re_frisk_remote.core.send_views,traces);
var seq__77162 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,re_frisk.trace.normalize_traces(traces__$1,cljs.core.deref(re_frisk_remote.core.ignore_events))));
var chunk__77163 = null;
var count__77164 = (0);
var i__77165 = (0);
while(true){
if((i__77165 < count__77164)){
var vec__77175 = chunk__77163.cljs$core$IIndexed$_nth$arity$2(null,i__77165);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77175,(0),null);
var trace = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77175,(1),null);
setTimeout(((function (seq__77162,chunk__77163,count__77164,i__77165,vec__77175,i,trace,traces__$1){
return (function (){
return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","event","refrisk/event",1355100504),trace], null));
});})(seq__77162,chunk__77163,count__77164,i__77165,vec__77175,i,trace,traces__$1))
,(i * (20)));


var G__77310 = seq__77162;
var G__77311 = chunk__77163;
var G__77312 = count__77164;
var G__77313 = (i__77165 + (1));
seq__77162 = G__77310;
chunk__77163 = G__77311;
count__77164 = G__77312;
i__77165 = G__77313;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__77162);
if(temp__5753__auto__){
var seq__77162__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77162__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77162__$1);
var G__77314 = cljs.core.chunk_rest(seq__77162__$1);
var G__77315 = c__4679__auto__;
var G__77316 = cljs.core.count(c__4679__auto__);
var G__77317 = (0);
seq__77162 = G__77314;
chunk__77163 = G__77315;
count__77164 = G__77316;
i__77165 = G__77317;
continue;
} else {
var vec__77178 = cljs.core.first(seq__77162__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77178,(0),null);
var trace = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77178,(1),null);
setTimeout(((function (seq__77162,chunk__77163,count__77164,i__77165,vec__77178,i,trace,seq__77162__$1,temp__5753__auto__,traces__$1){
return (function (){
return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","event","refrisk/event",1355100504),trace], null));
});})(seq__77162,chunk__77163,count__77164,i__77165,vec__77178,i,trace,seq__77162__$1,temp__5753__auto__,traces__$1))
,(i * (20)));


var G__77318 = cljs.core.next(seq__77162__$1);
var G__77319 = null;
var G__77320 = (0);
var G__77321 = (0);
seq__77162 = G__77318;
chunk__77163 = G__77319;
count__77164 = G__77320;
i__77165 = G__77321;
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
if((typeof re_frisk_remote !== 'undefined') && (typeof re_frisk_remote.core !== 'undefined') && (typeof re_frisk_remote.core.event_msg_handler !== 'undefined')){
} else {
/**
 * Sente `event-msg`s handler
 */
re_frisk_remote.core.event_msg_handler = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77181 = cljs.core.get_global_hierarchy;
return (fexpr__77181.cljs$core$IFn$_invoke$arity$0 ? fexpr__77181.cljs$core$IFn$_invoke$arity$0() : fexpr__77181.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-frisk-remote.core","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
re_frisk_remote.core.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__77184){
var map__77185 = p__77184;
var map__77185__$1 = cljs.core.__destructure_map(map__77185);
var msg = map__77185__$1;
var vec__77186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77185__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var map__77189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77186,(0),null);
var map__77189__$1 = cljs.core.__destructure_map(map__77189);
var was_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77189__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
var map__77190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77186,(1),null);
var map__77190__$1 = cljs.core.__destructure_map(map__77190);
var now_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77190__$1,new cljs.core.Keyword(null,"open?","open?",1238443125));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(was_open_QMARK_,now_open_QMARK_)){
return cljs.core.reset_BANG_(re_frisk_remote.core.send_state,null);
} else {
return null;
}
}));
re_frisk_remote.core.enabled = (function re_frisk_remote$core$enabled(){
if(cljs.core.truth_(cljs.core.deref(re_frisk_remote.core.send_state))){
re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","subs","refrisk/subs",-1488398437),new cljs.core.Keyword(null,"prev-subs","prev-subs",982800397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk_remote.core.send_state))], null));

return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","app-db","refrisk/app-db",-194545484),new cljs.core.Keyword(null,"prev-app-db","prev-app-db",-402688638).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk_remote.core.send_state))], null));
} else {
var db = re_frisk_remote.core.get_db();
var subs = re_frisk.utils.get_subs();
cljs.core.reset_BANG_(re_frisk_remote.core.send_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"prev-event-app-db","prev-event-app-db",555318997),db,new cljs.core.Keyword(null,"prev-app-db","prev-app-db",-402688638),db,new cljs.core.Keyword(null,"prev-subs","prev-subs",982800397),subs], null));

re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","subs","refrisk/subs",-1488398437),subs], null));

return re_frisk_remote.core.send(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("refrisk","app-db","refrisk/app-db",-194545484),db], null));
}
});
re_frisk_remote.core.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__77192){
var map__77193 = p__77192;
var map__77193__$1 = cljs.core.__destructure_map(map__77193);
var vec__77194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77193__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77194,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77194,(1),null);
var G__77197 = type;
var G__77197__$1 = (((G__77197 instanceof cljs.core.Keyword))?G__77197.fqn:null);
switch (G__77197__$1) {
case "refrisk/enable":
return re_frisk_remote.core.enabled();

break;
case "refrisk/disable":
return cljs.core.reset_BANG_(re_frisk_remote.core.send_state,null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77197__$1)].join('')));

}
}));
re_frisk_remote.core.event_msg_handler.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg){
return null;
}));
re_frisk_remote.core.start_socket_and_router = (function re_frisk_remote$core$start_socket_and_router(host){
taoensso.timbre.merge_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["taoensso.sente","taoensso.sente.*"], null)], null));

var map__77199 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/chsk",null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"re-frisk-remote","re-frisk-remote",-396545212)], null),new cljs.core.Keyword(null,"packer","packer",66077544),taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlerForForeign","handlerForForeign",-44914005),(function (){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (){
return "ForeignType";
}),(function (){
return "";
}));
})], null),cljs.core.PersistentArrayMap.EMPTY)], null)], 0));
var map__77199__$1 = cljs.core.__destructure_map(map__77199);
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77199__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77199__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
cljs.core.reset_BANG_(re_frisk_remote.core.chsk_send,send_fn);

return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,re_frisk_remote.core.event_msg_handler);
});
re_frisk_remote.core.patch_reagent_BANG_ = (function re_frisk_remote$core$patch_reagent_BANG_(){
re_frisk.reagent.impl.component.patch_wrap_funs();

return re_frisk.reagent.impl.batching.patch_next_tick();
});
re_frisk_remote.core.enable_re_frisk_remote_BANG_ = (function re_frisk_remote$core$enable_re_frisk_remote_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___77323 = arguments.length;
var i__4865__auto___77324 = (0);
while(true){
if((i__4865__auto___77324 < len__4864__auto___77323)){
args__4870__auto__.push((arguments[i__4865__auto___77324]));

var G__77325 = (i__4865__auto___77324 + (1));
i__4865__auto___77324 = G__77325;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frisk_remote.core.enable_re_frisk_remote_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frisk_remote.core.enable_re_frisk_remote_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__77208){
var vec__77209 = p__77208;
var map__77212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77209,(0),null);
var map__77212__$1 = cljs.core.__destructure_map(map__77212);
var opts = map__77212__$1;
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77212__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
if(cljs.core.truth_(cljs.core.deref(re_frisk_remote.core.initialized))){
return null;
} else {
cljs.core.reset_BANG_(re_frisk_remote.core.initialized,true);

cljs.core.reset_BANG_(re_frisk_remote.core.normalize_db_fn,new cljs.core.Keyword(null,"normalize-db-fn","normalize-db-fn",37787892).cljs$core$IFn$_invoke$arity$1(opts));

cljs.core.reset_BANG_(re_frisk_remote.core.ignore_events,new cljs.core.Keyword(null,"ignore-events","ignore-events",1864684934).cljs$core$IFn$_invoke$arity$1(opts));

re_frisk_remote.core.start_socket_and_router((function (){var or__4253__auto__ = host;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "localhost:4567";
}
})());

if(re_frame.trace.is_trace_enabled_QMARK_()){
re_frisk_remote.core.patch_reagent_BANG_();

return re_frame.trace.register_trace_cb(new cljs.core.Keyword(null,"re-frisk-trace","re-frisk-trace",912949928),re_frisk_remote.core.trace_cb);
} else {
return re_frame.core.add_post_event_callback.cljs$core$IFn$_invoke$arity$1(re_frisk_remote.core.post_event_callback);
}
}
}));

(re_frisk_remote.core.enable_re_frisk_remote_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk_remote.core.enable_re_frisk_remote_BANG_.cljs$lang$applyTo = (function (seq77201){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77201));
}));

re_frisk_remote.core.enable = (function re_frisk_remote$core$enable(var_args){
var args__4870__auto__ = [];
var len__4864__auto___77326 = arguments.length;
var i__4865__auto___77327 = (0);
while(true){
if((i__4865__auto___77327 < len__4864__auto___77326)){
args__4870__auto__.push((arguments[i__4865__auto___77327]));

var G__77328 = (i__4865__auto___77327 + (1));
i__4865__auto___77327 = G__77328;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_frisk_remote.core.enable.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_frisk_remote.core.enable.cljs$core$IFn$_invoke$arity$variadic = (function (p__77278){
var vec__77279 = p__77278;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77279,(0),null);
return re_frisk_remote.core.enable_re_frisk_remote_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0));
}));

(re_frisk_remote.core.enable.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frisk_remote.core.enable.cljs$lang$applyTo = (function (seq77247){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77247));
}));


//# sourceMappingURL=re_frisk_remote.core.js.map
