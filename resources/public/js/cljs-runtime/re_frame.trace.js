goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = true;
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__77082){
var map__77083 = p__77082;
var map__77083__$1 = cljs.core.__destructure_map(map__77083);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77083__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77083__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77083__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77083__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__77088_77135 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__77089_77136 = null;
var count__77090_77137 = (0);
var i__77091_77138 = (0);
while(true){
if((i__77091_77138 < count__77090_77137)){
var vec__77108_77139 = chunk__77089_77136.cljs$core$IIndexed$_nth$arity$2(null,i__77091_77138);
var k_77140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77108_77139,(0),null);
var cb_77141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77108_77139,(1),null);
try{var G__77113_77146 = cljs.core.deref(re_frame.trace.traces);
(cb_77141.cljs$core$IFn$_invoke$arity$1 ? cb_77141.cljs$core$IFn$_invoke$arity$1(G__77113_77146) : cb_77141.call(null,G__77113_77146));
}catch (e77112){var e_77147 = e77112;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_77140,"while storing",cljs.core.deref(re_frame.trace.traces),e_77147], 0));
}

var G__77151 = seq__77088_77135;
var G__77152 = chunk__77089_77136;
var G__77153 = count__77090_77137;
var G__77154 = (i__77091_77138 + (1));
seq__77088_77135 = G__77151;
chunk__77089_77136 = G__77152;
count__77090_77137 = G__77153;
i__77091_77138 = G__77154;
continue;
} else {
var temp__5753__auto___77156 = cljs.core.seq(seq__77088_77135);
if(temp__5753__auto___77156){
var seq__77088_77157__$1 = temp__5753__auto___77156;
if(cljs.core.chunked_seq_QMARK_(seq__77088_77157__$1)){
var c__4679__auto___77158 = cljs.core.chunk_first(seq__77088_77157__$1);
var G__77159 = cljs.core.chunk_rest(seq__77088_77157__$1);
var G__77160 = c__4679__auto___77158;
var G__77161 = cljs.core.count(c__4679__auto___77158);
var G__77162 = (0);
seq__77088_77135 = G__77159;
chunk__77089_77136 = G__77160;
count__77090_77137 = G__77161;
i__77091_77138 = G__77162;
continue;
} else {
var vec__77114_77163 = cljs.core.first(seq__77088_77157__$1);
var k_77164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77114_77163,(0),null);
var cb_77165 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77114_77163,(1),null);
try{var G__77118_77166 = cljs.core.deref(re_frame.trace.traces);
(cb_77165.cljs$core$IFn$_invoke$arity$1 ? cb_77165.cljs$core$IFn$_invoke$arity$1(G__77118_77166) : cb_77165.call(null,G__77118_77166));
}catch (e77117){var e_77170 = e77117;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_77164,"while storing",cljs.core.deref(re_frame.trace.traces),e_77170], 0));
}

var G__77171 = cljs.core.next(seq__77088_77157__$1);
var G__77172 = null;
var G__77173 = (0);
var G__77174 = (0);
seq__77088_77135 = G__77171;
chunk__77089_77136 = G__77172;
count__77090_77137 = G__77173;
i__77091_77138 = G__77174;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
