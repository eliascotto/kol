goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68670 = arguments.length;
var i__4865__auto___68671 = (0);
while(true){
if((i__4865__auto___68671 < len__4864__auto___68670)){
args__4870__auto__.push((arguments[i__4865__auto___68671]));

var G__68672 = (i__4865__auto___68671 + (1));
i__4865__auto___68671 = G__68672;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq68274){
var G__68275 = cljs.core.first(seq68274);
var seq68274__$1 = cljs.core.next(seq68274);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68275,seq68274__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__68280 = cljs.core.seq(sources);
var chunk__68281 = null;
var count__68282 = (0);
var i__68283 = (0);
while(true){
if((i__68283 < count__68282)){
var map__68300 = chunk__68281.cljs$core$IIndexed$_nth$arity$2(null,i__68283);
var map__68300__$1 = cljs.core.__destructure_map(map__68300);
var src = map__68300__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68300__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68300__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68300__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68300__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e68304){var e_68673 = e68304;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_68673);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_68673.message)].join('')));
}

var G__68674 = seq__68280;
var G__68675 = chunk__68281;
var G__68676 = count__68282;
var G__68677 = (i__68283 + (1));
seq__68280 = G__68674;
chunk__68281 = G__68675;
count__68282 = G__68676;
i__68283 = G__68677;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__68280);
if(temp__5753__auto__){
var seq__68280__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68280__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__68280__$1);
var G__68678 = cljs.core.chunk_rest(seq__68280__$1);
var G__68679 = c__4679__auto__;
var G__68680 = cljs.core.count(c__4679__auto__);
var G__68681 = (0);
seq__68280 = G__68678;
chunk__68281 = G__68679;
count__68282 = G__68680;
i__68283 = G__68681;
continue;
} else {
var map__68312 = cljs.core.first(seq__68280__$1);
var map__68312__$1 = cljs.core.__destructure_map(map__68312);
var src = map__68312__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68312__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68312__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68312__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68312__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e68316){var e_68682 = e68316;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_68682);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_68682.message)].join('')));
}

var G__68683 = cljs.core.next(seq__68280__$1);
var G__68684 = null;
var G__68685 = (0);
var G__68686 = (0);
seq__68280 = G__68683;
chunk__68281 = G__68684;
count__68282 = G__68685;
i__68283 = G__68686;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__68320 = cljs.core.seq(js_requires);
var chunk__68321 = null;
var count__68322 = (0);
var i__68323 = (0);
while(true){
if((i__68323 < count__68322)){
var js_ns = chunk__68321.cljs$core$IIndexed$_nth$arity$2(null,i__68323);
var require_str_68687 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_68687);


var G__68688 = seq__68320;
var G__68689 = chunk__68321;
var G__68690 = count__68322;
var G__68691 = (i__68323 + (1));
seq__68320 = G__68688;
chunk__68321 = G__68689;
count__68322 = G__68690;
i__68323 = G__68691;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__68320);
if(temp__5753__auto__){
var seq__68320__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68320__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__68320__$1);
var G__68692 = cljs.core.chunk_rest(seq__68320__$1);
var G__68693 = c__4679__auto__;
var G__68694 = cljs.core.count(c__4679__auto__);
var G__68695 = (0);
seq__68320 = G__68692;
chunk__68321 = G__68693;
count__68322 = G__68694;
i__68323 = G__68695;
continue;
} else {
var js_ns = cljs.core.first(seq__68320__$1);
var require_str_68696 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_68696);


