goog.provide('haslett.client');
/**
 * Close a stream opened by connect.
 */
haslett.client.close = (function haslett$client$close(stream){
new cljs.core.Keyword(null,"socket","socket",59137063).cljs$core$IFn$_invoke$arity$1(stream).close((1000),"Closed by creator");

return new cljs.core.Keyword(null,"close-status","close-status",-239776180).cljs$core$IFn$_invoke$arity$1(stream);
});
/**
 * Create a WebSocket to the specified URL, and returns a 'stream' map of four
 *   keys:
 * 
 *  :socket       - contains the WebSocket object
 *  :close-status - a promise channel that contains the final close status
 *  :source       - a core.async channel to read from
 *  :sink         - a core.async channel to write to
 * 
 *   Takes the following options:
 * 
 *  :format      - a formatter from haslett.format
 *  :source      - a custom channel to use as the source
 *  :sink        - a custom channel to use as the sink
 *  :protocols   - passed to the WebSocket, a vector of protocol strings
 *  :binary-type - passed to the WebSocket, may be :blob or :arraybuffer
 *  :close-chan? - true if channels should be closed if WebSocket is closed
 *                 (defaults to true)
 * 
 *   The WebSocket may either be closed directly, or by closing the
 *   stream's :sink channel.
 */
haslett.client.connect = (function haslett$client$connect(var_args){
var G__68058 = arguments.length;
switch (G__68058) {
case 1:
return haslett.client.connect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return haslett.client.connect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(haslett.client.connect.cljs$core$IFn$_invoke$arity$1 = (function (url){
return haslett.client.connect.cljs$core$IFn$_invoke$arity$2(url,cljs.core.PersistentArrayMap.EMPTY);
}));

(haslett.client.connect.cljs$core$IFn$_invoke$arity$2 = (function (url,options){
var protocols = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY));
var socket = (new WebSocket(url,protocols));
var source = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$2(options,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
var sink = new cljs.core.Keyword(null,"sink","sink",186835933).cljs$core$IFn$_invoke$arity$2(options,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
var format = new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$2(options,haslett.format.identity);
var status = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var return$ = cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();
var close_QMARK_ = new cljs.core.Keyword(null,"close-chan?","close-chan?",-1940681973).cljs$core$IFn$_invoke$arity$2(options,true);
var stream = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"sink","sink",186835933),sink,new cljs.core.Keyword(null,"close-status","close-status",-239776180),status], null);
(socket.binaryType = cljs.core.name(new cljs.core.Keyword(null,"binary-type","binary-type",1096940609).cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"arraybuffer","arraybuffer",1394959763))));

(socket.onopen = (function (_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(return$,stream);
}));

(socket.onmessage = (function (e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(source,haslett.format.read(format,e.data));
}));

(socket.onclose = (function (e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason,new cljs.core.Keyword(null,"code","code",1586293142),e.code], null));

if(cljs.core.truth_(close_QMARK_)){
cljs.core.async.close_BANG_(source);
} else {
}

if(cljs.core.truth_(close_QMARK_)){
cljs.core.async.close_BANG_(sink);
} else {
}

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(return$,stream);
}));

