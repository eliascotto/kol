goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__79422,match){
var map__79423 = p__79422;
var map__79423__$1 = cljs.core.__destructure_map(map__79423);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79423__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79423__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79423__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4251__auto__ = identity;
if(cljs.core.truth_(and__4251__auto__)){
return parameters;
} else {
return and__4251__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__79429(s__79430){
return (new cljs.core.LazySeq(null,(function (){
var s__79430__$1 = s__79430;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__79430__$1);
if(temp__5753__auto__){
var s__79430__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79430__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__79430__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__79432 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__79431 = (0);
while(true){
if((i__79431 < size__4651__auto__)){
var vec__79439 = cljs.core._nth(c__4650__auto__,i__79431);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79439,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79439,(1),null);
cljs.core.chunk_append(b__79432,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__79501 = (i__79431 + (1));
i__79431 = G__79501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79432),reitit$frontend$controllers$get_identity_$_iter__79429(cljs.core.chunk_rest(s__79430__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79432),null);
}
} else {
var vec__79447 = cljs.core.first(s__79430__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79447,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79447,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__79429(cljs.core.rest(s__79430__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
var G__79455 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__79455) : f.call(null,G__79455));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__79459_79511 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__79460_79512 = null;
var count__79461_79513 = (0);
var i__79462_79514 = (0);
while(true){
if((i__79462_79514 < count__79461_79513)){
var controller_79515 = chunk__79460_79512.cljs$core$IIndexed$_nth$arity$2(null,i__79462_79514);
reitit.frontend.controllers.apply_controller(controller_79515,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__79520 = seq__79459_79511;
var G__79521 = chunk__79460_79512;
var G__79522 = count__79461_79513;
var G__79523 = (i__79462_79514 + (1));
seq__79459_79511 = G__79520;
chunk__79460_79512 = G__79521;
count__79461_79513 = G__79522;
i__79462_79514 = G__79523;
continue;
} else {
var temp__5753__auto___79524 = cljs.core.seq(seq__79459_79511);
if(temp__5753__auto___79524){
var seq__79459_79526__$1 = temp__5753__auto___79524;
if(cljs.core.chunked_seq_QMARK_(seq__79459_79526__$1)){
var c__4679__auto___79527 = cljs.core.chunk_first(seq__79459_79526__$1);
var G__79528 = cljs.core.chunk_rest(seq__79459_79526__$1);
var G__79529 = c__4679__auto___79527;
var G__79530 = cljs.core.count(c__4679__auto___79527);
var G__79531 = (0);
seq__79459_79511 = G__79528;
chunk__79460_79512 = G__79529;
count__79461_79513 = G__79530;
i__79462_79514 = G__79531;
continue;
} else {
var controller_79533 = cljs.core.first(seq__79459_79526__$1);
reitit.frontend.controllers.apply_controller(controller_79533,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__79535 = cljs.core.next(seq__79459_79526__$1);
var G__79536 = null;
var G__79537 = (0);
var G__79538 = (0);
seq__79459_79511 = G__79535;
chunk__79460_79512 = G__79536;
count__79461_79513 = G__79537;
i__79462_79514 = G__79538;
continue;
}
} else {
}
}
break;
}

var seq__79473_79539 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__79475_79540 = null;
var count__79476_79541 = (0);
var i__79477_79542 = (0);
while(true){
if((i__79477_79542 < count__79476_79541)){
var controller_79543 = chunk__79475_79540.cljs$core$IIndexed$_nth$arity$2(null,i__79477_79542);
reitit.frontend.controllers.apply_controller(controller_79543,new cljs.core.Keyword(null,"start","start",-355208981));


var G__79544 = seq__79473_79539;
var G__79545 = chunk__79475_79540;
var G__79546 = count__79476_79541;
var G__79547 = (i__79477_79542 + (1));
seq__79473_79539 = G__79544;
chunk__79475_79540 = G__79545;
count__79476_79541 = G__79546;
i__79477_79542 = G__79547;
continue;
} else {
var temp__5753__auto___79548 = cljs.core.seq(seq__79473_79539);
if(temp__5753__auto___79548){
var seq__79473_79550__$1 = temp__5753__auto___79548;
if(cljs.core.chunked_seq_QMARK_(seq__79473_79550__$1)){
var c__4679__auto___79551 = cljs.core.chunk_first(seq__79473_79550__$1);
var G__79552 = cljs.core.chunk_rest(seq__79473_79550__$1);
var G__79553 = c__4679__auto___79551;
var G__79554 = cljs.core.count(c__4679__auto___79551);
var G__79555 = (0);
seq__79473_79539 = G__79552;
chunk__79475_79540 = G__79553;
count__79476_79541 = G__79554;
i__79477_79542 = G__79555;
continue;
} else {
var controller_79556 = cljs.core.first(seq__79473_79550__$1);
reitit.frontend.controllers.apply_controller(controller_79556,new cljs.core.Keyword(null,"start","start",-355208981));


var G__79557 = cljs.core.next(seq__79473_79550__$1);
var G__79558 = null;
var G__79559 = (0);
var G__79560 = (0);
seq__79473_79539 = G__79557;
chunk__79475_79540 = G__79558;
count__79476_79541 = G__79559;
i__79477_79542 = G__79560;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
