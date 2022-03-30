goog.provide('re_frisk.subs_graph');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.network !== 'undefined')){
} else {
re_frisk.subs_graph.network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.reaction__GT_operation !== 'undefined')){
} else {
re_frisk.subs_graph.reaction__GT_operation = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.view__GT_reactions !== 'undefined')){
} else {
re_frisk.subs_graph.view__GT_reactions = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.vis !== 'undefined')){
} else {
re_frisk.subs_graph.vis = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.doc !== 'undefined')){
} else {
re_frisk.subs_graph.doc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.nodes !== 'undefined')){
} else {
re_frisk.subs_graph.nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.edges !== 'undefined')){
} else {
re_frisk.subs_graph.edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.options !== 'undefined')){
} else {
re_frisk.subs_graph.options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"solver","solver",-744421825),"forceAtlas2Based",new cljs.core.Keyword(null,"maxVelocity","maxVelocity",1721643083),(30),new cljs.core.Keyword(null,"minVelocity","minVelocity",-32716928),(10),new cljs.core.Keyword(null,"stabilization","stabilization",-1209068026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(30)], null)], null)], null));
}
re_frisk.subs_graph.init = (function re_frisk$subs_graph$init(win,document){
cljs.core.reset_BANG_(re_frisk.subs_graph.vis,win.vis);

return cljs.core.reset_BANG_(re_frisk.subs_graph.doc,document);
});
re_frisk.subs_graph.set_root_node = (function re_frisk$subs_graph$set_root_node(reaction){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction))){
return null;
} else {
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"app-db",new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction,data);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction,"app-db");

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));
} else {
return null;
}
}
});
re_frisk.subs_graph.destroy = (function re_frisk$subs_graph$destroy(){
var temp__5753__auto__ = new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network));
if(cljs.core.truth_(temp__5753__auto__)){
var network_js = temp__5753__auto__;
network_js.destroy();

return cljs.core.reset_BANG_(re_frisk.subs_graph.network,null);
} else {
return null;
}
});
re_frisk.subs_graph.create = (function re_frisk$subs_graph$create(){
re_frisk.subs_graph.destroy();

if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__4251__auto__;
}
})())){
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.nodes)))));
var edges_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.edges)))));
var data = ({"nodes": nodes_ds, "edges": edges_ds});
var temp__5753__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("global-subs-graph-container");
if(cljs.core.truth_(temp__5753__auto__)){
var container = temp__5753__auto__;
return cljs.core.reset_BANG_(re_frisk.subs_graph.network,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"network","network",2050004697),(new Network(container,data,re_frisk.subs_graph.options))], null));
} else {
return null;
}
} else {
return null;
}
});
re_frisk.subs_graph.update_subs = (function re_frisk$subs_graph$update_subs(traces){
var temp__5753__auto___83804 = new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135).cljs$core$IFn$_invoke$arity$1(cljs.core.first(traces));
if(cljs.core.truth_(temp__5753__auto___83804)){
var app_db_reaction_83805 = temp__5753__auto___83804;
re_frisk.subs_graph.set_root_node(app_db_reaction_83805);
} else {
}

var seq__82591_83806 = cljs.core.seq(traces);
var chunk__82592_83807 = null;
var count__82593_83808 = (0);
var i__82594_83809 = (0);
while(true){
if((i__82594_83809 < count__82593_83808)){
var map__82647_83810 = chunk__82592_83807.cljs$core$IIndexed$_nth$arity$2(null,i__82594_83809);
var map__82647_83811__$1 = cljs.core.__destructure_map(map__82647_83810);
var subs_83812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82647_83811__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__82648_83813 = cljs.core.seq(subs_83812);
var chunk__82649_83814 = null;
var count__82650_83815 = (0);
var i__82651_83816 = (0);
while(true){
if((i__82651_83816 < count__82650_83815)){
var map__82654_83817 = chunk__82649_83814.cljs$core$IIndexed$_nth$arity$2(null,i__82651_83816);
var map__82654_83818__$1 = cljs.core.__destructure_map(map__82654_83817);
var operation_83819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82654_83818__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_83820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82654_83818__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_83820)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_83820,operation_83819);
} else {
}


var G__83822 = seq__82648_83813;
var G__83823 = chunk__82649_83814;
var G__83824 = count__82650_83815;
var G__83825 = (i__82651_83816 + (1));
seq__82648_83813 = G__83822;
chunk__82649_83814 = G__83823;
count__82650_83815 = G__83824;
i__82651_83816 = G__83825;
continue;
} else {
var temp__5753__auto___83827 = cljs.core.seq(seq__82648_83813);
if(temp__5753__auto___83827){
var seq__82648_83828__$1 = temp__5753__auto___83827;
if(cljs.core.chunked_seq_QMARK_(seq__82648_83828__$1)){
var c__4679__auto___83829 = cljs.core.chunk_first(seq__82648_83828__$1);
var G__83830 = cljs.core.chunk_rest(seq__82648_83828__$1);
var G__83831 = c__4679__auto___83829;
var G__83832 = cljs.core.count(c__4679__auto___83829);
var G__83833 = (0);
seq__82648_83813 = G__83830;
chunk__82649_83814 = G__83831;
count__82650_83815 = G__83832;
i__82651_83816 = G__83833;
continue;
} else {
var map__82659_83834 = cljs.core.first(seq__82648_83828__$1);
var map__82659_83835__$1 = cljs.core.__destructure_map(map__82659_83834);
var operation_83836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82659_83835__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_83837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82659_83835__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_83837)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_83837,operation_83836);
} else {
}


var G__83840 = cljs.core.next(seq__82648_83828__$1);
var G__83841 = null;
var G__83842 = (0);
var G__83843 = (0);
seq__82648_83813 = G__83840;
chunk__82649_83814 = G__83841;
count__82650_83815 = G__83842;
i__82651_83816 = G__83843;
continue;
}
} else {
}
}
break;
}