var c__66798__auto___68151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__66799__auto__ = (function (){var switch__66690__auto__ = (function (state_68095){
var state_val_68096 = (state_68095[(1)]);
if((state_val_68096 === (1))){
var state_68095__$1 = state_68095;
var statearr_68109_68153 = state_68095__$1;
(statearr_68109_68153[(2)] = null);

(statearr_68109_68153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68096 === (2))){
var state_68095__$1 = state_68095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68095__$1,(4),sink);
} else {
if((state_val_68096 === (3))){
var inst_68092 = (state_68095[(2)]);
var state_68095__$1 = state_68095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68095__$1,inst_68092);
} else {
if((state_val_68096 === (4))){
var inst_68078 = (state_68095[(7)]);
var inst_68078__$1 = (state_68095[(2)]);
var state_68095__$1 = (function (){var statearr_68115 = state_68095;
(statearr_68115[(7)] = inst_68078__$1);

return statearr_68115;
})();
if(cljs.core.truth_(inst_68078__$1)){
var statearr_68116_68158 = state_68095__$1;
(statearr_68116_68158[(1)] = (5));

} else {
var statearr_68117_68159 = state_68095__$1;
(statearr_68117_68159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68096 === (5))){
var inst_68078 = (state_68095[(7)]);
var inst_68082 = haslett.format.write(format,inst_68078);
var inst_68083 = socket.send(inst_68082);
var state_68095__$1 = (function (){var statearr_68119 = state_68095;
(statearr_68119[(8)] = inst_68083);

return statearr_68119;
})();
var statearr_68120_68160 = state_68095__$1;
(statearr_68120_68160[(2)] = null);

(statearr_68120_68160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68096 === (6))){
var state_68095__$1 = state_68095;
var statearr_68122_68161 = state_68095__$1;
(statearr_68122_68161[(2)] = null);

(statearr_68122_68161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68096 === (7))){
var inst_68087 = (state_68095[(2)]);
var inst_68089 = haslett.client.close(stream);
var state_68095__$1 = (function (){var statearr_68123 = state_68095;
(statearr_68123[(9)] = inst_68087);

return statearr_68123;
})();
var statearr_68126_68162 = state_68095__$1;
(statearr_68126_68162[(2)] = inst_68089);

(statearr_68126_68162[(1)] = (3));


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
var haslett$client$state_machine__66691__auto__ = null;
var haslett$client$state_machine__66691__auto____0 = (function (){
var statearr_68132 = [null,null,null,null,null,null,null,null,null,null];
(statearr_68132[(0)] = haslett$client$state_machine__66691__auto__);

(statearr_68132[(1)] = (1));

return statearr_68132;
});
var haslett$client$state_machine__66691__auto____1 = (function (state_68095){
while(true){
var ret_value__66692__auto__ = (function (){try{while(true){
var result__66693__auto__ = switch__66690__auto__(state_68095);
if(cljs.core.keyword_identical_QMARK_(result__66693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__66693__auto__;
}
break;
}
}catch (e68134){var ex__66694__auto__ = e68134;
var statearr_68135_68165 = state_68095;
(statearr_68135_68165[(2)] = ex__66694__auto__);


if(cljs.core.seq((state_68095[(4)]))){
var statearr_68136_68166 = state_68095;
(statearr_68136_68166[(1)] = cljs.core.first((state_68095[(4)])));

} else {
throw ex__66694__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__66692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68167 = state_68095;
state_68095 = G__68167;
continue;
} else {
return ret_value__66692__auto__;
}
break;
}
});
haslett$client$state_machine__66691__auto__ = function(state_68095){
switch(arguments.length){
case 0:
return haslett$client$state_machine__66691__auto____0.call(this);
case 1:
return haslett$client$state_machine__66691__auto____1.call(this,state_68095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
haslett$client$state_machine__66691__auto__.cljs$core$IFn$_invoke$arity$0 = haslett$client$state_machine__66691__auto____0;
haslett$client$state_machine__66691__auto__.cljs$core$IFn$_invoke$arity$1 = haslett$client$state_machine__66691__auto____1;
return haslett$client$state_machine__66691__auto__;
})()
})();
var state__66800__auto__ = (function (){var statearr_68138 = f__66799__auto__();
(statearr_68138[(6)] = c__66798__auto___68151);

return statearr_68138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__66800__auto__);
}));


return return$;
}));

(haslett.client.connect.cljs$lang$maxFixedArity = 2);

/**
 * Return true if the stream is currently connected.
 */
haslett.client.connected_QMARK_ = (function haslett$client$connected_QMARK_(p__68139){
var map__68140 = p__68139;
var map__68140__$1 = cljs.core.__destructure_map(map__68140);
var close_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68140__$1,new cljs.core.Keyword(null,"close-status","close-status",-239776180));
return (cljs.core.async.poll_BANG_(close_status) == null);
});

//# sourceMappingURL=haslett.client.js.map
