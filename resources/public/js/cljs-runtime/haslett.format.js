goog.provide('haslett.format');

/**
 * The format protocol.
 * @interface
 */
haslett.format.Format = function(){};

var haslett$format$Format$read$dyn_68038 = (function (formatter,string){
var x__4550__auto__ = (((formatter == null))?null:formatter);
var m__4551__auto__ = (haslett.format.read[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(formatter,string) : m__4551__auto__.call(null,formatter,string));
} else {
var m__4549__auto__ = (haslett.format.read["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(formatter,string) : m__4549__auto__.call(null,formatter,string));
} else {
throw cljs.core.missing_protocol("Format.read",formatter);
}
}
});
haslett.format.read = (function haslett$format$read(formatter,string){
if((((!((formatter == null)))) && ((!((formatter.haslett$format$Format$read$arity$2 == null)))))){
return formatter.haslett$format$Format$read$arity$2(formatter,string);
} else {
return haslett$format$Format$read$dyn_68038(formatter,string);
}
});

var haslett$format$Format$write$dyn_68039 = (function (formatter,value){
var x__4550__auto__ = (((formatter == null))?null:formatter);
var m__4551__auto__ = (haslett.format.write[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(formatter,value) : m__4551__auto__.call(null,formatter,value));
} else {
var m__4549__auto__ = (haslett.format.write["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(formatter,value) : m__4549__auto__.call(null,formatter,value));
} else {
throw cljs.core.missing_protocol("Format.write",formatter);
}
}
});
haslett.format.write = (function haslett$format$write(formatter,value){
if((((!((formatter == null)))) && ((!((formatter.haslett$format$Format$write$arity$2 == null)))))){
return formatter.haslett$format$Format$write$arity$2(formatter,value);
} else {
return haslett$format$Format$write$dyn_68039(formatter,value);
}
});

/**
 * The identity formatter. Does nothing to the input or output.
 */
haslett.format.identity = (function (){
if((typeof haslett !== 'undefined') && (typeof haslett.format !== 'undefined') && (typeof haslett.format.t_haslett$format68008 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {haslett.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
haslett.format.t_haslett$format68008 = (function (meta68009){
this.meta68009 = meta68009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(haslett.format.t_haslett$format68008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68010,meta68009__$1){
var self__ = this;
var _68010__$1 = this;
return (new haslett.format.t_haslett$format68008(meta68009__$1));
}));

(haslett.format.t_haslett$format68008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68010){
var self__ = this;
var _68010__$1 = this;
return self__.meta68009;
}));

(haslett.format.t_haslett$format68008.prototype.haslett$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(haslett.format.t_haslett$format68008.prototype.haslett$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return s;
}));

(haslett.format.t_haslett$format68008.prototype.haslett$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return v;
}));

(haslett.format.t_haslett$format68008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68009","meta68009",-1321474185,null)], null);
}));

(haslett.format.t_haslett$format68008.cljs$lang$type = true);

(haslett.format.t_haslett$format68008.cljs$lang$ctorStr = "haslett.format/t_haslett$format68008");

(haslett.format.t_haslett$format68008.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"haslett.format/t_haslett$format68008");
}));

/**
 * Positional factory function for haslett.format/t_haslett$format68008.
 */
haslett.format.__GT_t_haslett$format68008 = (function haslett$format$__GT_t_haslett$format68008(meta68009){
return (new haslett.format.t_haslett$format68008(meta68009));
});

}

return (new haslett.format.t_haslett$format68008(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Read and write data encoded in transit+json.
 */
haslett.format.transit = (function (){
if((typeof haslett !== 'undefined') && (typeof haslett.format !== 'undefined') && (typeof haslett.format.t_haslett$format68016 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {haslett.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
haslett.format.t_haslett$format68016 = (function (meta68017){
this.meta68017 = meta68017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(haslett.format.t_haslett$format68016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68018,meta68017__$1){
var self__ = this;
var _68018__$1 = this;
return (new haslett.format.t_haslett$format68016(meta68017__$1));
}));

(haslett.format.t_haslett$format68016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68018){
var self__ = this;
var _68018__$1 = this;
return self__.meta68017;
}));

(haslett.format.t_haslett$format68016.prototype.haslett$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(haslett.format.t_haslett$format68016.prototype.haslett$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),s);
}));

(haslett.format.t_haslett$format68016.prototype.haslett$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),v);
}));