var G__83844 = seq__82591_83806;
var G__83845 = chunk__82592_83807;
var G__83846 = count__82593_83808;
var G__83847 = (i__82594_83809 + (1));
seq__82591_83806 = G__83844;
chunk__82592_83807 = G__83845;
count__82593_83808 = G__83846;
i__82594_83809 = G__83847;
continue;
} else {
var temp__5753__auto___83849 = cljs.core.seq(seq__82591_83806);
if(temp__5753__auto___83849){
var seq__82591_83850__$1 = temp__5753__auto___83849;
if(cljs.core.chunked_seq_QMARK_(seq__82591_83850__$1)){
var c__4679__auto___83851 = cljs.core.chunk_first(seq__82591_83850__$1);
var G__83852 = cljs.core.chunk_rest(seq__82591_83850__$1);
var G__83853 = c__4679__auto___83851;
var G__83854 = cljs.core.count(c__4679__auto___83851);
var G__83855 = (0);
seq__82591_83806 = G__83852;
chunk__82592_83807 = G__83853;
count__82593_83808 = G__83854;
i__82594_83809 = G__83855;
continue;
} else {
var map__82664_83856 = cljs.core.first(seq__82591_83850__$1);
var map__82664_83857__$1 = cljs.core.__destructure_map(map__82664_83856);
var subs_83858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82664_83857__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__82667_83859 = cljs.core.seq(subs_83858);
var chunk__82668_83860 = null;
var count__82669_83861 = (0);
var i__82670_83862 = (0);
while(true){
if((i__82670_83862 < count__82669_83861)){
var map__82681_83863 = chunk__82668_83860.cljs$core$IIndexed$_nth$arity$2(null,i__82670_83862);
var map__82681_83864__$1 = cljs.core.__destructure_map(map__82681_83863);
var operation_83865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82681_83864__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_83866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82681_83864__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_83866)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_83866,operation_83865);
} else {
}


var G__83868 = seq__82667_83859;
var G__83869 = chunk__82668_83860;
var G__83870 = count__82669_83861;
var G__83871 = (i__82670_83862 + (1));
seq__82667_83859 = G__83868;
chunk__82668_83860 = G__83869;
count__82669_83861 = G__83870;
i__82670_83862 = G__83871;
continue;
} else {
var temp__5753__auto___83873__$1 = cljs.core.seq(seq__82667_83859);
if(temp__5753__auto___83873__$1){
var seq__82667_83874__$1 = temp__5753__auto___83873__$1;
if(cljs.core.chunked_seq_QMARK_(seq__82667_83874__$1)){
var c__4679__auto___83875 = cljs.core.chunk_first(seq__82667_83874__$1);
var G__83876 = cljs.core.chunk_rest(seq__82667_83874__$1);
var G__83877 = c__4679__auto___83875;
var G__83878 = cljs.core.count(c__4679__auto___83875);
var G__83879 = (0);
seq__82667_83859 = G__83876;
chunk__82668_83860 = G__83877;
count__82669_83861 = G__83878;
i__82670_83862 = G__83879;
continue;
} else {
var map__82688_83880 = cljs.core.first(seq__82667_83874__$1);
var map__82688_83881__$1 = cljs.core.__destructure_map(map__82688_83880);
var operation_83882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82688_83881__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_83883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82688_83881__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_83883)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_83883,operation_83882);
} else {
}


var G__83884 = cljs.core.next(seq__82667_83874__$1);
var G__83885 = null;
var G__83886 = (0);
var G__83887 = (0);
seq__82667_83859 = G__83884;
chunk__82668_83860 = G__83885;
count__82669_83861 = G__83886;
i__82670_83862 = G__83887;
continue;
}
} else {
}
}
break;
}


var G__83888 = cljs.core.next(seq__82591_83850__$1);
var G__83889 = null;
var G__83890 = (0);
var G__83891 = (0);
seq__82591_83806 = G__83888;
chunk__82592_83807 = G__83889;
count__82593_83808 = G__83890;
i__82594_83809 = G__83891;
continue;
}
} else {
}
}
break;
}