var G__68697 = cljs.core.next(seq__68320__$1);
var G__68698 = null;
var G__68699 = (0);
var G__68700 = (0);
seq__68320 = G__68697;
chunk__68321 = G__68698;
count__68322 = G__68699;
i__68323 = G__68700;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__68329){
var map__68330 = p__68329;
var map__68330__$1 = cljs.core.__destructure_map(map__68330);
var msg = map__68330__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68330__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68330__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68331(s__68332){
return (new cljs.core.LazySeq(null,(function (){
var s__68332__$1 = s__68332;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__68332__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__68338 = cljs.core.first(xs__6308__auto__);
var map__68338__$1 = cljs.core.__destructure_map(map__68338);
var src = map__68338__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68338__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68338__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__68332__$1,map__68338,map__68338__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__68330,map__68330__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68331_$_iter__68333(s__68334){
return (new cljs.core.LazySeq(null,((function (s__68332__$1,map__68338,map__68338__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__68330,map__68330__$1,msg,info,reload_info){
return (function (){
var s__68334__$1 = s__68334;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__68334__$1);
if(temp__5753__auto____$1){
var s__68334__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68334__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__68334__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__68336 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__68335 = (0);
while(true){
if((i__68335 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__68335);
cljs.core.chunk_append(b__68336,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__68701 = (i__68335 + (1));
i__68335 = G__68701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68336),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68331_$_iter__68333(cljs.core.chunk_rest(s__68334__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68336),null);
}
} else {
var warning = cljs.core.first(s__68334__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68331_$_iter__68333(cljs.core.rest(s__68334__$2)));
}
} else {
return null;
}
break;
}
});})(s__68332__$1,map__68338,map__68338__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__68330,map__68330__$1,msg,info,reload_info))
,null,null));
});})(s__68332__$1,map__68338,map__68338__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__68330,map__68330__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__68331(cljs.core.rest(s__68332__$1)));
} else {
var G__68702 = cljs.core.rest(s__68332__$1);
s__68332__$1 = G__68702;
continue;
}
} else {
var G__68703 = cljs.core.rest(s__68332__$1);
s__68332__$1 = G__68703;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__68340_68704 = cljs.core.seq(warnings);
var chunk__68341_68705 = null;
var count__68342_68706 = (0);
var i__68343_68707 = (0);
while(true){
if((i__68343_68707 < count__68342_68706)){
var map__68346_68708 = chunk__68341_68705.cljs$core$IIndexed$_nth$arity$2(null,i__68343_68707);
var map__68346_68709__$1 = cljs.core.__destructure_map(map__68346_68708);
var w_68710 = map__68346_68709__$1;
var msg_68711__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68346_68709__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_68712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68346_68709__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68346_68709__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_68714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68346_68709__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_68714)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_68712),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_68713),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_68711__$1)].join(''));


var G__68715 = seq__68340_68704;
var G__68716 = chunk__68341_68705;
var G__68717 = count__68342_68706;
var G__68718 = (i__68343_68707 + (1));
seq__68340_68704 = G__68715;
chunk__68341_68705 = G__68716;
count__68342_68706 = G__68717;
i__68343_68707 = G__68718;
continue;
} else {
var temp__5753__auto___68719 = cljs.core.seq(seq__68340_68704);
if(temp__5753__auto___68719){
var seq__68340_68720__$1 = temp__5753__auto___68719;
if(cljs.core.chunked_seq_QMARK_(seq__68340_68720__$1)){
var c__4679__auto___68721 = cljs.core.chunk_first(seq__68340_68720__$1);
var G__68722 = cljs.core.chunk_rest(seq__68340_68720__$1);
var G__68723 = c__4679__auto___68721;
var G__68724 = cljs.core.count(c__4679__auto___68721);
var G__68725 = (0);
seq__68340_68704 = G__68722;
chunk__68341_68705 = G__68723;
count__68342_68706 = G__68724;
i__68343_68707 = G__68725;
continue;
} else {
var map__68354_68726 = cljs.core.first(seq__68340_68720__$1);
var map__68354_68727__$1 = cljs.core.__destructure_map(map__68354_68726);
var w_68728 = map__68354_68727__$1;
var msg_68729__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68354_68727__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_68730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68354_68727__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_68731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68354_68727__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_68732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68354_68727__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_68732)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_68730),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_68731),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_68729__$1)].join(''));


