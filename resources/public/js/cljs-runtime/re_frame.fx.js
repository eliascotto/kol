goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__77689 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__77690 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__77690);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___78025 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___78025)){
var new_db_78026 = temp__5753__auto___78025;
var fexpr__77703_78027 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__77703_78027.cljs$core$IFn$_invoke$arity$1 ? fexpr__77703_78027.cljs$core$IFn$_invoke$arity$1(new_db_78026) : fexpr__77703_78027.call(null,new_db_78026));
} else {
}

var seq__77705 = cljs.core.seq(effects_without_db);
var chunk__77706 = null;
var count__77707 = (0);
var i__77708 = (0);
while(true){
if((i__77708 < count__77707)){
var vec__77753 = chunk__77706.cljs$core$IIndexed$_nth$arity$2(null,i__77708);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77753,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77753,(1),null);
var temp__5751__auto___78031 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___78031)){
var effect_fn_78032 = temp__5751__auto___78031;
(effect_fn_78032.cljs$core$IFn$_invoke$arity$1 ? effect_fn_78032.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_78032.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__78033 = seq__77705;
var G__78034 = chunk__77706;
var G__78035 = count__77707;
var G__78036 = (i__77708 + (1));
seq__77705 = G__78033;
chunk__77706 = G__78034;
count__77707 = G__78035;
i__77708 = G__78036;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__77705);
if(temp__5753__auto__){
var seq__77705__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77705__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77705__$1);
var G__78037 = cljs.core.chunk_rest(seq__77705__$1);
var G__78038 = c__4679__auto__;
var G__78039 = cljs.core.count(c__4679__auto__);
var G__78040 = (0);
seq__77705 = G__78037;
chunk__77706 = G__78038;
count__77707 = G__78039;
i__77708 = G__78040;
continue;
} else {
var vec__77769 = cljs.core.first(seq__77705__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77769,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77769,(1),null);
var temp__5751__auto___78044 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___78044)){
var effect_fn_78045 = temp__5751__auto___78044;
(effect_fn_78045.cljs$core$IFn$_invoke$arity$1 ? effect_fn_78045.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_78045.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__78046 = cljs.core.next(seq__77705__$1);
var G__78047 = null;
var G__78048 = (0);
var G__78049 = (0);
seq__77705 = G__78046;
chunk__77706 = G__78047;
count__77707 = G__78048;
i__77708 = G__78049;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__77053__auto___78050 = re_frame.interop.now();
var duration__77054__auto___78051 = (end__77053__auto___78050 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__77054__auto___78051,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__77053__auto___78050);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__77689);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___78052 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___78052)){
var new_db_78053 = temp__5753__auto___78052;
var fexpr__77785_78054 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__77785_78054.cljs$core$IFn$_invoke$arity$1 ? fexpr__77785_78054.cljs$core$IFn$_invoke$arity$1(new_db_78053) : fexpr__77785_78054.call(null,new_db_78053));
} else {
}

