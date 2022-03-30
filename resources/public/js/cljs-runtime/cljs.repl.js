goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__75344){
var map__75351 = p__75344;
var map__75351__$1 = cljs.core.__destructure_map(map__75351);
var m = map__75351__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75351__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75351__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__75396_75749 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__75397_75750 = null;
var count__75398_75751 = (0);
var i__75399_75752 = (0);
while(true){
if((i__75399_75752 < count__75398_75751)){
var f_75753 = chunk__75397_75750.cljs$core$IIndexed$_nth$arity$2(null,i__75399_75752);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_75753], 0));


var G__75754 = seq__75396_75749;
var G__75755 = chunk__75397_75750;
var G__75756 = count__75398_75751;
var G__75757 = (i__75399_75752 + (1));
seq__75396_75749 = G__75754;
chunk__75397_75750 = G__75755;
count__75398_75751 = G__75756;
i__75399_75752 = G__75757;
continue;
} else {
var temp__5753__auto___75758 = cljs.core.seq(seq__75396_75749);
if(temp__5753__auto___75758){
var seq__75396_75759__$1 = temp__5753__auto___75758;
if(cljs.core.chunked_seq_QMARK_(seq__75396_75759__$1)){
var c__4679__auto___75760 = cljs.core.chunk_first(seq__75396_75759__$1);
var G__75761 = cljs.core.chunk_rest(seq__75396_75759__$1);
var G__75762 = c__4679__auto___75760;
var G__75763 = cljs.core.count(c__4679__auto___75760);
var G__75764 = (0);
seq__75396_75749 = G__75761;
chunk__75397_75750 = G__75762;
count__75398_75751 = G__75763;
i__75399_75752 = G__75764;
continue;
} else {
var f_75766 = cljs.core.first(seq__75396_75759__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_75766], 0));


var G__75767 = cljs.core.next(seq__75396_75759__$1);
var G__75768 = null;
var G__75769 = (0);
var G__75770 = (0);
seq__75396_75749 = G__75767;
chunk__75397_75750 = G__75768;
count__75398_75751 = G__75769;
i__75399_75752 = G__75770;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_75771 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_75771], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_75771)))?cljs.core.second(arglists_75771):arglists_75771)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__75425_75772 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__75426_75773 = null;
var count__75427_75774 = (0);
var i__75428_75775 = (0);
while(true){
if((i__75428_75775 < count__75427_75774)){
var vec__75448_75776 = chunk__75426_75773.cljs$core$IIndexed$_nth$arity$2(null,i__75428_75775);
var name_75777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75448_75776,(0),null);
var map__75451_75778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75448_75776,(1),null);
var map__75451_75779__$1 = cljs.core.__destructure_map(map__75451_75778);
var doc_75780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75451_75779__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_75781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75451_75779__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_75777], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_75781], 0));

if(cljs.core.truth_(doc_75780)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_75780], 0));
} else {
}


var G__75783 = seq__75425_75772;
var G__75784 = chunk__75426_75773;
var G__75785 = count__75427_75774;
var G__75786 = (i__75428_75775 + (1));
seq__75425_75772 = G__75783;
chunk__75426_75773 = G__75784;
count__75427_75774 = G__75785;
i__75428_75775 = G__75786;
continue;
} else {
var temp__5753__auto___75788 = cljs.core.seq(seq__75425_75772);
if(temp__5753__auto___75788){
var seq__75425_75789__$1 = temp__5753__auto___75788;
if(cljs.core.chunked_seq_QMARK_(seq__75425_75789__$1)){
var c__4679__auto___75790 = cljs.core.chunk_first(seq__75425_75789__$1);
var G__75791 = cljs.core.chunk_rest(seq__75425_75789__$1);
var G__75792 = c__4679__auto___75790;
var G__75793 = cljs.core.count(c__4679__auto___75790);
var G__75794 = (0);
seq__75425_75772 = G__75791;
chunk__75426_75773 = G__75792;
count__75427_75774 = G__75793;
i__75428_75775 = G__75794;
continue;
} else {
var vec__75454_75795 = cljs.core.first(seq__75425_75789__$1);
var name_75796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75454_75795,(0),null);
var map__75457_75797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75454_75795,(1),null);
var map__75457_75798__$1 = cljs.core.__destructure_map(map__75457_75797);
var doc_75799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75457_75798__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_75800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75457_75798__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_75796], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_75800], 0));

if(cljs.core.truth_(doc_75799)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_75799], 0));
} else {
}


var G__75801 = cljs.core.next(seq__75425_75789__$1);
var G__75802 = null;
var G__75803 = (0);
var G__75804 = (0);
seq__75425_75772 = G__75801;
chunk__75426_75773 = G__75802;
count__75427_75774 = G__75803;
i__75428_75775 = G__75804;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__75463 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__75464 = null;
var count__75465 = (0);
var i__75466 = (0);
while(true){
if((i__75466 < count__75465)){
var role = chunk__75464.cljs$core$IIndexed$_nth$arity$2(null,i__75466);
var temp__5753__auto___75809__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___75809__$1)){
var spec_75810 = temp__5753__auto___75809__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_75810)], 0));
} else {
}


var G__75817 = seq__75463;
var G__75818 = chunk__75464;
var G__75819 = count__75465;
var G__75820 = (i__75466 + (1));
seq__75463 = G__75817;
chunk__75464 = G__75818;
count__75465 = G__75819;
i__75466 = G__75820;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__75463);
if(temp__5753__auto____$1){
var seq__75463__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__75463__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__75463__$1);
var G__75823 = cljs.core.chunk_rest(seq__75463__$1);
var G__75824 = c__4679__auto__;
var G__75825 = cljs.core.count(c__4679__auto__);
var G__75826 = (0);
seq__75463 = G__75823;
chunk__75464 = G__75824;
count__75465 = G__75825;
i__75466 = G__75826;
continue;
} else {
var role = cljs.core.first(seq__75463__$1);
var temp__5753__auto___75827__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___75827__$2)){
var spec_75828 = temp__5753__auto___75827__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_75828)], 0));
} else {
}