var G__68733 = cljs.core.next(seq__68340_68720__$1);
var G__68734 = null;
var G__68735 = (0);
var G__68736 = (0);
seq__68340_68704 = G__68733;
chunk__68341_68705 = G__68734;
count__68342_68706 = G__68735;
i__68343_68707 = G__68736;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__68328_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__68328_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__68414){
var map__68415 = p__68414;
var map__68415__$1 = cljs.core.__destructure_map(map__68415);
var msg = map__68415__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68415__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68415__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__68419 = cljs.core.seq(updates);
var chunk__68421 = null;
var count__68422 = (0);
var i__68423 = (0);
while(true){
if((i__68423 < count__68422)){
var path = chunk__68421.cljs$core$IIndexed$_nth$arity$2(null,i__68423);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__68542_68737 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__68546_68738 = null;
var count__68547_68739 = (0);
var i__68548_68740 = (0);
while(true){
if((i__68548_68740 < count__68547_68739)){
var node_68741 = chunk__68546_68738.cljs$core$IIndexed$_nth$arity$2(null,i__68548_68740);
if(cljs.core.not(node_68741.shadow$old)){
var path_match_68742 = shadow.cljs.devtools.client.browser.match_paths(node_68741.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68742)){
var new_link_68743 = (function (){var G__68574 = node_68741.cloneNode(true);
G__68574.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68742),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68574;
})();
(node_68741.shadow$old = true);

(new_link_68743.onload = ((function (seq__68542_68737,chunk__68546_68738,count__68547_68739,i__68548_68740,seq__68419,chunk__68421,count__68422,i__68423,new_link_68743,path_match_68742,node_68741,path,map__68415,map__68415__$1,msg,updates,reload_info){
return (function (e){
var seq__68575_68744 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__68577_68745 = null;
var count__68578_68746 = (0);
var i__68579_68747 = (0);
while(true){
if((i__68579_68747 < count__68578_68746)){
var map__68583_68748 = chunk__68577_68745.cljs$core$IIndexed$_nth$arity$2(null,i__68579_68747);
var map__68583_68749__$1 = cljs.core.__destructure_map(map__68583_68748);
var task_68750 = map__68583_68749__$1;
var fn_str_68751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68583_68749__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68583_68749__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68753 = goog.getObjectByName(fn_str_68751,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68752)].join(''));

(fn_obj_68753.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68753.cljs$core$IFn$_invoke$arity$2(path,new_link_68743) : fn_obj_68753.call(null,path,new_link_68743));


var G__68754 = seq__68575_68744;
var G__68755 = chunk__68577_68745;
var G__68756 = count__68578_68746;
var G__68757 = (i__68579_68747 + (1));
seq__68575_68744 = G__68754;
chunk__68577_68745 = G__68755;
count__68578_68746 = G__68756;
i__68579_68747 = G__68757;
continue;
} else {
var temp__5753__auto___68758 = cljs.core.seq(seq__68575_68744);
if(temp__5753__auto___68758){
var seq__68575_68759__$1 = temp__5753__auto___68758;
if(cljs.core.chunked_seq_QMARK_(seq__68575_68759__$1)){
var c__4679__auto___68760 = cljs.core.chunk_first(seq__68575_68759__$1);
var G__68761 = cljs.core.chunk_rest(seq__68575_68759__$1);
var G__68762 = c__4679__auto___68760;
var G__68763 = cljs.core.count(c__4679__auto___68760);
var G__68764 = (0);
seq__68575_68744 = G__68761;
chunk__68577_68745 = G__68762;
count__68578_68746 = G__68763;
i__68579_68747 = G__68764;
continue;
} else {
var map__68584_68765 = cljs.core.first(seq__68575_68759__$1);
var map__68584_68766__$1 = cljs.core.__destructure_map(map__68584_68765);
var task_68767 = map__68584_68766__$1;
var fn_str_68768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68584_68766__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68584_68766__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68770 = goog.getObjectByName(fn_str_68768,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68769)].join(''));

(fn_obj_68770.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68770.cljs$core$IFn$_invoke$arity$2(path,new_link_68743) : fn_obj_68770.call(null,path,new_link_68743));


var G__68771 = cljs.core.next(seq__68575_68759__$1);
var G__68772 = null;
var G__68773 = (0);
var G__68774 = (0);
seq__68575_68744 = G__68771;
chunk__68577_68745 = G__68772;
count__68578_68746 = G__68773;
i__68579_68747 = G__68774;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_68741);
});})(seq__68542_68737,chunk__68546_68738,count__68547_68739,i__68548_68740,seq__68419,chunk__68421,count__68422,i__68423,new_link_68743,path_match_68742,node_68741,path,map__68415,map__68415__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68742], 0));

goog.dom.insertSiblingAfter(new_link_68743,node_68741);


var G__68775 = seq__68542_68737;
var G__68776 = chunk__68546_68738;
var G__68777 = count__68547_68739;
var G__68778 = (i__68548_68740 + (1));
seq__68542_68737 = G__68775;
chunk__68546_68738 = G__68776;
count__68547_68739 = G__68777;
i__68548_68740 = G__68778;
continue;
} else {
var G__68779 = seq__68542_68737;
var G__68780 = chunk__68546_68738;
var G__68781 = count__68547_68739;
var G__68782 = (i__68548_68740 + (1));
seq__68542_68737 = G__68779;
chunk__68546_68738 = G__68780;
count__68547_68739 = G__68781;
i__68548_68740 = G__68782;
continue;
}
} else {
var G__68783 = seq__68542_68737;
var G__68784 = chunk__68546_68738;
var G__68785 = count__68547_68739;
var G__68786 = (i__68548_68740 + (1));
seq__68542_68737 = G__68783;
chunk__68546_68738 = G__68784;
count__68547_68739 = G__68785;
i__68548_68740 = G__68786;
continue;
}
} else {
var temp__5753__auto___68787 = cljs.core.seq(seq__68542_68737);
if(temp__5753__auto___68787){
var seq__68542_68788__$1 = temp__5753__auto___68787;
if(cljs.core.chunked_seq_QMARK_(seq__68542_68788__$1)){
var c__4679__auto___68789 = cljs.core.chunk_first(seq__68542_68788__$1);
var G__68790 = cljs.core.chunk_rest(seq__68542_68788__$1);
var G__68791 = c__4679__auto___68789;
var G__68792 = cljs.core.count(c__4679__auto___68789);
var G__68793 = (0);
seq__68542_68737 = G__68790;
chunk__68546_68738 = G__68791;
count__68547_68739 = G__68792;
i__68548_68740 = G__68793;
continue;
} else {
var node_68794 = cljs.core.first(seq__68542_68788__$1);
if(cljs.core.not(node_68794.shadow$old)){
var path_match_68795 = shadow.cljs.devtools.client.browser.match_paths(node_68794.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68795)){
var new_link_68796 = (function (){var G__68585 = node_68794.cloneNode(true);
G__68585.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68795),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68585;
})();
(node_68794.shadow$old = true);

(new_link_68796.onload = ((function (seq__68542_68737,chunk__68546_68738,count__68547_68739,i__68548_68740,seq__68419,chunk__68421,count__68422,i__68423,new_link_68796,path_match_68795,node_68794,seq__68542_68788__$1,temp__5753__auto___68787,path,map__68415,map__68415__$1,msg,updates,reload_info){
return (function (e){
var seq__68586_68797 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__68588_68798 = null;
var count__68589_68799 = (0);
var i__68590_68800 = (0);
while(true){
if((i__68590_68800 < count__68589_68799)){
var map__68594_68801 = chunk__68588_68798.cljs$core$IIndexed$_nth$arity$2(null,i__68590_68800);
var map__68594_68802__$1 = cljs.core.__destructure_map(map__68594_68801);
var task_68803 = map__68594_68802__$1;
var fn_str_68804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68594_68802__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68594_68802__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68806 = goog.getObjectByName(fn_str_68804,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68805)].join(''));

(fn_obj_68806.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68806.cljs$core$IFn$_invoke$arity$2(path,new_link_68796) : fn_obj_68806.call(null,path,new_link_68796));


var G__68807 = seq__68586_68797;
var G__68808 = chunk__68588_68798;
var G__68809 = count__68589_68799;
var G__68810 = (i__68590_68800 + (1));
seq__68586_68797 = G__68807;
chunk__68588_68798 = G__68808;
count__68589_68799 = G__68809;
i__68590_68800 = G__68810;
continue;
} else {
var temp__5753__auto___68811__$1 = cljs.core.seq(seq__68586_68797);
if(temp__5753__auto___68811__$1){
var seq__68586_68812__$1 = temp__5753__auto___68811__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68586_68812__$1)){
var c__4679__auto___68813 = cljs.core.chunk_first(seq__68586_68812__$1);
var G__68814 = cljs.core.chunk_rest(seq__68586_68812__$1);
var G__68815 = c__4679__auto___68813;
var G__68816 = cljs.core.count(c__4679__auto___68813);
var G__68817 = (0);
seq__68586_68797 = G__68814;
chunk__68588_68798 = G__68815;
count__68589_68799 = G__68816;
i__68590_68800 = G__68817;
continue;
} else {
var map__68595_68818 = cljs.core.first(seq__68586_68812__$1);
var map__68595_68819__$1 = cljs.core.__destructure_map(map__68595_68818);
var task_68820 = map__68595_68819__$1;
var fn_str_68821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68595_68819__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68595_68819__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68823 = goog.getObjectByName(fn_str_68821,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68822)].join(''));

(fn_obj_68823.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68823.cljs$core$IFn$_invoke$arity$2(path,new_link_68796) : fn_obj_68823.call(null,path,new_link_68796));


var G__68824 = cljs.core.next(seq__68586_68812__$1);
var G__68825 = null;
var G__68826 = (0);
var G__68827 = (0);
seq__68586_68797 = G__68824;
chunk__68588_68798 = G__68825;
count__68589_68799 = G__68826;
i__68590_68800 = G__68827;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_68794);
});})(seq__68542_68737,chunk__68546_68738,count__68547_68739,i__68548_68740,seq__68419,chunk__68421,count__68422,i__68423,new_link_68796,path_match_68795,node_68794,seq__68542_68788__$1,temp__5753__auto___68787,path,map__68415,map__68415__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68795], 0));

goog.dom.insertSiblingAfter(new_link_68796,node_68794);


var G__68828 = cljs.core.next(seq__68542_68788__$1);
var G__68829 = null;
var G__68830 = (0);
var G__68831 = (0);
seq__68542_68737 = G__68828;
chunk__68546_68738 = G__68829;
count__68547_68739 = G__68830;
i__68548_68740 = G__68831;
continue;
} else {
var G__68832 = cljs.core.next(seq__68542_68788__$1);
var G__68833 = null;
var G__68834 = (0);
var G__68835 = (0);
seq__68542_68737 = G__68832;
chunk__68546_68738 = G__68833;
count__68547_68739 = G__68834;
i__68548_68740 = G__68835;
continue;
}
} else {
var G__68836 = cljs.core.next(seq__68542_68788__$1);
var G__68837 = null;
var G__68838 = (0);
var G__68839 = (0);
seq__68542_68737 = G__68836;
chunk__68546_68738 = G__68837;
count__68547_68739 = G__68838;
i__68548_68740 = G__68839;
continue;
}
}
} else {
}
}
break;
}


