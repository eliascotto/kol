goog.provide('nextjournal.clojure_mode.extensions.selection_history');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.selection_history.event_annotation = nextjournal.clojure_mode.util.user_event_annotation("selectionhistory");
nextjournal.clojure_mode.extensions.selection_history.second_last = (function nextjournal$clojure_mode$extensions$selection_history$second_last(arr){
if((arr.length > (1))){
return (arr[(arr.length - (1))]);
} else {
return null;
}
});
nextjournal.clojure_mode.extensions.selection_history.ser = (function nextjournal$clojure_mode$extensions$selection_history$ser(selection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"head","head",-771383919)),new cljs.core.Keyword(null,"ranges","ranges",1887686682).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(selection.toJSON(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
});
nextjournal.clojure_mode.extensions.selection_history.something_selected_QMARK_ = (function nextjournal$clojure_mode$extensions$selection_history$something_selected_QMARK_(selection){
return cljs.core.some((function (p1__71501_SHARP_){
return cljs.core.not(p1__71501_SHARP_.empty);
}),selection.ranges);
});
/**
 * Stores selection history
 */
nextjournal.clojure_mode.extensions.selection_history.selection_history_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create": (function (state){
return (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection","selection",975998651),state.selection], null),null,(1),null));
}), "update": (function (stack,p__71519){
var map__71522 = p__71519;
var map__71522__$1 = (((((!((map__71522 == null))))?(((((map__71522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71522):map__71522);
var tr = map__71522__$1;
var map__71523 = (function (){var obj71532 = map__71522__$1;
var k71533 = "state";
if((function (){var obj71537 = obj71532;
return (((!((obj71537 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71533,obj71537)));
})()){
return (obj71532[k71533]);
} else {
return undefined;
}
})();
var map__71523__$1 = (((((!((map__71523 == null))))?(((((map__71523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71523):map__71523);
var selection = (function (){var obj71549 = map__71523__$1;
var k71550 = "selection";
if((function (){var obj71553 = obj71549;
return (((!((obj71553 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71550,obj71553)));
})()){
return (obj71549[k71550]);
} else {
return undefined;
}
})();
var docChanged = (function (){var obj71557 = map__71522__$1;
var k71558 = "docChanged";
if((function (){var obj71561 = obj71557;
return (((!((obj71561 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71558,obj71561)));
})()){
return (obj71557[k71558]);
} else {
return undefined;
}
})();
var previous_position = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_(nextjournal.clojure_mode.selections.eq_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(x),selection))){
return i;
} else {
return null;
}
}),stack));
if(cljs.core.truth_(docChanged)){
return (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),selection,new cljs.core.Keyword(null,"event","event",301435442),nextjournal.clojure_mode.util.get_user_event_annotation(tr)], null),null,(1),null));
} else {
if(cljs.core.not(nextjournal.clojure_mode.extensions.selection_history.something_selected_QMARK_(selection))){
return (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),selection,new cljs.core.Keyword(null,"event","event",301435442),nextjournal.clojure_mode.util.get_user_event_annotation(tr)], null),null,(1),null));
} else {
if(cljs.core.truth_(previous_position)){
var vec__71573 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(previous_position,stack);
var seq__71574 = cljs.core.seq(vec__71573);
var first__71575 = cljs.core.first(seq__71574);
var seq__71574__$1 = cljs.core.next(seq__71574);
var f = first__71575;
var more = seq__71574__$1;
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"prev-event","prev-event",-88694225),new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cljs.core.first(stack))),more);
} else {
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),selection,new cljs.core.Keyword(null,"event","event",301435442),nextjournal.clojure_mode.util.get_user_event_annotation(tr)], null),stack);

}
}
}
})}));
nextjournal.clojure_mode.extensions.selection_history.extension = (function nextjournal$clojure_mode$extensions$selection_history$extension(){
return nextjournal.clojure_mode.extensions.selection_history.selection_history_field;
});
nextjournal.clojure_mode.extensions.selection_history.stack = (function nextjournal$clojure_mode$extensions$selection_history$stack(state){
return state.field(nextjournal.clojure_mode.extensions.selection_history.selection_history_field);
});
nextjournal.clojure_mode.extensions.selection_history.grow_1 = (function nextjournal$clojure_mode$extensions$selection_history$grow_1(state,start,end){
var node = nextjournal.clojure_mode.node.nearest_touching(state,end,(-1));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__71589){
var map__71591 = p__71589;
var map__71591__$1 = (((((!((map__71591 == null))))?(((((map__71591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71591):map__71591);
var a_start = (function (){var obj71594 = map__71591__$1;
var k71595 = "from";
if((function (){var obj71597 = obj71594;
return (((!((obj71597 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71595,obj71597)));
})()){
return (obj71594[k71595]);
} else {
return undefined;
}
})();
var a_end = (function (){var obj71603 = map__71591__$1;
var k71604 = "to";
if((function (){var obj71605 = obj71603;
return (((!((obj71605 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71604,obj71605)));
})()){
return (obj71603[k71604]);
} else {
return undefined;
}
})();
return (((a_start <= start)) && ((((a_end >= end)) && ((!((((a_start === start)) && ((a_end === end)))))))));
}),cljs.core.cons(node,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.inner_span,cljs.core.identity),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.ancestors(node)], 0)))));
});
nextjournal.clojure_mode.extensions.selection_history.selection_grow_STAR_ = (function nextjournal$clojure_mode$extensions$selection_history$selection_grow_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.extensions.selection_history.event_annotation}),(function (p__71618){
var map__71620 = p__71618;
var map__71620__$1 = (((((!((map__71620 == null))))?(((((map__71620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71620):map__71620);
var range = map__71620__$1;
var from = (function (){var obj71627 = map__71620__$1;
var k71628 = "from";
if((function (){var obj71633 = obj71627;
return (((!((obj71633 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71628,obj71633)));
})()){
return (obj71627[k71628]);
} else {
return undefined;
}
})();
var to = (function (){var obj71638 = map__71620__$1;
var k71639 = "to";
if((function (){var obj71640 = obj71638;
return (((!((obj71640 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71639,obj71640)));
})()){
return (obj71638[k71639]);
} else {
return undefined;
}
})();
var empty = (function (){var obj71646 = map__71620__$1;
var k71647 = "empty";
if((function (){var obj71648 = obj71646;
return (((!((obj71648 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71647,obj71648)));
})()){
return (obj71646[k71647]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),(function (){var or__4253__auto__ = (function (){var G__71655 = nextjournal.clojure_mode.node.nearest_touching(state,from,(-1));
if((G__71655 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2(state,G__71655);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return range;
}
})()], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),(function (){var or__4253__auto__ = (function (){var G__71662 = nextjournal.clojure_mode.extensions.selection_history.grow_1(state,from,to);
if((G__71662 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.range(G__71662);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return range;
}
})()], null);
}
}));
});
nextjournal.clojure_mode.extensions.selection_history.selection_return_STAR_ = (function nextjournal$clojure_mode$extensions$selection_history$selection_return_STAR_(state){
var temp__5751__auto__ = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.second(nextjournal.clojure_mode.extensions.selection_history.stack(state)));
if(cljs.core.truth_(temp__5751__auto__)){
var selection = temp__5751__auto__;
return state.update(({"selection": selection, "annotations": nextjournal.clojure_mode.extensions.selection_history.event_annotation}));
} else {
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.extensions.selection_history.event_annotation}),(function (range){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),range.from], null);
}));
}
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.selection_history.js.map