var new_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__82691_83892 = cljs.core.seq(traces);
var chunk__82692_83893 = null;
var count__82693_83894 = (0);
var i__82694_83895 = (0);
while(true){
if((i__82694_83895 < count__82693_83894)){
var map__83072_83896 = chunk__82692_83893.cljs$core$IIndexed$_nth$arity$2(null,i__82694_83895);
var map__83072_83897__$1 = cljs.core.__destructure_map(map__83072_83896);
var subs_83898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83072_83897__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__83073_83901 = cljs.core.seq(subs_83898);
var chunk__83074_83902 = null;
var count__83075_83903 = (0);
var i__83076_83904 = (0);
while(true){
if((i__83076_83904 < count__83075_83903)){
var map__83175_83905 = chunk__83074_83902.cljs$core$IIndexed$_nth$arity$2(null,i__83076_83904);
var map__83175_83906__$1 = cljs.core.__destructure_map(map__83175_83905);
var op_type_83907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83175_83906__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_83908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83175_83906__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_83909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83175_83906__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_83910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83175_83906__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_83907,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_83907,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__4251__auto__){
return input_signals_83908;
} else {
return and__4251__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_83909,input_signals_83908);
} else {
}

var operation_83911__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_83909);
if(cljs.core.truth_(reaction_83910)){
var temp__5751__auto___83912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_83911__$1);
if(cljs.core.truth_(temp__5751__auto___83912)){
var old_reaction_83913 = temp__5751__auto___83912;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_83907,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_83913))){
var updated_node_83914 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_83913,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_83907,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_83907)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_83911__$1,updated_node_83914);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_83911__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_83911__$1,updated_node_83914);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_83914], null)));
}
} else {
}
} else {
}
} else {
var data_83917 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_83911__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_83911__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_83907)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_83907], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_83911__$1,data_83917);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_83911__$1,data_83917);
}
} else {
}

if(cljs.core.truth_(input_signals_83908)){
var seq__83180_83921 = cljs.core.seq(input_signals_83908);
var chunk__83181_83922 = null;
var count__83182_83923 = (0);
var i__83183_83924 = (0);
while(true){
if((i__83183_83924 < count__83182_83923)){
var input_reaction_83926 = chunk__83181_83922.cljs$core$IIndexed$_nth$arity$2(null,i__83183_83924);
var input_operation_83927 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_83926));
var reaction_path_83928 = [input_operation_83927,"-",operation_83911__$1].join('');
var temp__5751__auto___83930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_83928);
if(cljs.core.truth_(temp__5751__auto___83930)){
var old_edge_83932 = temp__5751__auto___83930;
var updated_edge_83933 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_83932,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_83928,updated_edge_83933);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_83933], null)));
} else {
}
} else {
var data_83936 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_83928,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_83927,new cljs.core.Keyword(null,"to","to",192099007),operation_83911__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_83928,data_83936);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_83936));
} else {
}
}


var G__83937 = seq__83180_83921;
var G__83938 = chunk__83181_83922;
var G__83939 = count__83182_83923;
var G__83940 = (i__83183_83924 + (1));
seq__83180_83921 = G__83937;
chunk__83181_83922 = G__83938;
count__83182_83923 = G__83939;
i__83183_83924 = G__83940;
continue;
} else {
var temp__5753__auto___83941 = cljs.core.seq(seq__83180_83921);
if(temp__5753__auto___83941){
var seq__83180_83942__$1 = temp__5753__auto___83941;
if(cljs.core.chunked_seq_QMARK_(seq__83180_83942__$1)){
var c__4679__auto___83943 = cljs.core.chunk_first(seq__83180_83942__$1);
var G__83944 = cljs.core.chunk_rest(seq__83180_83942__$1);
var G__83945 = c__4679__auto___83943;
var G__83946 = cljs.core.count(c__4679__auto___83943);
var G__83947 = (0);
seq__83180_83921 = G__83944;
chunk__83181_83922 = G__83945;
count__83182_83923 = G__83946;
i__83183_83924 = G__83947;
continue;
} else {
var input_reaction_83948 = cljs.core.first(seq__83180_83942__$1);
var input_operation_83950 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_83948));
var reaction_path_83951 = [input_operation_83950,"-",operation_83911__$1].join('');
var temp__5751__auto___83953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_83951);
if(cljs.core.truth_(temp__5751__auto___83953)){
var old_edge_83954 = temp__5751__auto___83953;
var updated_edge_83955 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_83954,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_83951,updated_edge_83955);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_83955], null)));
} else {
}
} else {
var data_83957 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_83951,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_83950,new cljs.core.Keyword(null,"to","to",192099007),operation_83911__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_83951,data_83957);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_83957));
} else {
}
}


var G__83968 = cljs.core.next(seq__83180_83942__$1);
var G__83969 = null;
var G__83970 = (0);
var G__83971 = (0);
seq__83180_83921 = G__83968;
chunk__83181_83922 = G__83969;
count__83182_83923 = G__83970;
i__83183_83924 = G__83971;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}


