goog.provide('nextjournal.clojure_mode.extensions.close_brackets');
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$text$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$text$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_ = (function nextjournal$clojure_mode$extensions$close_brackets$in_string_QMARK_(state,pos){
var G__71984 = nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,pos));
var fexpr__71983 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["StringContent",null,"String",null], null), null);
return (fexpr__71983.cljs$core$IFn$_invoke$arity$1 ? fexpr__71983.cljs$core$IFn$_invoke$arity$1(G__71984) : fexpr__71983.call(null,G__71984));
});
nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_ = (function nextjournal$clojure_mode$extensions$close_brackets$escaped_QMARK_(state,pos){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",state.doc.slice((function (){var x__4336__auto__ = (0);
var y__4337__auto__ = (pos - (1));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})(),pos).toString());
});
nextjournal.clojure_mode.extensions.close_brackets.backspace_backoff = (function nextjournal$clojure_mode$extensions$close_brackets$backspace_backoff(state,from,to){
if(cljs.core.truth_((function (){var and__4251__auto__ = (function (){var G__71987 = nextjournal.clojure_mode.node.node_BAR_(state,(from - (1)));
if((G__71987 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__71987,nextjournal.clojure_mode.node.line_comment_QMARK_);
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return (!(clojure.string.blank_QMARK_(nextjournal.clojure_mode.util.line_content_at(state,from))));
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1))], null);
} else {
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2(from,to);
}
});
/**
 * - skips over closing brackets
 * - when deleting an opening bracket of an empty list, removes both brackets
 */
nextjournal.clojure_mode.extensions.close_brackets.handle_backspace = (function nextjournal$clojure_mode$extensions$close_brackets$handle_backspace(p__71991){
var map__71993 = p__71991;
var map__71993__$1 = (((((!((map__71993 == null))))?(((((map__71993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71993):map__71993);
var state = map__71993__$1;
var doc = (function (){var obj71995 = map__71993__$1;
var k71996 = "doc";
if((function (){var obj71997 = obj71995;
return (((!((obj71997 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71996,obj71997)));
})()){
return (obj71995[k71996]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),state.selection.ranges.length);
if(and__4251__auto__){
var range = (function (){var obj72002 = (function (){var obj72000 = (function (){var obj71998 = state;
var k71999 = "selection";
if((function (){var obj72004 = obj71998;
return (((!((obj72004 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71999,obj72004)));
})()){
return (obj71998[k71999]);
} else {
return undefined;
}
})();
var k72001 = "ranges";
if((function (){var obj72006 = obj72000;
return (((!((obj72006 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72001,obj72006)));
})()){
return (obj72000[k72001]);
} else {
return undefined;
}
})();
var k72003 = (0);
if((function (){var obj72007 = obj72002;
return (((!((obj72007 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72003,obj72007)));
})()){
return (obj72002[k72003]);
} else {
return undefined;
}
})();
var and__4251__auto____$1 = range.empty;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),range.from);
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
return null;
} else {
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("delete")}),(function (p__72008){
var map__72009 = p__72008;
var map__72009__$1 = (((((!((map__72009 == null))))?(((((map__72009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72009):map__72009);
var range = map__72009__$1;
var head = (function (){var obj72012 = map__72009__$1;
var k72013 = "head";
if((function (){var obj72014 = obj72012;
return (((!((obj72014 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72013,obj72014)));
})()){
return (obj72012[k72013]);
} else {
return undefined;
}
})();
var empty = (function (){var obj72015 = map__72009__$1;
var k72016 = "empty";
if((function (){var obj72017 = obj72015;
return (((!((obj72017 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72016,obj72017)));
})()){
return (obj72015[k72016]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj72018 = map__72009__$1;
var k72019 = "anchor";
if((function (){var obj72020 = obj72018;
return (((!((obj72020 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72019,obj72020)));
})()){
return (obj72018[k72019]);
} else {
return undefined;
}
})();
var map__72021 = nextjournal.clojure_mode.util.from_to(head,anchor);
var map__72021__$1 = (((((!((map__72021 == null))))?(((((map__72021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72021):map__72021);
var range__$1 = map__72021__$1;
var from = (function (){var obj72024 = map__72021__$1;
var k72025 = "from";
if((function (){var obj72026 = obj72024;
return (((!((obj72026 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72025,obj72026)));
})()){
return (obj72024[k72025]);
} else {
return undefined;
}
})();
var to = (function (){var obj72027 = map__72021__$1;
var k72028 = "to";
if((function (){var obj72029 = obj72027;
return (((!((obj72029 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72028,obj72029)));
})()){
return (obj72027[k72028]);
} else {
return undefined;
}
})();
var node_BAR_ = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state).resolve(from,(-1));
var parent = node_BAR_.parent;
if(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not(empty);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("StringContent",nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,from,(-1))));
if(or__4253__auto____$1){
return or__4253__auto____$1;
} else {
var and__4251__auto__ = parent;
if(cljs.core.truth_(and__4251__auto__)){
return (((!(nextjournal.clojure_mode.node.balanced_QMARK_(parent)))) && (nextjournal.clojure_mode.node.left_edge_QMARK_(node_BAR_)));
} else {
return and__4251__auto__;
}
}
}
})())){
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2(from,to);
} else {
if(((nextjournal.clojure_mode.node.right_edge_QMARK_(node_BAR_)) && ((from === nextjournal.clojure_mode.node.end(parent))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1))], null);
} else {
if(((((nextjournal.clojure_mode.node.start_edge_QMARK_(node_BAR_)) || (nextjournal.clojure_mode.node.same_edge_QMARK_(node_BAR_)))) && ((nextjournal.clojure_mode.node.start(node_BAR_) === nextjournal.clojure_mode.node.start(parent))))){
if(nextjournal.clojure_mode.node.empty_QMARK_(nextjournal.clojure_mode.node.up(node_BAR_))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),nextjournal.clojure_mode.node.start(parent),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.util.from_to(nextjournal.clojure_mode.node.start(parent),nextjournal.clojure_mode.node.end(parent))], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from], null);
}
} else {
return nextjournal.clojure_mode.extensions.close_brackets.backspace_backoff(state,from,to);

}
}
}
}));
}
});
nextjournal.clojure_mode.extensions.close_brackets.coll_pairs = new cljs.core.PersistentArrayMap(null, 4, ["(",")","[","]","{","}","\"","\""], null);
nextjournal.clojure_mode.extensions.close_brackets.handle_open = (function nextjournal$clojure_mode$extensions$close_brackets$handle_open(state,open){
var close = (nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.cljs$core$IFn$_invoke$arity$1(open) : nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.call(null,open));
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("input")}),(function (p__72033){
var map__72034 = p__72033;
var map__72034__$1 = (((((!((map__72034 == null))))?(((((map__72034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72034):map__72034);
var from = (function (){var obj72037 = map__72034__$1;
var k72038 = "from";
if((function (){var obj72039 = obj72037;
return (((!((obj72039 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72038,obj72039)));
})()){
return (obj72037[k72038]);
} else {
return undefined;
}
})();
var to = (function (){var obj72040 = map__72034__$1;
var k72041 = "to";
if((function (){var obj72042 = obj72040;
return (((!((obj72042 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72041,obj72042)));
})()){
return (obj72040[k72041]);
} else {
return undefined;
}
})();
var head = (function (){var obj72043 = map__72034__$1;
var k72044 = "head";
if((function (){var obj72045 = obj72043;
return (((!((obj72045 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72044,obj72045)));
})()){
return (obj72043[k72044]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj72046 = map__72034__$1;
var k72047 = "anchor";
if((function (){var obj72048 = obj72046;
return (((!((obj72048 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72047,obj72048)));
})()){
return (obj72046[k72047]);
} else {
return undefined;
}
})();
var empty = (function (){var obj72049 = map__72034__$1;
var k72050 = "empty";
if((function (){var obj72051 = obj72049;
return (((!((obj72051 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72050,obj72051)));
})()){
return (obj72049[k72050]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_(state,from))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(open,"\"")){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2(head,"\\\"");
} else {
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,open);
}
} else {
if(nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_(state,from)){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,open);
} else {
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),[open,close].join(''),new cljs.core.Keyword(null,"from","from",1815293044),head], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(head + ((open).length))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),open,new cljs.core.Keyword(null,"from","from",1815293044),from], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),close,new cljs.core.Keyword(null,"from","from",1815293044),to], null)], null),new cljs.core.Keyword(null,"from-to","from-to",-640428401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(anchor + ((open).length)),(head + ((open).length))], null)], null);
}

}
}
}));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_close = (function nextjournal$clojure_mode$extensions$close_brackets$handle_close(state,key_name){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("input")}),(function (p__72052){
var map__72053 = p__72052;
var map__72053__$1 = (((((!((map__72053 == null))))?(((((map__72053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72053):map__72053);
var range = map__72053__$1;
var empty = (function (){var obj72055 = map__72053__$1;
var k72056 = "empty";
if((function (){var obj72057 = obj72055;
return (((!((obj72057 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72056,obj72057)));
})()){
return (obj72055[k72056]);
} else {
return undefined;
}
})();
var head = (function (){var obj72058 = map__72053__$1;
var k72059 = "head";
if((function (){var obj72060 = obj72058;
return (((!((obj72060 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72059,obj72060)));
})()){
return (obj72058[k72059]);
} else {
return undefined;
}
})();
var from = (function (){var obj72061 = map__72053__$1;
var k72062 = "from";
if((function (){var obj72063 = obj72061;
return (((!((obj72063 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72062,obj72063)));
})()){
return (obj72061[k72062]);
} else {
return undefined;
}
})();
var to = (function (){var obj72064 = map__72053__$1;
var k72065 = "to";
if((function (){var obj72066 = obj72064;
return (((!((obj72066 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72065,obj72066)));
})()){
return (obj72064[k72065]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__4253__auto__ = nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_(state,from);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_(state,from);
}
})())){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,key_name);
} else {
if(cljs.core.truth_(empty)){
var or__4253__auto__ = (function (){var unbalanced = (function (){var G__72067 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,head,(-1));
var G__72067__$1 = (((G__72067 == null))?null:nextjournal.clojure_mode.node.ancestors(G__72067));
var G__72067__$2 = (((G__72067__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,cljs.core.complement(nextjournal.clojure_mode.node.balanced_QMARK_)),G__72067__$1));
if((G__72067__$2 == null)){
return null;
} else {
return cljs.core.first(G__72067__$2);
}
})();
var closing = (function (){var G__72068 = unbalanced;
var G__72068__$1 = (((G__72068 == null))?null:nextjournal.clojure_mode.node.down(G__72068));
if((G__72068__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.closed_by(G__72068__$1);
}
})();
var pos = (function (){var G__72069 = unbalanced;
if((G__72069 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.end(G__72069);
}
})();
if(cljs.core.truth_((function (){var and__4251__auto__ = closing;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(closing,key_name);
} else {
return and__4251__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),pos,new cljs.core.Keyword(null,"insert","insert",1286475395),closing], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(pos + (1))], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var temp__5753__auto__ = (function (){var temp__5753__auto__ = nextjournal.clojure_mode.node.terminal_cursor(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),head,(1));
if(cljs.core.truth_(temp__5753__auto__)){
var cursor = temp__5753__auto__;
while(true){
if(nextjournal.clojure_mode.node.right_edge_type_QMARK_(cursor.type)){
return nextjournal.clojure_mode.node.end(cursor);
} else {
if(cljs.core.truth_(cursor.next())){
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var close_node_end = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),close_node_end], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),head], null);
}
}
} else {
return null;
}
}
}));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_backspace_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_backspace_cmd(p__72070){
var map__72071 = p__72070;
var map__72071__$1 = (((((!((map__72071 == null))))?(((((map__72071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72071):map__72071);
var view = map__72071__$1;
var state = (function (){var obj72073 = map__72071__$1;
var k72074 = "state";
if((function (){var obj72075 = obj72073;
return (((!((obj72075 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72074,obj72075)));
})()){
return (obj72073[k72074]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_backspace(state));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_open_cmd(key_name){
return (function (p__72076){
var map__72077 = p__72076;
var map__72077__$1 = (((((!((map__72077 == null))))?(((((map__72077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72077):map__72077);
var view = map__72077__$1;
var state = (function (){var obj72079 = map__72077__$1;
var k72080 = "state";
if((function (){var obj72081 = obj72079;
return (((!((obj72081 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72080,obj72081)));
})()){
return (obj72079[k72080]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_open(state,key_name));
});
});
nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_close_cmd(key_name){
return (function (p__72082){
var map__72083 = p__72082;
var map__72083__$1 = (((((!((map__72083 == null))))?(((((map__72083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72083):map__72083);
var view = map__72083__$1;
var state = (function (){var obj72085 = map__72083__$1;
var k72086 = "state";
if((function (){var obj72087 = obj72085;
return (((!((obj72087 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72086,obj72087)));
})()){
return (obj72085[k72086]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_close(state,key_name));
});
});
nextjournal.clojure_mode.extensions.close_brackets.extension = (function nextjournal$clojure_mode$extensions$close_brackets$extension(){
return module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":"Backspace","run":(function (p__72088){
var map__72089 = p__72088;
var map__72089__$1 = (((((!((map__72089 == null))))?(((((map__72089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72089):map__72089);
var view = map__72089__$1;
var state = (function (){var obj72091 = map__72089__$1;
var k72092 = "state";
if((function (){var obj72093 = obj72091;
return (((!((obj72093 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k72092,obj72093)));
})()){
return (obj72091[k72092]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_backspace(state));
})}),({"key":"(","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("(")}),({"key":"[","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("[")}),({"key":"{","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("{")}),({"key":"\"","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("\"")}),({"key":")","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd(")")}),({"key":"]","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd("]")}),({"key":"}","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd("}")})]);
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.close_brackets.js.map
