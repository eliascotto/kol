goog.provide('re_frisk.stat');
re_frisk.stat.assoc_map = (function re_frisk$stat$assoc_map(acc,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cnt","cnt",283978798),(0),new cljs.core.Keyword(null,"ms","ms",-1152709733),(0)], null));
});
re_frisk.stat.get_re_frame_handlers = (function re_frisk$stat$get_re_frame_handlers(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fx","fx",-1237829572).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),new cljs.core.Keyword(null,"db","db",993250759)], 0)))),new cljs.core.Keyword(null,"cofx","cofx",2013202907),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cofx","cofx",2013202907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"db","db",993250759)))),new cljs.core.Keyword(null,"event","event",301435442),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)))),new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler))))], null);
});
re_frisk.stat.init_stat = (function re_frisk$stat$init_stat(re_frame_data){
if(cljs.core.empty_QMARK_(cljs.core.deref(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data)))){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),re_frisk.stat.get_re_frame_handlers());
} else {
return null;
}
});
re_frisk.stat.update_trace_stat = (function re_frisk$stat$update_trace_stat(re_frame_data,traces){
var seq__70435 = cljs.core.seq(traces);
var chunk__70436 = null;
var count__70437 = (0);
var i__70438 = (0);
while(true){
if((i__70438 < count__70437)){
var map__70532 = chunk__70436.cljs$core$IIndexed$_nth$arity$2(null,i__70438);
var map__70532__$1 = cljs.core.__destructure_map(map__70532);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70532__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70532__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70532__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70532__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70532__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__70535_70591 = cljs.core.seq(cljs.core.keys(effects));
var chunk__70536_70592 = null;
var count__70537_70593 = (0);
var i__70538_70594 = (0);
while(true){
if((i__70538_70594 < count__70537_70593)){
var key_70595 = chunk__70536_70592.cljs$core$IIndexed$_nth$arity$2(null,i__70538_70594);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_70595,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__70597 = seq__70535_70591;
var G__70598 = chunk__70536_70592;
var G__70599 = count__70537_70593;
var G__70600 = (i__70538_70594 + (1));
seq__70535_70591 = G__70597;
chunk__70536_70592 = G__70598;
count__70537_70593 = G__70599;
i__70538_70594 = G__70600;
continue;
} else {
var temp__5753__auto___70601 = cljs.core.seq(seq__70535_70591);
if(temp__5753__auto___70601){
var seq__70535_70602__$1 = temp__5753__auto___70601;
if(cljs.core.chunked_seq_QMARK_(seq__70535_70602__$1)){
var c__4679__auto___70603 = cljs.core.chunk_first(seq__70535_70602__$1);
var G__70604 = cljs.core.chunk_rest(seq__70535_70602__$1);
var G__70605 = c__4679__auto___70603;
var G__70606 = cljs.core.count(c__4679__auto___70603);
var G__70607 = (0);
seq__70535_70591 = G__70604;
chunk__70536_70592 = G__70605;
count__70537_70593 = G__70606;
i__70538_70594 = G__70607;
continue;
} else {
var key_70608 = cljs.core.first(seq__70535_70602__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_70608,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__70609 = cljs.core.next(seq__70535_70602__$1);
var G__70610 = null;
var G__70611 = (0);
var G__70612 = (0);
seq__70535_70591 = G__70609;
chunk__70536_70592 = G__70610;
count__70537_70593 = G__70611;
i__70538_70594 = G__70612;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count(coeffects) > (0))){
var seq__70540_70613 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__70541_70614 = null;
var count__70542_70615 = (0);
var i__70543_70616 = (0);
while(true){
if((i__70543_70616 < count__70542_70615)){
var key_70617 = chunk__70541_70614.cljs$core$IIndexed$_nth$arity$2(null,i__70543_70616);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_70617,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__70618 = seq__70540_70613;
var G__70619 = chunk__70541_70614;
var G__70620 = count__70542_70615;
var G__70621 = (i__70543_70616 + (1));
seq__70540_70613 = G__70618;
chunk__70541_70614 = G__70619;
count__70542_70615 = G__70620;
i__70543_70616 = G__70621;
continue;
} else {
var temp__5753__auto___70622 = cljs.core.seq(seq__70540_70613);
if(temp__5753__auto___70622){
var seq__70540_70623__$1 = temp__5753__auto___70622;
if(cljs.core.chunked_seq_QMARK_(seq__70540_70623__$1)){
var c__4679__auto___70624 = cljs.core.chunk_first(seq__70540_70623__$1);
var G__70625 = cljs.core.chunk_rest(seq__70540_70623__$1);
var G__70626 = c__4679__auto___70624;
var G__70627 = cljs.core.count(c__4679__auto___70624);
var G__70628 = (0);
seq__70540_70613 = G__70625;
chunk__70541_70614 = G__70626;
count__70542_70615 = G__70627;
i__70543_70616 = G__70628;
continue;
} else {
var key_70629 = cljs.core.first(seq__70540_70623__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_70629,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__70630 = cljs.core.next(seq__70540_70623__$1);
var G__70631 = null;
var G__70632 = (0);
var G__70633 = (0);
seq__70540_70613 = G__70630;
chunk__70541_70614 = G__70631;
count__70542_70615 = G__70632;
i__70543_70616 = G__70633;
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

if(cljs.core.seq(subs)){
var seq__70549_70634 = cljs.core.seq(subs);
var chunk__70550_70635 = null;
var count__70551_70636 = (0);
var i__70552_70637 = (0);
while(true){
if((i__70552_70637 < count__70551_70636)){
var map__70555_70639 = chunk__70550_70635.cljs$core$IIndexed$_nth$arity$2(null,i__70552_70637);
var map__70555_70640__$1 = cljs.core.__destructure_map(map__70555_70639);
var op_type_70641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70555_70640__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_70642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70555_70640__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_70643__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70555_70640__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_70641,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_70642,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_70642,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_70643__$1], 0));
} else {
}


var G__70647 = seq__70549_70634;
var G__70648 = chunk__70550_70635;
var G__70649 = count__70551_70636;
var G__70650 = (i__70552_70637 + (1));
seq__70549_70634 = G__70647;
chunk__70550_70635 = G__70648;
count__70551_70636 = G__70649;
i__70552_70637 = G__70650;
continue;
} else {
var temp__5753__auto___70651 = cljs.core.seq(seq__70549_70634);
if(temp__5753__auto___70651){
var seq__70549_70652__$1 = temp__5753__auto___70651;
if(cljs.core.chunked_seq_QMARK_(seq__70549_70652__$1)){
var c__4679__auto___70653 = cljs.core.chunk_first(seq__70549_70652__$1);
var G__70654 = cljs.core.chunk_rest(seq__70549_70652__$1);
var G__70655 = c__4679__auto___70653;
var G__70656 = cljs.core.count(c__4679__auto___70653);
var G__70657 = (0);
seq__70549_70634 = G__70654;
chunk__70550_70635 = G__70655;
count__70551_70636 = G__70656;
i__70552_70637 = G__70657;
continue;
} else {
var map__70557_70658 = cljs.core.first(seq__70549_70652__$1);
var map__70557_70659__$1 = cljs.core.__destructure_map(map__70557_70658);
var op_type_70660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70557_70659__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_70661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70557_70659__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_70662__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70557_70659__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_70660,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_70661,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_70661,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_70662__$1], 0));
} else {
}


var G__70663 = cljs.core.next(seq__70549_70652__$1);
var G__70664 = null;
var G__70665 = (0);
var G__70666 = (0);
seq__70549_70634 = G__70663;
chunk__70550_70635 = G__70664;
count__70551_70636 = G__70665;
i__70552_70637 = G__70666;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__70667 = seq__70435;
var G__70668 = chunk__70436;
var G__70669 = count__70437;
var G__70670 = (i__70438 + (1));
seq__70435 = G__70667;
chunk__70436 = G__70668;
count__70437 = G__70669;
i__70438 = G__70670;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__70435);
if(temp__5753__auto__){
var seq__70435__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70435__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__70435__$1);
var G__70671 = cljs.core.chunk_rest(seq__70435__$1);
var G__70672 = c__4679__auto__;
var G__70673 = cljs.core.count(c__4679__auto__);
var G__70674 = (0);
seq__70435 = G__70671;
chunk__70436 = G__70672;
count__70437 = G__70673;
i__70438 = G__70674;
continue;
} else {
var map__70558 = cljs.core.first(seq__70435__$1);
var map__70558__$1 = cljs.core.__destructure_map(map__70558);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70558__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70558__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70558__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70558__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70558__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__70559_70676 = cljs.core.seq(cljs.core.keys(effects));
var chunk__70560_70677 = null;
var count__70561_70678 = (0);
var i__70562_70679 = (0);
while(true){
if((i__70562_70679 < count__70561_70678)){
var key_70680 = chunk__70560_70677.cljs$core$IIndexed$_nth$arity$2(null,i__70562_70679);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_70680,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__70681 = seq__70559_70676;
var G__70682 = chunk__70560_70677;
var G__70683 = count__70561_70678;
var G__70684 = (i__70562_70679 + (1));
seq__70559_70676 = G__70681;
chunk__70560_70677 = G__70682;
count__70561_70678 = G__70683;
i__70562_70679 = G__70684;
continue;
} else {
var temp__5753__auto___70685__$1 = cljs.core.seq(seq__70559_70676);
if(temp__5753__auto___70685__$1){
var seq__70559_70686__$1 = temp__5753__auto___70685__$1;
if(cljs.core.chunked_seq_QMARK_(seq__70559_70686__$1)){
var c__4679__auto___70687 = cljs.core.chunk_first(seq__70559_70686__$1);
var G__70688 = cljs.core.chunk_rest(seq__70559_70686__$1);
var G__70689 = c__4679__auto___70687;
var G__70690 = cljs.core.count(c__4679__auto___70687);
var G__70691 = (0);
seq__70559_70676 = G__70688;
chunk__70560_70677 = G__70689;
count__70561_70678 = G__70690;
i__70562_70679 = G__70691;
continue;
} else {
var key_70694 = cljs.core.first(seq__70559_70686__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_70694,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__70695 = cljs.core.next(seq__70559_70686__$1);
var G__70696 = null;
var G__70697 = (0);
var G__70698 = (0);
seq__70559_70676 = G__70695;
chunk__70560_70677 = G__70696;
count__70561_70678 = G__70697;
i__70562_70679 = G__70698;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count(coeffects) > (0))){
var seq__70564_70701 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__70565_70702 = null;
var count__70566_70703 = (0);
var i__70567_70704 = (0);
while(true){
if((i__70567_70704 < count__70566_70703)){
var key_70705 = chunk__70565_70702.cljs$core$IIndexed$_nth$arity$2(null,i__70567_70704);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_70705,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__70706 = seq__70564_70701;
var G__70707 = chunk__70565_70702;
var G__70708 = count__70566_70703;
var G__70709 = (i__70567_70704 + (1));
seq__70564_70701 = G__70706;
chunk__70565_70702 = G__70707;
count__70566_70703 = G__70708;
i__70567_70704 = G__70709;
continue;
} else {
var temp__5753__auto___70710__$1 = cljs.core.seq(seq__70564_70701);
if(temp__5753__auto___70710__$1){
var seq__70564_70711__$1 = temp__5753__auto___70710__$1;
if(cljs.core.chunked_seq_QMARK_(seq__70564_70711__$1)){
var c__4679__auto___70712 = cljs.core.chunk_first(seq__70564_70711__$1);
var G__70713 = cljs.core.chunk_rest(seq__70564_70711__$1);
var G__70714 = c__4679__auto___70712;
var G__70715 = cljs.core.count(c__4679__auto___70712);
var G__70716 = (0);
seq__70564_70701 = G__70713;
chunk__70565_70702 = G__70714;
count__70566_70703 = G__70715;
i__70567_70704 = G__70716;
continue;
} else {
var key_70717 = cljs.core.first(seq__70564_70711__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_70717,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__70718 = cljs.core.next(seq__70564_70711__$1);
var G__70719 = null;
var G__70720 = (0);
var G__70721 = (0);
seq__70564_70701 = G__70718;
chunk__70565_70702 = G__70719;
count__70566_70703 = G__70720;
i__70567_70704 = G__70721;
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

if(cljs.core.seq(subs)){
var seq__70573_70722 = cljs.core.seq(subs);
var chunk__70574_70723 = null;
var count__70575_70724 = (0);
var i__70576_70725 = (0);
while(true){
if((i__70576_70725 < count__70575_70724)){
var map__70582_70726 = chunk__70574_70723.cljs$core$IIndexed$_nth$arity$2(null,i__70576_70725);
var map__70582_70727__$1 = cljs.core.__destructure_map(map__70582_70726);
var op_type_70728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70582_70727__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_70729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70582_70727__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_70730__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70582_70727__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_70728,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_70729,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_70729,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_70730__$1], 0));
} else {
}


var G__70732 = seq__70573_70722;
var G__70733 = chunk__70574_70723;
var G__70734 = count__70575_70724;
var G__70735 = (i__70576_70725 + (1));
seq__70573_70722 = G__70732;
chunk__70574_70723 = G__70733;
count__70575_70724 = G__70734;
i__70576_70725 = G__70735;
continue;
} else {
var temp__5753__auto___70736__$1 = cljs.core.seq(seq__70573_70722);
if(temp__5753__auto___70736__$1){
var seq__70573_70737__$1 = temp__5753__auto___70736__$1;
if(cljs.core.chunked_seq_QMARK_(seq__70573_70737__$1)){
var c__4679__auto___70738 = cljs.core.chunk_first(seq__70573_70737__$1);
var G__70739 = cljs.core.chunk_rest(seq__70573_70737__$1);
var G__70740 = c__4679__auto___70738;
var G__70741 = cljs.core.count(c__4679__auto___70738);
var G__70742 = (0);
seq__70573_70722 = G__70739;
chunk__70574_70723 = G__70740;
count__70575_70724 = G__70741;
i__70576_70725 = G__70742;
continue;
} else {
var map__70583_70743 = cljs.core.first(seq__70573_70737__$1);
var map__70583_70744__$1 = cljs.core.__destructure_map(map__70583_70743);
var op_type_70745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70583_70744__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_70746 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70583_70744__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_70747__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70583_70744__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_70745,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_70746,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_70746,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_70747__$1], 0));
} else {
}


var G__70750 = cljs.core.next(seq__70573_70737__$1);
var G__70751 = null;
var G__70752 = (0);
var G__70753 = (0);
seq__70573_70722 = G__70750;
chunk__70574_70723 = G__70751;
count__70575_70724 = G__70752;
i__70576_70725 = G__70753;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__70754 = cljs.core.next(seq__70435__$1);
var G__70755 = null;
var G__70756 = (0);
var G__70757 = (0);
seq__70435 = G__70754;
chunk__70436 = G__70755;
count__70437 = G__70756;
i__70438 = G__70757;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frisk.stat.update_event_stat = (function re_frisk$stat$update_event_stat(re_frame_data,event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);
});

//# sourceMappingURL=re_frisk.stat.js.map