var G__68840 = seq__68419;
var G__68841 = chunk__68421;
var G__68842 = count__68422;
var G__68843 = (i__68423 + (1));
seq__68419 = G__68840;
chunk__68421 = G__68841;
count__68422 = G__68842;
i__68423 = G__68843;
continue;
} else {
var G__68844 = seq__68419;
var G__68845 = chunk__68421;
var G__68846 = count__68422;
var G__68847 = (i__68423 + (1));
seq__68419 = G__68844;
chunk__68421 = G__68845;
count__68422 = G__68846;
i__68423 = G__68847;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__68419);
if(temp__5753__auto__){
var seq__68419__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68419__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__68419__$1);
var G__68848 = cljs.core.chunk_rest(seq__68419__$1);
var G__68849 = c__4679__auto__;
var G__68850 = cljs.core.count(c__4679__auto__);
var G__68851 = (0);
seq__68419 = G__68848;
chunk__68421 = G__68849;
count__68422 = G__68850;
i__68423 = G__68851;
continue;
} else {
var path = cljs.core.first(seq__68419__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__68596_68852 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__68600_68853 = null;
var count__68601_68854 = (0);
var i__68602_68855 = (0);
while(true){
if((i__68602_68855 < count__68601_68854)){
var node_68856 = chunk__68600_68853.cljs$core$IIndexed$_nth$arity$2(null,i__68602_68855);
if(cljs.core.not(node_68856.shadow$old)){
var path_match_68857 = shadow.cljs.devtools.client.browser.match_paths(node_68856.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68857)){
var new_link_68858 = (function (){var G__68628 = node_68856.cloneNode(true);
G__68628.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68857),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68628;
})();
(node_68856.shadow$old = true);

(new_link_68858.onload = ((function (seq__68596_68852,chunk__68600_68853,count__68601_68854,i__68602_68855,seq__68419,chunk__68421,count__68422,i__68423,new_link_68858,path_match_68857,node_68856,path,seq__68419__$1,temp__5753__auto__,map__68415,map__68415__$1,msg,updates,reload_info){
return (function (e){
var seq__68629_68859 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__68631_68860 = null;
var count__68632_68861 = (0);
var i__68633_68862 = (0);
while(true){
if((i__68633_68862 < count__68632_68861)){
var map__68637_68863 = chunk__68631_68860.cljs$core$IIndexed$_nth$arity$2(null,i__68633_68862);
var map__68637_68864__$1 = cljs.core.__destructure_map(map__68637_68863);
var task_68865 = map__68637_68864__$1;
var fn_str_68866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68637_68864__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68637_68864__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68868 = goog.getObjectByName(fn_str_68866,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68867)].join(''));

(fn_obj_68868.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68868.cljs$core$IFn$_invoke$arity$2(path,new_link_68858) : fn_obj_68868.call(null,path,new_link_68858));


var G__68869 = seq__68629_68859;
var G__68870 = chunk__68631_68860;
var G__68871 = count__68632_68861;
var G__68872 = (i__68633_68862 + (1));
seq__68629_68859 = G__68869;
chunk__68631_68860 = G__68870;
count__68632_68861 = G__68871;
i__68633_68862 = G__68872;
continue;
} else {
var temp__5753__auto___68873__$1 = cljs.core.seq(seq__68629_68859);
if(temp__5753__auto___68873__$1){
var seq__68629_68874__$1 = temp__5753__auto___68873__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68629_68874__$1)){
var c__4679__auto___68875 = cljs.core.chunk_first(seq__68629_68874__$1);
var G__68876 = cljs.core.chunk_rest(seq__68629_68874__$1);
var G__68877 = c__4679__auto___68875;
var G__68878 = cljs.core.count(c__4679__auto___68875);
var G__68879 = (0);
seq__68629_68859 = G__68876;
chunk__68631_68860 = G__68877;
count__68632_68861 = G__68878;
i__68633_68862 = G__68879;
continue;
} else {
var map__68638_68880 = cljs.core.first(seq__68629_68874__$1);
var map__68638_68881__$1 = cljs.core.__destructure_map(map__68638_68880);
var task_68882 = map__68638_68881__$1;
var fn_str_68883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68638_68881__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68638_68881__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68885 = goog.getObjectByName(fn_str_68883,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68884)].join(''));

(fn_obj_68885.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68885.cljs$core$IFn$_invoke$arity$2(path,new_link_68858) : fn_obj_68885.call(null,path,new_link_68858));


var G__68886 = cljs.core.next(seq__68629_68874__$1);
var G__68887 = null;
var G__68888 = (0);
var G__68889 = (0);
seq__68629_68859 = G__68886;
chunk__68631_68860 = G__68887;
count__68632_68861 = G__68888;
i__68633_68862 = G__68889;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_68856);
});})(seq__68596_68852,chunk__68600_68853,count__68601_68854,i__68602_68855,seq__68419,chunk__68421,count__68422,i__68423,new_link_68858,path_match_68857,node_68856,path,seq__68419__$1,temp__5753__auto__,map__68415,map__68415__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68857], 0));

goog.dom.insertSiblingAfter(new_link_68858,node_68856);


var G__68890 = seq__68596_68852;
var G__68891 = chunk__68600_68853;
var G__68892 = count__68601_68854;
var G__68893 = (i__68602_68855 + (1));
seq__68596_68852 = G__68890;
chunk__68600_68853 = G__68891;
count__68601_68854 = G__68892;
i__68602_68855 = G__68893;
continue;
} else {
var G__68894 = seq__68596_68852;
var G__68895 = chunk__68600_68853;
var G__68896 = count__68601_68854;
var G__68897 = (i__68602_68855 + (1));
seq__68596_68852 = G__68894;
chunk__68600_68853 = G__68895;
count__68601_68854 = G__68896;
i__68602_68855 = G__68897;
continue;
}
} else {
var G__68898 = seq__68596_68852;
var G__68899 = chunk__68600_68853;
var G__68900 = count__68601_68854;
var G__68901 = (i__68602_68855 + (1));
seq__68596_68852 = G__68898;
chunk__68600_68853 = G__68899;
count__68601_68854 = G__68900;
i__68602_68855 = G__68901;
continue;
}
} else {
var temp__5753__auto___68902__$1 = cljs.core.seq(seq__68596_68852);
if(temp__5753__auto___68902__$1){
var seq__68596_68903__$1 = temp__5753__auto___68902__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68596_68903__$1)){
var c__4679__auto___68904 = cljs.core.chunk_first(seq__68596_68903__$1);
var G__68905 = cljs.core.chunk_rest(seq__68596_68903__$1);
var G__68906 = c__4679__auto___68904;
var G__68907 = cljs.core.count(c__4679__auto___68904);
var G__68908 = (0);
seq__68596_68852 = G__68905;
chunk__68600_68853 = G__68906;
count__68601_68854 = G__68907;
i__68602_68855 = G__68908;
continue;
} else {
var node_68909 = cljs.core.first(seq__68596_68903__$1);
if(cljs.core.not(node_68909.shadow$old)){
var path_match_68910 = shadow.cljs.devtools.client.browser.match_paths(node_68909.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68910)){
var new_link_68911 = (function (){var G__68639 = node_68909.cloneNode(true);
G__68639.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68910),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__68639;
})();
(node_68909.shadow$old = true);

(new_link_68911.onload = ((function (seq__68596_68852,chunk__68600_68853,count__68601_68854,i__68602_68855,seq__68419,chunk__68421,count__68422,i__68423,new_link_68911,path_match_68910,node_68909,seq__68596_68903__$1,temp__5753__auto___68902__$1,path,seq__68419__$1,temp__5753__auto__,map__68415,map__68415__$1,msg,updates,reload_info){
return (function (e){
var seq__68640_68912 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__68642_68913 = null;
var count__68643_68914 = (0);
var i__68644_68915 = (0);
while(true){
if((i__68644_68915 < count__68643_68914)){
var map__68648_68916 = chunk__68642_68913.cljs$core$IIndexed$_nth$arity$2(null,i__68644_68915);
var map__68648_68917__$1 = cljs.core.__destructure_map(map__68648_68916);
var task_68918 = map__68648_68917__$1;
var fn_str_68919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68648_68917__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68648_68917__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68921 = goog.getObjectByName(fn_str_68919,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68920)].join(''));

(fn_obj_68921.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68921.cljs$core$IFn$_invoke$arity$2(path,new_link_68911) : fn_obj_68921.call(null,path,new_link_68911));


var G__68922 = seq__68640_68912;
var G__68923 = chunk__68642_68913;
var G__68924 = count__68643_68914;
var G__68925 = (i__68644_68915 + (1));
seq__68640_68912 = G__68922;
chunk__68642_68913 = G__68923;
count__68643_68914 = G__68924;
i__68644_68915 = G__68925;
continue;
} else {
var temp__5753__auto___68926__$2 = cljs.core.seq(seq__68640_68912);
if(temp__5753__auto___68926__$2){
var seq__68640_68927__$1 = temp__5753__auto___68926__$2;
if(cljs.core.chunked_seq_QMARK_(seq__68640_68927__$1)){
var c__4679__auto___68928 = cljs.core.chunk_first(seq__68640_68927__$1);
var G__68929 = cljs.core.chunk_rest(seq__68640_68927__$1);
var G__68930 = c__4679__auto___68928;
var G__68931 = cljs.core.count(c__4679__auto___68928);
var G__68932 = (0);
seq__68640_68912 = G__68929;
chunk__68642_68913 = G__68930;
count__68643_68914 = G__68931;
i__68644_68915 = G__68932;
continue;
} else {
var map__68649_68933 = cljs.core.first(seq__68640_68927__$1);
var map__68649_68934__$1 = cljs.core.__destructure_map(map__68649_68933);
var task_68935 = map__68649_68934__$1;
var fn_str_68936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68649_68934__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_68937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68649_68934__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_68938 = goog.getObjectByName(fn_str_68936,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_68937)].join(''));

(fn_obj_68938.cljs$core$IFn$_invoke$arity$2 ? fn_obj_68938.cljs$core$IFn$_invoke$arity$2(path,new_link_68911) : fn_obj_68938.call(null,path,new_link_68911));


var G__68939 = cljs.core.next(seq__68640_68927__$1);
var G__68940 = null;
var G__68941 = (0);
var G__68942 = (0);
seq__68640_68912 = G__68939;
chunk__68642_68913 = G__68940;
count__68643_68914 = G__68941;
i__68644_68915 = G__68942;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_68909);
});})(seq__68596_68852,chunk__68600_68853,count__68601_68854,i__68602_68855,seq__68419,chunk__68421,count__68422,i__68423,new_link_68911,path_match_68910,node_68909,seq__68596_68903__$1,temp__5753__auto___68902__$1,path,seq__68419__$1,temp__5753__auto__,map__68415,map__68415__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68910], 0));