var G__83972 = seq__83073_83901;
var G__83973 = chunk__83074_83902;
var G__83974 = count__83075_83903;
var G__83975 = (i__83076_83904 + (1));
seq__83073_83901 = G__83972;
chunk__83074_83902 = G__83973;
count__83075_83903 = G__83974;
i__83076_83904 = G__83975;
continue;
} else {
var temp__5753__auto___83976 = cljs.core.seq(seq__83073_83901);
if(temp__5753__auto___83976){
var seq__83073_83977__$1 = temp__5753__auto___83976;
if(cljs.core.chunked_seq_QMARK_(seq__83073_83977__$1)){
var c__4679__auto___83978 = cljs.core.chunk_first(seq__83073_83977__$1);
var G__83979 = cljs.core.chunk_rest(seq__83073_83977__$1);
var G__83980 = c__4679__auto___83978;
var G__83981 = cljs.core.count(c__4679__auto___83978);
var G__83982 = (0);
seq__83073_83901 = G__83979;
chunk__83074_83902 = G__83980;
count__83075_83903 = G__83981;
i__83076_83904 = G__83982;
continue;
} else {
var map__83215_83983 = cljs.core.first(seq__83073_83977__$1);
var map__83215_83984__$1 = cljs.core.__destructure_map(map__83215_83983);
var op_type_83985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83215_83984__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_83986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83215_83984__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_83987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83215_83984__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_83988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83215_83984__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_83985,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_83985,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__4251__auto__){
return input_signals_83986;
} else {
return and__4251__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_83987,input_signals_83986);
} else {
}

var operation_83990__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_83987);
if(cljs.core.truth_(reaction_83988)){
var temp__5751__auto___83991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_83990__$1);
if(cljs.core.truth_(temp__5751__auto___83991)){
var old_reaction_83992 = temp__5751__auto___83991;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_83985,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_83992))){
var updated_node_83994 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_83992,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_83985,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_83985)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_83990__$1,updated_node_83994);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_83990__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_83990__$1,updated_node_83994);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_83994], null)));
}
} else {
}
} else {
}
} else {
var data_83997 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_83990__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_83990__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_83985)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_83985], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_83990__$1,data_83997);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_83990__$1,data_83997);
}
} else {
}

if(cljs.core.truth_(input_signals_83986)){
var seq__83222_83999 = cljs.core.seq(input_signals_83986);
var chunk__83223_84000 = null;
var count__83224_84001 = (0);
var i__83225_84002 = (0);
while(true){
if((i__83225_84002 < count__83224_84001)){
var input_reaction_84003 = chunk__83223_84000.cljs$core$IIndexed$_nth$arity$2(null,i__83225_84002);
var input_operation_84004 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_84003));
var reaction_path_84005 = [input_operation_84004,"-",operation_83990__$1].join('');
var temp__5751__auto___84006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_84005);
if(cljs.core.truth_(temp__5751__auto___84006)){
var old_edge_84008 = temp__5751__auto___84006;
var updated_edge_84009 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_84008,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_84005,updated_edge_84009);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_84009], null)));
} else {
}
} else {
var data_84011 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_84005,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_84004,new cljs.core.Keyword(null,"to","to",192099007),operation_83990__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_84005,data_84011);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_84011));
} else {
}
}


var G__84012 = seq__83222_83999;
var G__84013 = chunk__83223_84000;
var G__84014 = count__83224_84001;
var G__84015 = (i__83225_84002 + (1));
seq__83222_83999 = G__84012;
chunk__83223_84000 = G__84013;
count__83224_84001 = G__84014;
i__83225_84002 = G__84015;
continue;
} else {
var temp__5753__auto___84016__$1 = cljs.core.seq(seq__83222_83999);
if(temp__5753__auto___84016__$1){
var seq__83222_84017__$1 = temp__5753__auto___84016__$1;
if(cljs.core.chunked_seq_QMARK_(seq__83222_84017__$1)){
var c__4679__auto___84018 = cljs.core.chunk_first(seq__83222_84017__$1);
var G__84019 = cljs.core.chunk_rest(seq__83222_84017__$1);
var G__84020 = c__4679__auto___84018;
var G__84021 = cljs.core.count(c__4679__auto___84018);
var G__84022 = (0);
seq__83222_83999 = G__84019;
chunk__83223_84000 = G__84020;
count__83224_84001 = G__84021;
i__83225_84002 = G__84022;
continue;
} else {
var input_reaction_84023 = cljs.core.first(seq__83222_84017__$1);
var input_operation_84026 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_84023));
var reaction_path_84027 = [input_operation_84026,"-",operation_83990__$1].join('');
var temp__5751__auto___84028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_84027);
if(cljs.core.truth_(temp__5751__auto___84028)){
var old_edge_84029 = temp__5751__auto___84028;
var updated_edge_84030 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_84029,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_84027,updated_edge_84030);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_84030], null)));
} else {
}
} else {
var data_84031 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_84027,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_84026,new cljs.core.Keyword(null,"to","to",192099007),operation_83990__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_84027,data_84031);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_84031));
} else {
}
}


var G__84032 = cljs.core.next(seq__83222_84017__$1);
var G__84033 = null;
var G__84034 = (0);
var G__84035 = (0);
seq__83222_83999 = G__84032;
chunk__83223_84000 = G__84033;
count__83224_84001 = G__84034;
i__83225_84002 = G__84035;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}


var G__84036 = cljs.core.next(seq__83073_83977__$1);
var G__84037 = null;
var G__84038 = (0);
var G__84039 = (0);
seq__83073_83901 = G__84036;
chunk__83074_83902 = G__84037;
count__83075_83903 = G__84038;
i__83076_83904 = G__84039;
continue;
}
} else {
}
}
break;
}


