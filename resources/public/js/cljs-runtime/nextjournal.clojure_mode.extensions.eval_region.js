goog.provide('nextjournal.clojure_mode.extensions.eval_region');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
/**
 * Returns node or its highest ancestor that starts or ends at the cursor position.
 */
nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here = (function nextjournal$clojure_mode$extensions$eval_region$uppermost_edge_here(pos,node){
var or__4253__auto__ = cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_),(function (p1__71498_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.end(p1__71498_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.end(node)], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.start(p1__71498_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.start(node)], 0))));
})),cljs.core.iterate(nextjournal.clojure_mode.node.up,node)));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return node;
}
});
nextjournal.clojure_mode.extensions.eval_region.main_selection = (function nextjournal$clojure_mode$extensions$eval_region$main_selection(state){
var obj71508 = (function (){var obj71506 = (function (){var parent__70935__auto__ = (state["selection"]);
var f__70936__auto__ = (parent__70935__auto__["asSingle"]);
return f__70936__auto__.call(parent__70935__auto__);
})();
var k71507 = "ranges";
if((function (){var obj71510 = obj71506;
return (((!((obj71510 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71507,obj71510)));
})()){
return (obj71506[k71507]);
} else {
return undefined;
}
})();
var k71509 = (0);
if((function (){var obj71513 = obj71508;
return (((!((obj71513 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71509,obj71513)));
})()){
return (obj71508[k71509]);
} else {
return undefined;
}
});
nextjournal.clojure_mode.extensions.eval_region.node_at_cursor = (function nextjournal$clojure_mode$extensions$eval_region$node_at_cursor(var_args){
var G__71531 = arguments.length;
switch (G__71531) {
case 1:
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1 = (function (state){
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2(state,(function (){var obj71545 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
var k71546 = "from";
if((function (){var obj71548 = obj71545;
return (((!((obj71548 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71546,obj71548)));
})()){
return (obj71545[k71546]);
} else {
return undefined;
}
})());
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2 = (function (state,from){
var G__71556 = nextjournal.clojure_mode.node.nearest_touching(state,from,(-1));
var G__71556__$1 = (((G__71556 == null))?null:(function (p1__71521_SHARP_){
if(((nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__71521_SHARP_))) || ((((nextjournal.clojure_mode.node.start(p1__71521_SHARP_) <= from)) || ((nextjournal.clojure_mode.node.end(p1__71521_SHARP_) <= from)))))){
var G__71564 = p1__71521_SHARP_;
if(((nextjournal.clojure_mode.node.top_QMARK_(p1__71521_SHARP_)) || ((((!(nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__71521_SHARP_))))) && ((((nextjournal.clojure_mode.node.start(p1__71521_SHARP_) < from)) && ((from < nextjournal.clojure_mode.node.end(p1__71521_SHARP_))))))))){
return cljs.core.first(nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__71564,from,(-1)));
} else {
return G__71564;
}
} else {
return null;
}
})(G__71556));
var G__71556__$2 = (((G__71556__$1 == null))?null:nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here(from,G__71556__$1));
if((G__71556__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2(state,G__71556__$2);
}
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.extensions.eval_region.top_level_node = (function nextjournal$clojure_mode$extensions$eval_region$top_level_node(state){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_)),cljs.core.iterate(nextjournal.clojure_mode.node.up,nextjournal.clojure_mode.node.nearest_touching(state,(function (){var obj71583 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
var k71584 = "from";
if((function (){var obj71585 = obj71583;
return (((!((obj71585 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71584,obj71585)));
})()){
return (obj71583[k71584]);
} else {
return undefined;
}
})(),(-1)))));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.modifier_effect !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.modifier_effect = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.define();
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.modifier_field !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.modifier_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY),"update":(function (value,tr){
var or__4253__auto__ = (function (){var G__71593 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71590_SHARP_){
return p1__71590_SHARP_.is(nextjournal.clojure_mode.extensions.eval_region.modifier_effect);
}),tr.effects));
if((G__71593 == null)){
return null;
} else {
var obj71598 = G__71593;
var k71599 = "value";
if((function (){var obj71600 = obj71598;
return (((!((obj71600 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71599,obj71600)));
})()){
return (obj71598[k71599]);
} else {
return undefined;
}
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return value;
}
})}));
}
nextjournal.clojure_mode.extensions.eval_region.get_modifier_field = (function nextjournal$clojure_mode$extensions$eval_region$get_modifier_field(state){
return state.field(nextjournal.clojure_mode.extensions.eval_region.modifier_field);
});
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_ = (function nextjournal$clojure_mode$extensions$eval_region$set_modifier_field_BANG_(p__71609,value){
var map__71610 = p__71609;
var map__71610__$1 = (((((!((map__71610 == null))))?(((((map__71610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71610):map__71610);
var view = map__71610__$1;
var dispatch = (function (){var obj71613 = map__71610__$1;
var k71614 = "dispatch";
if((function (){var obj71616 = obj71613;
return (((!((obj71616 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71614,obj71616)));
})()){
return (obj71613[k71614]);
} else {
return undefined;
}
})();
var state = (function (){var obj71621 = map__71610__$1;
var k71622 = "state";
if((function (){var obj71623 = obj71621;
return (((!((obj71623 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71622,obj71623)));
})()){
return (obj71621[k71622]);
} else {
return undefined;
}
})();
var G__71626 = ({"effects": nextjournal.clojure_mode.extensions.eval_region.modifier_effect.of(value)});
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__71626) : dispatch.call(null,G__71626));
});
nextjournal.clojure_mode.extensions.eval_region.mark = (function nextjournal$clojure_mode$extensions$eval_region$mark(spec,p__71636){
var map__71641 = p__71636;
var map__71641__$1 = (((((!((map__71641 == null))))?(((((map__71641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71641):map__71641);
var from = (function (){var obj71649 = map__71641__$1;
var k71650 = "from";
if((function (){var obj71653 = obj71649;
return (((!((obj71653 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71650,obj71653)));
})()){
return (obj71649[k71650]);
} else {
return undefined;
}
})();
var to = (function (){var obj71656 = map__71641__$1;
var k71657 = "to";
if((function (){var obj71660 = obj71656;
return (((!((obj71660 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71657,obj71660)));
})()){
return (obj71656[k71657]);
} else {
return undefined;
}
})();
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.mark(spec).range(from,to);
});
nextjournal.clojure_mode.extensions.eval_region.single_mark = (function nextjournal$clojure_mode$extensions$eval_region$single_mark(spec,range){
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.set([nextjournal.clojure_mode.extensions.eval_region.mark(spec,range)]);
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.mark_spec !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.mark_spec = ({"attributes":({"style":"background-color: rgba(0, 243, 255, 0.14);"})});
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight = ({"attributes":({"style":"background-color: rgba(0, 243, 255, 0.35);"})});
}
nextjournal.clojure_mode.extensions.eval_region.cursor_range = (function nextjournal$clojure_mode$extensions$eval_region$cursor_range(state){
if(cljs.core.truth_(state.selection.main.empty)){
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
} else {
return state.selection.main;
}
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.region_field !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.region_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none),"update":(function (_value,p__71678){
var map__71679 = p__71678;
var map__71679__$1 = (((((!((map__71679 == null))))?(((((map__71679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71679):map__71679);
var state = (function (){var obj71685 = map__71679__$1;
var k71686 = "state";
if((function (){var obj71687 = obj71685;
return (((!((obj71687 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71686,obj71687)));
})()){
return (obj71685[k71686]);
} else {
return undefined;
}
})();
var map__71688 = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var map__71688__$1 = cljs.core.__destructure_map(map__71688);
var Alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71688__$1,"Alt");
var Shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71688__$1,"Shift");
var Enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71688__$1,"Enter");
var spec = (cljs.core.truth_(Enter)?nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight:nextjournal.clojure_mode.extensions.eval_region.mark_spec);
var temp__5751__auto__ = (cljs.core.truth_((function (){var and__4251__auto__ = Alt;
if(cljs.core.truth_(and__4251__auto__)){
return Shift;
} else {
return and__4251__auto__;
}
})())?nextjournal.clojure_mode.extensions.eval_region.top_level_node(state):(cljs.core.truth_(Alt)?(function (){var or__4253__auto__ = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.eval_region.main_selection(state),(function (p1__71675_SHARP_){
return cljs.core.not((function (){var obj71689 = p1__71675_SHARP_;
var k71690 = "empty";
if((function (){var obj71691 = obj71689;
return (((!((obj71691 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71690,obj71691)));
})()){
return (obj71689[k71690]);
} else {
return undefined;
}
})());
}));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return nextjournal.clojure_mode.extensions.eval_region.cursor_range(state);
}
})():null));
if(cljs.core.truth_(temp__5751__auto__)){
var range = temp__5751__auto__;
return nextjournal.clojure_mode.extensions.eval_region.single_mark(spec,range);
} else {
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none;
}
})}));
}
nextjournal.clojure_mode.extensions.eval_region.get_region_field = (function nextjournal$clojure_mode$extensions$eval_region$get_region_field(state){
return state.field(nextjournal.clojure_mode.extensions.eval_region.region_field);
});
nextjournal.clojure_mode.extensions.eval_region.current_range = (function nextjournal$clojure_mode$extensions$eval_region$current_range(state){
var or__4253__auto__ = (function (){var G__71693 = nextjournal.clojure_mode.extensions.eval_region.get_region_field(state);
var G__71693__$1 = (((G__71693 == null))?null:(function (){var obj__70928__auto__ = G__71693;
var f__70929__auto__ = (obj__70928__auto__["iter"]);
return f__70929__auto__.call(obj__70928__auto__);
})());
if((G__71693__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__71693__$1,(function (p1__71692_SHARP_){
var obj71695 = p1__71692_SHARP_;
var k71696 = "value";
if((function (){var obj71697 = obj71695;
return (((!((obj71697 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71696,obj71697)));
})()){
return (obj71695[k71696]);
} else {
return undefined;
}
}));
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return state.selection.main;
}
});
/**
 * Maintains modifier-state-field, containing a map of {<modifier> true}, including Enter.
 */
nextjournal.clojure_mode.extensions.eval_region.modifier_extension = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension(modifier){
var handle_enter = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension_$_handle_enter(p__71703){
var map__71704 = p__71703;
var map__71704__$1 = (((((!((map__71704 == null))))?(((((map__71704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71704):map__71704);
var view = map__71704__$1;
var state = (function (){var obj71709 = map__71704__$1;
var k71710 = "state";
if((function (){var obj71711 = obj71709;
return (((!((obj71711 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71710,obj71711)));
})()){
return (obj71709[k71710]);
} else {
return undefined;
}
})();
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state),"Enter",true));

return null;
});
var handle_key_event = (function (p__71718,p__71719){
var map__71720 = p__71718;
var map__71720__$1 = (((((!((map__71720 == null))))?(((((map__71720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71720):map__71720);
var event = map__71720__$1;
var altKey = (function (){var obj71722 = map__71720__$1;
var k71723 = "altKey";
if((function (){var obj71724 = obj71722;
return (((!((obj71724 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71723,obj71724)));
})()){
return (obj71722[k71723]);
} else {
return undefined;
}
})();
var shiftKey = (function (){var obj71725 = map__71720__$1;
var k71726 = "shiftKey";
if((function (){var obj71727 = obj71725;
return (((!((obj71727 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71726,obj71727)));
})()){
return (obj71725[k71726]);
} else {
return undefined;
}
})();
var metaKey = (function (){var obj71728 = map__71720__$1;
var k71729 = "metaKey";
if((function (){var obj71731 = obj71728;
return (((!((obj71731 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71729,obj71731)));
})()){
return (obj71728[k71729]);
} else {
return undefined;
}
})();
var controlKey = (function (){var obj71732 = map__71720__$1;
var k71733 = "controlKey";
if((function (){var obj71734 = obj71732;
return (((!((obj71734 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71733,obj71734)));
})()){
return (obj71732[k71733]);
} else {
return undefined;
}
})();
var type = (function (){var obj71735 = map__71720__$1;
var k71736 = "type";
if((function (){var obj71737 = obj71735;
return (((!((obj71737 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71736,obj71737)));
})()){
return (obj71735[k71736]);
} else {
return undefined;
}
})();
var map__71742 = p__71719;
var map__71742__$1 = (((((!((map__71742 == null))))?(((((map__71742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71742):map__71742);
var view = map__71742__$1;
var state = (function (){var obj71744 = map__71742__$1;
var k71745 = "state";
if((function (){var obj71746 = obj71744;
return (((!((obj71746 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71745,obj71746)));
})()){
return (obj71744[k71745]);
} else {
return undefined;
}
})();
var prev = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var next = (function (){var G__71747 = cljs.core.PersistentArrayMap.EMPTY;
var G__71747__$1 = (cljs.core.truth_(altKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71747,"Alt",true):G__71747);
var G__71747__$2 = (cljs.core.truth_(shiftKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71747__$1,"Shift",true):G__71747__$1);
var G__71747__$3 = (cljs.core.truth_(metaKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71747__$2,"Meta",true):G__71747__$2);
var G__71747__$4 = (cljs.core.truth_(controlKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71747__$3,"Control",true):G__71747__$3);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",module$node_modules$w3c_keyname$index_cjs.keyName(event))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__71747__$4,"Enter",true);
} else {
return G__71747__$4;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,next)){
return nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,next);
} else {
return null;
}
});
var handle_backspace = (function (p__71748){
var map__71749 = p__71748;
var map__71749__$1 = (((((!((map__71749 == null))))?(((((map__71749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71749):map__71749);
var view = map__71749__$1;
var state = (function (){var obj71751 = map__71749__$1;
var k71752 = "state";
if((function (){var obj71753 = obj71751;
return (((!((obj71753 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71752,obj71753)));
})()){
return (obj71751[k71752]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj71754 = map__71749__$1;
var k71755 = "dispatch";
if((function (){var obj71756 = obj71754;
return (((!((obj71756 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71755,obj71756)));
})()){
return (obj71754[k71755]);
} else {
return undefined;
}
})();
var map__71757 = nextjournal.clojure_mode.extensions.eval_region.current_range(state);
var map__71757__$1 = (((((!((map__71757 == null))))?(((((map__71757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71757):map__71757);
var from = (function (){var obj71759 = map__71757__$1;
var k71760 = "from";
if((function (){var obj71761 = obj71759;
return (((!((obj71761 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71760,obj71761)));
})()){
return (obj71759[k71760]);
} else {
return undefined;
}
})();
var to = (function (){var obj71763 = map__71757__$1;
var k71764 = "to";
if((function (){var obj71765 = obj71763;
return (((!((obj71765 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71764,obj71765)));
})()){
return (obj71763[k71764]);
} else {
return undefined;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
var G__71775_71873 = ({"changes":({"from":from,"to":to,"insert":""}),"annotations":nextjournal.clojure_mode.util.user_event_annotation("delete")});
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__71775_71873) : dispatch.call(null,G__71775_71873));
} else {
}

return true;
});
return [nextjournal.clojure_mode.extensions.eval_region.modifier_field,module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Enter"].join(''),"shift":handle_enter,"run":handle_enter}),({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Backspace"].join(''),"run":handle_backspace,"shift":handle_backspace})]),module$node_modules$$codemirror$view$dist$index_cjs.EditorView.domEventHandlers(({"keydown": handle_key_event, "keyup": handle_key_event}))];
});
nextjournal.clojure_mode.extensions.eval_region.extension = (function nextjournal$clojure_mode$extensions$eval_region$extension(p__71783){
var map__71785 = p__71783;
var map__71785__$1 = cljs.core.__destructure_map(map__71785);
var modifier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__71785__$1,new cljs.core.Keyword(null,"modifier","modifier",1634442788),"Alt");
return [nextjournal.clojure_mode.extensions.eval_region.modifier_extension(modifier),nextjournal.clojure_mode.extensions.eval_region.region_field,module$node_modules$$codemirror$view$dist$index_cjs.EditorView.decorations.from(nextjournal.clojure_mode.extensions.eval_region.region_field)];
});
nextjournal.clojure_mode.extensions.eval_region.cursor_node_string = (function nextjournal$clojure_mode$extensions$eval_region$cursor_node_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__71788 = nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
if((G__71788 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__71788);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});
nextjournal.clojure_mode.extensions.eval_region.top_level_string = (function nextjournal$clojure_mode$extensions$eval_region$top_level_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__71793 = nextjournal.clojure_mode.extensions.eval_region.top_level_node(state);
if((G__71793 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__71793);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.eval_region.js.map
