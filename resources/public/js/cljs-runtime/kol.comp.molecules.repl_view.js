goog.provide('kol.comp.molecules.repl_view');
/**
 * Scroll DOM element `el` to the bottom.
 */
kol.comp.molecules.repl_view.scroll_bottom = (function kol$comp$molecules$repl_view$scroll_bottom(el,_){
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
kol.comp.molecules.repl_view.prompt_el = (function kol$comp$molecules$repl_view$prompt_el(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pr-2","text-amber-500 dark:text-amber-400"], null)], null),"user>"], null);
});
/**
 * Render a list of div containing the command history
 *   of the REPL.
 */
kol.comp.molecules.repl_view.history_el = (function kol$comp$molecules$repl_view$history_el(){
var repl_history = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-history","repl-history",-1696427534)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(function (){var iter__4652__auto__ = (function kol$comp$molecules$repl_view$history_el_$_iter__74429(s__74430){
return (new cljs.core.LazySeq(null,(function (){
var s__74430__$1 = s__74430;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__74430__$1);
if(temp__5753__auto__){
var s__74430__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74430__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__74430__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__74432 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__74431 = (0);
while(true){
if((i__74431 < size__4651__auto__)){
var vec__74433 = cljs.core._nth(c__4650__auto__,i__74431);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74433,(0),null);
var map__74436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74433,(1),null);
var map__74436__$1 = cljs.core.__destructure_map(map__74436);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74436__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74436__$1,new cljs.core.Keyword(null,"value","value",305978217));
cljs.core.chunk_append(b__74432,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"special","special",-1125941630)))?"mt-1 mb-2":null)], null)], null),(function (){var pred__74437 = cljs.core._EQ_;
var expr__74438 = type;
if(cljs.core.truth_((pred__74437.cljs$core$IFn$_invoke$arity$2 ? pred__74437.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961),expr__74438) : pred__74437.call(null,new cljs.core.Keyword(null,"input","input",556931961),expr__74438)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kol.comp.molecules.repl_view.prompt_el], null);
} else {
if(cljs.core.truth_((pred__74437.cljs$core$IFn$_invoke$arity$2 ? pred__74437.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input-multi","input-multi",-1485391374),expr__74438) : pred__74437.call(null,new cljs.core.Keyword(null,"input-multi","input-multi",-1485391374),expr__74438)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pr-1"], null)], null),">"], null);
} else {
return null;
}
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["whitespace-pre-wrap",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"error","error",-978969032)))?"text-red-400":null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"special","special",-1125941630)))?"text-gray-500 italic":null)], null)], null),value], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["repl-part-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null)));

var G__74454 = (i__74431 + (1));
i__74431 = G__74454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74432),kol$comp$molecules$repl_view$history_el_$_iter__74429(cljs.core.chunk_rest(s__74430__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74432),null);
}
} else {
var vec__74440 = cljs.core.first(s__74430__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74440,(0),null);
var map__74443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74440,(1),null);
var map__74443__$1 = cljs.core.__destructure_map(map__74443);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74443__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74443__$1,new cljs.core.Keyword(null,"value","value",305978217));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"special","special",-1125941630)))?"mt-1 mb-2":null)], null)], null),(function (){var pred__74444 = cljs.core._EQ_;
var expr__74445 = type;
if(cljs.core.truth_((pred__74444.cljs$core$IFn$_invoke$arity$2 ? pred__74444.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961),expr__74445) : pred__74444.call(null,new cljs.core.Keyword(null,"input","input",556931961),expr__74445)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kol.comp.molecules.repl_view.prompt_el], null);
} else {
if(cljs.core.truth_((pred__74444.cljs$core$IFn$_invoke$arity$2 ? pred__74444.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input-multi","input-multi",-1485391374),expr__74445) : pred__74444.call(null,new cljs.core.Keyword(null,"input-multi","input-multi",-1485391374),expr__74445)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pr-1"], null)], null),">"], null);
} else {
return null;
}
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["whitespace-pre-wrap",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"error","error",-978969032)))?"text-red-400":null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"special","special",-1125941630)))?"text-gray-500 italic":null)], null)], null),value], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["repl-part-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null)),kol$comp$molecules$repl_view$history_el_$_iter__74429(cljs.core.rest(s__74430__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,repl_history));
})()], null);
});
kol.comp.molecules.repl_view.repl_view = (function kol$comp$molecules$repl_view$repl_view(p__74449){
var map__74450 = p__74449;
var map__74450__$1 = cljs.core.__destructure_map(map__74450);
var on_keydown = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74450__$1,new cljs.core.Keyword(null,"on-keydown","on-keydown",-2056941495));
var with_let74451 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74451","with-let74451",374212668));
var temp__5757__auto___74455 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___74455 == null)){
} else {
var c__64013__auto___74456 = temp__5757__auto___74455;
if((with_let74451.generation === c__64013__auto___74456.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74451.generation = c__64013__auto___74456.ratomGeneration);
}

var init74452 = (with_let74451.length === (0));
var container_el = ((((init74452) || (cljs.core.not(with_let74451.hasOwnProperty((0))))))?(with_let74451[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let74451[(0)]));
var has_focus = ((((init74452) || (cljs.core.not(with_let74451.hasOwnProperty((1))))))?(with_let74451[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let74451[(1)]));
var repl_history = ((((init74452) || (cljs.core.not(with_let74451.hasOwnProperty((2))))))?(with_let74451[(2)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-history","repl-history",-1696427534)], null))):(with_let74451[(2)]));
var scroll_watch = ((((init74452) || (cljs.core.not(with_let74451.hasOwnProperty((3))))))?(with_let74451[(3)] = reagent.core.track_BANG_((function (){
return kol.comp.molecules.repl_view.scroll_bottom(cljs.core.deref(container_el),cljs.core.deref(repl_history));
}))):(with_let74451[(3)]));
var res74453 = (function (){var repl_input = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-input","repl-input",-1430642169)], null)));
var repl_multiline = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-multiline","repl-multiline",1630343426)], null)));
var repl_placeholder = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-placeholder","repl-placeholder",627312876)], null)));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([repl_multiline], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kol.utils.keybind.with_keybind,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ctrl-c","ctrl-c",-1963715250),(function (e){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-reset-all","repl-reset-all",-1988194059)], null));

return e.preventDefault();
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["border","border-gray-300","dark:border-0","rounded-md","font-mono","text-xs","text-black","dark:text-white","overflow-auto","h-full","p-3"], null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__74447_SHARP_){
return cljs.core.reset_BANG_(container_el,p1__74447_SHARP_);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kol.comp.molecules.repl_view.history_el], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex","flex-row","pl-1"], null)], null),((cljs.core.empty_QMARK_(repl_multiline))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kol.comp.molecules.repl_view.prompt_el], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pl-1","pr-2"], null)], null),">"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),new cljs.core.Keyword(null,"autoCorrect","autoCorrect",448626584),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),new cljs.core.Keyword(null,"autoCapitalize","autoCapitalize",438011742)],[(function (){var or__4253__auto__ = repl_placeholder;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})(),(function (){
return cljs.core.reset_BANG_(has_focus,true);
}),"off",repl_input,(function (){
return cljs.core.reset_BANG_(has_focus,false);
}),"text",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flex-1","outline-none","bg-transparent"], null),"false","off",(function (p1__74448_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-input-set","repl-input-set",104611728),kol.utils.core.get_val(p1__74448_SHARP_)], null));
}),on_keydown,"off"])], null)], null)], null)], null);
})();
var destroy__64012__auto___74457 = (function (){
return reagent.core.dispose_BANG_(scroll_watch);
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let74451.destroy == null)){
(with_let74451.destroy = destroy__64012__auto___74457);
} else {
}
} else {
destroy__64012__auto___74457();
}

return res74453;
});

//# sourceMappingURL=kol.comp.molecules.repl_view.js.map