var G__84040 = seq__82691_83892;
var G__84041 = chunk__82692_83893;
var G__84042 = count__82693_83894;
var G__84043 = (i__82694_83895 + (1));
seq__82691_83892 = G__84040;
chunk__82692_83893 = G__84041;
count__82693_83894 = G__84042;
i__82694_83895 = G__84043;
continue;
} else {
var temp__5753__auto___84044 = cljs.core.seq(seq__82691_83892);
if(temp__5753__auto___84044){
var seq__82691_84046__$1 = temp__5753__auto___84044;
if(cljs.core.chunked_seq_QMARK_(seq__82691_84046__$1)){
var c__4679__auto___84047 = cljs.core.chunk_first(seq__82691_84046__$1);
var G__84048 = cljs.core.chunk_rest(seq__82691_84046__$1);
var G__84049 = c__4679__auto___84047;
var G__84050 = cljs.core.count(c__4679__auto___84047);
var G__84051 = (0);
seq__82691_83892 = G__84048;
chunk__82692_83893 = G__84049;
count__82693_83894 = G__84050;
i__82694_83895 = G__84051;
continue;
} else {
var map__83251_84053 = cljs.core.first(seq__82691_84046__$1);
var map__83251_84054__$1 = cljs.core.__destructure_map(map__83251_84053);
var subs_84055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83251_84054__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__83252_84057 = cljs.core.seq(subs_84055);
var chunk__83253_84058 = null;
var count__83254_84059 = (0);
var i__83255_84060 = (0);
while(true){
if((i__83255_84060 < count__83254_84059)){
var map__83447_84061 = chunk__83253_84058.cljs$core$IIndexed$_nth$arity$2(null,i__83255_84060);
var map__83447_84062__$1 = cljs.core.__destructure_map(map__83447_84061);
var op_type_84063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83447_84062__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_84064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83447_84062__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_84066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83447_84062__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_84067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83447_84062__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_84063,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_84063,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__4251__auto__){
return input_signals_84064;
} else {
return and__4251__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_84066,input_signals_84064);
} else {
}

var operation_84071__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_84066);
if(cljs.core.truth_(reaction_84067)){
var temp__5751__auto___84073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_84071__$1);
if(cljs.core.truth_(temp__5751__auto___84073)){
var old_reaction_84074 = temp__5751__auto___84073;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_84063,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_84074))){
var updated_node_84075 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_84074,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_84063,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_84063)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_84071__$1,updated_node_84075);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_84071__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_84071__$1,updated_node_84075);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_84075], null)));
}
} else {
}
} else {
}
} else {
var data_84076 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_84071__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_84071__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_84063)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_84063], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_84071__$1,data_84076);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_84071__$1,data_84076);
}
} else {
}

if(cljs.core.truth_(input_signals_84064)){
var seq__83484_84082 = cljs.core.seq(input_signals_84064);
var chunk__83485_84084 = null;
var count__83486_84086 = (0);
var i__83487_84087 = (0);
while(true){
if((i__83487_84087 < count__83486_84086)){
var input_reaction_84091 = chunk__83485_84084.cljs$core$IIndexed$_nth$arity$2(null,i__83487_84087);
var input_operation_84092 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_84091));
var reaction_path_84093 = [input_operation_84092,"-",operation_84071__$1].join('');
var temp__5751__auto___84094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_84093);
if(cljs.core.truth_(temp__5751__auto___84094)){
var old_edge_84095 = temp__5751__auto___84094;
var updated_edge_84096 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_84095,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_84093,updated_edge_84096);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_84096], null)));
} else {
}
} else {
var data_84097 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_84093,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_84092,new cljs.core.Keyword(null,"to","to",192099007),operation_84071__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_84093,data_84097);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_84097));
} else {
}
}


var G__84099 = seq__83484_84082;
var G__84100 = chunk__83485_84084;
var G__84101 = count__83486_84086;
var G__84102 = (i__83487_84087 + (1));
seq__83484_84082 = G__84099;
chunk__83485_84084 = G__84100;
count__83486_84086 = G__84101;
i__83487_84087 = G__84102;
continue;
} else {
var temp__5753__auto___84103__$1 = cljs.core.seq(seq__83484_84082);
if(temp__5753__auto___84103__$1){
var seq__83484_84105__$1 = temp__5753__auto___84103__$1;
if(cljs.core.chunked_seq_QMARK_(seq__83484_84105__$1)){
var c__4679__auto___84106 = cljs.core.chunk_first(seq__83484_84105__$1);
var G__84107 = cljs.core.chunk_rest(seq__83484_84105__$1);
var G__84108 = c__4679__auto___84106;
var G__84109 = cljs.core.count(c__4679__auto___84106);
var G__84110 = (0);
seq__83484_84082 = G__84107;
chunk__83485_84084 = G__84108;
count__83486_84086 = G__84109;
i__83487_84087 = G__84110;
continue;
} else {
var input_reaction_84111 = cljs.core.first(seq__83484_84105__$1);
var input_operation_84112 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_84111));
var reaction_path_84113 = [input_operation_84112,"-",operation_84071__$1].join('');
var temp__5751__auto___84115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_84113);
if(cljs.core.truth_(temp__5751__auto___84115)){
var old_edge_84116 = temp__5751__auto___84115;
var updated_edge_84118 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_84116,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_84113,updated_edge_84118);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_84118], null)));
} else {
}
} else {
var data_84120 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_84113,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_84112,new cljs.core.Keyword(null,"to","to",192099007),operation_84071__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_84113,data_84120);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_84120));
} else {
}
}


var G__84121 = cljs.core.next(seq__83484_84105__$1);
var G__84122 = null;
var G__84123 = (0);
var G__84124 = (0);
seq__83484_84082 = G__84121;
chunk__83485_84084 = G__84122;
count__83486_84086 = G__84123;
i__83487_84087 = G__84124;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}


