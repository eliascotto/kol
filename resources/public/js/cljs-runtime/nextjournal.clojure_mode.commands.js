goog.provide('nextjournal.clojure_mode.commands');
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.commands.view_command = (function nextjournal$clojure_mode$commands$view_command(f){
return (function (p__71762){
var map__71766 = p__71762;
var map__71766__$1 = (((((!((map__71766 == null))))?(((((map__71766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71766):map__71766);
var state = (function (){var obj71776 = map__71766__$1;
var k71777 = "state";
if((function (){var obj71778 = obj71776;
return (((!((obj71778 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71777,obj71778)));
})()){
return (obj71776[k71777]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj71780 = map__71766__$1;
var k71781 = "dispatch";
if((function (){var obj71782 = obj71780;
return (((!((obj71782 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71781,obj71782)));
})()){
return (obj71780[k71781]);
} else {
return undefined;
}
})();
var G__71784_71982 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(state) : f.call(null,state));
if((G__71784_71982 == null)){
} else {
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__71784_71982) : dispatch.call(null,G__71784_71982));
}

return true;
});
});
nextjournal.clojure_mode.commands.unwrap_STAR_ = (function nextjournal$clojure_mode$commands$unwrap_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__71789){
var map__71790 = p__71789;
var map__71790__$1 = (((((!((map__71790 == null))))?(((((map__71790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71790):map__71790);
var range = map__71790__$1;
var from = (function (){var obj71796 = map__71790__$1;
var k71797 = "from";
if((function (){var obj71798 = obj71796;
return (((!((obj71798 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71797,obj71798)));
})()){
return (obj71796[k71797]);
} else {
return undefined;
}
})();
var to = (function (){var obj71802 = map__71790__$1;
var k71803 = "to";
if((function (){var obj71809 = obj71802;
return (((!((obj71809 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71803,obj71809)));
})()){
return (obj71802[k71803]);
} else {
return undefined;
}
})();
var empty = (function (){var obj71813 = map__71790__$1;
var k71814 = "empty";
if((function (){var obj71816 = obj71813;
return (((!((obj71816 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71814,obj71816)));
})()){
return (obj71813[k71814]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5753__auto__ = (function (){var G__71832 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,from,(-1));
var G__71832__$1 = (((G__71832 == null))?null:nextjournal.clojure_mode.node.closest(G__71832,nextjournal.clojure_mode.node.coll_QMARK_));
if((G__71832__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__71832__$1,nextjournal.clojure_mode.node.balanced_QMARK_);
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var nearest_balanced_coll = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1)),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down(nearest_balanced_coll)),nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down_last(nearest_balanced_coll))], null)], null);
} else {
return null;
}
} else {
return null;
}
}));
});
nextjournal.clojure_mode.commands.copy_to_clipboard_BANG_ = (function nextjournal$clojure_mode$commands$copy_to_clipboard_BANG_(text){
var focus_el = (function (){var obj71840 = document;
var k71841 = "activeElement";
if((function (){var obj71842 = obj71840;
return (((!((obj71842 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71841,obj71842)));
})()){
return (obj71840[k71841]);
} else {
return undefined;
}
})();
var input_el = document.createElement("textarea");
input_el.setAttribute("class","clipboard-input");

var obj71846_71985 = input_el;
var obj71848_71986 = (((!((obj71846_71985 == null))))?obj71846_71985:({}));
(obj71848_71986["innerHTML"] = text);


document.body.appendChild(input_el);

input_el.focus();

input_el.select();

document.execCommand("copy");

focus_el.focus(({"preventScroll": true}));

return document.body.removeChild(input_el);
});
nextjournal.clojure_mode.commands.kill_STAR_ = (function nextjournal$clojure_mode$commands$kill_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__71854){
var map__71855 = p__71854;
var map__71855__$1 = (((((!((map__71855 == null))))?(((((map__71855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71855):map__71855);
var range = map__71855__$1;
var from = (function (){var obj71857 = map__71855__$1;
var k71858 = "from";
if((function (){var obj71859 = obj71857;
return (((!((obj71859 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71858,obj71859)));
})()){
return (obj71857[k71858]);
} else {
return undefined;
}
})();
var to = (function (){var obj71860 = map__71855__$1;
var k71861 = "to";
if((function (){var obj71862 = obj71860;
return (((!((obj71862 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71861,obj71862)));
})()){
return (obj71860[k71861]);
} else {
return undefined;
}
})();
var empty = (function (){var obj71863 = map__71855__$1;
var k71864 = "empty";
if((function (){var obj71865 = obj71863;
return (((!((obj71865 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71864,obj71865)));
})()){
return (obj71863[k71864]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var node = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from);
var parent = nextjournal.clojure_mode.node.closest(node,(function (p1__71852_SHARP_){
var or__4253__auto__ = nextjournal.clojure_mode.node.coll_QMARK_(p1__71852_SHARP_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((nextjournal.clojure_mode.node.string_QMARK_(p1__71852_SHARP_)) || (nextjournal.clojure_mode.node.top_QMARK_(p1__71852_SHARP_)));
}
}));
var line_end = state.doc.lineAt(from).to;
var next_children = (cljs.core.truth_(parent)?nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(parent,from,(1)):null);
var last_child_on_line = (cljs.core.truth_(parent)?(function (){var G__71866 = next_children;
var G__71866__$1 = (((G__71866 == null))?null:cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$1((function (p1__71853_SHARP_){
return (nextjournal.clojure_mode.node.start(p1__71853_SHARP_) <= line_end);
})),G__71866));
if((G__71866__$1 == null)){
return null;
} else {
return cljs.core.last(G__71866__$1);
}
})():null);
var to__$1 = ((nextjournal.clojure_mode.node.string_QMARK_(parent))?(function (){var content = cljs.core.str.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$2(state,parent));
var content_from = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(content,(from - nextjournal.clojure_mode.node.start(parent)));
var next_newline = content_from.indexOf("\n");
if((next_newline < (0))){
return (nextjournal.clojure_mode.node.end(parent) - (1));
} else {
return ((from + next_newline) + (1));
}
})():(cljs.core.truth_(last_child_on_line)?((nextjournal.clojure_mode.node.end_edge_QMARK_(last_child_on_line))?nextjournal.clojure_mode.node.start(last_child_on_line):nextjournal.clojure_mode.node.end(last_child_on_line)):(cljs.core.truth_((function (){var G__71867 = cljs.core.first(next_children);
var G__71867__$1 = (((G__71867 == null))?null:nextjournal.clojure_mode.node.start(G__71867));
if((G__71867__$1 == null)){
return null;
} else {
return (G__71867__$1 > line_end);
}
})())?nextjournal.clojure_mode.node.start(cljs.core.first(next_children)):null)));
nextjournal.clojure_mode.commands.copy_to_clipboard_BANG_(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$3(state,from,to__$1));

if(cljs.core.truth_(to__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from,new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to__$1], null)], null);
} else {
return null;
}
} else {
nextjournal.clojure_mode.commands.copy_to_clipboard_BANG_(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$3(state,from,to));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from,new cljs.core.Keyword(null,"changes","changes",1492088),nextjournal.clojure_mode.util.from_to(from,to)], null);
}
}));
});
nextjournal.clojure_mode.commands.enter_and_indent_STAR_ = (function nextjournal$clojure_mode$commands$enter_and_indent_STAR_(state){
var ctx = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__71868){
var map__71869 = p__71868;
var map__71869__$1 = (((((!((map__71869 == null))))?(((((map__71869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71869):map__71869);
var range = map__71869__$1;
var from = (function (){var obj71871 = map__71869__$1;
var k71872 = "from";
if((function (){var obj71874 = obj71871;
return (((!((obj71874 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71872,obj71874)));
})()){
return (obj71871[k71872]);
} else {
return undefined;
}
})();
var to = (function (){var obj71875 = map__71869__$1;
var k71876 = "to";
if((function (){var obj71877 = obj71875;
return (((!((obj71877 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71876,obj71877)));
})()){
return (obj71875[k71876]);
} else {
return undefined;
}
})();
var empty = (function (){var obj71878 = map__71869__$1;
var k71879 = "empty";
if((function (){var obj71880 = obj71878;
return (((!((obj71880 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71879,obj71880)));
})()){
return (obj71878[k71879]);
} else {
return undefined;
}
})();
var indent_at = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.inner_span(nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,nextjournal.clojure_mode.node.top_QMARK_))));
var indent = nextjournal.clojure_mode.extensions.formatting.get_indentation(ctx,indent_at);
var insertion = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.extensions.formatting.spaces(state,indent))].join('');
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from + ((insertion).length)),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"insert","insert",1286475395),insertion], null)], null)], null);
}));
});
nextjournal.clojure_mode.commands.nav_position = (function nextjournal$clojure_mode$commands$nav_position(state,from,dir){
var or__4253__auto__ = (function (){var G__71882 = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),(function (p1__71881_SHARP_){
var or__4253__auto__ = nextjournal.clojure_mode.node.coll_QMARK_(p1__71881_SHARP_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return ((nextjournal.clojure_mode.node.string_QMARK_(p1__71881_SHARP_)) || (nextjournal.clojure_mode.node.top_QMARK_(p1__71881_SHARP_)));
}
}));
var G__71882__$1 = (((G__71882 == null))?null:nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__71882,from,dir));
var G__71882__$2 = (((G__71882__$1 == null))?null:cljs.core.first(G__71882__$1));
if((G__71882__$2 == null)){
return null;
} else {
var obj71883 = G__71882__$2;
var k71884 = applied_science.js_interop.impl.wrap_key((function (){var G__71886 = dir;
switch (G__71886) {
case (-1):
return new cljs.core.Keyword(null,"from","from",1815293044);

break;
case (1):
return new cljs.core.Keyword(null,"to","to",192099007);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71886)].join('')));

}
})());
if((function (){var obj71887 = obj71883;
return (((!((obj71887 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71884,obj71887)));
})()){
return (obj71883[k71884]);
} else {
return undefined;
}
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return nextjournal.clojure_mode.selections.constrain(state,(from + dir));
}
});
nextjournal.clojure_mode.commands.nav = (function nextjournal$clojure_mode$commands$nav(dir){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__71888){
var map__71889 = p__71888;
var map__71889__$1 = (((((!((map__71889 == null))))?(((((map__71889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71889):map__71889);
var range = map__71889__$1;
var from = (function (){var obj71891 = map__71889__$1;
var k71892 = "from";
if((function (){var obj71893 = obj71891;
return (((!((obj71893 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71892,obj71893)));
})()){
return (obj71891[k71892]);
} else {
return undefined;
}
})();
var to = (function (){var obj71894 = map__71889__$1;
var k71895 = "to";
if((function (){var obj71896 = obj71894;
return (((!((obj71896 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71895,obj71896)));
})()){
return (obj71894[k71895]);
} else {
return undefined;
}
})();
var empty = (function (){var obj71897 = map__71889__$1;
var k71898 = "empty";
if((function (){var obj71899 = obj71897;
return (((!((obj71899 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71898,obj71899)));
})()){
return (obj71897[k71898]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),nextjournal.clojure_mode.commands.nav_position(state,from,dir)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var obj71900 = nextjournal.clojure_mode.util.from_to(from,to);
var k71901 = applied_science.js_interop.impl.wrap_key((function (){var G__71903 = dir;
switch (G__71903) {
case (-1):
return new cljs.core.Keyword(null,"from","from",1815293044);

break;
case (1):
return new cljs.core.Keyword(null,"to","to",192099007);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71903)].join('')));

}
})());
if((function (){var obj71904 = obj71900;
return (((!((obj71904 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71901,obj71904)));
})()){
return (obj71900[k71901]);
} else {
return undefined;
}
})()], null);
}
}));
});
});
nextjournal.clojure_mode.commands.nav_select = (function nextjournal$clojure_mode$commands$nav_select(dir){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__71905){
var map__71906 = p__71905;
var map__71906__$1 = (((((!((map__71906 == null))))?(((((map__71906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71906):map__71906);
var range = map__71906__$1;
var from = (function (){var obj71908 = map__71906__$1;
var k71909 = "from";
if((function (){var obj71910 = obj71908;
return (((!((obj71910 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71909,obj71910)));
})()){
return (obj71908[k71909]);
} else {
return undefined;
}
})();
var to = (function (){var obj71911 = map__71906__$1;
var k71912 = "to";
if((function (){var obj71913 = obj71911;
return (((!((obj71913 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71912,obj71913)));
})()){
return (obj71911[k71912]);
} else {
return undefined;
}
})();
var empty = (function (){var obj71914 = map__71906__$1;
var k71915 = "empty";
if((function (){var obj71916 = obj71914;
return (((!((obj71916 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71915,obj71916)));
})()){
return (obj71914[k71915]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from,nextjournal.clojure_mode.commands.nav_position(state,from,dir))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),(function (){var map__71917 = nextjournal.clojure_mode.util.from_to(from,to);
var map__71917__$1 = (((((!((map__71917 == null))))?(((((map__71917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71917):map__71917);
var from__$1 = (function (){var obj71919 = map__71917__$1;
var k71920 = "from";
if((function (){var obj71921 = obj71919;
return (((!((obj71921 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71920,obj71921)));
})()){
return (obj71919[k71920]);
} else {
return undefined;
}
})();
var to__$1 = (function (){var obj71922 = map__71917__$1;
var k71923 = "to";
if((function (){var obj71924 = obj71922;
return (((!((obj71924 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71923,obj71924)));
})()){
return (obj71922[k71923]);
} else {
return undefined;
}
})();
var G__71925 = dir;
switch (G__71925) {
case (1):
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from__$1,nextjournal.clojure_mode.commands.nav_position(state,to__$1,dir));

break;
case (-1):
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,nextjournal.clojure_mode.commands.nav_position(state,from__$1,dir),to__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71925)].join('')));

}
})()], null);
}
}));
});
});
nextjournal.clojure_mode.commands.balance_ranges = (function nextjournal$clojure_mode$commands$balance_ranges(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__71926){
var map__71927 = p__71926;
var map__71927__$1 = (((((!((map__71927 == null))))?(((((map__71927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71927):map__71927);
var from = (function (){var obj71929 = map__71927__$1;
var k71930 = "from";
if((function (){var obj71931 = obj71929;
return (((!((obj71931 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71930,obj71931)));
})()){
return (obj71929[k71930]);
} else {
return undefined;
}
})();
var to = (function (){var obj71932 = map__71927__$1;
var k71933 = "to";
if((function (){var obj71934 = obj71932;
return (((!((obj71934 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71933,obj71934)));
})()){
return (obj71932[k71933]);
} else {
return undefined;
}
})();
var empty = (function (){var obj71935 = map__71927__$1;
var k71936 = "empty";
if((function (){var obj71937 = obj71935;
return (((!((obj71937 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71936,obj71937)));
})()){
return (obj71935[k71936]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from,to)], null);
}
}));
});
nextjournal.clojure_mode.commands.log = console.log;
nextjournal.clojure_mode.commands.slurp = (function nextjournal$clojure_mode$commands$slurp(direction){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__71939){
var map__71940 = p__71939;
var map__71940__$1 = (((((!((map__71940 == null))))?(((((map__71940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71940):map__71940);
var range = map__71940__$1;
var from = (function (){var obj71942 = map__71940__$1;
var k71943 = "from";
if((function (){var obj71944 = obj71942;
return (((!((obj71944 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71943,obj71944)));
})()){
return (obj71942[k71943]);
} else {
return undefined;
}
})();
var to = (function (){var obj71945 = map__71940__$1;
var k71946 = "to";
if((function (){var obj71947 = obj71945;
return (((!((obj71947 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71946,obj71947)));
})()){
return (obj71945[k71946]);
} else {
return undefined;
}
})();
var empty = (function (){var obj71948 = map__71940__$1;
var k71949 = "empty";
if((function (){var obj71950 = obj71948;
return (((!((obj71950 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71949,obj71950)));
})()){
return (obj71948[k71949]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5753__auto__ = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,(function (p1__71938_SHARP_){
return cljs.core.not((function (){var G__71951 = direction;
switch (G__71951) {
case (1):
var G__71952 = p1__71938_SHARP_;
var G__71952__$1 = (((G__71952 == null))?null:nextjournal.clojure_mode.node.with_prefix(G__71952));
var G__71952__$2 = (((G__71952__$1 == null))?null:nextjournal.clojure_mode.node.right(G__71952__$1));
if((G__71952__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.end_edge_QMARK_(G__71952__$2);
}

break;
case (-1):
var G__71953 = p1__71938_SHARP_;
var G__71953__$1 = (((G__71953 == null))?null:nextjournal.clojure_mode.node.with_prefix(G__71953));
var G__71953__$2 = (((G__71953__$1 == null))?null:nextjournal.clojure_mode.node.left(G__71953__$1));
if((G__71953__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.start_edge_QMARK_(G__71953__$2);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71951)].join('')));

}
})());
})));
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var temp__5753__auto____$1 = (function (){var G__71954 = direction;
switch (G__71954) {
case (1):
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,nextjournal.clojure_mode.node.rights(nextjournal.clojure_mode.node.with_prefix(parent))));

break;
case (-1):
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,nextjournal.clojure_mode.node.lefts(nextjournal.clojure_mode.node.with_prefix(parent))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71954)].join('')));

}
})();
if(cljs.core.truth_(temp__5753__auto____$1)){
var target = temp__5753__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272),from,new cljs.core.Keyword(null,"changes","changes",1492088),(function (){var G__71955 = direction;
switch (G__71955) {
case (1):
var edge = nextjournal.clojure_mode.node.down_last(parent);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.end(target),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.node.name(edge)], null),(function (){var obj71956 = nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(edge);
var obj71957 = (((!((obj71956 == null))))?obj71956:({}));
(obj71957["insert"] = " ");

return obj71957;
})()], null);

break;
case (-1):
var edge = nextjournal.clojure_mode.node.left_edge_with_prefix(state,parent);
var start = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.with_prefix(parent));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),start,new cljs.core.Keyword(null,"to","to",192099007),(start + ((edge).length)),new cljs.core.Keyword(null,"insert","insert",1286475395)," "], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.start(target),new cljs.core.Keyword(null,"insert","insert",1286475395),edge], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71955)].join('')));

}
})()], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));
});
});
nextjournal.clojure_mode.commands.barf = (function nextjournal$clojure_mode$commands$barf(direction){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__71960){
var map__71961 = p__71960;
var map__71961__$1 = (((((!((map__71961 == null))))?(((((map__71961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71961):map__71961);
var range = map__71961__$1;
var from = (function (){var obj71963 = map__71961__$1;
var k71964 = "from";
if((function (){var obj71965 = obj71963;
return (((!((obj71965 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71964,obj71965)));
})()){
return (obj71963[k71964]);
} else {
return undefined;
}
})();
var to = (function (){var obj71966 = map__71961__$1;
var k71967 = "to";
if((function (){var obj71968 = obj71966;
return (((!((obj71968 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71967,obj71968)));
})()){
return (obj71966[k71967]);
} else {
return undefined;
}
})();
var empty = (function (){var obj71969 = map__71961__$1;
var k71970 = "empty";
if((function (){var obj71971 = obj71969;
return (((!((obj71971 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71970,obj71971)));
})()){
return (obj71969[k71970]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5753__auto__ = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),nextjournal.clojure_mode.node.coll_QMARK_);
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__71972 = direction;
switch (G__71972) {
case (1):
var temp__5753__auto____$1 = (function (){var G__71973 = nextjournal.clojure_mode.node.down_last(parent);
var G__71973__$1 = (((G__71973 == null))?null:nextjournal.clojure_mode.node.lefts(G__71973));
var G__71973__$2 = (((G__71973__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,G__71973__$1));
var G__71973__$3 = (((G__71973__$2 == null))?null:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),G__71973__$2));
if((G__71973__$3 == null)){
return null;
} else {
return cljs.core.first(G__71973__$3);
}
})();
if(cljs.core.truth_(temp__5753__auto____$1)){
var target = temp__5753__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var x__4339__auto__ = nextjournal.clojure_mode.node.end(target);
var y__4340__auto__ = from;
return ((x__4339__auto__ < y__4340__auto__) ? x__4339__auto__ : y__4340__auto__);
})(),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.end(target),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.down_last(parent))], null),(function (){var obj71974 = nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down_last(parent));
var obj71975 = (((!((obj71974 == null))))?obj71974:({}));
(obj71975["insert"] = " ");

return obj71975;
})()], null)], null);
} else {
return null;
}

break;
case (-1):
var temp__5753__auto____$1 = (function (){var G__71978 = nextjournal.clojure_mode.node.down(parent);
var G__71978__$1 = (((G__71978 == null))?null:nextjournal.clojure_mode.node.rights(G__71978));
var G__71978__$2 = (((G__71978__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,G__71978__$1));
var G__71978__$3 = (((G__71978__$2 == null))?null:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),G__71978__$2));
if((G__71978__$3 == null)){
return null;
} else {
return cljs.core.first(G__71978__$3);
}
})();
if(cljs.core.truth_(temp__5753__auto____$1)){
var next_first_child = temp__5753__auto____$1;
var left_edge = nextjournal.clojure_mode.node.left_edge_with_prefix(state,parent);
var left_start = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.with_prefix(parent));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var x__4336__auto__ = from;
var y__4337__auto__ = (nextjournal.clojure_mode.node.start(next_first_child) + (((left_edge).length) + (1)));
return ((x__4336__auto__ > y__4337__auto__) ? x__4336__auto__ : y__4337__auto__);
})(),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.start(next_first_child),new cljs.core.Keyword(null,"insert","insert",1286475395),[" ",left_edge].join('')], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),left_start,new cljs.core.Keyword(null,"to","to",192099007),(left_start + ((left_edge).length)),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.extensions.formatting.spaces(state,((left_edge).length))], null)], null)], null);
} else {
return null;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71972)].join('')));

}
} else {
return null;
}
} else {
return null;
}
}));
});
});
/**
 * Subset of builtin commands that compliment paredit
 */
nextjournal.clojure_mode.commands.builtin_index = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cursorLineStart","cursorLineStart",-1505072960),new cljs.core.Keyword(null,"cursorLineDown","cursorLineDown",180576864),new cljs.core.Keyword(null,"selectAll","selectAll",869127842),new cljs.core.Keyword(null,"selectLineUp","selectLineUp",-255594686),new cljs.core.Keyword(null,"cursorLineBoundaryForward","cursorLineBoundaryForward",-1283359997),new cljs.core.Keyword(null,"selectLineBoundaryBackward","selectLineBoundaryBackward",-1443564123),new cljs.core.Keyword(null,"deleteCharBackward","deleteCharBackward",-618312025),new cljs.core.Keyword(null,"insertNewlineAndIndent","insertNewlineAndIndent",-542382007),new cljs.core.Keyword(null,"cursorLineBoundaryBackward","cursorLineBoundaryBackward",1373049802),new cljs.core.Keyword(null,"selectCharRight","selectCharRight",1049825195),new cljs.core.Keyword(null,"selectPageUp","selectPageUp",152840428),new cljs.core.Keyword(null,"deleteCharForward","deleteCharForward",823474956),new cljs.core.Keyword(null,"cursorCharLeft","cursorCharLeft",-1572589780),new cljs.core.Keyword(null,"cursorGroupBackward","cursorGroupBackward",-1004717331),new cljs.core.Keyword(null,"selectDocStart","selectDocStart",-217268371),new cljs.core.Keyword(null,"selectGroupBackward","selectGroupBackward",1569543117),new cljs.core.Keyword(null,"cursorDocEnd","cursorDocEnd",-1298653903),new cljs.core.Keyword(null,"deleteGroupBackward","deleteGroupBackward",616768113),new cljs.core.Keyword(null,"selectLineStart","selectLineStart",1211557745),new cljs.core.Keyword(null,"deleteGroupForward","deleteGroupForward",596007091),new cljs.core.Keyword(null,"selectDocEnd","selectDocEnd",496449813),new cljs.core.Keyword(null,"selectPageDown","selectPageDown",226562613),new cljs.core.Keyword(null,"cursorPageDown","cursorPageDown",-1143253131),new cljs.core.Keyword(null,"cursorPageUp","cursorPageUp",-716828715),new cljs.core.Keyword(null,"selectLineBoundaryForward","selectLineBoundaryForward",904508598),new cljs.core.Keyword(null,"cursorLineEnd","cursorLineEnd",-234219178),new cljs.core.Keyword(null,"cursorGroupForward","cursorGroupForward",1231480632),new cljs.core.Keyword(null,"cursorCharRight","cursorCharRight",-739900583),new cljs.core.Keyword(null,"selectGroupForward","selectGroupForward",1344873433),new cljs.core.Keyword(null,"selectLineEnd","selectLineEnd",-1578526086),new cljs.core.Keyword(null,"selectCharLeft","selectCharLeft",1894248154),new cljs.core.Keyword(null,"splitLine","splitLine",-1338533189),new cljs.core.Keyword(null,"selectLineDown","selectLineDown",1741100604),new cljs.core.Keyword(null,"transposeChars","transposeChars",1566260285),new cljs.core.Keyword(null,"cursorLineUp","cursorLineUp",-1375841219),new cljs.core.Keyword(null,"cursorDocStart","cursorDocStart",2008312830)],[module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineStart,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineDown,module$node_modules$$codemirror$commands$dist$index_cjs.selectAll,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineUp,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineBoundaryForward,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineBoundaryBackward,module$node_modules$$codemirror$commands$dist$index_cjs.deleteCharBackward,module$node_modules$$codemirror$commands$dist$index_cjs.insertNewlineAndIndent,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineBoundaryBackward,module$node_modules$$codemirror$commands$dist$index_cjs.selectCharRight,module$node_modules$$codemirror$commands$dist$index_cjs.selectPageUp,module$node_modules$$codemirror$commands$dist$index_cjs.deleteCharForward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorCharLeft,module$node_modules$$codemirror$commands$dist$index_cjs.cursorGroupBackward,module$node_modules$$codemirror$commands$dist$index_cjs.selectDocStart,module$node_modules$$codemirror$commands$dist$index_cjs.selectGroupBackward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorDocEnd,module$node_modules$$codemirror$commands$dist$index_cjs.deleteGroupBackward,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineStart,module$node_modules$$codemirror$commands$dist$index_cjs.deleteGroupForward,module$node_modules$$codemirror$commands$dist$index_cjs.selectDocEnd,module$node_modules$$codemirror$commands$dist$index_cjs.selectPageDown,module$node_modules$$codemirror$commands$dist$index_cjs.cursorPageDown,module$node_modules$$codemirror$commands$dist$index_cjs.cursorPageUp,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineBoundaryForward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineEnd,module$node_modules$$codemirror$commands$dist$index_cjs.cursorGroupForward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorCharRight,module$node_modules$$codemirror$commands$dist$index_cjs.selectGroupForward,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineEnd,module$node_modules$$codemirror$commands$dist$index_cjs.selectCharLeft,module$node_modules$$codemirror$commands$dist$index_cjs.splitLine,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineDown,module$node_modules$$codemirror$commands$dist$index_cjs.transposeChars,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineUp,module$node_modules$$codemirror$commands$dist$index_cjs.cursorDocStart]);
nextjournal.clojure_mode.commands.indent = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.extensions.formatting.format);
nextjournal.clojure_mode.commands.unwrap = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.unwrap_STAR_);
nextjournal.clojure_mode.commands.kill = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.kill_STAR_);
nextjournal.clojure_mode.commands.nav_right = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav((1)));
nextjournal.clojure_mode.commands.nav_left = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav((-1)));
nextjournal.clojure_mode.commands.nav_select_right = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav_select((1)));
nextjournal.clojure_mode.commands.nav_select_left = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav_select((-1)));
nextjournal.clojure_mode.commands.slurp_forward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.slurp((1)));
nextjournal.clojure_mode.commands.slurp_backward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.slurp((-1)));
nextjournal.clojure_mode.commands.barf_forward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.barf((1)));
nextjournal.clojure_mode.commands.barf_backward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.barf((-1)));
nextjournal.clojure_mode.commands.selection_grow = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.extensions.selection_history.selection_grow_STAR_);
nextjournal.clojure_mode.commands.selection_return = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.extensions.selection_history.selection_return_STAR_);
nextjournal.clojure_mode.commands.enter_and_indent = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.enter_and_indent_STAR_);
nextjournal.clojure_mode.commands.paredit_index = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"nav-left","nav-left",845947876),new cljs.core.Keyword(null,"enter-and-indent","enter-and-indent",-1825406873),new cljs.core.Keyword(null,"selection-grow","selection-grow",1627169352),new cljs.core.Keyword(null,"kill","kill",-12335575),new cljs.core.Keyword(null,"slurp-forward","slurp-forward",-866284566),new cljs.core.Keyword(null,"nav-select-right","nav-select-right",-455278613),new cljs.core.Keyword(null,"nav-select-left","nav-select-left",-1033285138),new cljs.core.Keyword(null,"barf-forward","barf-forward",1278612337),new cljs.core.Keyword(null,"barf-backward","barf-backward",434854195),new cljs.core.Keyword(null,"nav-right","nav-right",591041267),new cljs.core.Keyword(null,"slurp-backward","slurp-backward",-1615745159),new cljs.core.Keyword(null,"unwrap","unwrap",-1399175462),new cljs.core.Keyword(null,"selection-return","selection-return",267226206)],[nextjournal.clojure_mode.commands.indent,nextjournal.clojure_mode.commands.nav_left,nextjournal.clojure_mode.commands.enter_and_indent,nextjournal.clojure_mode.commands.selection_grow,nextjournal.clojure_mode.commands.kill,nextjournal.clojure_mode.commands.slurp_forward,nextjournal.clojure_mode.commands.nav_select_right,nextjournal.clojure_mode.commands.nav_select_left,nextjournal.clojure_mode.commands.barf_forward,nextjournal.clojure_mode.commands.barf_backward,nextjournal.clojure_mode.commands.nav_right,nextjournal.clojure_mode.commands.slurp_backward,nextjournal.clojure_mode.commands.unwrap,nextjournal.clojure_mode.commands.selection_return]);
/**
 * Mapping of keyword-id to command functions
 */
nextjournal.clojure_mode.commands.index = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.commands.builtin_index,nextjournal.clojure_mode.commands.paredit_index], 0));
/**
 * Lookup keyword-id by function
 */
nextjournal.clojure_mode.commands.reverse_index = cljs.core.reduce_kv((function (p1__71979_SHARP_,p2__71981_SHARP_,p3__71980_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__71979_SHARP_,p3__71980_SHARP_,p2__71981_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,nextjournal.clojure_mode.commands.index);

//# sourceMappingURL=nextjournal.clojure_mode.commands.js.map