var G__75829 = cljs.core.next(seq__75463__$1);
var G__75830 = null;
var G__75831 = (0);
var G__75832 = (0);
seq__75463 = G__75829;
chunk__75464 = G__75830;
count__75465 = G__75831;
i__75466 = G__75832;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__75836 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__75837 = cljs.core.ex_cause(t);
via = G__75836;
t = G__75837;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__75630 = datafied_throwable;
var map__75630__$1 = cljs.core.__destructure_map(map__75630);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75630__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75630__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75630__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__75631 = cljs.core.last(via);
var map__75631__$1 = cljs.core.__destructure_map(map__75631);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75631__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75631__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75631__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__75632 = data;
var map__75632__$1 = cljs.core.__destructure_map(map__75632);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75632__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75632__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75632__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__75633 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__75633__$1 = cljs.core.__destructure_map(map__75633);
var top_data = map__75633__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75633__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__75648 = phase;
var G__75648__$1 = (((G__75648 instanceof cljs.core.Keyword))?G__75648.fqn:null);
switch (G__75648__$1) {
case "read-source":
var map__75649 = data;
var map__75649__$1 = cljs.core.__destructure_map(map__75649);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75649__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75649__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__75652 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__75652__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75652,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__75652);
var G__75652__$2 = (cljs.core.truth_((function (){var fexpr__75653 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__75653.cljs$core$IFn$_invoke$arity$1 ? fexpr__75653.cljs$core$IFn$_invoke$arity$1(source) : fexpr__75653.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__75652__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__75652__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75652__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__75652__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__75654 = top_data;
var G__75654__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75654,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__75654);
var G__75654__$2 = (cljs.core.truth_((function (){var fexpr__75660 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__75660.cljs$core$IFn$_invoke$arity$1 ? fexpr__75660.cljs$core$IFn$_invoke$arity$1(source) : fexpr__75660.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__75654__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__75654__$1);
var G__75654__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75654__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__75654__$2);
var G__75654__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75654__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__75654__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75654__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__75654__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__75662 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75662,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75662,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75662,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75662,(3),null);
var G__75665 = top_data;
var G__75665__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75665,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__75665);
var G__75665__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75665__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__75665__$1);
var G__75665__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75665__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__75665__$2);
var G__75665__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75665__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__75665__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75665__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__75665__$4;
}

break;
case "execution":
var vec__75673 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75673,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75673,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75673,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75673,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__75615_SHARP_){
var or__4253__auto__ = (p1__75615_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__75679 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__75679.cljs$core$IFn$_invoke$arity$1 ? fexpr__75679.cljs$core$IFn$_invoke$arity$1(p1__75615_SHARP_) : fexpr__75679.call(null,p1__75615_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__75680 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__75680__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75680,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__75680);
var G__75680__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75680__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__75680__$1);
var G__75680__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75680__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__75680__$2);
var G__75680__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75680__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__75680__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75680__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__75680__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75648__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__75688){
var map__75689 = p__75688;
var map__75689__$1 = cljs.core.__destructure_map(map__75689);
var triage_data = map__75689__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75689__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75689__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75689__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75689__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75689__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75689__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75689__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75689__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__75696 = phase;
var G__75696__$1 = (((G__75696 instanceof cljs.core.Keyword))?G__75696.fqn:null);
switch (G__75696__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__75700 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__75701 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__75702 = loc;
var G__75703 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__75708_75867 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__75709_75868 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__75710_75869 = true;
var _STAR_print_fn_STAR__temp_val__75711_75870 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75710_75869);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75711_75870);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75686_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__75686_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75709_75868);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75708_75867);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__75700,G__75701,G__75702,G__75703) : format.call(null,G__75700,G__75701,G__75702,G__75703));

break;
case "macroexpansion":
var G__75712 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__75713 = cause_type;
var G__75714 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__75715 = loc;
var G__75716 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__75712,G__75713,G__75714,G__75715,G__75716) : format.call(null,G__75712,G__75713,G__75714,G__75715,G__75716));

break;
case "compile-syntax-check":
var G__75717 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__75718 = cause_type;
var G__75719 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__75720 = loc;
var G__75721 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__75717,G__75718,G__75719,G__75720,G__75721) : format.call(null,G__75717,G__75718,G__75719,G__75720,G__75721));

break;
case "compilation":
var G__75722 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__75723 = cause_type;
var G__75724 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__75725 = loc;
var G__75726 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__75722,G__75723,G__75724,G__75725,G__75726) : format.call(null,G__75722,G__75723,G__75724,G__75725,G__75726));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__75727 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__75728 = symbol;
var G__75729 = loc;
var G__75730 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__75731_75873 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__75732_75874 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__75733_75875 = true;
var _STAR_print_fn_STAR__temp_val__75734_75876 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75733_75875);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75734_75876);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75687_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__75687_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75732_75874);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75731_75873);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__75727,G__75728,G__75729,G__75730) : format.call(null,G__75727,G__75728,G__75729,G__75730));
} else {
var G__75736 = "Execution error%s at %s(%s).\n%s\n";
var G__75737 = cause_type;
var G__75738 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__75739 = loc;
var G__75740 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__75736,G__75737,G__75738,G__75739,G__75740) : format.call(null,G__75736,G__75737,G__75738,G__75739,G__75740));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75696__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
