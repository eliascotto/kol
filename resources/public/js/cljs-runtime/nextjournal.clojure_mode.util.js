goog.provide('nextjournal.clojure_mode.util');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.util.user_event_annotation = (function nextjournal$clojure_mode$util$user_event_annotation(event_name){
return module$node_modules$$codemirror$state$dist$index_cjs.Transaction.userEvent.of(event_name);
});
nextjournal.clojure_mode.util.get_user_event_annotation = (function nextjournal$clojure_mode$util$get_user_event_annotation(tr){
return tr.annotation(module$node_modules$$codemirror$state$dist$index_cjs.Transaction.userEvent);
});
nextjournal.clojure_mode.util.guard = (function nextjournal$clojure_mode$util$guard(x,f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
nextjournal.clojure_mode.util.from_to = (function nextjournal$clojure_mode$util$from_to(p1,p2){
if((p1 > p2)){
return ({"from": p2, "to": p1});
} else {
return ({"from": p1, "to": p2});
}
});
/**
 * If passed a transaction, dispatch to view and return true to stop processing commands.
 */
nextjournal.clojure_mode.util.dispatch_some = (function nextjournal$clojure_mode$util$dispatch_some(view,tr){
if(cljs.core.truth_(tr)){
view.dispatch(tr);

return true;
} else {
return false;
}
});
/**
 * Returns a `change` that inserts string `s` at position `from` and moves cursor to end of insertion.
 */
nextjournal.clojure_mode.util.insertion = (function nextjournal$clojure_mode$util$insertion(var_args){
var G__71183 = arguments.length;
switch (G__71183) {
case 2:
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2 = (function (from,s){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,from,s);
}));

(nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3 = (function (from,to,s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"insert","insert",1286475395),s,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from + ((s).length))], null);
}));

(nextjournal.clojure_mode.util.insertion.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.util.deletion = (function nextjournal$clojure_mode$util$deletion(var_args){
var G__71192 = arguments.length;
switch (G__71192) {
case 1:
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$1 = (function (from){
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2((function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (from - (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})(),from);
}));

(nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
var from__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to))?(function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (from - (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})():from);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from__$1,new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from__$1,new cljs.core.Keyword(null,"to","to",192099007),to], null)], null);
}));

(nextjournal.clojure_mode.util.deletion.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.util.line_content_at = (function nextjournal$clojure_mode$util$line_content_at(state,from){
var obj__70928__auto__ = (function (){var parent__70935__auto__ = (state["doc"]);
var f__70936__auto__ = (parent__70935__auto__["lineAt"]);
return f__70936__auto__.call(parent__70935__auto__,from);
})();
var f__70929__auto__ = (obj__70928__auto__["slice"]);
return f__70929__auto__.call(obj__70928__auto__);
});
nextjournal.clojure_mode.util.map_cursor = (function nextjournal$clojure_mode$util$map_cursor(original_range,state,update_map){
if(cljs.core.map_QMARK_(update_map)){
} else {
throw (new Error("Assert failed: (map? update-map)"));
}

var map__71224 = nextjournal.clojure_mode.util.guard(update_map,cljs.core.map_QMARK_);
var map__71224__$1 = cljs.core.__destructure_map(map__71224);
var mapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71224__$1,new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71224__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var from_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71224__$1,new cljs.core.Keyword(null,"from-to","from-to",-640428401));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71224__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71224__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var change_desc = (cljs.core.truth_(changes)?state.changes(cljs.core.clj__GT_js(changes)):null);
var G__71231 = ({"range": (function (){var or__4253__auto__ = range;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (cljs.core.truth_(mapped)?nextjournal.clojure_mode.selections.cursor(change_desc.mapPos(mapped)):(cljs.core.truth_(cursor)?nextjournal.clojure_mode.selections.cursor(cursor):(cljs.core.truth_(from_to)?nextjournal.clojure_mode.selections.range.cljs$core$IFn$_invoke$arity$2((from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((0)) : from_to.call(null,(0))),(from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((1)) : from_to.call(null,(1)))):null)));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return original_range;
}
}
})()});
if(cljs.core.truth_(change_desc)){
var obj71241 = G__71231;
(obj71241["changes"] = change_desc);

return obj71241;
} else {
return G__71231;
}
});
/**
 * Applies `f` to each range in `state` (see `changeByRange`)
 */
