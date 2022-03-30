goog.provide('dda.comp.molecules.repl_view');
/**
 * Scroll DOM element `el` to the bottom.
 */
dda.comp.molecules.repl_view.scroll_bottom = (function dda$comp$molecules$repl_view$scroll_bottom(el,_){
if(cljs.core.truth_(el)){
return setTimeout((function (){
return (el.scrollTop = el.scrollHeight);
}),(0));
} else {
return null;
}
});
/**
 * Render the prompt element, extracting color and text
 *   from the session.
 */
dda.comp.molecules.repl_view.prompt_el = (function dda$comp$molecules$repl_view$prompt_el(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-amber-500 dark:text-amber-400"], null)], null),"user>"], null);
});
/**
 * Render a list of div containing the command history
 *   of the REPL.
 */
dda.comp.molecules.repl_view.history_el = (function dda$comp$molecules$repl_view$history_el(repl_history){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var iter__4652__auto__ = (function dda$comp$molecules$repl_view$history_el_$_iter__68113(s__68114){
return (new cljs.core.LazySeq(null,(function (){
var s__68114__$1 = s__68114;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__68114__$1);
if(temp__5753__auto__){
var s__68114__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68114__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__68114__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__68116 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__68115 = (0);
while(true){
if((i__68115 < size__4651__auto__)){
var vec__68117 = cljs.core._nth(c__4650__auto__,i__68115);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68117,(0),null);
var map__68120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68117,(1),null);
var map__68120__$1 = cljs.core.__destructure_map(map__68120);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68120__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68120__$1,new cljs.core.Keyword(null,"value","value",305978217));
cljs.core.chunk_append(b__68116,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-2",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"special","special",-1125941630)))?"mt-1 mb-2":null)], null)], null),(function (){var pred__68121 = cljs.core._EQ_;
var expr__68122 = type;
if(cljs.core.truth_((pred__68121.cljs$core$IFn$_invoke$arity$2 ? pred__68121.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961),expr__68122) : pred__68121.call(null,new cljs.core.Keyword(null,"input","input",556931961),expr__68122)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dda.comp.molecules.repl_view.prompt_el], null);
} else {
if(cljs.core.truth_((pred__68121.cljs$core$IFn$_invoke$arity$2 ? pred__68121.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input-multi","input-multi",-1485391374),expr__68122) : pred__68121.call(null,new cljs.core.Keyword(null,"input-multi","input-multi",-1485391374),expr__68122)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),">"], null);
} else {
return null;
}
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-2",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"error","error",-978969032)))?"text-red-400":null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"special","special",-1125941630)))?"text-gray-500 italic":null)], null)], null),value], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["repl-part-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null)));

var G__68139 = (i__68115 + (1));
i__68115 = G__68139;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68116),dda$comp$molecules$repl_view$history_el_$_iter__68113(cljs.core.chunk_rest(s__68114__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68116),null);
}
} else {
var vec__68124 = cljs.core.first(s__68114__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68124,(0),null);
var map__68127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68124,(1),null);
var map__68127__$1 = cljs.core.__destructure_map(map__68127);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68127__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68127__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-2",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"special","special",-1125941630)))?"mt-1 mb-2":null)], null)], null),(function (){var pred__68128 = cljs.core._EQ_;
var expr__68129 = type;
if(cljs.core.truth_((pred__68128.cljs$core$IFn$_invoke$arity$2 ? pred__68128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961),expr__68129) : pred__68128.call(null,new cljs.core.Keyword(null,"input","input",556931961),expr__68129)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dda.comp.molecules.repl_view.prompt_el], null);
} else {
if(cljs.core.truth_((pred__68128.cljs$core$IFn$_invoke$arity$2 ? pred__68128.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input-multi","input-multi",-1485391374),expr__68129) : pred__68128.call(null,new cljs.core.Keyword(null,"input-multi","input-multi",-1485391374),expr__68129)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),">"], null);
} else {
return null;
}
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["px-2",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"error","error",-978969032)))?"text-red-400":null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"special","special",-1125941630)))?"text-gray-500 italic":null)], null)], null),value], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["repl-part-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null)),dda$comp$molecules$repl_view$history_el_$_iter__68113(cljs.core.rest(s__68114__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.deref(repl_history)));
})()], null);
});
dda.comp.molecules.repl_view.repl_view = (function dda$comp$molecules$repl_view$repl_view(p__68134){
var map__68135 = p__68134;
var map__68135__$1 = cljs.core.__destructure_map(map__68135);
var repl_multiline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68135__$1,new cljs.core.Keyword(null,"repl-multiline","repl-multiline",1630343426));
var repl_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68135__$1,new cljs.core.Keyword(null,"repl-input","repl-input",-1430642169));
var repl_history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68135__$1,new cljs.core.Keyword(null,"repl-history","repl-history",-1696427534));
var input_placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68135__$1,new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860));
var input_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68135__$1,new cljs.core.Keyword(null,"input-el","input-el",1688931956));
var on_keydown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68135__$1,new cljs.core.Keyword(null,"on-keydown","on-keydown",-2056941495));
var with_let68136 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68136","with-let68136",914038870));
var temp__5757__auto___68140 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___68140 == null)){
} else {
var c__63588__auto___68141 = temp__5757__auto___68140;
if((with_let68136.generation === c__63588__auto___68141.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68136.generation = c__63588__auto___68141.ratomGeneration);
}

var init68137 = (with_let68136.length === (0));
var container_el = ((((init68137) || (cljs.core.not(with_let68136.hasOwnProperty((0))))))?(with_let68136[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let68136[(0)]));
var has_focus = ((((init68137) || (cljs.core.not(with_let68136.hasOwnProperty((1))))))?(with_let68136[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let68136[(1)]));
var scroll_watch = ((((init68137) || (cljs.core.not(with_let68136.hasOwnProperty((2))))))?(with_let68136[(2)] = reagent.core.track_BANG_((function (){
return dda.comp.molecules.repl_view.scroll_bottom(cljs.core.deref(container_el),cljs.core.deref(repl_history));
}))):(with_let68136[(2)]));
var res68138 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dda.utils.keybind.with_keybind,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ctrl-c","ctrl-c",-1963715250),(function (e){
cljs.core.reset_BANG_(repl_input,null);

cljs.core.reset_BANG_(repl_multiline,null);

cljs.core.reset_BANG_(input_placeholder,null);

return e.preventDefault();
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","border-gray-300","dark:border-0","rounded-md","font-mono","text-xs","text-black","dark:text-white","overflow-auto","p-3"], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__68131_SHARP_){
return cljs.core.reset_BANG_(container_el,p1__68131_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dda.comp.molecules.repl_view.history_el,repl_history], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","pl-2"], null)], null),((cljs.core.empty_QMARK_(cljs.core.deref(repl_multiline)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dda.comp.molecules.repl_view.prompt_el], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),">"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),new cljs.core.Keyword(null,"autoCorrect","autoCorrect",448626584),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),new cljs.core.Keyword(null,"autoCapitalize","autoCapitalize",438011742)],[cljs.core.deref(input_placeholder),(function (p1__68132_SHARP_){
return cljs.core.reset_BANG_(input_el,p1__68132_SHARP_);
}),(function (){
return cljs.core.reset_BANG_(has_focus,true);
}),"off",cljs.core.deref(repl_input),(function (){
return cljs.core.reset_BANG_(has_focus,false);
}),"text",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1","px-2","outline-none","bg-transparent"], null),"false","off",(function (p1__68133_SHARP_){
return cljs.core.reset_BANG_(repl_input,dda.utils.core.get_val(p1__68133_SHARP_));
}),on_keydown,"off"])], null)], null)], null)], null);
var destroy__63587__auto___68142 = (function (){
return reagent.core.dispose_BANG_(scroll_watch);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let68136.destroy == null)){
(with_let68136.destroy = destroy__63587__auto___68142);
} else {
}
} else {
destroy__63587__auto___68142();
}

return res68138;
});

//# sourceMappingURL=dda.comp.molecules.repl_view.js.map