var seq__77786 = cljs.core.seq(effects_without_db);
var chunk__77787 = null;
var count__77788 = (0);
var i__77789 = (0);
while(true){
if((i__77789 < count__77788)){
var vec__77802 = chunk__77787.cljs$core$IIndexed$_nth$arity$2(null,i__77789);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77802,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77802,(1),null);
var temp__5751__auto___78059 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___78059)){
var effect_fn_78060 = temp__5751__auto___78059;
(effect_fn_78060.cljs$core$IFn$_invoke$arity$1 ? effect_fn_78060.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_78060.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__78061 = seq__77786;
var G__78062 = chunk__77787;
var G__78063 = count__77788;
var G__78064 = (i__77789 + (1));
seq__77786 = G__78061;
chunk__77787 = G__78062;
count__77788 = G__78063;
i__77789 = G__78064;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__77786);
if(temp__5753__auto__){
var seq__77786__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77786__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77786__$1);
var G__78065 = cljs.core.chunk_rest(seq__77786__$1);
var G__78066 = c__4679__auto__;
var G__78067 = cljs.core.count(c__4679__auto__);
var G__78068 = (0);
seq__77786 = G__78065;
chunk__77787 = G__78066;
count__77788 = G__78067;
i__77789 = G__78068;
continue;
} else {
var vec__77809 = cljs.core.first(seq__77786__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77809,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77809,(1),null);
var temp__5751__auto___78075 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___78075)){
var effect_fn_78076 = temp__5751__auto___78075;
(effect_fn_78076.cljs$core$IFn$_invoke$arity$1 ? effect_fn_78076.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_78076.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__78077 = cljs.core.next(seq__77786__$1);
var G__78078 = null;
var G__78079 = (0);
var G__78080 = (0);
seq__77786 = G__78077;
chunk__77787 = G__78078;
count__77788 = G__78079;
i__77789 = G__78080;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__77814){
var map__77815 = p__77814;
var map__77815__$1 = cljs.core.__destructure_map(map__77815);
var effect = map__77815__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77815__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77815__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__77825 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__77826 = null;
var count__77827 = (0);
var i__77828 = (0);
while(true){
if((i__77828 < count__77827)){
var effect = chunk__77826.cljs$core$IIndexed$_nth$arity$2(null,i__77828);
re_frame.fx.dispatch_later(effect);


var G__78084 = seq__77825;
var G__78085 = chunk__77826;
var G__78086 = count__77827;
var G__78087 = (i__77828 + (1));
seq__77825 = G__78084;
chunk__77826 = G__78085;
count__77827 = G__78086;
i__77828 = G__78087;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__77825);
if(temp__5753__auto__){
var seq__77825__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77825__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77825__$1);
var G__78088 = cljs.core.chunk_rest(seq__77825__$1);
var G__78089 = c__4679__auto__;
var G__78090 = cljs.core.count(c__4679__auto__);
var G__78091 = (0);
seq__77825 = G__78088;
chunk__77826 = G__78089;
count__77827 = G__78090;
i__77828 = G__78091;
continue;
} else {
var effect = cljs.core.first(seq__77825__$1);
re_frame.fx.dispatch_later(effect);


var G__78092 = cljs.core.next(seq__77825__$1);
var G__78093 = null;
var G__78094 = (0);
var G__78095 = (0);
seq__77825 = G__78092;
chunk__77826 = G__78093;
count__77827 = G__78094;
i__77828 = G__78095;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__77855 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__77856 = null;
var count__77857 = (0);
var i__77858 = (0);
while(true){
if((i__77858 < count__77857)){
var vec__77906 = chunk__77856.cljs$core$IIndexed$_nth$arity$2(null,i__77858);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77906,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77906,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___78103 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___78103)){
var effect_fn_78104 = temp__5751__auto___78103;
(effect_fn_78104.cljs$core$IFn$_invoke$arity$1 ? effect_fn_78104.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_78104.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__78112 = seq__77855;
var G__78113 = chunk__77856;
var G__78114 = count__77857;
var G__78115 = (i__77858 + (1));
seq__77855 = G__78112;
chunk__77856 = G__78113;
count__77857 = G__78114;
i__77858 = G__78115;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__77855);
if(temp__5753__auto__){
var seq__77855__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77855__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77855__$1);
var G__78122 = cljs.core.chunk_rest(seq__77855__$1);
var G__78123 = c__4679__auto__;
var G__78124 = cljs.core.count(c__4679__auto__);
var G__78125 = (0);
seq__77855 = G__78122;
chunk__77856 = G__78123;
count__77857 = G__78124;
i__77858 = G__78125;
continue;
} else {
var vec__77920 = cljs.core.first(seq__77855__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77920,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77920,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___78128 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___78128)){
var effect_fn_78129 = temp__5751__auto___78128;
(effect_fn_78129.cljs$core$IFn$_invoke$arity$1 ? effect_fn_78129.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_78129.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__78130 = cljs.core.next(seq__77855__$1);
var G__78132 = null;
var G__78133 = (0);
var G__78134 = (0);
seq__77855 = G__78130;
chunk__77856 = G__78132;
count__77857 = G__78133;
i__77858 = G__78134;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__77944 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__77945 = null;
var count__77946 = (0);
var i__77947 = (0);
while(true){
if((i__77947 < count__77946)){
var event = chunk__77945.cljs$core$IIndexed$_nth$arity$2(null,i__77947);
re_frame.router.dispatch(event);


var G__78144 = seq__77944;
var G__78145 = chunk__77945;
var G__78146 = count__77946;
var G__78147 = (i__77947 + (1));
seq__77944 = G__78144;
chunk__77945 = G__78145;
count__77946 = G__78146;
i__77947 = G__78147;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__77944);
if(temp__5753__auto__){
var seq__77944__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77944__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77944__$1);
var G__78155 = cljs.core.chunk_rest(seq__77944__$1);
var G__78156 = c__4679__auto__;
var G__78157 = cljs.core.count(c__4679__auto__);
var G__78158 = (0);
seq__77944 = G__78155;
chunk__77945 = G__78156;
count__77946 = G__78157;
i__77947 = G__78158;
continue;
} else {
var event = cljs.core.first(seq__77944__$1);
re_frame.router.dispatch(event);


var G__78162 = cljs.core.next(seq__77944__$1);
var G__78163 = null;
var G__78164 = (0);
var G__78165 = (0);
seq__77944 = G__78162;
chunk__77945 = G__78163;
count__77946 = G__78164;
i__77947 = G__78165;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__77967 = cljs.core.seq(value);
var chunk__77968 = null;
var count__77969 = (0);
var i__77970 = (0);
while(true){
if((i__77970 < count__77969)){
var event = chunk__77968.cljs$core$IIndexed$_nth$arity$2(null,i__77970);
clear_event(event);


var G__78172 = seq__77967;
var G__78173 = chunk__77968;
var G__78174 = count__77969;
var G__78175 = (i__77970 + (1));
seq__77967 = G__78172;
chunk__77968 = G__78173;
count__77969 = G__78174;
i__77970 = G__78175;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__77967);
if(temp__5753__auto__){
var seq__77967__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77967__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__77967__$1);
var G__78179 = cljs.core.chunk_rest(seq__77967__$1);
var G__78180 = c__4679__auto__;
var G__78181 = cljs.core.count(c__4679__auto__);
var G__78182 = (0);
seq__77967 = G__78179;
chunk__77968 = G__78180;
count__77969 = G__78181;
i__77970 = G__78182;
continue;
} else {
var event = cljs.core.first(seq__77967__$1);
clear_event(event);


var G__78184 = cljs.core.next(seq__77967__$1);
var G__78185 = null;
var G__78186 = (0);
var G__78187 = (0);
seq__77967 = G__78184;
chunk__77968 = G__78185;
count__77969 = G__78186;
i__77970 = G__78187;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