nextjournal.clojure_mode.util.update_ranges = (function nextjournal$clojure_mode$util$update_ranges(var_args){
var G__71264 = arguments.length;
switch (G__71264) {
case 2:
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2 = (function (state,f){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,null,f);
}));

(nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3 = (function (state,tr_specs,f){
return state.update((function (p1__71256_SHARP_){
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(p1__71256_SHARP_,tr_specs);
})(state.changeByRange((function (range){
var or__4253__auto__ = (function (){var temp__5757__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(range) : f.call(null,range));
if((temp__5757__auto__ == null)){
return null;
} else {
var result = temp__5757__auto__;
return nextjournal.clojure_mode.util.map_cursor(range,state,result);
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ({"range": range});
}
}))));
}));

(nextjournal.clojure_mode.util.update_ranges.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.util.dispatch_changes = (function nextjournal$clojure_mode$util$dispatch_changes(state,dispatch,changes){
if(cljs.core.truth_(changes.empty)){
return null;
} else {
var G__71265 = state.update(({"changes": changes}));
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__71265) : dispatch.call(null,G__71265));
}
});
nextjournal.clojure_mode.util.update_lines = (function nextjournal$clojure_mode$util$update_lines(var_args){
var args__4870__auto__ = [];
var len__4864__auto___71407 = arguments.length;
var i__4865__auto___71408 = (0);
while(true){
if((i__4865__auto___71408 < len__4864__auto___71407)){
args__4870__auto__.push((arguments[i__4865__auto___71408]));

var G__71409 = (i__4865__auto___71408 + (1));
i__4865__auto___71408 = G__71409;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic = (function (state,f,p__71269){
var vec__71270 = p__71269;
var map__71273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71270,(0),null);
var map__71273__$1 = cljs.core.__destructure_map(map__71273);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71273__$1,new cljs.core.Keyword(null,"from","from",1815293044),(0));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71273__$1,new cljs.core.Keyword(null,"to","to",192099007));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71273__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var iterator = state.doc.iter();
var result = iterator.next();
var changes = [];
var from_pos = from;
var line_num = (1);
while(true){
var map__71287 = result;
var map__71287__$1 = (((((!((map__71287 == null))))?(((((map__71287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71287):map__71287);
var done = (function (){var obj71289 = map__71287__$1;
var k71290 = "done";
if((function (){var obj71291 = obj71289;
return (((!((obj71291 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71290,obj71291)));
})()){
return (obj71289[k71290]);
} else {
return undefined;
}
})();
var lineBreak = (function (){var obj71292 = map__71287__$1;
var k71293 = "lineBreak";
if((function (){var obj71294 = obj71292;
return (((!((obj71294 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71293,obj71294)));
})()){
return (obj71292[k71293]);
} else {
return undefined;
}
})();
var value = (function (){var obj71295 = map__71287__$1;
var k71296 = "value";
if((function (){var obj71297 = obj71295;
return (((!((obj71297 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71296,obj71297)));
})()){
return (obj71295[k71296]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__4253__auto__ = done;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (from > to);
}
})())){
return state.update(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(({"changes": state.changes(changes)}),spec));
} else {
var G__71410 = iterator.next();
var G__71411 = (function (){var temp__5751__auto__ = (function (){var and__4251__auto__ = cljs.core.not(lineBreak);
if(and__4251__auto__){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(from_pos,value,line_num) : f.call(null,from_pos,value,line_num));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var change = temp__5751__auto__;
var array71298 = changes;
array71298.push(change);

return array71298;
} else {
return changes;
}
})();
var G__71412 = (from_pos + ((value).length));
var G__71413 = (function (){var G__71299 = line_num;
if(cljs.core.truth_(lineBreak)){
return (G__71299 + (1));
} else {
return G__71299;
}
})();
result = G__71410;
changes = G__71411;
from_pos = G__71412;
line_num = G__71413;
continue;
}
break;
}
}));

(nextjournal.clojure_mode.util.update_lines.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.clojure_mode.util.update_lines.cljs$lang$applyTo = (function (seq71266){
var G__71267 = cljs.core.first(seq71266);
var seq71266__$1 = cljs.core.next(seq71266);
var G__71268 = cljs.core.first(seq71266__$1);
var seq71266__$2 = cljs.core.next(seq71266__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71267,G__71268,seq71266__$2);
}));

/**
 * `f` will be called for each selected line with args [line, changes-array, range]
 * and should *mutate* changes-array
 */
nextjournal.clojure_mode.util.update_selected_lines = (function nextjournal$clojure_mode$util$update_selected_lines(state,f){
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var doc = state.doc;
return state.changeByRange((function (p__71301){
var map__71302 = p__71301;
var map__71302__$1 = (((((!((map__71302 == null))))?(((((map__71302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71302):map__71302);
var range = map__71302__$1;
var from = (function (){var obj71304 = map__71302__$1;
var k71305 = "from";
if((function (){var obj71306 = obj71304;
return (((!((obj71306 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71305,obj71306)));
})()){
return (obj71304[k71305]);
} else {
return undefined;
}
})();
var to = (function (){var obj71307 = map__71302__$1;
var k71308 = "to";
if((function (){var obj71309 = obj71307;
return (((!((obj71309 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71308,obj71309)));
})()){
return (obj71307[k71308]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj71310 = map__71302__$1;
var k71311 = "anchor";
if((function (){var obj71312 = obj71310;
return (((!((obj71312 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71311,obj71312)));
})()){
return (obj71310[k71311]);
} else {
return undefined;
}
})();
var head = (function (){var obj71313 = map__71302__$1;
var k71314 = "head";
if((function (){var obj71315 = obj71313;
return (((!((obj71315 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71314,obj71315)));
})()){
return (obj71313[k71314]);
} else {
return undefined;
}
})();
var changes = [];
var line = doc.lineAt(from);
while(true){
var map__71324 = line;
var map__71324__$1 = (((((!((map__71324 == null))))?(((((map__71324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71324):map__71324);
var line_number = (function (){var obj71326 = map__71324__$1;
var k71327 = "number";
if((function (){var obj71328 = obj71326;
return (((!((obj71328 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71327,obj71328)));
})()){
return (obj71326[k71327]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj71329 = map__71324__$1;
var k71330 = "to";
if((function (){var obj71331 = obj71329;
return (((!((obj71331 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71330,obj71331)));
})()){
return (obj71329[k71330]);
} else {
return undefined;
}
})();
if((line.number > cljs.core.deref(at_line))){
cljs.core.reset_BANG_(at_line,line_number);

(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(line,changes,range) : f.call(null,line,changes,range));
} else {
}

var temp__5751__auto__ = (function (){var and__4251__auto__ = (to > line_to);
if(and__4251__auto__){
return nextjournal.clojure_mode.util.guard(doc.lineAt((line_to + (1))),((function (line,and__4251__auto__,map__71324,map__71324__$1,line_number,line_to,changes,map__71302,map__71302__$1,range,from,to,anchor,head,at_line,doc){
return (function (p1__71300_SHARP_){
return (p1__71300_SHARP_.number > line_number);
});})(line,and__4251__auto__,map__71324,map__71324__$1,line_number,line_to,changes,map__71302,map__71302__$1,range,from,to,anchor,head,at_line,doc))
);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var next_line = temp__5751__auto__;
var G__71414 = next_line;
line = G__71414;
continue;
} else {
var change_set = state.changes(changes);
return ({"changes": changes, "range": module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.range(change_set.mapPos(anchor,(1)),change_set.mapPos(head,(1)))});
}
break;
}
}));
});
/**
 * `f` will be called for each changed line with args [line, changes-array]
 * and should *mutate* changes-array. Selections will be mapped through the resulting changeset.
 */
nextjournal.clojure_mode.util.iter_changed_lines = (function nextjournal$clojure_mode$util$iter_changed_lines(p__71332,f){
var map__71333 = p__71332;
var map__71333__$1 = (((((!((map__71333 == null))))?(((((map__71333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71333):map__71333);
var tr = map__71333__$1;
var map__71334 = (function (){var obj71336 = map__71333__$1;
var k71337 = "state";
if((function (){var obj71338 = obj71336;
return (((!((obj71338 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71337,obj71338)));
})()){
return (obj71336[k71337]);
} else {
return undefined;
}
})();
var map__71334__$1 = (((((!((map__71334 == null))))?(((((map__71334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71334):map__71334);
var state = map__71334__$1;
var doc = (function (){var obj71340 = map__71334__$1;
var k71341 = "doc";
if((function (){var obj71342 = obj71340;
return (((!((obj71342 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71341,obj71342)));
})()){
return (obj71340[k71341]);
} else {
return undefined;
}
})();
var changes = (function (){var obj71343 = map__71333__$1;
var k71344 = "changes";
if((function (){var obj71345 = obj71343;
return (((!((obj71345 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71344,obj71345)));
})()){
return (obj71343[k71344]);
} else {
return undefined;
}
})();
var effects = (function (){var obj71346 = map__71333__$1;
var k71347 = "effects";
if((function (){var obj71348 = obj71346;
return (((!((obj71348 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71347,obj71348)));
})()){
return (obj71346[k71347]);
} else {
return undefined;
}
})();
var selection = (function (){var obj71349 = map__71333__$1;
var k71350 = "selection";
if((function (){var obj71351 = obj71349;
return (((!((obj71351 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71350,obj71351)));
})()){
return (obj71349[k71350]);
} else {
return undefined;
}
})();
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var next_changes = [];
var _ = changes.iterChanges((function (from_a,to_a,from_b,to_b,inserted){
var map__71352 = doc.lineAt(from_b);
var map__71352__$1 = (((((!((map__71352 == null))))?(((((map__71352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71352):map__71352);
var line = map__71352__$1;
var line_number = (function (){var obj71354 = map__71352__$1;
var k71355 = "number";
if((function (){var obj71356 = obj71354;
return (((!((obj71356 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71355,obj71356)));
})()){
return (obj71354[k71355]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj71357 = map__71352__$1;
var k71358 = "to";
if((function (){var obj71359 = obj71357;
return (((!((obj71359 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71358,obj71359)));
})()){
return (obj71357[k71358]);
} else {
return undefined;
}
})();
var line__$1 = line;
while(true){
if((line_number > cljs.core.deref(at_line))){
cljs.core.reset_BANG_(at_line,line_number);

(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(line__$1,next_changes) : f.call(null,line__$1,next_changes));
} else {
}

if((to_b <= line_to)){
return null;
} else {
var next_line = doc.lineAt((line_to + (1)));
if(cljs.core.truth_((function (){var and__4251__auto__ = next_line;
if(cljs.core.truth_(and__4251__auto__)){
return (next_line.number > line__$1.number);
} else {
return and__4251__auto__;
}
})())){
var G__71415 = next_line;
line__$1 = G__71415;
continue;
} else {
return null;
}
}
break;
}
}));
var next_changeset = state.changes(next_changes);
if(cljs.core.seq(next_changes)){
var G__71360 = (function (){var obj71361 = (function (){var obj71362 = tr;
if((!((obj71362 == null)))){
var out71363 = ({});
var k__70836__auto___71416 = "annotations";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__70836__auto___71416,obj71362)){
var obj71366_71417 = out71363;
(obj71366_71417[k__70836__auto___71416] = (obj71362[k__70836__auto___71416]));

} else {
}

var k__70836__auto___71418 = "scrollIntoView";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__70836__auto___71418,obj71362)){
var obj71367_71419 = out71363;
(obj71367_71419[k__70836__auto___71418] = (obj71362[k__70836__auto___71418]));

} else {
}

var k__70836__auto___71420 = "reconfigure";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__70836__auto___71420,obj71362)){
var obj71368_71421 = out71363;
(obj71368_71421[k__70836__auto___71420] = (obj71362[k__70836__auto___71420]));

} else {
}

return out71363;
} else {
return ({});
}
})();
var obj71371 = (((!((obj71361 == null))))?obj71361:({}));
(obj71371["changes"] = changes.compose(next_changeset));

return obj71371;
})();
var G__71360__$1 = (cljs.core.truth_(selection)?(function (){var obj71374 = G__71360;
var obj71375 = (((!((obj71374 == null))))?obj71374:({}));
(obj71375["selection"] = state.selection.map(next_changeset));

return obj71375;
})():G__71360);
if(cljs.core.truth_(effects)){
var obj71378 = G__71360__$1;
var obj71379 = (((!((obj71378 == null))))?obj71378:({}));
(obj71379["effects"] = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.mapEffects(effects,next_changeset));

return obj71379;
} else {
return G__71360__$1;
}
} else {
return tr;
}
});
nextjournal.clojure_mode.util.something_selected_QMARK_ = (function nextjournal$clojure_mode$util$something_selected_QMARK_(p__71383){
var map__71384 = p__71383;
var map__71384__$1 = (((((!((map__71384 == null))))?(((((map__71384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71384):map__71384);
var map__71385 = (function (){var obj71387 = map__71384__$1;
var k71388 = "selection";
if((function (){var obj71389 = obj71387;
return (((!((obj71389 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71388,obj71389)));
})()){
return (obj71387[k71388]);
} else {
return undefined;
}
})();
var map__71385__$1 = (((((!((map__71385 == null))))?(((((map__71385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71385):map__71385);
var ranges = (function (){var obj71391 = map__71385__$1;
var k71392 = "ranges";
if((function (){var obj71393 = obj71391;
return (((!((obj71393 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71392,obj71393)));
})()){
return (obj71391[k71392]);
} else {
return undefined;
}
})();
return (!(cljs.core.every_QMARK_((function (p1__71382_SHARP_){
return p1__71382_SHARP_.empty;
}),ranges)));
});
nextjournal.clojure_mode.util.range_str = (function nextjournal$clojure_mode$util$range_str(state,p__71394){
var map__71395 = p__71394;
var map__71395__$1 = (((((!((map__71395 == null))))?(((((map__71395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71395):map__71395);
var selection = map__71395__$1;
var from = (function (){var obj71397 = map__71395__$1;
var k71398 = "from";
if((function (){var obj71399 = obj71397;
return (((!((obj71399 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71398,obj71399)));
})()){
return (obj71397[k71398]);
} else {
return undefined;
}
})();
var to = (function (){var obj71400 = map__71395__$1;
var k71401 = "to";
if((function (){var obj71402 = obj71400;
return (((!((obj71402 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71401,obj71402)));
})()){
return (obj71400[k71401]);
} else {
return undefined;
}
})();
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var parent__70935__auto__ = (state["doc"]);
var f__70936__auto__ = (parent__70935__auto__["slice"]);
return f__70936__auto__.call(parent__70935__auto__,from,to);
})());
});

//# sourceMappingURL=nextjournal.clojure_mode.util.js.map
