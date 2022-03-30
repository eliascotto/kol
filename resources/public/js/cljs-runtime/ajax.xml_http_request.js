goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__78745 = e.target.readyState;
var fexpr__78744 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__78744.cljs$core$IFn$_invoke$arity$1 ? fexpr__78744.cljs$core$IFn$_invoke$arity$1(G__78745) : fexpr__78744.call(null,G__78745));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__78756,handler){
var map__78757 = p__78756;
var map__78757__$1 = cljs.core.__destructure_map(map__78757);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78757__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78757__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78757__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78757__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78757__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78757__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78757__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__78753_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__78753_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___78829 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___78829)){
var response_type_78830 = temp__5753__auto___78829;
(this$__$1.responseType = cljs.core.name(response_type_78830));
} else {
}

var seq__78783_78833 = cljs.core.seq(headers);
var chunk__78784_78834 = null;
var count__78785_78835 = (0);
var i__78786_78836 = (0);
while(true){
if((i__78786_78836 < count__78785_78835)){
var vec__78804_78842 = chunk__78784_78834.cljs$core$IIndexed$_nth$arity$2(null,i__78786_78836);
var k_78843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78804_78842,(0),null);
var v_78844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78804_78842,(1),null);
this$__$1.setRequestHeader(k_78843,v_78844);


var G__78851 = seq__78783_78833;
var G__78852 = chunk__78784_78834;
var G__78853 = count__78785_78835;
var G__78854 = (i__78786_78836 + (1));
seq__78783_78833 = G__78851;
chunk__78784_78834 = G__78852;
count__78785_78835 = G__78853;
i__78786_78836 = G__78854;
continue;
} else {
var temp__5753__auto___78855 = cljs.core.seq(seq__78783_78833);
if(temp__5753__auto___78855){
var seq__78783_78857__$1 = temp__5753__auto___78855;
if(cljs.core.chunked_seq_QMARK_(seq__78783_78857__$1)){
var c__4679__auto___78862 = cljs.core.chunk_first(seq__78783_78857__$1);
var G__78863 = cljs.core.chunk_rest(seq__78783_78857__$1);
var G__78864 = c__4679__auto___78862;
var G__78865 = cljs.core.count(c__4679__auto___78862);
var G__78866 = (0);
seq__78783_78833 = G__78863;
chunk__78784_78834 = G__78864;
count__78785_78835 = G__78865;
i__78786_78836 = G__78866;
continue;
} else {
var vec__78810_78870 = cljs.core.first(seq__78783_78857__$1);
var k_78871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78810_78870,(0),null);
var v_78872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78810_78870,(1),null);
this$__$1.setRequestHeader(k_78871,v_78872);


var G__78878 = cljs.core.next(seq__78783_78857__$1);
var G__78879 = null;
var G__78880 = (0);
var G__78881 = (0);
seq__78783_78833 = G__78878;
chunk__78784_78834 = G__78879;
count__78785_78835 = G__78880;
i__78786_78836 = G__78881;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4253__auto__ = body;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
