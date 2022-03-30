goog.provide('re_com.typeahead');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__88397){
var map__88399 = p__88397;
var map__88399__$1 = cljs.core.__destructure_map(map__88399);
var args = map__88399__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88399__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88399__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88399__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88399__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88399__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88399__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88399__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88399__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value(model);
var G__88402 = (function (){var c_input = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4253__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,(re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.debounce.cljs$core$IFn$_invoke$arity$2(c_input,debounce_delay) : re_com.typeahead.debounce.call(null,c_input,debounce_delay)),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value(model),re_com.util.deref_or_value(model)]);
})();
if(cljs.core.truth_(external_model_value)){
return (re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2 ? re_com.typeahead.display_suggestion.cljs$core$IFn$_invoke$arity$2(G__88402,external_model_value) : re_com.typeahead.display_suggestion.call(null,G__88402,external_model_value));
} else {
return G__88402;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__88410,event){
var map__88411 = p__88410;
var map__88411__$1 = cljs.core.__destructure_map(map__88411);
var state = map__88411__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88411__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88411__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88411__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value(immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value(rigid_QMARK_);
var G__88412 = event;
var G__88412__$1 = (((G__88412 instanceof cljs.core.Keyword))?G__88412.fqn:null);
switch (G__88412__$1) {
case "input-text-blurred":
var and__4251__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(rigid_QMARK___$1);
} else {
return and__4251__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
case "input-text-changed":
var and__4251__auto__ = cljs.core.not(rigid_QMARK___$1);
if(and__4251__auto__){
var or__4253__auto__ = cljs.core.not(change_on_blur_QMARK___$1);
if(or__4253__auto__){
return or__4253__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return and__4251__auto__;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__88424,event){
var map__88425 = p__88424;
var map__88425__$1 = cljs.core.__destructure_map(map__88425);
var state = map__88425__$1;
var change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88425__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value(change_on_blur_QMARK_);
var G__88426 = event;
var G__88426__$1 = (((G__88426 instanceof cljs.core.Keyword))?G__88426.fqn:null);
switch (G__88426__$1) {
case "suggestion-activated":
return cljs.core.not(change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__88432,new_value){
var map__88433 = p__88432;
var map__88433__$1 = cljs.core.__destructure_map(map__88433);
var state = map__88433__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88433__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_value) : on_change.call(null,new_value));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__88437,suggestion){
var map__88438 = p__88437;
var map__88438__$1 = cljs.core.__destructure_map(map__88438);
var state = map__88438__$1;
var suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88438__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = (suggestion_to_string.cljs$core$IFn$_invoke$arity$1 ? suggestion_to_string.cljs$core$IFn$_invoke$arity$1(suggestion) : suggestion_to_string.call(null,suggestion));
var G__88439 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__88439,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true], 0));
} else {
return G__88439;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728)], 0));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__88444,index){
var map__88446 = p__88444;
var map__88446__$1 = cljs.core.__destructure_map(map__88446);
var state = map__88446__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88446__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
var G__88448 = state;
var G__88448__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__88448,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__88448__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model(G__88448__$1,suggestion):G__88448__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_(state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion(G__88448__$2,suggestion);
} else {
return G__88448__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__88454,index){
var map__88455 = p__88454;
var map__88455__$1 = cljs.core.__destructure_map(map__88455);
var state = map__88455__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88455__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(suggestions,index);
return re_com.typeahead.clear_suggestions(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(re_com.typeahead.activate_suggestion_by_index(state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__88469){
var map__88475 = p__88469;
var map__88475__$1 = cljs.core.__destructure_map(map__88475);
var state = map__88475__$1;
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88475__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__88481 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index(G__88481,suggestion_active_index);
} else {
return G__88481;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod((count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__88487){
var map__88489 = p__88487;
var map__88489__$1 = cljs.core.__destructure_map(map__88489);
var state = map__88489__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88489__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88489__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__88492 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__88492,re_com.typeahead.wrap(((function (){var or__4253__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count(suggestions)));
} else {
return G__88492;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__88498){
var map__88500 = p__88498;
var map__88500__$1 = cljs.core.__destructure_map(map__88500);
var state = map__88500__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88500__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88500__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__88501 = state;
if(cljs.core.seq(suggestions)){
return re_com.typeahead.activate_suggestion_by_index(G__88501,re_com.typeahead.wrap(((function (){var or__4253__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count(suggestions)));
} else {
return G__88501;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__88512 = state;
var G__88512__$1 = re_com.typeahead.clear_suggestions(G__88512)
;
var G__88512__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__88512__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__88512__$2,null);
} else {
return G__88512__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null], 0));
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__88520){
var map__88522 = p__88520;
var map__88522__$1 = cljs.core.__destructure_map(map__88522);
var state = map__88522__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88522__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88522__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88522__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not(displaying_suggestion_QMARK_);
if(and__4251__auto__){
return re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__4251__auto__;
}
})())){
return re_com.typeahead.update_model(state,input_text);
} else {
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),input_text));

}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.reset_typeahead(state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_com.typeahead.display_suggestion(re_com.typeahead.update_model(state,new_value),new_value),new cljs.core.Keyword(null,"external-model","external-model",506095421),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5751__auto__ = (function (){var G__88562 = text;
var G__88563 = (function (p1__88556_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,p1__88556_SHARP_);
});
return (data_source.cljs$core$IFn$_invoke$arity$2 ? data_source.cljs$core$IFn$_invoke$arity$2(G__88562,G__88563) : data_source.call(null,G__88562,G__88563));
})();
if(cljs.core.truth_(temp__5751__auto__)){
var return_value = temp__5751__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__85482__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__85483__auto__ = (function (){var switch__85260__auto__ = (function (state_88588){
var state_val_88589 = (state_88588[(1)]);
if((state_val_88589 === (1))){
var state_88588__$1 = state_88588;
var statearr_88596_88982 = state_88588__$1;
(statearr_88596_88982[(2)] = null);

(statearr_88596_88982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88589 === (2))){
var state_88588__$1 = state_88588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88588__$1,(4),c_search);
} else {
if((state_val_88589 === (3))){
var inst_88586 = (state_88588[(2)]);
var state_88588__$1 = state_88588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88588__$1,inst_88586);
} else {
if((state_val_88589 === (4))){
var inst_88573 = (state_88588[(7)]);
var inst_88573__$1 = (state_88588[(2)]);
var inst_88574 = cljs.core.deref(state_atom);
var inst_88575 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_88574);
var inst_88576 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",inst_88573__$1);
var state_88588__$1 = (function (){var statearr_88607 = state_88588;
(statearr_88607[(8)] = inst_88575);

(statearr_88607[(7)] = inst_88573__$1);

return statearr_88607;
})();
if(inst_88576){
var statearr_88609_88984 = state_88588__$1;
(statearr_88609_88984[(1)] = (5));

} else {
var statearr_88610_88985 = state_88588__$1;
(statearr_88610_88985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88589 === (5))){
var inst_88575 = (state_88588[(8)]);
var inst_88578 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.reset_typeahead);
var inst_88579 = re_com.typeahead.search_data_source_BANG_(inst_88575,state_atom,"");
var state_88588__$1 = (function (){var statearr_88614 = state_88588;
(statearr_88614[(9)] = inst_88578);

return statearr_88614;
})();
var statearr_88615_88987 = state_88588__$1;
(statearr_88615_88987[(2)] = inst_88579);

(statearr_88615_88987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88589 === (6))){
var inst_88575 = (state_88588[(8)]);
var inst_88573 = (state_88588[(7)]);
var inst_88581 = re_com.typeahead.search_data_source_BANG_(inst_88575,state_atom,inst_88573);
var state_88588__$1 = state_88588;
var statearr_88618_88988 = state_88588__$1;
(statearr_88618_88988[(2)] = inst_88581);

(statearr_88618_88988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88589 === (7))){
var inst_88583 = (state_88588[(2)]);
var state_88588__$1 = (function (){var statearr_88619 = state_88588;
(statearr_88619[(10)] = inst_88583);

return statearr_88619;
})();
var statearr_88620_88989 = state_88588__$1;
(statearr_88620_88989[(2)] = null);

(statearr_88620_88989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__85261__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__85261__auto____0 = (function (){
var statearr_88624 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_88624[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__85261__auto__);

(statearr_88624[(1)] = (1));

return statearr_88624;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__85261__auto____1 = (function (state_88588){
while(true){
var ret_value__85262__auto__ = (function (){try{while(true){
var result__85263__auto__ = switch__85260__auto__(state_88588);
if(cljs.core.keyword_identical_QMARK_(result__85263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__85263__auto__;
}
break;
}
}catch (e88625){var ex__85264__auto__ = e88625;
var statearr_88627_88994 = state_88588;
(statearr_88627_88994[(2)] = ex__85264__auto__);


if(cljs.core.seq((state_88588[(4)]))){
var statearr_88629_88995 = state_88588;
(statearr_88629_88995[(1)] = cljs.core.first((state_88588[(4)])));

} else {
throw ex__85264__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__85262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__88998 = state_88588;
state_88588 = G__88998;
continue;
} else {
return ret_value__85262__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__85261__auto__ = function(state_88588){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__85261__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__85261__auto____1.call(this,state_88588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__85261__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__85261__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__85261__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__85261__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__85261__auto__;
})()
})();
var state__85484__auto__ = (function (){var statearr_88634 = f__85483__auto__();
(statearr_88634[(6)] = c__85482__auto__);

return statearr_88634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__85484__auto__);
}));

return c__85482__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__88642 = cljs.core.deref(state_atom);
var map__88642__$1 = cljs.core.__destructure_map(map__88642);
var state = map__88642__$1;
var input_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88642__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88642__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c_input,new_text);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (p1__88639_SHARP_){
var G__88645 = p1__88639_SHARP_;
var G__88645__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__88645,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false], 0))
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_(state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model(G__88645__$1,new_text);
} else {
return G__88645__$1;
}
}));
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__88654 = cljs.core._EQ_;
var expr__88655 = event.which;
if(cljs.core.truth_((pred__88654.cljs$core$IFn$_invoke$arity$2 ? pred__88654.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.UP,expr__88655) : pred__88654.call(null,goog.events.KeyCodes.UP,expr__88655)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_((pred__88654.cljs$core$IFn$_invoke$arity$2 ? pred__88654.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.DOWN,expr__88655) : pred__88654.call(null,goog.events.KeyCodes.DOWN,expr__88655)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_((pred__88654.cljs$core$IFn$_invoke$arity$2 ? pred__88654.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ENTER,expr__88655) : pred__88654.call(null,goog.events.KeyCodes.ENTER,expr__88655)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_((pred__88654.cljs$core$IFn$_invoke$arity$2 ? pred__88654.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.ESC,expr__88655) : pred__88654.call(null,goog.events.KeyCodes.ESC,expr__88655)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_((pred__88654.cljs$core$IFn$_invoke$arity$2 ? pred__88654.cljs$core$IFn$_invoke$arity$2(goog.events.KeyCodes.TAB,expr__88655) : pred__88654.call(null,goog.events.KeyCodes.TAB,expr__88655)))){
if(cljs.core.truth_(cljs.core.not_empty(new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_atom))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"the outer container"], null),", rather than the textbox)"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4870__auto__ = [];
var len__4864__auto___89010 = arguments.length;
var i__4865__auto___89012 = (0);
while(true){
if((i__4865__auto___89012 < len__4864__auto___89010)){
args__4870__auto__.push((arguments[i__4865__auto___89012]));

var G__89013 = (i__4865__auto___89012 + (1));
i__4865__auto___89012 = G__89013;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__88701){
var map__88702 = p__88701;
var map__88702__$1 = cljs.core.__destructure_map(map__88702);
var args = map__88702__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__88705 = re_com.typeahead.make_typeahead_state(args);
var map__88705__$1 = cljs.core.__destructure_map(map__88705);
var state = map__88705__$1;
var c_search = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88705__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88705__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(state);
var input_text_model = reagent.core.cursor(state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_(state_atom,c_search);

return (function() { 
var G__89023__delegate = function (p__88713){
var map__88714 = p__88713;
var map__88714__$1 = cljs.core.__destructure_map(map__88714);
var args__$1 = map__88714__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88714__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.cljs$core$IFn$_invoke$arity$variadic(re_com.validate.extract_arg_data(re_com.typeahead.typeahead_args_desc),args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["typeahead"], 0)))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__88728 = cljs.core.deref(state_atom);
var map__88728__$1 = cljs.core.__destructure_map(map__88728);
var state__$1 = map__88728__$1;
var suggestions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88728__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88728__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88728__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__88728__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value(model);
var width__$1 = (function (){var or__4253__auto__ = width;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(last_data_source,data_source)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(latest_external_model,external_model)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,re_com.typeahead.input_text_will_blur);
})], null)], null),(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.not_empty(suggestions);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4652__auto__ = (function re_com$typeahead$iter__88738(s__88739){
return (new cljs.core.LazySeq(null,(function (){
var s__88739__$1 = s__88739;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__88739__$1);
if(temp__5753__auto__){
var s__88739__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__88739__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__88739__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__88741 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__88740 = (0);
while(true){
if((i__88740 < size__4651__auto__)){
var vec__88745 = cljs.core._nth(c__4650__auto__,i__88740);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88745,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88745,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
cljs.core.chunk_append(b__88741,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__88740,selected_QMARK_,vec__88745,i,s,c__4650__auto__,size__4651__auto__,b__88741,s__88739__$2,temp__5753__auto__,map__88728,map__88728__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__88714,map__88714__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__88705,map__88705__$1,state,c_search,c_input,state_atom,input_text_model,map__88702,map__88702__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__88740,selected_QMARK_,vec__88745,i,s,c__4650__auto__,size__4651__auto__,b__88741,s__88739__$2,temp__5753__auto__,map__88728,map__88728__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__88714,map__88714__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__88705,map__88705__$1,state,c_search,c_input,state_atom,input_text_model,map__88702,map__88702__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__88740,selected_QMARK_,vec__88745,i,s,c__4650__auto__,size__4651__auto__,b__88741,s__88739__$2,temp__5753__auto__,map__88728,map__88728__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__88714,map__88714__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__88705,map__88705__$1,state,c_search,c_input,state_atom,input_text_model,map__88702,map__88702__$1,args){
return (function (p1__88683_SHARP_){
p1__88683_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__88740,selected_QMARK_,vec__88745,i,s,c__4650__auto__,size__4651__auto__,b__88741,s__88739__$2,temp__5753__auto__,map__88728,map__88728__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__88714,map__88714__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__88705,map__88705__$1,state,c_search,c_input,state_atom,input_text_model,map__88702,map__88702__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__89056 = (i__88740 + (1));
i__88740 = G__89056;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__88741),re_com$typeahead$iter__88738(cljs.core.chunk_rest(s__88739__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__88741),null);
}
} else {
var vec__88753 = cljs.core.first(s__88739__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88753,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__88753,(1),null);
var selected_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suggestion_active_index,i);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?(render_suggestion.cljs$core$IFn$_invoke$arity$1 ? render_suggestion.cljs$core$IFn$_invoke$arity$1(s) : render_suggestion.call(null,s)):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__88753,i,s,s__88739__$2,temp__5753__auto__,map__88728,map__88728__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__88714,map__88714__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__88705,map__88705__$1,state,c_search,c_input,state_atom,input_text_model,map__88702,map__88702__$1,args){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__88753,i,s,s__88739__$2,temp__5753__auto__,map__88728,map__88728__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__88714,map__88714__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__88705,map__88705__$1,state,c_search,c_input,state_atom,input_text_model,map__88702,map__88702__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__88753,i,s,s__88739__$2,temp__5753__auto__,map__88728,map__88728__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__88714,map__88714__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__88705,map__88705__$1,state,c_search,c_input,state_atom,input_text_model,map__88702,map__88702__$1,args){
return (function (p1__88683_SHARP_){
p1__88683_SHARP_.preventDefault();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__88753,i,s,s__88739__$2,temp__5753__auto__,map__88728,map__88728__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__88714,map__88714__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__88705,map__88705__$1,state,c_search,c_input,state_atom,input_text_model,map__88702,map__88702__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__88738(cljs.core.rest(s__88739__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__89023 = function (var_args){
var p__88713 = null;
if (arguments.length > 0) {
var G__89073__i = 0, G__89073__a = new Array(arguments.length -  0);
while (G__89073__i < G__89073__a.length) {G__89073__a[G__89073__i] = arguments[G__89073__i + 0]; ++G__89073__i;}
  p__88713 = new cljs.core.IndexedSeq(G__89073__a,0,null);
} 
return G__89023__delegate.call(this,p__88713);};
G__89023.cljs$lang$maxFixedArity = 0;
G__89023.cljs$lang$applyTo = (function (arglist__89074){
var p__88713 = cljs.core.seq(arglist__89074);
return G__89023__delegate(p__88713);
});
G__89023.cljs$core$IFn$_invoke$arity$variadic = G__89023__delegate;
return G__89023;
})()
;
}));

(re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq88686){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq88686));
}));

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__85482__auto___89075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__85483__auto__ = (function (){var switch__85260__auto__ = (function (state_88834){
var state_val_88835 = (state_88834[(1)]);
if((state_val_88835 === (7))){
var inst_88775 = (state_88834[(2)]);
var state_88834__$1 = state_88834;
var statearr_88839_89078 = state_88834__$1;
(statearr_88839_89078[(2)] = inst_88775);

(statearr_88839_89078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88835 === (1))){
var inst_88770 = null;
var state_88834__$1 = (function (){var statearr_88840 = state_88834;
(statearr_88840[(7)] = inst_88770);

return statearr_88840;
})();
var statearr_88841_89080 = state_88834__$1;
(statearr_88841_89080[(2)] = null);

(statearr_88841_89080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88835 === (4))){
var state_88834__$1 = state_88834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88834__$1,(7),in$);
} else {
if((state_val_88835 === (15))){
var inst_88817 = (state_88834[(2)]);
var state_88834__$1 = (function (){var statearr_88843 = state_88834;
(statearr_88843[(8)] = inst_88817);

return statearr_88843;
})();
var statearr_88845_89082 = state_88834__$1;
(statearr_88845_89082[(2)] = null);

(statearr_88845_89082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88835 === (13))){
var inst_88803 = (state_88834[(9)]);
var inst_88819 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88803,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_88834__$1 = state_88834;
if(inst_88819){
var statearr_88848_89083 = state_88834__$1;
(statearr_88848_89083[(1)] = (16));

} else {
var statearr_88849_89084 = state_88834__$1;
(statearr_88849_89084[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88835 === (6))){
var inst_88795 = (state_88834[(10)]);
var inst_88779 = (state_88834[(11)]);
var inst_88778 = (state_88834[(2)]);
var inst_88779__$1 = cljs.core.async.timeout(ms);
var inst_88795__$1 = in$;
var inst_88797 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88798 = [inst_88795__$1,inst_88779__$1];
var inst_88799 = (new cljs.core.PersistentVector(null,2,(5),inst_88797,inst_88798,null));
var state_88834__$1 = (function (){var statearr_88853 = state_88834;
(statearr_88853[(10)] = inst_88795__$1);

(statearr_88853[(11)] = inst_88779__$1);

(statearr_88853[(12)] = inst_88778);

return statearr_88853;
})();
return cljs.core.async.ioc_alts_BANG_(state_88834__$1,(8),inst_88799);
} else {
if((state_val_88835 === (17))){
var state_88834__$1 = state_88834;
var statearr_88858_89091 = state_88834__$1;
(statearr_88858_89091[(2)] = null);

(statearr_88858_89091[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88835 === (3))){
var inst_88832 = (state_88834[(2)]);
var state_88834__$1 = state_88834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88834__$1,inst_88832);
} else {
if((state_val_88835 === (12))){
var inst_88778 = (state_88834[(12)]);
var state_88834__$1 = state_88834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_88834__$1,(15),out,inst_88778);
} else {
if((state_val_88835 === (2))){
var inst_88770 = (state_88834[(7)]);
var inst_88772 = (inst_88770 == null);
var state_88834__$1 = state_88834;
if(cljs.core.truth_(inst_88772)){
var statearr_88869_89093 = state_88834__$1;
(statearr_88869_89093[(1)] = (4));

} else {
var statearr_88872_89094 = state_88834__$1;
(statearr_88872_89094[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88835 === (11))){
var inst_88828 = (state_88834[(2)]);
var inst_88770 = inst_88828;
var state_88834__$1 = (function (){var statearr_88873 = state_88834;
(statearr_88873[(7)] = inst_88770);

return statearr_88873;
})();
var statearr_88881_89095 = state_88834__$1;
(statearr_88881_89095[(2)] = null);

(statearr_88881_89095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88835 === (9))){
var inst_88801 = (state_88834[(13)]);
var inst_88810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_88801,(0),null);
var inst_88812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_88801,(1),null);
var state_88834__$1 = (function (){var statearr_88884 = state_88834;
(statearr_88884[(14)] = inst_88812);

return statearr_88884;
})();
var statearr_88886_89098 = state_88834__$1;
(statearr_88886_89098[(2)] = inst_88810);

(statearr_88886_89098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88835 === (5))){
var inst_88770 = (state_88834[(7)]);
var state_88834__$1 = state_88834;
var statearr_88888_89099 = state_88834__$1;
(statearr_88888_89099[(2)] = inst_88770);

(statearr_88888_89099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88835 === (14))){
var inst_88826 = (state_88834[(2)]);
var state_88834__$1 = state_88834;
var statearr_88891_89100 = state_88834__$1;
(statearr_88891_89100[(2)] = inst_88826);

(statearr_88891_89100[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88835 === (16))){
var inst_88802 = (state_88834[(15)]);
var state_88834__$1 = state_88834;
var statearr_88894_89101 = state_88834__$1;
(statearr_88894_89101[(2)] = inst_88802);

(statearr_88894_89101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88835 === (10))){
var inst_88803 = (state_88834[(9)]);
var inst_88779 = (state_88834[(11)]);
var inst_88814 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88803,inst_88779);
var state_88834__$1 = state_88834;
if(inst_88814){
var statearr_88897_89103 = state_88834__$1;
(statearr_88897_89103[(1)] = (12));

} else {
var statearr_88898_89104 = state_88834__$1;
(statearr_88898_89104[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88835 === (18))){
var inst_88824 = (state_88834[(2)]);
var state_88834__$1 = state_88834;
var statearr_88900_89107 = state_88834__$1;
(statearr_88900_89107[(2)] = inst_88824);

(statearr_88900_89107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88835 === (8))){
var inst_88803 = (state_88834[(9)]);
var inst_88795 = (state_88834[(10)]);
var inst_88801 = (state_88834[(13)]);
var inst_88801__$1 = (state_88834[(2)]);
var inst_88802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_88801__$1,(0),null);
var inst_88803__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_88801__$1,(1),null);
var inst_88805 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88803__$1,inst_88795);
var state_88834__$1 = (function (){var statearr_88905 = state_88834;
(statearr_88905[(9)] = inst_88803__$1);

(statearr_88905[(13)] = inst_88801__$1);

(statearr_88905[(15)] = inst_88802);

return statearr_88905;
})();
if(inst_88805){
var statearr_88913_89108 = state_88834__$1;
(statearr_88913_89108[(1)] = (9));

} else {
var statearr_88915_89110 = state_88834__$1;
(statearr_88915_89110[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var re_com$typeahead$debounce_$_state_machine__85261__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__85261__auto____0 = (function (){
var statearr_88917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88917[(0)] = re_com$typeahead$debounce_$_state_machine__85261__auto__);

(statearr_88917[(1)] = (1));

return statearr_88917;
});
var re_com$typeahead$debounce_$_state_machine__85261__auto____1 = (function (state_88834){
while(true){
var ret_value__85262__auto__ = (function (){try{while(true){
var result__85263__auto__ = switch__85260__auto__(state_88834);
if(cljs.core.keyword_identical_QMARK_(result__85263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__85263__auto__;
}
break;
}
}catch (e88919){var ex__85264__auto__ = e88919;
var statearr_88921_89120 = state_88834;
(statearr_88921_89120[(2)] = ex__85264__auto__);


if(cljs.core.seq((state_88834[(4)]))){
var statearr_88923_89121 = state_88834;
(statearr_88923_89121[(1)] = cljs.core.first((state_88834[(4)])));

} else {
throw ex__85264__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__85262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89122 = state_88834;
state_88834 = G__89122;
continue;
} else {
return ret_value__85262__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__85261__auto__ = function(state_88834){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__85261__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__85261__auto____1.call(this,state_88834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__85261__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__85261__auto____0;
re_com$typeahead$debounce_$_state_machine__85261__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__85261__auto____1;
return re_com$typeahead$debounce_$_state_machine__85261__auto__;
})()
})();
var state__85484__auto__ = (function (){var statearr_88925 = f__85483__auto__();
(statearr_88925[(6)] = c__85482__auto___89075);

return statearr_88925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__85484__auto__);
}));


return out;
});

//# sourceMappingURL=re_com.typeahead.js.map