var G__84125 = seq__83252_84057;
var G__84126 = chunk__83253_84058;
var G__84127 = count__83254_84059;
var G__84128 = (i__83255_84060 + (1));
seq__83252_84057 = G__84125;
chunk__83253_84058 = G__84126;
count__83254_84059 = G__84127;
i__83255_84060 = G__84128;
continue;
} else {
var temp__5753__auto___84129__$1 = cljs.core.seq(seq__83252_84057);
if(temp__5753__auto___84129__$1){
var seq__83252_84131__$1 = temp__5753__auto___84129__$1;
if(cljs.core.chunked_seq_QMARK_(seq__83252_84131__$1)){
var c__4679__auto___84132 = cljs.core.chunk_first(seq__83252_84131__$1);
var G__84133 = cljs.core.chunk_rest(seq__83252_84131__$1);
var G__84134 = c__4679__auto___84132;
var G__84135 = cljs.core.count(c__4679__auto___84132);
var G__84136 = (0);
seq__83252_84057 = G__84133;
chunk__83253_84058 = G__84134;
count__83254_84059 = G__84135;
i__83255_84060 = G__84136;
continue;
} else {
var map__83544_84138 = cljs.core.first(seq__83252_84131__$1);
var map__83544_84139__$1 = cljs.core.__destructure_map(map__83544_84138);
var op_type_84140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83544_84139__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_84141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83544_84139__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_84142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83544_84139__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_84143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83544_84139__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_84140,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_84140,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__4251__auto__){
return input_signals_84141;
} else {
return and__4251__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_84142,input_signals_84141);
} else {
}

var operation_84144__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_84142);
if(cljs.core.truth_(reaction_84143)){
var temp__5751__auto___84145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_84144__$1);
if(cljs.core.truth_(temp__5751__auto___84145)){
var old_reaction_84146 = temp__5751__auto___84145;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_84140,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_84146))){
var updated_node_84147 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_84146,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_84140,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_84140)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_84144__$1,updated_node_84147);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_84144__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_84144__$1,updated_node_84147);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_84147], null)));
}
} else {
}
} else {
}
} else {
var data_84150 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_84144__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_84144__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_84140)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_84140], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_84144__$1,data_84150);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_84144__$1,data_84150);
}
} else {
}

if(cljs.core.truth_(input_signals_84141)){
var seq__83558_84151 = cljs.core.seq(input_signals_84141);
var chunk__83559_84152 = null;
var count__83560_84153 = (0);
var i__83561_84154 = (0);
while(true){
if((i__83561_84154 < count__83560_84153)){
var input_reaction_84155 = chunk__83559_84152.cljs$core$IIndexed$_nth$arity$2(null,i__83561_84154);
var input_operation_84156 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_84155));
var reaction_path_84157 = [input_operation_84156,"-",operation_84144__$1].join('');
var temp__5751__auto___84159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_84157);
if(cljs.core.truth_(temp__5751__auto___84159)){
var old_edge_84160 = temp__5751__auto___84159;
var updated_edge_84162 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_84160,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_84157,updated_edge_84162);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_84162], null)));
} else {
}
} else {
var data_84164 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_84157,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_84156,new cljs.core.Keyword(null,"to","to",192099007),operation_84144__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_84157,data_84164);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_84164));
} else {
}
}


var G__84169 = seq__83558_84151;
var G__84170 = chunk__83559_84152;
var G__84171 = count__83560_84153;
var G__84172 = (i__83561_84154 + (1));
seq__83558_84151 = G__84169;
chunk__83559_84152 = G__84170;
count__83560_84153 = G__84171;
i__83561_84154 = G__84172;
continue;
} else {
var temp__5753__auto___84173__$2 = cljs.core.seq(seq__83558_84151);
if(temp__5753__auto___84173__$2){
var seq__83558_84175__$1 = temp__5753__auto___84173__$2;
if(cljs.core.chunked_seq_QMARK_(seq__83558_84175__$1)){
var c__4679__auto___84176 = cljs.core.chunk_first(seq__83558_84175__$1);
var G__84177 = cljs.core.chunk_rest(seq__83558_84175__$1);
var G__84178 = c__4679__auto___84176;
var G__84179 = cljs.core.count(c__4679__auto___84176);
var G__84180 = (0);
seq__83558_84151 = G__84177;
chunk__83559_84152 = G__84178;
count__83560_84153 = G__84179;
i__83561_84154 = G__84180;
continue;
} else {
var input_reaction_84181 = cljs.core.first(seq__83558_84175__$1);
var input_operation_84182 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_84181));
var reaction_path_84183 = [input_operation_84182,"-",operation_84144__$1].join('');
var temp__5751__auto___84184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_84183);
if(cljs.core.truth_(temp__5751__auto___84184)){
var old_edge_84185 = temp__5751__auto___84184;
var updated_edge_84186 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_84185,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_84183,updated_edge_84186);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_84186], null)));
} else {
}
} else {
var data_84187 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_84183,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_84182,new cljs.core.Keyword(null,"to","to",192099007),operation_84144__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_84183,data_84187);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_84187));
} else {
}
}


var G__84193 = cljs.core.next(seq__83558_84175__$1);
var G__84194 = null;
var G__84195 = (0);
var G__84196 = (0);
seq__83558_84151 = G__84193;
chunk__83559_84152 = G__84194;
count__83560_84153 = G__84195;
i__83561_84154 = G__84196;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}