(haslett.format.t_haslett$format68016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68017","meta68017",-1650201839,null)], null);
}));

(haslett.format.t_haslett$format68016.cljs$lang$type = true);

(haslett.format.t_haslett$format68016.cljs$lang$ctorStr = "haslett.format/t_haslett$format68016");

(haslett.format.t_haslett$format68016.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"haslett.format/t_haslett$format68016");
}));

/**
 * Positional factory function for haslett.format/t_haslett$format68016.
 */
haslett.format.__GT_t_haslett$format68016 = (function haslett$format$__GT_t_haslett$format68016(meta68017){
return (new haslett.format.t_haslett$format68016(meta68017));
});

}

return (new haslett.format.t_haslett$format68016(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Read and write data encoded in edn.
 */
haslett.format.edn = (function (){
if((typeof haslett !== 'undefined') && (typeof haslett.format !== 'undefined') && (typeof haslett.format.t_haslett$format68027 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {haslett.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
haslett.format.t_haslett$format68027 = (function (meta68028){
this.meta68028 = meta68028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(haslett.format.t_haslett$format68027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68029,meta68028__$1){
var self__ = this;
var _68029__$1 = this;
return (new haslett.format.t_haslett$format68027(meta68028__$1));
}));

(haslett.format.t_haslett$format68027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68029){
var self__ = this;
var _68029__$1 = this;
return self__.meta68028;
}));

(haslett.format.t_haslett$format68027.prototype.haslett$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(haslett.format.t_haslett$format68027.prototype.haslett$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
}));

(haslett.format.t_haslett$format68027.prototype.haslett$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}));

(haslett.format.t_haslett$format68027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68028","meta68028",667352988,null)], null);
}));

(haslett.format.t_haslett$format68027.cljs$lang$type = true);

(haslett.format.t_haslett$format68027.cljs$lang$ctorStr = "haslett.format/t_haslett$format68027");

(haslett.format.t_haslett$format68027.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"haslett.format/t_haslett$format68027");
}));

/**
 * Positional factory function for haslett.format/t_haslett$format68027.
 */
haslett.format.__GT_t_haslett$format68027 = (function haslett$format$__GT_t_haslett$format68027(meta68028){
return (new haslett.format.t_haslett$format68027(meta68028));
});

}

return (new haslett.format.t_haslett$format68027(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Read and write data encoded in JSON.
 */
haslett.format.json = (function (){
if((typeof haslett !== 'undefined') && (typeof haslett.format !== 'undefined') && (typeof haslett.format.t_haslett$format68032 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {haslett.format.Format}
 * @implements {cljs.core.IWithMeta}
*/
haslett.format.t_haslett$format68032 = (function (meta68033){
this.meta68033 = meta68033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(haslett.format.t_haslett$format68032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68034,meta68033__$1){
var self__ = this;
var _68034__$1 = this;
return (new haslett.format.t_haslett$format68032(meta68033__$1));
}));

(haslett.format.t_haslett$format68032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68034){
var self__ = this;
var _68034__$1 = this;
return self__.meta68033;
}));

(haslett.format.t_haslett$format68032.prototype.haslett$format$Format$ = cljs.core.PROTOCOL_SENTINEL);

(haslett.format.t_haslett$format68032.prototype.haslett$format$Format$read$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(s));
}));

(haslett.format.t_haslett$format68032.prototype.haslett$format$Format$write$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return JSON.stringify(cljs.core.clj__GT_js(v));
}));

(haslett.format.t_haslett$format68032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta68033","meta68033",424872165,null)], null);
}));

(haslett.format.t_haslett$format68032.cljs$lang$type = true);

(haslett.format.t_haslett$format68032.cljs$lang$ctorStr = "haslett.format/t_haslett$format68032");

(haslett.format.t_haslett$format68032.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"haslett.format/t_haslett$format68032");
}));

/**
 * Positional factory function for haslett.format/t_haslett$format68032.
 */
haslett.format.__GT_t_haslett$format68032 = (function haslett$format$__GT_t_haslett$format68032(meta68033){
return (new haslett.format.t_haslett$format68032(meta68033));
});

}

return (new haslett.format.t_haslett$format68032(cljs.core.PersistentArrayMap.EMPTY));
})()
;

//# sourceMappingURL=haslett.format.js.map
