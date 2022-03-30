goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__68250){
var map__68251 = p__68250;
var map__68251__$1 = cljs.core.__destructure_map(map__68251);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68251__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68251__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68251__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__68252 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__68253 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__68253);

try{var vec__68254 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__68259,transformer){
var vec__68260 = p__68259;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68260,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68260,(1),null);
var G__68264 = text;
var G__68265 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__68264,G__68265) : transformer.call(null,G__68264,G__68265));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4253__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68254,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68254,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__68252);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68347 = arguments.length;
var i__4865__auto___68348 = (0);
while(true){
if((i__4865__auto___68348 < len__4864__auto___68347)){
args__4870__auto__.push((arguments[i__4865__auto___68348]));

var G__68349 = (i__4865__auto___68348 + (1));
i__4865__auto___68348 = G__68349;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq68266){
var G__68267 = cljs.core.first(seq68266);
var seq68266__$1 = cljs.core.next(seq68266);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68267,seq68266__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__68270_68350 = cljs.core.seq(lines);
var chunk__68271_68351 = null;
var count__68272_68352 = (0);
var i__68273_68353 = (0);
while(true){
if((i__68273_68353 < count__68272_68352)){
var line_68355 = chunk__68271_68351.cljs$core$IIndexed$_nth$arity$2(null,i__68273_68353);
markdown.links.parse_reference_link(line_68355,references);


var G__68356 = seq__68270_68350;
var G__68357 = chunk__68271_68351;
var G__68358 = count__68272_68352;
var G__68359 = (i__68273_68353 + (1));
seq__68270_68350 = G__68356;
chunk__68271_68351 = G__68357;
count__68272_68352 = G__68358;
i__68273_68353 = G__68359;
continue;
} else {
var temp__5753__auto___68360 = cljs.core.seq(seq__68270_68350);
if(temp__5753__auto___68360){
var seq__68270_68361__$1 = temp__5753__auto___68360;
if(cljs.core.chunked_seq_QMARK_(seq__68270_68361__$1)){
var c__4679__auto___68362 = cljs.core.chunk_first(seq__68270_68361__$1);
var G__68363 = cljs.core.chunk_rest(seq__68270_68361__$1);
var G__68364 = c__4679__auto___68362;
var G__68365 = cljs.core.count(c__4679__auto___68362);
var G__68366 = (0);
seq__68270_68350 = G__68363;
chunk__68271_68351 = G__68364;
count__68272_68352 = G__68365;
i__68273_68353 = G__68366;
continue;
} else {
var line_68367 = cljs.core.first(seq__68270_68361__$1);
markdown.links.parse_reference_link(line_68367,references);


var G__68368 = cljs.core.next(seq__68270_68361__$1);
var G__68369 = null;
var G__68370 = (0);
var G__68371 = (0);
seq__68270_68350 = G__68368;
chunk__68271_68351 = G__68369;
count__68272_68352 = G__68370;
i__68273_68353 = G__68371;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__68276_68372 = cljs.core.seq(lines);
var chunk__68277_68373 = null;
var count__68278_68374 = (0);
var i__68279_68375 = (0);
while(true){
if((i__68279_68375 < count__68278_68374)){
var line_68376 = chunk__68277_68373.cljs$core$IIndexed$_nth$arity$2(null,i__68279_68375);
markdown.links.parse_footnote_link(line_68376,footnotes);


var G__68377 = seq__68276_68372;
var G__68378 = chunk__68277_68373;
var G__68379 = count__68278_68374;
var G__68380 = (i__68279_68375 + (1));
seq__68276_68372 = G__68377;
chunk__68277_68373 = G__68378;
count__68278_68374 = G__68379;
i__68279_68375 = G__68380;
continue;
} else {
var temp__5753__auto___68381 = cljs.core.seq(seq__68276_68372);
if(temp__5753__auto___68381){
var seq__68276_68382__$1 = temp__5753__auto___68381;
if(cljs.core.chunked_seq_QMARK_(seq__68276_68382__$1)){
var c__4679__auto___68383 = cljs.core.chunk_first(seq__68276_68382__$1);
var G__68384 = cljs.core.chunk_rest(seq__68276_68382__$1);
var G__68385 = c__4679__auto___68383;
var G__68386 = cljs.core.count(c__4679__auto___68383);
var G__68387 = (0);
seq__68276_68372 = G__68384;
chunk__68277_68373 = G__68385;
count__68278_68374 = G__68386;
i__68279_68375 = G__68387;
continue;
} else {
var line_68388 = cljs.core.first(seq__68276_68382__$1);
markdown.links.parse_footnote_link(line_68388,footnotes);


var G__68389 = cljs.core.next(seq__68276_68382__$1);
var G__68390 = null;
var G__68391 = (0);
var G__68392 = (0);
seq__68276_68372 = G__68389;
chunk__68277_68373 = G__68390;
count__68278_68374 = G__68391;
i__68279_68375 = G__68392;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__68288 = markdown.transformers.parse_metadata_headers(lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68288,(0),null);
var num_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68288,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(num_lines,lines)], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__68296 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__68297 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__68298 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__68299 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__68298);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__68299);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__68301 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68301,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68301,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__68308_68393 = lines__$1;
var vec__68309_68394 = G__68308_68393;
var seq__68310_68395 = cljs.core.seq(vec__68309_68394);
var first__68311_68396 = cljs.core.first(seq__68310_68395);
var seq__68310_68397__$1 = cljs.core.next(seq__68310_68395);
var line_68398 = first__68311_68396;
var more_68399 = seq__68310_68397__$1;
var state_68400 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__68308_68401__$1 = G__68308_68393;
var state_68402__$1 = state_68400;
while(true){
var vec__68317_68403 = G__68308_68401__$1;
var seq__68318_68404 = cljs.core.seq(vec__68317_68403);
var first__68319_68405 = cljs.core.first(seq__68318_68404);
var seq__68318_68406__$1 = cljs.core.next(seq__68318_68404);
var line_68407__$1 = first__68319_68405;
var more_68408__$1 = seq__68318_68406__$1;
var state_68409__$2 = state_68402__$1;
var line_68410__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_68409__$2))?"":line_68407__$1);
var state_68411__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_68409__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_68409__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_68409__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_68409__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_68409__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_68408__$1))){
var G__68412 = more_68408__$1;
var G__68413 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_68410__$2,cljs.core.first(more_68408__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_68411__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_68410__$2.trim()));
G__68308_68401__$1 = G__68412;
state_68402__$1 = G__68413;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_68411__$3))),line_68410__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_68411__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__68297);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__68296);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68416 = arguments.length;
var i__4865__auto___68417 = (0);
while(true){
if((i__4865__auto___68417 < len__4864__auto___68416)){
args__4870__auto__.push((arguments[i__4865__auto___68417]));

var G__68418 = (i__4865__auto___68417 + (1));
i__4865__auto___68417 = G__68418;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq68324){
var G__68325 = cljs.core.first(seq68324);
var seq68324__$1 = cljs.core.next(seq68324);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68325,seq68324__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68435 = arguments.length;
var i__4865__auto___68436 = (0);
while(true){
if((i__4865__auto___68436 < len__4864__auto___68435)){
args__4870__auto__.push((arguments[i__4865__auto___68436]));

var G__68437 = (i__4865__auto___68436 + (1));
i__4865__auto___68436 = G__68437;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq68326){
var G__68327 = cljs.core.first(seq68326);
var seq68326__$1 = cljs.core.next(seq68326);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68327,seq68326__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68439 = arguments.length;
var i__4865__auto___68440 = (0);
while(true){
if((i__4865__auto___68440 < len__4864__auto___68439)){
args__4870__auto__.push((arguments[i__4865__auto___68440]));

var G__68441 = (i__4865__auto___68440 + (1));
i__4865__auto___68440 = G__68441;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq68337){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68337));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68448 = arguments.length;
var i__4865__auto___68449 = (0);
while(true){
if((i__4865__auto___68449 < len__4864__auto___68448)){
args__4870__auto__.push((arguments[i__4865__auto___68449]));

var G__68451 = (i__4865__auto___68449 + (1));
i__4865__auto___68449 = G__68451;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq68339){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68339));
}));


//# sourceMappingURL=markdown.core.js.map