var G__84197 = cljs.core.next(seq__83252_84131__$1);
var G__84198 = null;
var G__84199 = (0);
var G__84200 = (0);
seq__83252_84057 = G__84197;
chunk__83253_84058 = G__84198;
count__83254_84059 = G__84199;
i__83255_84060 = G__84200;
continue;
}
} else {
}
}
break;
}


var G__84206 = cljs.core.next(seq__82691_84046__$1);
var G__84207 = null;
var G__84208 = (0);
var G__84209 = (0);
seq__82691_83892 = G__84206;
chunk__82692_83893 = G__84207;
count__82693_83894 = G__84208;
i__82694_83895 = G__84209;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if((cljs.core.count(cljs.core.deref(new_nodes)) > (20))){
return re_frisk.subs_graph.create();
} else {
var seq__83651 = cljs.core.seq(cljs.core.vals(cljs.core.deref(new_nodes)));
var chunk__83652 = null;
var count__83653 = (0);
var i__83654 = (0);
while(true){
if((i__83654 < count__83653)){
var data = chunk__83652.cljs$core$IIndexed$_nth$arity$2(null,i__83654);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__84210 = seq__83651;
var G__84211 = chunk__83652;
var G__84212 = count__83653;
var G__84213 = (i__83654 + (1));
seq__83651 = G__84210;
chunk__83652 = G__84211;
count__83653 = G__84212;
i__83654 = G__84213;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__83651);
if(temp__5753__auto__){
var seq__83651__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__83651__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__83651__$1);
var G__84214 = cljs.core.chunk_rest(seq__83651__$1);
var G__84215 = c__4679__auto__;
var G__84216 = cljs.core.count(c__4679__auto__);
var G__84217 = (0);
seq__83651 = G__84214;
chunk__83652 = G__84215;
count__83653 = G__84216;
i__83654 = G__84217;
continue;
} else {
var data = cljs.core.first(seq__83651__$1);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__84218 = cljs.core.next(seq__83651__$1);
var G__84219 = null;
var G__84220 = (0);
var G__84221 = (0);
seq__83651 = G__84218;
chunk__83652 = G__84219;
count__83653 = G__84220;
i__83654 = G__84221;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.event_network !== 'undefined')){
} else {
re_frisk.subs_graph.event_network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frisk.subs_graph.create_event_subs = (function re_frisk$subs_graph$create_event_subs(p__83663){
var map__83664 = p__83663;
var map__83664__$1 = cljs.core.__destructure_map(map__83664);
var app_db_reaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83664__$1,new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83664__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.event_network))){
cljs.core.deref(re_frisk.subs_graph.event_network).destroy();

cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,null);
} else {
}

if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__4251__auto__;
}
})())){
var temp__5753__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("event-subs-graph-container");
if(cljs.core.truth_(temp__5753__auto__)){
var container = temp__5753__auto__;
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([app_db_reaction,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),app_db_reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null)]));
var edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__83668_84227 = cljs.core.seq(subs);
var chunk__83669_84228 = null;
var count__83670_84229 = (0);
var i__83671_84230 = (0);
while(true){
if((i__83671_84230 < count__83670_84229)){
var map__83717_84231 = chunk__83669_84228.cljs$core$IIndexed$_nth$arity$2(null,i__83671_84230);
var map__83717_84232__$1 = cljs.core.__destructure_map(map__83717_84231);
var op_type_84233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83717_84232__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_84234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83717_84232__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_84235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83717_84232__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_84236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83717_84232__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5751__auto___84238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_84234);
if(cljs.core.truth_(temp__5751__auto___84238)){
var old_reaction_84239 = temp__5751__auto___84238;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_84233,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_84239))){
var updated_node_84241 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_84239,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_84233,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_84233)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_84234,updated_node_84241);
} else {
}
} else {
var data_84242 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_84234,new cljs.core.Keyword(null,"label","label",1718410804),operation_84236,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_84233)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_84233], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_84234,data_84242);
}

if(cljs.core.truth_(input_signals_84235)){
var seq__83731_84243 = cljs.core.seq(input_signals_84235);
var chunk__83732_84244 = null;
var count__83733_84245 = (0);
var i__83734_84246 = (0);
while(true){
if((i__83734_84246 < count__83733_84245)){
var input_reaction_84247 = chunk__83732_84244.cljs$core$IIndexed$_nth$arity$2(null,i__83734_84246);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_84247),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_84234)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_84247),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_84234)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_84247,new cljs.core.Keyword(null,"to","to",192099007),reaction_84234], null));
}


var G__84250 = seq__83731_84243;
var G__84251 = chunk__83732_84244;
var G__84252 = count__83733_84245;
var G__84253 = (i__83734_84246 + (1));
seq__83731_84243 = G__84250;
chunk__83732_84244 = G__84251;
count__83733_84245 = G__84252;
i__83734_84246 = G__84253;
continue;
} else {
var temp__5753__auto___84254__$1 = cljs.core.seq(seq__83731_84243);
if(temp__5753__auto___84254__$1){
var seq__83731_84255__$1 = temp__5753__auto___84254__$1;
if(cljs.core.chunked_seq_QMARK_(seq__83731_84255__$1)){
var c__4679__auto___84256 = cljs.core.chunk_first(seq__83731_84255__$1);
var G__84257 = cljs.core.chunk_rest(seq__83731_84255__$1);
var G__84258 = c__4679__auto___84256;
var G__84259 = cljs.core.count(c__4679__auto___84256);
var G__84260 = (0);
seq__83731_84243 = G__84257;
chunk__83732_84244 = G__84258;
count__83733_84245 = G__84259;
i__83734_84246 = G__84260;
continue;
} else {
var input_reaction_84261 = cljs.core.first(seq__83731_84255__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_84261),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_84234)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_84261),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_84234)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_84261,new cljs.core.Keyword(null,"to","to",192099007),reaction_84234], null));
}


