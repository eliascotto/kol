goog.provide('nextjournal.clojure_mode.test_utils');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.test_utils.make_state = (function nextjournal$clojure_mode$test_utils$make_state(extensions,doc){
var vec__71767 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__71771,match){
var vec__71772 = p__71771;
var doc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71772,(0),null);
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71772,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(match,"|")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ranges,module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.cursor(((doc__$1).length)))], null);
} else {
if(clojure.string.starts_with_QMARK_(match,"<")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[doc__$1,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(1),(cljs.core.count(match) - (1)))].join(''),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ranges,module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.range(((doc__$1).length),(((doc__$1).length) + (cljs.core.count(match) - (2)))))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[doc__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''),ranges], null);

}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentVector.EMPTY], null),cljs.core.re_seq(/\||<[^>]*?>|[^<>|]+/,doc));
var doc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71767,(0),null);
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71767,(1),null);
return module$node_modules$$codemirror$state$dist$index_cjs.EditorState.create(({"doc": doc__$1, "selection": ((cljs.core.seq(ranges))?module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.create(cljs.core.to_array(ranges)):undefined), "extensions": (function (){var G__71786 = [module$node_modules$$codemirror$state$dist$index_cjs.EditorState.allowMultipleSelections.of(true)];
if(cljs.core.truth_(extensions)){
var array71787 = G__71786;
array71787.push(extensions);

return array71787;
} else {
return G__71786;
}
})()}));
});
nextjournal.clojure_mode.test_utils.state_str = (function nextjournal$clojure_mode$test_utils$state_str(state){
var doc = cljs.core.str.cljs$core$IFn$_invoke$arity$1(state.doc);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (doc__$1,p__71792){
var map__71794 = p__71792;
var map__71794__$1 = (((((!((map__71794 == null))))?(((((map__71794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71794):map__71794);
var empty = (function (){var obj71800 = map__71794__$1;
var k71801 = "empty";
if((function (){var obj71804 = obj71800;
return (((!((obj71804 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71801,obj71804)));
})()){
return (obj71800[k71801]);
} else {
return undefined;
}
})();
var from = (function (){var obj71811 = map__71794__$1;
var k71812 = "from";
if((function (){var obj71815 = obj71811;
return (((!((obj71815 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71812,obj71815)));
})()){
return (obj71811[k71812]);
} else {
return undefined;
}
})();
var to = (function (){var obj71824 = map__71794__$1;
var k71825 = "to";
if((function (){var obj71830 = obj71824;
return (((!((obj71830 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71825,obj71830)));
})()){
return (obj71824[k71825]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(doc__$1,(0),from),"|",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(doc__$1,from)].join('');
} else {
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(doc__$1,(0),from),"<",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(doc__$1,from,to),">",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(doc__$1,to)].join('');
}
}),doc,cljs.core.reverse(state.selection.ranges));
});
nextjournal.clojure_mode.test_utils.apply_cmd = (function nextjournal$clojure_mode$test_utils$apply_cmd(extensions,cmd,doc){
var state = nextjournal.clojure_mode.test_utils.make_state(extensions,doc);
var _BANG_tr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _ = (function (){var G__71843 = ({"state": state, "dispatch": (function (p1__71839_SHARP_){
return cljs.core.reset_BANG_(_BANG_tr,p1__71839_SHARP_);
})});
return (cmd.cljs$core$IFn$_invoke$arity$1 ? cmd.cljs$core$IFn$_invoke$arity$1(G__71843) : cmd.call(null,G__71843));
})();
var tr = cljs.core.deref(_BANG_tr);
return nextjournal.clojure_mode.test_utils.state_str((function (){var obj71844 = tr;
var k71845 = "state";
if((function (){var obj71847 = obj71844;
return (((!((obj71847 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71845,obj71847)));
})()){
return (obj71844[k71845]);
} else {
return undefined;
}
})());
});
nextjournal.clojure_mode.test_utils.apply_f = (function nextjournal$clojure_mode$test_utils$apply_f(extensions,cmd,doc){
if(cljs.core.array_QMARK_(extensions)){
} else {
throw (new Error("Assert failed: (array? extensions)"));
}

if(cljs.core.fn_QMARK_(cmd)){
} else {
throw (new Error("Assert failed: (fn? cmd)"));
}

if(typeof doc === 'string'){
} else {
throw (new Error("Assert failed: (string? doc)"));
}

var state = nextjournal.clojure_mode.test_utils.make_state(extensions,doc);
var tr = (cmd.cljs$core$IFn$_invoke$arity$1 ? cmd.cljs$core$IFn$_invoke$arity$1(state) : cmd.call(null,state));
return nextjournal.clojure_mode.test_utils.state_str((cljs.core.truth_(tr)?tr.state:state));
});

//# sourceMappingURL=nextjournal.clojure_mode.test_utils.js.map
