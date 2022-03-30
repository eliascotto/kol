goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__71874,res){
var map__71879 = p__71874;
var map__71879__$1 = cljs.core.__destructure_map(map__71879);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71879__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71879__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__71886 = res;
var G__71886__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71886,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__71886);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71886__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__71886__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__71891 = arguments.length;
switch (G__71891) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__71897,msg,handlers,timeout_after_ms){
var map__71898 = p__71897;
var map__71898__$1 = cljs.core.__destructure_map(map__71898);
var runtime = map__71898__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71898__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72286 = arguments.length;
var i__4865__auto___72288 = (0);
while(true){
if((i__4865__auto___72288 < len__4864__auto___72286)){
args__4870__auto__.push((arguments[i__4865__auto___72288]));

var G__72290 = (i__4865__auto___72288 + (1));
i__4865__auto___72288 = G__72290;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__71911,ev,args){
var map__71912 = p__71911;
var map__71912__$1 = cljs.core.__destructure_map(map__71912);
var runtime = map__71912__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71912__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__71918 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__71922 = null;
var count__71923 = (0);
var i__71924 = (0);
while(true){
if((i__71924 < count__71923)){
var ext = chunk__71922.cljs$core$IIndexed$_nth$arity$2(null,i__71924);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__72298 = seq__71918;
var G__72299 = chunk__71922;
var G__72300 = count__71923;
var G__72301 = (i__71924 + (1));
seq__71918 = G__72298;
chunk__71922 = G__72299;
count__71923 = G__72300;
i__71924 = G__72301;
continue;
} else {
var G__72302 = seq__71918;
var G__72303 = chunk__71922;
var G__72304 = count__71923;
var G__72305 = (i__71924 + (1));
seq__71918 = G__72302;
chunk__71922 = G__72303;
count__71923 = G__72304;
i__71924 = G__72305;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__71918);
if(temp__5753__auto__){
var seq__71918__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71918__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__71918__$1);
var G__72307 = cljs.core.chunk_rest(seq__71918__$1);
var G__72308 = c__4679__auto__;
var G__72309 = cljs.core.count(c__4679__auto__);
var G__72310 = (0);
seq__71918 = G__72307;
chunk__71922 = G__72308;
count__71923 = G__72309;
i__71924 = G__72310;
continue;
} else {
var ext = cljs.core.first(seq__71918__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__72313 = cljs.core.next(seq__71918__$1);
var G__72314 = null;
var G__72315 = (0);
var G__72316 = (0);
seq__71918 = G__72313;
chunk__71922 = G__72314;
count__71923 = G__72315;
i__71924 = G__72316;
continue;
} else {
var G__72319 = cljs.core.next(seq__71918__$1);
var G__72320 = null;
var G__72321 = (0);
var G__72322 = (0);
seq__71918 = G__72319;
chunk__71922 = G__72320;
count__71923 = G__72321;
i__71924 = G__72322;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq71905){
var G__71906 = cljs.core.first(seq71905);
var seq71905__$1 = cljs.core.next(seq71905);
var G__71907 = cljs.core.first(seq71905__$1);
var seq71905__$2 = cljs.core.next(seq71905__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71906,G__71907,seq71905__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__72029,p__72030){
var map__72031 = p__72029;
var map__72031__$1 = cljs.core.__destructure_map(map__72031);
var runtime = map__72031__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72031__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__72032 = p__72030;
var map__72032__$1 = cljs.core.__destructure_map(map__72032);
var msg = map__72032__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72032__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__72043 = cljs.core.deref(state_ref);
var map__72043__$1 = cljs.core.__destructure_map(map__72043);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72043__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72043__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__72095){
var map__72097 = p__72095;
var map__72097__$1 = cljs.core.__destructure_map(map__72097);
var runtime = map__72097__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72097__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__72127,msg){
var map__72139 = p__72127;
var map__72139__$1 = cljs.core.__destructure_map(map__72139);
var runtime = map__72139__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72139__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__72159,key,p__72160){
var map__72161 = p__72159;
var map__72161__$1 = cljs.core.__destructure_map(map__72161);
var state = map__72161__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72161__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__72162 = p__72160;
var map__72162__$1 = cljs.core.__destructure_map(map__72162);
var spec = map__72162__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72162__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__72168,key,spec){
var map__72170 = p__72168;
var map__72170__$1 = cljs.core.__destructure_map(map__72170);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72170__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__72172_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__72172_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__72173_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__72173_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__72174_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__72174_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__72175_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__72175_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__72176_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__72176_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__72185,key){
var map__72187 = p__72185;
var map__72187__$1 = cljs.core.__destructure_map(map__72187);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72187__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__72196,msg){
var map__72197 = p__72196;
var map__72197__$1 = cljs.core.__destructure_map(map__72197);
var runtime = map__72197__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72197__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__72203,p__72204){
var map__72207 = p__72203;
var map__72207__$1 = cljs.core.__destructure_map(map__72207);
var runtime = map__72207__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72207__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__72208 = p__72204;
var map__72208__$1 = cljs.core.__destructure_map(map__72208);
var msg = map__72208__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72208__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72208__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__72221 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__72223 = null;
var count__72224 = (0);
var i__72225 = (0);
while(true){
if((i__72225 < count__72224)){
var map__72247 = chunk__72223.cljs$core$IIndexed$_nth$arity$2(null,i__72225);
var map__72247__$1 = cljs.core.__destructure_map(map__72247);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72247__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__72372 = seq__72221;
var G__72373 = chunk__72223;
var G__72374 = count__72224;
var G__72375 = (i__72225 + (1));
seq__72221 = G__72372;
chunk__72223 = G__72373;
count__72224 = G__72374;
i__72225 = G__72375;
continue;
} else {
var G__72376 = seq__72221;
var G__72377 = chunk__72223;
var G__72378 = count__72224;
var G__72379 = (i__72225 + (1));
seq__72221 = G__72376;
chunk__72223 = G__72377;
count__72224 = G__72378;
i__72225 = G__72379;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__72221);
if(temp__5753__auto__){
var seq__72221__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72221__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__72221__$1);
var G__72380 = cljs.core.chunk_rest(seq__72221__$1);
var G__72381 = c__4679__auto__;
var G__72382 = cljs.core.count(c__4679__auto__);
var G__72383 = (0);
seq__72221 = G__72380;
chunk__72223 = G__72381;
count__72224 = G__72382;
i__72225 = G__72383;
continue;
} else {
var map__72252 = cljs.core.first(seq__72221__$1);
var map__72252__$1 = cljs.core.__destructure_map(map__72252);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72252__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__72385 = cljs.core.next(seq__72221__$1);
var G__72386 = null;
var G__72387 = (0);
var G__72388 = (0);
seq__72221 = G__72385;
chunk__72223 = G__72386;
count__72224 = G__72387;
i__72225 = G__72388;
continue;
} else {
var G__72389 = cljs.core.next(seq__72221__$1);
var G__72390 = null;
var G__72391 = (0);
var G__72392 = (0);
seq__72221 = G__72389;
chunk__72223 = G__72390;
count__72224 = G__72391;
i__72225 = G__72392;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