var G__84262 = cljs.core.next(seq__83731_84255__$1);
var G__84263 = null;
var G__84264 = (0);
var G__84265 = (0);
seq__83731_84243 = G__84262;
chunk__83732_84244 = G__84263;
count__83733_84245 = G__84264;
i__83734_84246 = G__84265;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__84267 = seq__83668_84227;
var G__84268 = chunk__83669_84228;
var G__84269 = count__83670_84229;
var G__84270 = (i__83671_84230 + (1));
seq__83668_84227 = G__84267;
chunk__83669_84228 = G__84268;
count__83670_84229 = G__84269;
i__83671_84230 = G__84270;
continue;
} else {
var temp__5753__auto___84271__$1 = cljs.core.seq(seq__83668_84227);
if(temp__5753__auto___84271__$1){
var seq__83668_84273__$1 = temp__5753__auto___84271__$1;
if(cljs.core.chunked_seq_QMARK_(seq__83668_84273__$1)){
var c__4679__auto___84274 = cljs.core.chunk_first(seq__83668_84273__$1);
var G__84276 = cljs.core.chunk_rest(seq__83668_84273__$1);
var G__84277 = c__4679__auto___84274;
var G__84278 = cljs.core.count(c__4679__auto___84274);
var G__84279 = (0);
seq__83668_84227 = G__84276;
chunk__83669_84228 = G__84277;
count__83670_84229 = G__84278;
i__83671_84230 = G__84279;
continue;
} else {
var map__83754_84280 = cljs.core.first(seq__83668_84273__$1);
var map__83754_84281__$1 = cljs.core.__destructure_map(map__83754_84280);
var op_type_84282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83754_84281__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_84283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83754_84281__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_84284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83754_84281__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_84285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83754_84281__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5751__auto___84288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_84283);
if(cljs.core.truth_(temp__5751__auto___84288)){
var old_reaction_84290 = temp__5751__auto___84288;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_84282,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_84290))){
var updated_node_84291 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_84290,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_84282,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_84282)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_84283,updated_node_84291);
} else {
}
} else {
var data_84292 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_84283,new cljs.core.Keyword(null,"label","label",1718410804),operation_84285,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_84282)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_84282], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_84283,data_84292);
}

if(cljs.core.truth_(input_signals_84284)){
var seq__83760_84294 = cljs.core.seq(input_signals_84284);
var chunk__83761_84295 = null;
var count__83762_84296 = (0);
var i__83763_84297 = (0);
while(true){
if((i__83763_84297 < count__83762_84296)){
var input_reaction_84298 = chunk__83761_84295.cljs$core$IIndexed$_nth$arity$2(null,i__83763_84297);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_84298),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_84283)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_84298),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_84283)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_84298,new cljs.core.Keyword(null,"to","to",192099007),reaction_84283], null));
}


var G__84307 = seq__83760_84294;
var G__84308 = chunk__83761_84295;
var G__84309 = count__83762_84296;
var G__84310 = (i__83763_84297 + (1));
seq__83760_84294 = G__84307;
chunk__83761_84295 = G__84308;
count__83762_84296 = G__84309;
i__83763_84297 = G__84310;
continue;
} else {
var temp__5753__auto___84311__$2 = cljs.core.seq(seq__83760_84294);
if(temp__5753__auto___84311__$2){
var seq__83760_84312__$1 = temp__5753__auto___84311__$2;
if(cljs.core.chunked_seq_QMARK_(seq__83760_84312__$1)){
var c__4679__auto___84313 = cljs.core.chunk_first(seq__83760_84312__$1);
var G__84314 = cljs.core.chunk_rest(seq__83760_84312__$1);
var G__84315 = c__4679__auto___84313;
var G__84316 = cljs.core.count(c__4679__auto___84313);
var G__84317 = (0);
seq__83760_84294 = G__84314;
chunk__83761_84295 = G__84315;
count__83762_84296 = G__84316;
i__83763_84297 = G__84317;
continue;
} else {
var input_reaction_84318 = cljs.core.first(seq__83760_84312__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_84318),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_84283)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_84318),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_84283)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_84318,new cljs.core.Keyword(null,"to","to",192099007),reaction_84283], null));
}


var G__84319 = cljs.core.next(seq__83760_84312__$1);
var G__84320 = null;
var G__84321 = (0);
var G__84322 = (0);
seq__83760_84294 = G__84319;
chunk__83761_84295 = G__84320;
count__83762_84296 = G__84321;
i__83763_84297 = G__84322;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__84323 = cljs.core.next(seq__83668_84273__$1);
var G__84324 = null;
var G__84325 = (0);
var G__84326 = (0);
seq__83668_84227 = G__84323;
chunk__83669_84228 = G__84324;
count__83670_84229 = G__84325;
i__83671_84230 = G__84326;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,(new Network(container,({"nodes": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(nodes))))), "edges": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(edges)))))}),re_frisk.subs_graph.options)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=re_frisk.subs_graph.js.map
