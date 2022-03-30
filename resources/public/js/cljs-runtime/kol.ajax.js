goog.provide('kol.ajax');
kol.ajax.local_uri_QMARK_ = (function kol$ajax$local_uri_QMARK_(p__80526){
var map__80531 = p__80526;
var map__80531__$1 = cljs.core.__destructure_map(map__80531);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80531__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return cljs.core.not(cljs.core.re_find(/^\w+?:\/\//,uri));
});
kol.ajax.default_headers = (function kol$ajax$default_headers(request){
if(kol.ajax.local_uri_QMARK_(request)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__80533_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["x-csrf-token",csrfToken], null),p1__80533_SHARP_], 0));
}));
} else {
return request;
}
});
kol.ajax.as_transit = (function kol$ajax$as_transit(opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",-1306924766),(function (){var G__80537 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),luminus_transit.time.time_serialization_handlers)], null);
return (ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(G__80537) : ajax.core.transit_request_format.call(null,G__80537));
})(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),(function (){var G__80539 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),luminus_transit.time.time_deserialization_handlers)], null);
return (ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 ? ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(G__80539) : ajax.core.transit_response_format.call(null,G__80539));
})()], null),opts], 0));
});
kol.ajax.load_interceptors_BANG_ = (function kol$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ajax.core.default_interceptors,cljs.core.conj,(function (){var G__80541 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),kol.ajax.default_headers], null);
return (ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1 ? ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1(G__80541) : ajax.core.to_interceptor.call(null,G__80541));
})());
});

//# sourceMappingURL=kol.ajax.js.map
