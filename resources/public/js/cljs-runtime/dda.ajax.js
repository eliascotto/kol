goog.provide('dda.ajax');
dda.ajax.local_uri_QMARK_ = (function dda$ajax$local_uri_QMARK_(p__92335){
var map__92336 = p__92335;
var map__92336__$1 = cljs.core.__destructure_map(map__92336);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__92336__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return cljs.core.not(cljs.core.re_find(/^\w+?:\/\//,uri));
});
dda.ajax.default_headers = (function dda$ajax$default_headers(request){
if(dda.ajax.local_uri_QMARK_(request)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__92338_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["x-csrf-token",csrfToken], null),p1__92338_SHARP_], 0));
}));
} else {
return request;
}
});
dda.ajax.as_transit = (function dda$ajax$as_transit(opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",-1306924766),(function (){var G__92348 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),luminus_transit.time.time_serialization_handlers)], null);
return (ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(G__92348) : ajax.core.transit_request_format.call(null,G__92348));
})(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__92349 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),luminus_transit.time.time_deserialization_handlers)], null);
return (ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(G__92349) : ajax.core.transit_response_format.call(null,G__92349));
})()], null),opts], 0));
});
dda.ajax.load_interceptors_BANG_ = (function dda$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ajax.core.default_interceptors,cljs.core.conj,(function (){var G__92354 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),dda.ajax.default_headers], null);
return (ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1 ? ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1(G__92354) : ajax.core.to_interceptor.call(null,G__92354));
})());
});

//# sourceMappingURL=dda.ajax.js.map