goog.dom.insertSiblingAfter(new_link_68911,node_68909);


var G__68943 = cljs.core.next(seq__68596_68903__$1);
var G__68944 = null;
var G__68945 = (0);
var G__68946 = (0);
seq__68596_68852 = G__68943;
chunk__68600_68853 = G__68944;
count__68601_68854 = G__68945;
i__68602_68855 = G__68946;
continue;
} else {
var G__68947 = cljs.core.next(seq__68596_68903__$1);
var G__68948 = null;
var G__68949 = (0);
var G__68950 = (0);
seq__68596_68852 = G__68947;
chunk__68600_68853 = G__68948;
count__68601_68854 = G__68949;
i__68602_68855 = G__68950;
continue;
}
} else {
var G__68951 = cljs.core.next(seq__68596_68903__$1);
var G__68952 = null;
var G__68953 = (0);
var G__68954 = (0);
seq__68596_68852 = G__68951;
chunk__68600_68853 = G__68952;
count__68601_68854 = G__68953;
i__68602_68855 = G__68954;
continue;
}
}
} else {
}
}
break;
}


var G__68955 = cljs.core.next(seq__68419__$1);
var G__68956 = null;
var G__68957 = (0);
var G__68958 = (0);
seq__68419 = G__68955;
chunk__68421 = G__68956;
count__68422 = G__68957;
i__68423 = G__68958;
continue;
} else {
var G__68959 = cljs.core.next(seq__68419__$1);
var G__68960 = null;
var G__68961 = (0);
var G__68962 = (0);
seq__68419 = G__68959;
chunk__68421 = G__68960;
count__68422 = G__68961;
i__68423 = G__68962;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__68650){
var map__68651 = p__68650;
var map__68651__$1 = cljs.core.__destructure_map(map__68651);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68651__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__68652){
var map__68653 = p__68652;
var map__68653__$1 = cljs.core.__destructure_map(map__68653);
var _ = map__68653__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68653__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__68654,done,error){
var map__68655 = p__68654;
var map__68655__$1 = cljs.core.__destructure_map(map__68655);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68655__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__68656,done,error){
var map__68657 = p__68656;
var map__68657__$1 = cljs.core.__destructure_map(map__68657);
var msg = map__68657__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68657__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68657__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68657__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__68658){
var map__68659 = p__68658;
var map__68659__$1 = cljs.core.__destructure_map(map__68659);
var src = map__68659__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68659__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__68660 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__68660) : done.call(null,G__68660));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__68661){
var map__68662 = p__68661;
var map__68662__$1 = cljs.core.__destructure_map(map__68662);
var msg__$1 = map__68662__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68662__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e68663){var ex = e68663;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__68664){
var map__68665 = p__68664;
var map__68665__$1 = cljs.core.__destructure_map(map__68665);
var env = map__68665__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68665__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__68666){
var map__68667 = p__68666;
var map__68667__$1 = cljs.core.__destructure_map(map__68667);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68667__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68667__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__68668){
var map__68669 = p__68668;
var map__68669__$1 = cljs.core.__destructure_map(map__68669);
var svc = map__68669__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68669__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
