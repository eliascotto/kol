goog.provide('re_frisk.ui.views');
re_frisk.ui.views.subs_view = (function re_frisk$ui$views$subs_view(subs,checkbox_sorted_val){
var state_atom = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_frisk.ui.components.frisk.expand_by_default);
return (function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Root,re_frisk.utils.sort_map(cljs.core.deref(subs),cljs.core.deref(checkbox_sorted_val),checkbox_sorted_val),(0),state_atom], null);
});
});
re_frisk.ui.views.watch_item = (function re_frisk$ui$views$watch_item(frisk_data,item,watchers){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4e5d6c"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Watching ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"10px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.label_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(watchers,cljs.core.disj,item);
}),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),"Stop"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"color","color",1011675173),"#444444"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Root_Simple,frisk_data], null)], null)], null)], null)], null);
});
re_frisk.ui.views.app_db_view = (function re_frisk$ui$views$app_db_view(app_db,tool_state){
var state_atom = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_frisk.ui.components.frisk.expand_by_default);
var watchers = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var checkbox_sorted_val = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (function (_){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(cljs.core.deref(watchers)))?(function (){var app_db_derefed = cljs.core.deref(app_db);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.scroller,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f3f3f3"], null)], null),(function (){var iter__4652__auto__ = (function re_frisk$ui$views$app_db_view_$_iter__89206(s__89207){
return (new cljs.core.LazySeq(null,(function (){
var s__89207__$1 = s__89207;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__89207__$1);
if(temp__5753__auto__){
var s__89207__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__89207__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__89207__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__89209 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__89208 = (0);
while(true){
if((i__89208 < size__4651__auto__)){
var watcher = cljs.core._nth(c__4650__auto__,i__89208);
cljs.core.chunk_append(b__89209,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.watch_item,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db_derefed,watcher),watcher,watchers], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),watcher], null)));

var G__89301 = (i__89208 + (1));
i__89208 = G__89301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__89209),re_frisk$ui$views$app_db_view_$_iter__89206(cljs.core.chunk_rest(s__89207__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__89209),null);
}
} else {
var watcher = cljs.core.first(s__89207__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.watch_item,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_db_derefed,watcher),watcher,watchers], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),watcher], null)),re_frisk$ui$views$app_db_view_$_iter__89206(cljs.core.rest(s__89207__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.deref(watchers));
})()], null);
})():null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"app-db"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),checkbox_sorted_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_frisk.utils.on_change_sort(app_db,checkbox_sorted_val,new cljs.core.Keyword(null,"re-frisk-sorted","re-frisk-sorted",-1702831647)),new cljs.core.Keyword(null,"label","label",1718410804),"sort"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"app-db-delta-error","app-db-delta-error",1501760555).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tool_state)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"update error",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#df691a"], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"48px"], null),(function (){var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state_atom),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),(0),new cljs.core.Keyword(null,"filter","filter",-948537934)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var filter = temp__5753__auto__;
if(cljs.core.contains_QMARK_(cljs.core.first(filter),new cljs.core.Keyword(null,"expr","expr",745722291))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.label_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(watchers,cljs.core.conj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),filter));
}),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),"Watch"], null);
} else {
return null;
}
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.frisk.Root,re_frisk.utils.sort_map(cljs.core.deref(app_db),cljs.core.deref(checkbox_sorted_val),checkbox_sorted_val),(0),state_atom], null)], null)], null);
});
});
re_frisk.ui.views.frisks_view = (function re_frisk$ui$views$frisks_view(re_frame_data,tool_state,doc){
var subs_checkbox_sorted_val = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var open_event_split_QMARK_ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction((function (){
return cljs.core.boolean$(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tool_state),new cljs.core.Keyword(null,"selected-event","selected-event",898030638)));
}));
return (function (_,___$1,___$2){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4e5d6c"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Active subscriptions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),subs_checkbox_sorted_val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_frisk.utils.on_change_sort(new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(re_frame_data),subs_checkbox_sorted_val,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-frisk-sorted","re-frisk-sorted",-1702831647)], null),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.Keyword(null,"label","label",1718410804),"sort"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"subs-delta-error","subs-delta-error",-356773612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tool_state)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"update error",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"4px",new cljs.core.Keyword(null,"color","color",1011675173),"#df691a"], null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.splits.v_split,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),"0",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null),new cljs.core.Keyword(null,"document","document",-1329188687),doc,new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.subs_view,new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(re_frame_data),subs_checkbox_sorted_val], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.splits.v_split,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),"100",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null),new cljs.core.Keyword(null,"document","document",-1329188687),doc,new cljs.core.Keyword(null,"open-bottom-split?","open-bottom-split?",953160965),cljs.core.deref(open_event_split_QMARK_),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4e5d6c"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.app_db_view,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(re_frame_data),tool_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.event_bar,tool_state], null)], null)], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.frisk_view,tool_state], null)], null)], null)], null)], null);
});
});
re_frisk.ui.views.controls = (function re_frisk$ui$views$controls(re_frame_data,tool_state){
var map__89239 = cljs.core.deref(tool_state);
var map__89239__$1 = cljs.core.__destructure_map(map__89239);
var timeline_opened_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89239__$1,new cljs.core.Keyword(null,"timeline-opened?","timeline-opened?",1560712236));
var paused_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89239__$1,new cljs.core.Keyword(null,"paused?","paused?",-135058553));
var graph_opened_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89239__$1,new cljs.core.Keyword(null,"graph-opened?","graph-opened?",153449318));
var stat_opened_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89239__$1,new cljs.core.Keyword(null,"stat-opened?","stat-opened?",1063397443));
var views_opened_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__89239__$1,new cljs.core.Keyword(null,"views-opened?","views-opened?",-1040443216));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#4e5d6c"], null),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.label_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.update,new cljs.core.Keyword(null,"paused?","paused?",-135058553),cljs.core.not);
}),new cljs.core.Keyword(null,"active?","active?",459499776),paused_QMARK_], null),(cljs.core.truth_(paused_QMARK_)?"Resume":"Pause")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"5px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.label_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tool_state,cljs.core.dissoc,new cljs.core.Keyword(null,"selected-event","selected-event",898030638));
}),new cljs.core.Keyword(null,"active?","active?",459499776),false], null),"Clear"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.label_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"graph-opened?","graph-opened?",153449318),false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"stat-opened?","stat-opened?",1063397443),false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"views-opened?","views-opened?",-1040443216),false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.update,new cljs.core.Keyword(null,"timeline-opened?","timeline-opened?",1560712236),cljs.core.not);
}),new cljs.core.Keyword(null,"active?","active?",459499776),timeline_opened_QMARK_], null),"Timeline"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"5px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.label_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"timeline-opened?","timeline-opened?",1560712236),false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"stat-opened?","stat-opened?",1063397443),false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"views-opened?","views-opened?",-1040443216),false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.update,new cljs.core.Keyword(null,"graph-opened?","graph-opened?",153449318),cljs.core.not);
}),new cljs.core.Keyword(null,"active?","active?",459499776),graph_opened_QMARK_], null),"Subs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"5px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.label_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"timeline-opened?","timeline-opened?",1560712236),false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"graph-opened?","graph-opened?",153449318),false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"stat-opened?","stat-opened?",1063397443),false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.update,new cljs.core.Keyword(null,"views-opened?","views-opened?",-1040443216),cljs.core.not);
}),new cljs.core.Keyword(null,"active?","active?",459499776),views_opened_QMARK_], null),"Views"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"5px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.components.label_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"timeline-opened?","timeline-opened?",1560712236),false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"graph-opened?","graph-opened?",153449318),false);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.assoc,new cljs.core.Keyword(null,"views-opened?","views-opened?",-1040443216),false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tool_state,cljs.core.update,new cljs.core.Keyword(null,"stat-opened?","stat-opened?",1063397443),cljs.core.not);
}),new cljs.core.Keyword(null,"active?","active?",459499776),stat_opened_QMARK_], null),"Stat"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"15px"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.github.link], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"5px"], null)], null)], null);
});
re_frisk.ui.views.main_view = (function re_frisk$ui$views$main_view(var_args){
var args__4870__auto__ = [];
var len__4864__auto___89347 = arguments.length;
var i__4865__auto___89348 = (0);
while(true){
if((i__4865__auto___89348 < len__4864__auto___89347)){
args__4870__auto__.push((arguments[i__4865__auto___89348]));

var G__89350 = (i__4865__auto___89348 + (1));
i__4865__auto___89348 = G__89350;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return re_frisk.ui.views.main_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(re_frisk.ui.views.main_view.cljs$core$IFn$_invoke$arity$variadic = (function (re_frame_data,tool_state,p__89265){
var vec__89266 = p__89265;
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__89266,(0),null);
var open_graph_split_QMARK_ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction((function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tool_state),new cljs.core.Keyword(null,"graph-opened?","graph-opened?",153449318));
}));
var open_stat_split_QMARK_ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction((function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tool_state),new cljs.core.Keyword(null,"stat-opened?","stat-opened?",1063397443));
}));
var open_views_split_QMARK_ = re_frisk.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction((function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tool_state),new cljs.core.Keyword(null,"views-opened?","views-opened?",-1040443216));
}));
return (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.splits.v_split,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),"0",new cljs.core.Keyword(null,"document","document",-1329188687),doc,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null),new cljs.core.Keyword(null,"open-bottom-split?","open-bottom-split?",953160965),(function (){var or__4253__auto__ = cljs.core.deref(open_graph_split_QMARK_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core.deref(open_stat_split_QMARK_);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return cljs.core.deref(open_views_split_QMARK_);
}
}
})(),new cljs.core.Keyword(null,"close-bottom-split?","close-bottom-split?",1606756910),cljs.core.not((function (){var or__4253__auto__ = cljs.core.deref(open_graph_split_QMARK_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = cljs.core.deref(open_stat_split_QMARK_);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return cljs.core.deref(open_views_split_QMARK_);
}
}
})()),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),(cljs.core.truth_(cljs.core.deref(open_views_split_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.reagent_views.views,re_frame_data], null):(cljs.core.truth_(cljs.core.deref(open_stat_split_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.stat.stat,re_frame_data], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.subs.subs_visibility,re_frame_data,tool_state], null))),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.timeline.timeline_visibility,re_frame_data,tool_state], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.controls,re_frame_data,tool_state], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.components.splits.h_split,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"initial-split","initial-split",2072601727),"25",new cljs.core.Keyword(null,"document","document",-1329188687),doc,new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.events.events_list_view,re_frame_data,tool_state], null),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.views.frisks_view,re_frame_data,tool_state,doc], null)], null)], null)], null)], null);
});
}));

(re_frisk.ui.views.main_view.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_frisk.ui.views.main_view.cljs$lang$applyTo = (function (seq89254){
var G__89256 = cljs.core.first(seq89254);
var seq89254__$1 = cljs.core.next(seq89254);
var G__89257 = cljs.core.first(seq89254__$1);
var seq89254__$2 = cljs.core.next(seq89254__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__89256,G__89257,seq89254__$2);
}));


//# sourceMappingURL=re_frisk.ui.views.js.map
