goog.provide('nextjournal.clojure_mode.extensions.formatting');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.formatting.spaces = (function nextjournal$clojure_mode$extensions$formatting$spaces(state,n){
return module$node_modules$$codemirror$language$dist$index_cjs.indentString(state,n);
});
nextjournal.clojure_mode.extensions.formatting.indent_node_props = (function nextjournal$clojure_mode$extensions$formatting$indent_node_props(p__71499){
var map__71500 = p__71499;
var map__71500__$1 = (((((!((map__71500 == null))))?(((((map__71500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71500):map__71500);
var type = map__71500__$1;
var type_name = (function (){var obj71503 = map__71500__$1;
var k71504 = "name";
if((function (){var obj71505 = obj71503;
return (((!((obj71505 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71504,obj71505)));
})()){
return (obj71503[k71504]);
} else {
return undefined;
}
})();
return (function (p__71511){
var map__71512 = p__71511;
var map__71512__$1 = (((((!((map__71512 == null))))?(((((map__71512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71512):map__71512);
var context = map__71512__$1;
var pos = (function (){var obj71517 = map__71512__$1;
var k71518 = "pos";
if((function (){var obj71520 = obj71517;
return (((!((obj71520 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71518,obj71520)));
})()){
return (obj71517[k71518]);
} else {
return undefined;
}
})();
var unit = (function (){var obj71525 = map__71512__$1;
var k71526 = "unit";
if((function (){var obj71529 = obj71525;
return (((!((obj71529 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71526,obj71529)));
})()){
return (obj71525[k71526]);
} else {
return undefined;
}
})();
var node = (function (){var obj71535 = map__71512__$1;
var k71536 = "node";
if((function (){var obj71538 = obj71535;
return (((!((obj71538 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71536,obj71538)));
})()){
return (obj71535[k71536]);
} else {
return undefined;
}
})();
var state = (function (){var obj71542 = map__71512__$1;
var k71543 = "state";
if((function (){var obj71547 = obj71542;
return (((!((obj71547 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71543,obj71547)));
})()){
return (obj71542[k71543]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Program",type_name)){
return (0);
} else {
if(cljs.core.truth_(nextjournal.clojure_mode.node.coll_type_QMARK_(type))){
var G__71555 = context.column(nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.down(node)));
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("List",type_name);
if(and__4251__auto__){
var G__71565 = (function (){var G__71566 = node;
var G__71566__$1 = (((G__71566 == null))?null:nextjournal.clojure_mode.node.down(G__71566));
var G__71566__$2 = (((G__71566__$1 == null))?null:nextjournal.clojure_mode.node.right(G__71566__$1));
if((G__71566__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.name(G__71566__$2);
}
})();
var fexpr__71563 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["DefLike",null,"Operator",null], null), null);
return (fexpr__71563.cljs$core$IFn$_invoke$arity$1 ? fexpr__71563.cljs$core$IFn$_invoke$arity$1(G__71565) : fexpr__71563.call(null,G__71565));
} else {
return and__4251__auto__;
}
})())){
return (G__71555 + (1));
} else {
return G__71555;
}
} else {
return (-1);

}
}
});
});
nextjournal.clojure_mode.extensions.formatting.props = module$node_modules$$codemirror$language$dist$index_cjs.indentNodeProp.add(nextjournal.clojure_mode.extensions.formatting.indent_node_props);
nextjournal.clojure_mode.extensions.formatting.get_indentation = (function nextjournal$clojure_mode$extensions$formatting$get_indentation(context,pos){
return module$node_modules$$codemirror$language$dist$index_cjs.getIndentation(context.state,pos);
});
nextjournal.clojure_mode.extensions.formatting.make_indent_context = (function nextjournal$clojure_mode$extensions$formatting$make_indent_context(state){
return (new module$node_modules$$codemirror$language$dist$index_cjs.IndentContext(state));
});
nextjournal.clojure_mode.extensions.formatting.indent_all = (function nextjournal$clojure_mode$extensions$formatting$indent_all(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_lines(state,(function (from,content,line_num){
var current_indent = (/^\s*/.exec(content)[(0)]).length;
var indent = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.formatting.get_indentation(context,from),cljs.core.complement(cljs.core.neg_QMARK_));
if(cljs.core.truth_(indent)){
var G__71588 = cljs.core.compare(indent,current_indent);
switch (G__71588) {
case (0):
return null;

break;
case (1):
return ({"from": (from + current_indent), "insert": nextjournal.clojure_mode.extensions.formatting.spaces(state,(indent - current_indent))});

break;
case (-1):
return ({"from": (from + indent), "to": (from + current_indent)});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71588)].join('')));

}
} else {
return null;
}
}));
});
nextjournal.clojure_mode.extensions.formatting.expected_space = (function nextjournal$clojure_mode$extensions$formatting$expected_space(n1,n2){
if(((nextjournal.clojure_mode.node.start_edge_type_QMARK_(n1)) || (((nextjournal.clojure_mode.node.prefix_edge_type_QMARK_(n1)) || (((nextjournal.clojure_mode.node.end_edge_type_QMARK_(n2)) || (nextjournal.clojure_mode.node.same_edge_type_QMARK_(n2)))))))){
return (0);
} else {
return (1);
}
});
nextjournal.clojure_mode.extensions.formatting.space_changes = (function nextjournal$clojure_mode$extensions$formatting$space_changes(state,from,to){
var nodes = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__71607_SHARP_){
return (((((from <= nextjournal.clojure_mode.node.start(p1__71607_SHARP_))) && ((nextjournal.clojure_mode.node.start(p1__71607_SHARP_) <= to)))) || ((((from <= nextjournal.clojure_mode.node.end(p1__71607_SHARP_))) && ((nextjournal.clojure_mode.node.end(p1__71607_SHARP_) <= to)))));
}),nextjournal.clojure_mode.node.terminal_nodes(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),from,to)));
var trim_QMARK_ = (function (){var G__71619 = cljs.core.first(nodes);
var G__71619__$1 = (((G__71619 == null))?null:nextjournal.clojure_mode.node.end(G__71619));
if((G__71619__$1 == null)){
return null;
} else {
return (G__71619__$1 < to);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__71625){
var vec__71629 = p__71625;
var map__71634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71629,(0),null);
var map__71634__$1 = (((((!((map__71634 == null))))?(((((map__71634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71634):map__71634);
var n2 = (function (){var obj71642 = map__71634__$1;
var k71643 = "type";
if((function (){var obj71645 = obj71642;
return (((!((obj71645 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71643,obj71645)));
})()){
return (obj71642[k71643]);
} else {
return undefined;
}
})();
var start2 = (function (){var obj71651 = map__71634__$1;
var k71652 = "from";
if((function (){var obj71654 = obj71651;
return (((!((obj71654 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71652,obj71654)));
})()){
return (obj71651[k71652]);
} else {
return undefined;
}
})();
var end2 = (function (){var obj71658 = map__71634__$1;
var k71659 = "to";
if((function (){var obj71661 = obj71658;
return (((!((obj71661 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71659,obj71661)));
})()){
return (obj71658[k71659]);
} else {
return undefined;
}
})();
var map__71635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71629,(1),null);
var map__71635__$1 = (((((!((map__71635 == null))))?(((((map__71635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71635):map__71635);
var n1 = (function (){var obj71664 = map__71635__$1;
var k71665 = "type";
if((function (){var obj71666 = obj71664;
return (((!((obj71666 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71665,obj71666)));
})()){
return (obj71664[k71665]);
} else {
return undefined;
}
})();
var start1 = (function (){var obj71667 = map__71635__$1;
var k71668 = "from";
if((function (){var obj71669 = obj71667;
return (((!((obj71669 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71668,obj71669)));
})()){
return (obj71667[k71668]);
} else {
return undefined;
}
})();
var end1 = (function (){var obj71670 = map__71635__$1;
var k71671 = "to";
if((function (){var obj71672 = obj71670;
return (((!((obj71672 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71671,obj71672)));
})()){
return (obj71670[k71671]);
} else {
return undefined;
}
})();
var expected = nextjournal.clojure_mode.extensions.formatting.expected_space(n1,n2);
var actual = (start2 - end1);
var G__71673 = cljs.core.compare(actual,expected);
switch (G__71673) {
case (0):
return out;

break;
case (1):
var array71674 = out;
array71674.push(({"from": (((expected === (0)))?end1:(end1 + (1))), "to": start2}));

return array71674;

break;
case (-1):
var array71676 = out;
array71676.push(({"from": end1, "insert": " "}));

return array71676;

break;
default:
return out;

}
}),(cljs.core.truth_(trim_QMARK_)?[({"from":nextjournal.clojure_mode.node.end(cljs.core.first(nodes)),"to":to})]:[]),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
});
nextjournal.clojure_mode.extensions.formatting.into_arr = (function nextjournal$clojure_mode$extensions$formatting$into_arr(arr,items){
var seq__71681_71805 = cljs.core.seq(items);
var chunk__71682_71806 = null;
var count__71683_71807 = (0);
var i__71684_71808 = (0);
while(true){
if((i__71684_71808 < count__71683_71807)){
var i_71810 = chunk__71682_71806.cljs$core$IIndexed$_nth$arity$2(null,i__71684_71808);
arr.push(i_71810);


var G__71817 = seq__71681_71805;
var G__71818 = chunk__71682_71806;
var G__71819 = count__71683_71807;
var G__71820 = (i__71684_71808 + (1));
seq__71681_71805 = G__71817;
chunk__71682_71806 = G__71818;
count__71683_71807 = G__71819;
i__71684_71808 = G__71820;
continue;
} else {
var temp__5753__auto___71821 = cljs.core.seq(seq__71681_71805);
if(temp__5753__auto___71821){
var seq__71681_71822__$1 = temp__5753__auto___71821;
if(cljs.core.chunked_seq_QMARK_(seq__71681_71822__$1)){
var c__4679__auto___71823 = cljs.core.chunk_first(seq__71681_71822__$1);
var G__71826 = cljs.core.chunk_rest(seq__71681_71822__$1);
var G__71827 = c__4679__auto___71823;
var G__71828 = cljs.core.count(c__4679__auto___71823);
var G__71829 = (0);
seq__71681_71805 = G__71826;
chunk__71682_71806 = G__71827;
count__71683_71807 = G__71828;
i__71684_71808 = G__71829;
continue;
} else {
var i_71831 = cljs.core.first(seq__71681_71822__$1);
arr.push(i_71831);


var G__71833 = cljs.core.next(seq__71681_71822__$1);
var G__71834 = null;
var G__71835 = (0);
var G__71836 = (0);
seq__71681_71805 = G__71833;
chunk__71682_71806 = G__71834;
count__71683_71807 = G__71835;
i__71684_71808 = G__71836;
continue;
}
} else {
}
}
break;
}

return arr;
});
/**
 * Returns mutated `changes` array
 */
nextjournal.clojure_mode.extensions.formatting.format_line = (function nextjournal$clojure_mode$extensions$formatting$format_line(state,indent_context,from,text,line_num,changes,format_spaces_QMARK_){
if((!((text == null)))){
} else {
throw (new Error("Assert failed: (some? text)"));
}

var current_indent = (/^\s*/.exec(text)[(0)]).length;
var indent = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.formatting.get_indentation(indent_context,from),cljs.core.complement(cljs.core.neg_QMARK_));
var indentation_change = (cljs.core.truth_(indent)?(function (){var G__71694 = cljs.core.compare(indent,current_indent);
switch (G__71694) {
case (0):
return null;

break;
case (1):
return ({"from": (from + current_indent), "insert": nextjournal.clojure_mode.extensions.formatting.spaces(state,(indent - current_indent))});

break;
case (-1):
return ({"from": (from + indent), "to": (from + current_indent)});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71694)].join('')));

}
})():null);
var space_changes = (cljs.core.truth_(format_spaces_QMARK_)?nextjournal.clojure_mode.extensions.formatting.space_changes(state,(from + current_indent),(from + cljs.core.count(text))):null);
var G__71698 = changes;
var G__71698__$1 = (cljs.core.truth_(space_changes)?nextjournal.clojure_mode.extensions.formatting.into_arr(G__71698,space_changes):G__71698);
if(cljs.core.truth_(indentation_change)){
var array71699 = G__71698__$1;
array71699.push(indentation_change);

return array71699;
} else {
return G__71698__$1;
}
});
nextjournal.clojure_mode.extensions.formatting.format_selection = (function nextjournal$clojure_mode$extensions$formatting$format_selection(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_selected_lines(state,(function (p__71700,changes,range){
var map__71701 = p__71700;
var map__71701__$1 = (((((!((map__71701 == null))))?(((((map__71701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71701):map__71701);
var line = map__71701__$1;
var from = (function (){var obj71706 = map__71701__$1;
var k71707 = "from";
if((function (){var obj71708 = obj71706;
return (((!((obj71708 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71707,obj71708)));
})()){
return (obj71706[k71707]);
} else {
return undefined;
}
})();
var text = (function (){var obj71712 = map__71701__$1;
var k71713 = "text";
if((function (){var obj71714 = obj71712;
return (((!((obj71714 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71713,obj71714)));
})()){
return (obj71712[k71713]);
} else {
return undefined;
}
})();
var number = (function (){var obj71715 = map__71701__$1;
var k71716 = "number";
if((function (){var obj71717 = obj71715;
return (((!((obj71717 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71716,obj71717)));
})()){
return (obj71715[k71716]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,from,text,number,changes,true);
}));
});
nextjournal.clojure_mode.extensions.formatting.format_all = (function nextjournal$clojure_mode$extensions$formatting$format_all(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_lines(state,(function (from,text,line_num){
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,from,text,line_num,[],true);
}));
});
nextjournal.clojure_mode.extensions.formatting.format_transaction = (function nextjournal$clojure_mode$extensions$formatting$format_transaction(tr){
var origin = nextjournal.clojure_mode.util.get_user_event_annotation(tr);
var temp__5751__auto__ = (function (){var G__71730 = origin;
switch (G__71730) {
case "input":
case "delete":
case "keyboardselection":
case "pointerselection":
case "cut":
case "noformat":
case "evalregion":
return null;

break;
case "format-selections":
return nextjournal.clojure_mode.extensions.formatting.format_selection(tr.state);

break;
default:
var state = tr.state;
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.iter_changed_lines(tr,(function (line,changes){
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,line.from,line.text,line.number,changes,true);
}));

}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var changes = temp__5751__auto__;
return tr.startState.update((function (){var obj71738 = changes;
var obj71739 = (((!((obj71738 == null))))?obj71738:({}));
(obj71739["filter"] = false);

return obj71739;
})());
} else {
return tr;
}
});
nextjournal.clojure_mode.extensions.formatting.format = (function nextjournal$clojure_mode$extensions$formatting$format(state){
if(nextjournal.clojure_mode.util.something_selected_QMARK_(state)){
return state.update(nextjournal.clojure_mode.extensions.formatting.format_selection(state));
} else {
return nextjournal.clojure_mode.extensions.formatting.format_all(state);
}
});
nextjournal.clojure_mode.extensions.formatting.prefix_all = (function nextjournal$clojure_mode$extensions$formatting$prefix_all(prefix,state){
return nextjournal.clojure_mode.util.update_lines(state,(function (from,_,___$1){
return ({"from": from, "insert": prefix});
}));
});
nextjournal.clojure_mode.extensions.formatting.ext_format_changed_lines = (function nextjournal$clojure_mode$extensions$formatting$ext_format_changed_lines(){
return module$node_modules$$codemirror$state$dist$index_cjs.EditorState.transactionFilter.of(nextjournal.clojure_mode.extensions.formatting.format_transaction);
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.formatting.js.map
