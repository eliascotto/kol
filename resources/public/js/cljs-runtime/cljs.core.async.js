goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__70586 = arguments.length;
switch (G__70586) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70594 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70594 = (function (f,blockable,meta70595){
this.f = f;
this.blockable = blockable;
this.meta70595 = meta70595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70596,meta70595__$1){
var self__ = this;
var _70596__$1 = this;
return (new cljs.core.async.t_cljs$core$async70594(self__.f,self__.blockable,meta70595__$1));
}));

(cljs.core.async.t_cljs$core$async70594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70596){
var self__ = this;
var _70596__$1 = this;
return self__.meta70595;
}));

(cljs.core.async.t_cljs$core$async70594.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async70594.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async70594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async70594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta70595","meta70595",-1234532828,null)], null);
}));

(cljs.core.async.t_cljs$core$async70594.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70594");

(cljs.core.async.t_cljs$core$async70594.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async70594");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70594.
 */
cljs.core.async.__GT_t_cljs$core$async70594 = (function cljs$core$async$__GT_t_cljs$core$async70594(f__$1,blockable__$1,meta70595){
return (new cljs.core.async.t_cljs$core$async70594(f__$1,blockable__$1,meta70595));
});

}

return (new cljs.core.async.t_cljs$core$async70594(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__70700 = arguments.length;
switch (G__70700) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__70722 = arguments.length;
switch (G__70722) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__70750 = arguments.length;
switch (G__70750) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_73790 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_73790) : fn1.call(null,val_73790));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_73790) : fn1.call(null,val_73790));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__70780 = arguments.length;
switch (G__70780) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___73795 = n;
var x_73796 = (0);
while(true){
if((x_73796 < n__4741__auto___73795)){
(a[x_73796] = x_73796);

var G__73797 = (x_73796 + (1));
x_73796 = G__73797;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70817 = (function (flag,meta70818){
this.flag = flag;
this.meta70818 = meta70818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70819,meta70818__$1){
var self__ = this;
var _70819__$1 = this;
return (new cljs.core.async.t_cljs$core$async70817(self__.flag,meta70818__$1));
}));

(cljs.core.async.t_cljs$core$async70817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70819){
var self__ = this;
var _70819__$1 = this;
return self__.meta70818;
}));

(cljs.core.async.t_cljs$core$async70817.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async70817.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async70817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async70817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta70818","meta70818",-1862984978,null)], null);
}));

(cljs.core.async.t_cljs$core$async70817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70817");

(cljs.core.async.t_cljs$core$async70817.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async70817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70817.
 */
cljs.core.async.__GT_t_cljs$core$async70817 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async70817(flag__$1,meta70818){
return (new cljs.core.async.t_cljs$core$async70817(flag__$1,meta70818));
});

}

return (new cljs.core.async.t_cljs$core$async70817(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async70899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async70899 = (function (flag,cb,meta70900){
this.flag = flag;
this.cb = cb;
this.meta70900 = meta70900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async70899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70901,meta70900__$1){
var self__ = this;
var _70901__$1 = this;
return (new cljs.core.async.t_cljs$core$async70899(self__.flag,self__.cb,meta70900__$1));
}));

(cljs.core.async.t_cljs$core$async70899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70901){
var self__ = this;
var _70901__$1 = this;
return self__.meta70900;
}));

(cljs.core.async.t_cljs$core$async70899.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async70899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async70899.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async70899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async70899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta70900","meta70900",-1895131437,null)], null);
}));

(cljs.core.async.t_cljs$core$async70899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async70899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async70899");

(cljs.core.async.t_cljs$core$async70899.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async70899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async70899.
 */
cljs.core.async.__GT_t_cljs$core$async70899 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async70899(flag__$1,cb__$1,meta70900){
return (new cljs.core.async.t_cljs$core$async70899(flag__$1,cb__$1,meta70900));
});

}

return (new cljs.core.async.t_cljs$core$async70899(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__70919_SHARP_){
var G__70925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__70919_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__70925) : fret.call(null,G__70925));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__70920_SHARP_){
var G__70926 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__70920_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__70926) : fret.call(null,G__70926));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__73802 = (i + (1));
i = G__73802;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___73805 = arguments.length;
var i__4865__auto___73806 = (0);
while(true){
if((i__4865__auto___73806 < len__4864__auto___73805)){
args__4870__auto__.push((arguments[i__4865__auto___73806]));

var G__73807 = (i__4865__auto___73806 + (1));
i__4865__auto___73806 = G__73807;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__70946){
var map__70947 = p__70946;
var map__70947__$1 = cljs.core.__destructure_map(map__70947);
var opts = map__70947__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq70937){
var G__70938 = cljs.core.first(seq70937);
var seq70937__$1 = cljs.core.next(seq70937);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70938,seq70937__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__70961 = arguments.length;
switch (G__70961) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__70472__auto___73816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_71010){
var state_val_71011 = (state_71010[(1)]);
if((state_val_71011 === (7))){
var inst_71003 = (state_71010[(2)]);
var state_71010__$1 = state_71010;
var statearr_71015_73817 = state_71010__$1;
(statearr_71015_73817[(2)] = inst_71003);

(statearr_71015_73817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71011 === (1))){
var state_71010__$1 = state_71010;
var statearr_71016_73818 = state_71010__$1;
(statearr_71016_73818[(2)] = null);

(statearr_71016_73818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71011 === (4))){
var inst_70974 = (state_71010[(7)]);
var inst_70974__$1 = (state_71010[(2)]);
var inst_70977 = (inst_70974__$1 == null);
var state_71010__$1 = (function (){var statearr_71018 = state_71010;
(statearr_71018[(7)] = inst_70974__$1);

return statearr_71018;
})();
if(cljs.core.truth_(inst_70977)){
var statearr_71020_73819 = state_71010__$1;
(statearr_71020_73819[(1)] = (5));

} else {
var statearr_71021_73820 = state_71010__$1;
(statearr_71021_73820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71011 === (13))){
var state_71010__$1 = state_71010;
var statearr_71023_73821 = state_71010__$1;
(statearr_71023_73821[(2)] = null);

(statearr_71023_73821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71011 === (6))){
var inst_70974 = (state_71010[(7)]);
var state_71010__$1 = state_71010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71010__$1,(11),to,inst_70974);
} else {
if((state_val_71011 === (3))){
var inst_71007 = (state_71010[(2)]);
var state_71010__$1 = state_71010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71010__$1,inst_71007);
} else {
if((state_val_71011 === (12))){
var state_71010__$1 = state_71010;
var statearr_71026_73823 = state_71010__$1;
(statearr_71026_73823[(2)] = null);

(statearr_71026_73823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71011 === (2))){
var state_71010__$1 = state_71010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71010__$1,(4),from);
} else {
if((state_val_71011 === (11))){
var inst_70992 = (state_71010[(2)]);
var state_71010__$1 = state_71010;
if(cljs.core.truth_(inst_70992)){
var statearr_71027_73825 = state_71010__$1;
(statearr_71027_73825[(1)] = (12));

} else {
var statearr_71028_73826 = state_71010__$1;
(statearr_71028_73826[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71011 === (9))){
var state_71010__$1 = state_71010;
var statearr_71029_73827 = state_71010__$1;
(statearr_71029_73827[(2)] = null);

(statearr_71029_73827[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71011 === (5))){
var state_71010__$1 = state_71010;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71030_73828 = state_71010__$1;
(statearr_71030_73828[(1)] = (8));

} else {
var statearr_71031_73829 = state_71010__$1;
(statearr_71031_73829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71011 === (14))){
var inst_71001 = (state_71010[(2)]);
var state_71010__$1 = state_71010;
var statearr_71035_73830 = state_71010__$1;
(statearr_71035_73830[(2)] = inst_71001);

(statearr_71035_73830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71011 === (10))){
var inst_70989 = (state_71010[(2)]);
var state_71010__$1 = state_71010;
var statearr_71036_73831 = state_71010__$1;
(statearr_71036_73831[(2)] = inst_70989);

(statearr_71036_73831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71011 === (8))){
var inst_70981 = cljs.core.async.close_BANG_(to);
var state_71010__$1 = state_71010;
var statearr_71037_73832 = state_71010__$1;
(statearr_71037_73832[(2)] = inst_70981);

(statearr_71037_73832[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__70289__auto__ = null;
var cljs$core$async$state_machine__70289__auto____0 = (function (){
var statearr_71040 = [null,null,null,null,null,null,null,null];
(statearr_71040[(0)] = cljs$core$async$state_machine__70289__auto__);

(statearr_71040[(1)] = (1));

return statearr_71040;
});
var cljs$core$async$state_machine__70289__auto____1 = (function (state_71010){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_71010);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e71041){var ex__70292__auto__ = e71041;
var statearr_71042_73834 = state_71010;
(statearr_71042_73834[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_71010[(4)]))){
var statearr_71043_73836 = state_71010;
(statearr_71043_73836[(1)] = cljs.core.first((state_71010[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73837 = state_71010;
state_71010 = G__73837;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$state_machine__70289__auto__ = function(state_71010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70289__auto____1.call(this,state_71010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70289__auto____0;
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70289__auto____1;
return cljs$core$async$state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_71048 = f__70473__auto__();
(statearr_71048[(6)] = c__70472__auto___73816);

return statearr_71048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__71049){
var vec__71050 = p__71049;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71050,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71050,(1),null);
var job = vec__71050;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__70472__auto___73838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_71057){
var state_val_71058 = (state_71057[(1)]);
if((state_val_71058 === (1))){
var state_71057__$1 = state_71057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71057__$1,(2),res,v);
} else {
if((state_val_71058 === (2))){
var inst_71054 = (state_71057[(2)]);
var inst_71055 = cljs.core.async.close_BANG_(res);
var state_71057__$1 = (function (){var statearr_71059 = state_71057;
(statearr_71059[(7)] = inst_71054);

return statearr_71059;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71057__$1,inst_71055);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____0 = (function (){
var statearr_71062 = [null,null,null,null,null,null,null,null];
(statearr_71062[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__);

(statearr_71062[(1)] = (1));

return statearr_71062;
});
var cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____1 = (function (state_71057){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_71057);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e71063){var ex__70292__auto__ = e71063;
var statearr_71064_73839 = state_71057;
(statearr_71064_73839[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_71057[(4)]))){
var statearr_71066_73840 = state_71057;
(statearr_71066_73840[(1)] = cljs.core.first((state_71057[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73841 = state_71057;
state_71057 = G__73841;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__ = function(state_71057){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____1.call(this,state_71057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_71068 = f__70473__auto__();
(statearr_71068[(6)] = c__70472__auto___73838);

return statearr_71068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__71072){
var vec__71073 = p__71072;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71073,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71073,(1),null);
var job = vec__71073;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___73849 = n;
var __73850 = (0);
while(true){
if((__73850 < n__4741__auto___73849)){
var G__71092_73851 = type;
var G__71092_73852__$1 = (((G__71092_73851 instanceof cljs.core.Keyword))?G__71092_73851.fqn:null);
switch (G__71092_73852__$1) {
case "compute":
var c__70472__auto___73854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__73850,c__70472__auto___73854,G__71092_73851,G__71092_73852__$1,n__4741__auto___73849,jobs,results,process,async){
return (function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = ((function (__73850,c__70472__auto___73854,G__71092_73851,G__71092_73852__$1,n__4741__auto___73849,jobs,results,process,async){
return (function (state_71112){
var state_val_71113 = (state_71112[(1)]);
if((state_val_71113 === (1))){
var state_71112__$1 = state_71112;
var statearr_71121_73856 = state_71112__$1;
(statearr_71121_73856[(2)] = null);

(statearr_71121_73856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71113 === (2))){
var state_71112__$1 = state_71112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71112__$1,(4),jobs);
} else {
if((state_val_71113 === (3))){
var inst_71110 = (state_71112[(2)]);
var state_71112__$1 = state_71112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71112__$1,inst_71110);
} else {
if((state_val_71113 === (4))){
var inst_71100 = (state_71112[(2)]);
var inst_71101 = process(inst_71100);
var state_71112__$1 = state_71112;
if(cljs.core.truth_(inst_71101)){
var statearr_71136_73859 = state_71112__$1;
(statearr_71136_73859[(1)] = (5));

} else {
var statearr_71144_73863 = state_71112__$1;
(statearr_71144_73863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71113 === (5))){
var state_71112__$1 = state_71112;
var statearr_71147_73864 = state_71112__$1;
(statearr_71147_73864[(2)] = null);

(statearr_71147_73864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71113 === (6))){
var state_71112__$1 = state_71112;
var statearr_71154_73866 = state_71112__$1;
(statearr_71154_73866[(2)] = null);

(statearr_71154_73866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71113 === (7))){
var inst_71107 = (state_71112[(2)]);
var state_71112__$1 = state_71112;
var statearr_71156_73867 = state_71112__$1;
(statearr_71156_73867[(2)] = inst_71107);

(statearr_71156_73867[(1)] = (3));


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
});})(__73850,c__70472__auto___73854,G__71092_73851,G__71092_73852__$1,n__4741__auto___73849,jobs,results,process,async))
;
return ((function (__73850,switch__70288__auto__,c__70472__auto___73854,G__71092_73851,G__71092_73852__$1,n__4741__auto___73849,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____0 = (function (){
var statearr_71161 = [null,null,null,null,null,null,null];
(statearr_71161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__);

(statearr_71161[(1)] = (1));

return statearr_71161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____1 = (function (state_71112){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_71112);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e71162){var ex__70292__auto__ = e71162;
var statearr_71164_73868 = state_71112;
(statearr_71164_73868[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_71112[(4)]))){
var statearr_71169_73870 = state_71112;
(statearr_71169_73870[(1)] = cljs.core.first((state_71112[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73872 = state_71112;
state_71112 = G__73872;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__ = function(state_71112){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____1.call(this,state_71112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__;
})()
;})(__73850,switch__70288__auto__,c__70472__auto___73854,G__71092_73851,G__71092_73852__$1,n__4741__auto___73849,jobs,results,process,async))
})();
var state__70474__auto__ = (function (){var statearr_71177 = f__70473__auto__();
(statearr_71177[(6)] = c__70472__auto___73854);

return statearr_71177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
});})(__73850,c__70472__auto___73854,G__71092_73851,G__71092_73852__$1,n__4741__auto___73849,jobs,results,process,async))
);


break;
case "async":
var c__70472__auto___73875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__73850,c__70472__auto___73875,G__71092_73851,G__71092_73852__$1,n__4741__auto___73849,jobs,results,process,async){
return (function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = ((function (__73850,c__70472__auto___73875,G__71092_73851,G__71092_73852__$1,n__4741__auto___73849,jobs,results,process,async){
return (function (state_71198){
var state_val_71199 = (state_71198[(1)]);
if((state_val_71199 === (1))){
var state_71198__$1 = state_71198;
var statearr_71202_73876 = state_71198__$1;
(statearr_71202_73876[(2)] = null);

(statearr_71202_73876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71199 === (2))){
var state_71198__$1 = state_71198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71198__$1,(4),jobs);
} else {
if((state_val_71199 === (3))){
var inst_71196 = (state_71198[(2)]);
var state_71198__$1 = state_71198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71198__$1,inst_71196);
} else {
if((state_val_71199 === (4))){
var inst_71188 = (state_71198[(2)]);
var inst_71189 = async(inst_71188);
var state_71198__$1 = state_71198;
if(cljs.core.truth_(inst_71189)){
var statearr_71210_73880 = state_71198__$1;
(statearr_71210_73880[(1)] = (5));

} else {
var statearr_71211_73881 = state_71198__$1;
(statearr_71211_73881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71199 === (5))){
var state_71198__$1 = state_71198;
var statearr_71212_73882 = state_71198__$1;
(statearr_71212_73882[(2)] = null);

(statearr_71212_73882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71199 === (6))){
var state_71198__$1 = state_71198;
var statearr_71213_73883 = state_71198__$1;
(statearr_71213_73883[(2)] = null);

(statearr_71213_73883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71199 === (7))){
var inst_71194 = (state_71198[(2)]);
var state_71198__$1 = state_71198;
var statearr_71218_73884 = state_71198__$1;
(statearr_71218_73884[(2)] = inst_71194);

(statearr_71218_73884[(1)] = (3));


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
});})(__73850,c__70472__auto___73875,G__71092_73851,G__71092_73852__$1,n__4741__auto___73849,jobs,results,process,async))
;
return ((function (__73850,switch__70288__auto__,c__70472__auto___73875,G__71092_73851,G__71092_73852__$1,n__4741__auto___73849,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____0 = (function (){
var statearr_71228 = [null,null,null,null,null,null,null];
(statearr_71228[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__);

(statearr_71228[(1)] = (1));

return statearr_71228;
});
var cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____1 = (function (state_71198){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_71198);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e71231){var ex__70292__auto__ = e71231;
var statearr_71232_73885 = state_71198;
(statearr_71232_73885[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_71198[(4)]))){
var statearr_71235_73887 = state_71198;
(statearr_71235_73887[(1)] = cljs.core.first((state_71198[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73888 = state_71198;
state_71198 = G__73888;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__ = function(state_71198){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____1.call(this,state_71198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__;
})()
;})(__73850,switch__70288__auto__,c__70472__auto___73875,G__71092_73851,G__71092_73852__$1,n__4741__auto___73849,jobs,results,process,async))
})();
var state__70474__auto__ = (function (){var statearr_71243 = f__70473__auto__();
(statearr_71243[(6)] = c__70472__auto___73875);

return statearr_71243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
});})(__73850,c__70472__auto___73875,G__71092_73851,G__71092_73852__$1,n__4741__auto___73849,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71092_73852__$1)].join('')));

}

var G__73889 = (__73850 + (1));
__73850 = G__73889;
continue;
} else {
}
break;
}

var c__70472__auto___73890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_71277){
var state_val_71278 = (state_71277[(1)]);
if((state_val_71278 === (7))){
var inst_71269 = (state_71277[(2)]);
var state_71277__$1 = state_71277;
var statearr_71300_73891 = state_71277__$1;
(statearr_71300_73891[(2)] = inst_71269);

(statearr_71300_73891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71278 === (1))){
var state_71277__$1 = state_71277;
var statearr_71301_73892 = state_71277__$1;
(statearr_71301_73892[(2)] = null);

(statearr_71301_73892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71278 === (4))){
var inst_71252 = (state_71277[(7)]);
var inst_71252__$1 = (state_71277[(2)]);
var inst_71254 = (inst_71252__$1 == null);
var state_71277__$1 = (function (){var statearr_71305 = state_71277;
(statearr_71305[(7)] = inst_71252__$1);

return statearr_71305;
})();
if(cljs.core.truth_(inst_71254)){
var statearr_71306_73893 = state_71277__$1;
(statearr_71306_73893[(1)] = (5));

} else {
var statearr_71307_73894 = state_71277__$1;
(statearr_71307_73894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71278 === (6))){
var inst_71259 = (state_71277[(8)]);
var inst_71252 = (state_71277[(7)]);
var inst_71259__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_71260 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71261 = [inst_71252,inst_71259__$1];
var inst_71262 = (new cljs.core.PersistentVector(null,2,(5),inst_71260,inst_71261,null));
var state_71277__$1 = (function (){var statearr_71316 = state_71277;
(statearr_71316[(8)] = inst_71259__$1);

return statearr_71316;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71277__$1,(8),jobs,inst_71262);
} else {
if((state_val_71278 === (3))){
var inst_71271 = (state_71277[(2)]);
var state_71277__$1 = state_71277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71277__$1,inst_71271);
} else {
if((state_val_71278 === (2))){
var state_71277__$1 = state_71277;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71277__$1,(4),from);
} else {
if((state_val_71278 === (9))){
var inst_71266 = (state_71277[(2)]);
var state_71277__$1 = (function (){var statearr_71321 = state_71277;
(statearr_71321[(9)] = inst_71266);

return statearr_71321;
})();
var statearr_71323_73895 = state_71277__$1;
(statearr_71323_73895[(2)] = null);

(statearr_71323_73895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71278 === (5))){
var inst_71257 = cljs.core.async.close_BANG_(jobs);
var state_71277__$1 = state_71277;
var statearr_71325_73900 = state_71277__$1;
(statearr_71325_73900[(2)] = inst_71257);

(statearr_71325_73900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71278 === (8))){
var inst_71259 = (state_71277[(8)]);
var inst_71264 = (state_71277[(2)]);
var state_71277__$1 = (function (){var statearr_71326 = state_71277;
(statearr_71326[(10)] = inst_71264);

return statearr_71326;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71277__$1,(9),results,inst_71259);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____0 = (function (){
var statearr_71327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71327[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__);

(statearr_71327[(1)] = (1));

return statearr_71327;
});
var cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____1 = (function (state_71277){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_71277);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e71328){var ex__70292__auto__ = e71328;
var statearr_71329_73901 = state_71277;
(statearr_71329_73901[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_71277[(4)]))){
var statearr_71331_73904 = state_71277;
(statearr_71331_73904[(1)] = cljs.core.first((state_71277[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73911 = state_71277;
state_71277 = G__73911;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__ = function(state_71277){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____1.call(this,state_71277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_71333 = f__70473__auto__();
(statearr_71333[(6)] = c__70472__auto___73890);

return statearr_71333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));


var c__70472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_71393){
var state_val_71394 = (state_71393[(1)]);
if((state_val_71394 === (7))){
var inst_71389 = (state_71393[(2)]);
var state_71393__$1 = state_71393;
var statearr_71407_73913 = state_71393__$1;
(statearr_71407_73913[(2)] = inst_71389);

(statearr_71407_73913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71394 === (20))){
var state_71393__$1 = state_71393;
var statearr_71409_73914 = state_71393__$1;
(statearr_71409_73914[(2)] = null);

(statearr_71409_73914[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71394 === (1))){
var state_71393__$1 = state_71393;
var statearr_71411_73915 = state_71393__$1;
(statearr_71411_73915[(2)] = null);

(statearr_71411_73915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71394 === (4))){
var inst_71344 = (state_71393[(7)]);
var inst_71344__$1 = (state_71393[(2)]);
var inst_71346 = (inst_71344__$1 == null);
var state_71393__$1 = (function (){var statearr_71415 = state_71393;
(statearr_71415[(7)] = inst_71344__$1);

return statearr_71415;
})();
if(cljs.core.truth_(inst_71346)){
var statearr_71418_73916 = state_71393__$1;
(statearr_71418_73916[(1)] = (5));

} else {
var statearr_71420_73917 = state_71393__$1;
(statearr_71420_73917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71394 === (15))){
var inst_71361 = (state_71393[(8)]);
var state_71393__$1 = state_71393;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71393__$1,(18),to,inst_71361);
} else {
if((state_val_71394 === (21))){
var inst_71380 = (state_71393[(2)]);
var state_71393__$1 = state_71393;
var statearr_71424_73919 = state_71393__$1;
(statearr_71424_73919[(2)] = inst_71380);

(statearr_71424_73919[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71394 === (13))){
var inst_71386 = (state_71393[(2)]);
var state_71393__$1 = (function (){var statearr_71430 = state_71393;
(statearr_71430[(9)] = inst_71386);

return statearr_71430;
})();
var statearr_71431_73923 = state_71393__$1;
(statearr_71431_73923[(2)] = null);

(statearr_71431_73923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71394 === (6))){
var inst_71344 = (state_71393[(7)]);
var state_71393__$1 = state_71393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71393__$1,(11),inst_71344);
} else {
if((state_val_71394 === (17))){
var inst_71375 = (state_71393[(2)]);
var state_71393__$1 = state_71393;
if(cljs.core.truth_(inst_71375)){
var statearr_71441_73924 = state_71393__$1;
(statearr_71441_73924[(1)] = (19));

} else {
var statearr_71442_73925 = state_71393__$1;
(statearr_71442_73925[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71394 === (3))){
var inst_71391 = (state_71393[(2)]);
var state_71393__$1 = state_71393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71393__$1,inst_71391);
} else {
if((state_val_71394 === (12))){
var inst_71356 = (state_71393[(10)]);
var state_71393__$1 = state_71393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71393__$1,(14),inst_71356);
} else {
if((state_val_71394 === (2))){
var state_71393__$1 = state_71393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71393__$1,(4),results);
} else {
if((state_val_71394 === (19))){
var state_71393__$1 = state_71393;
var statearr_71454_73926 = state_71393__$1;
(statearr_71454_73926[(2)] = null);

(statearr_71454_73926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71394 === (11))){
var inst_71356 = (state_71393[(2)]);
var state_71393__$1 = (function (){var statearr_71457 = state_71393;
(statearr_71457[(10)] = inst_71356);

return statearr_71457;
})();
var statearr_71460_73927 = state_71393__$1;
(statearr_71460_73927[(2)] = null);

(statearr_71460_73927[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71394 === (9))){
var state_71393__$1 = state_71393;
var statearr_71463_73928 = state_71393__$1;
(statearr_71463_73928[(2)] = null);

(statearr_71463_73928[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71394 === (5))){
var state_71393__$1 = state_71393;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71466_73930 = state_71393__$1;
(statearr_71466_73930[(1)] = (8));

} else {
var statearr_71467_73931 = state_71393__$1;
(statearr_71467_73931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71394 === (14))){
var inst_71367 = (state_71393[(11)]);
var inst_71361 = (state_71393[(8)]);
var inst_71361__$1 = (state_71393[(2)]);
var inst_71365 = (inst_71361__$1 == null);
var inst_71367__$1 = cljs.core.not(inst_71365);
var state_71393__$1 = (function (){var statearr_71481 = state_71393;
(statearr_71481[(11)] = inst_71367__$1);

(statearr_71481[(8)] = inst_71361__$1);

return statearr_71481;
})();
if(inst_71367__$1){
var statearr_71486_73933 = state_71393__$1;
(statearr_71486_73933[(1)] = (15));

} else {
var statearr_71491_73934 = state_71393__$1;
(statearr_71491_73934[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71394 === (16))){
var inst_71367 = (state_71393[(11)]);
var state_71393__$1 = state_71393;
var statearr_71494_73935 = state_71393__$1;
(statearr_71494_73935[(2)] = inst_71367);

(statearr_71494_73935[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71394 === (10))){
var inst_71353 = (state_71393[(2)]);
var state_71393__$1 = state_71393;
var statearr_71497_73936 = state_71393__$1;
(statearr_71497_73936[(2)] = inst_71353);

(statearr_71497_73936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71394 === (18))){
var inst_71372 = (state_71393[(2)]);
var state_71393__$1 = state_71393;
var statearr_71501_73937 = state_71393__$1;
(statearr_71501_73937[(2)] = inst_71372);

(statearr_71501_73937[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71394 === (8))){
var inst_71350 = cljs.core.async.close_BANG_(to);
var state_71393__$1 = state_71393;
var statearr_71505_73938 = state_71393__$1;
(statearr_71505_73938[(2)] = inst_71350);

(statearr_71505_73938[(1)] = (10));


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
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____0 = (function (){
var statearr_71512 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71512[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__);

(statearr_71512[(1)] = (1));

return statearr_71512;
});
var cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____1 = (function (state_71393){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_71393);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e71514){var ex__70292__auto__ = e71514;
var statearr_71517_73941 = state_71393;
(statearr_71517_73941[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_71393[(4)]))){
var statearr_71518_73942 = state_71393;
(statearr_71518_73942[(1)] = cljs.core.first((state_71393[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73943 = state_71393;
state_71393 = G__73943;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__ = function(state_71393){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____1.call(this,state_71393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__70289__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_71524 = f__70473__auto__();
(statearr_71524[(6)] = c__70472__auto__);

return statearr_71524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));

return c__70472__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__71533 = arguments.length;
switch (G__71533) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__71554 = arguments.length;
switch (G__71554) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__71579 = arguments.length;
switch (G__71579) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__70472__auto___73963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_71628){
var state_val_71629 = (state_71628[(1)]);
if((state_val_71629 === (7))){
var inst_71622 = (state_71628[(2)]);
var state_71628__$1 = state_71628;
var statearr_71634_73967 = state_71628__$1;
(statearr_71634_73967[(2)] = inst_71622);

(statearr_71634_73967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71629 === (1))){
var state_71628__$1 = state_71628;
var statearr_71638_73968 = state_71628__$1;
(statearr_71638_73968[(2)] = null);

(statearr_71638_73968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71629 === (4))){
var inst_71603 = (state_71628[(7)]);
var inst_71603__$1 = (state_71628[(2)]);
var inst_71604 = (inst_71603__$1 == null);
var state_71628__$1 = (function (){var statearr_71643 = state_71628;
(statearr_71643[(7)] = inst_71603__$1);

return statearr_71643;
})();
if(cljs.core.truth_(inst_71604)){
var statearr_71646_73969 = state_71628__$1;
(statearr_71646_73969[(1)] = (5));

} else {
var statearr_71647_73970 = state_71628__$1;
(statearr_71647_73970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71629 === (13))){
var state_71628__$1 = state_71628;
var statearr_71650_73971 = state_71628__$1;
(statearr_71650_73971[(2)] = null);

(statearr_71650_73971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71629 === (6))){
var inst_71603 = (state_71628[(7)]);
var inst_71609 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_71603) : p.call(null,inst_71603));
var state_71628__$1 = state_71628;
if(cljs.core.truth_(inst_71609)){
var statearr_71651_73976 = state_71628__$1;
(statearr_71651_73976[(1)] = (9));

} else {
var statearr_71652_73977 = state_71628__$1;
(statearr_71652_73977[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71629 === (3))){
var inst_71626 = (state_71628[(2)]);
var state_71628__$1 = state_71628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71628__$1,inst_71626);
} else {
if((state_val_71629 === (12))){
var state_71628__$1 = state_71628;
var statearr_71654_73979 = state_71628__$1;
(statearr_71654_73979[(2)] = null);

(statearr_71654_73979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71629 === (2))){
var state_71628__$1 = state_71628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71628__$1,(4),ch);
} else {
if((state_val_71629 === (11))){
var inst_71603 = (state_71628[(7)]);
var inst_71613 = (state_71628[(2)]);
var state_71628__$1 = state_71628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71628__$1,(8),inst_71613,inst_71603);
} else {
if((state_val_71629 === (9))){
var state_71628__$1 = state_71628;
var statearr_71655_73980 = state_71628__$1;
(statearr_71655_73980[(2)] = tc);

(statearr_71655_73980[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71629 === (5))){
var inst_71606 = cljs.core.async.close_BANG_(tc);
var inst_71607 = cljs.core.async.close_BANG_(fc);
var state_71628__$1 = (function (){var statearr_71656 = state_71628;
(statearr_71656[(8)] = inst_71606);

return statearr_71656;
})();
var statearr_71657_73985 = state_71628__$1;
(statearr_71657_73985[(2)] = inst_71607);

(statearr_71657_73985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71629 === (14))){
var inst_71620 = (state_71628[(2)]);
var state_71628__$1 = state_71628;
var statearr_71658_73986 = state_71628__$1;
(statearr_71658_73986[(2)] = inst_71620);

(statearr_71658_73986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71629 === (10))){
var state_71628__$1 = state_71628;
var statearr_71659_73990 = state_71628__$1;
(statearr_71659_73990[(2)] = fc);

(statearr_71659_73990[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71629 === (8))){
var inst_71615 = (state_71628[(2)]);
var state_71628__$1 = state_71628;
if(cljs.core.truth_(inst_71615)){
var statearr_71660_73992 = state_71628__$1;
(statearr_71660_73992[(1)] = (12));

} else {
var statearr_71661_73993 = state_71628__$1;
(statearr_71661_73993[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__70289__auto__ = null;
var cljs$core$async$state_machine__70289__auto____0 = (function (){
var statearr_71662 = [null,null,null,null,null,null,null,null,null];
(statearr_71662[(0)] = cljs$core$async$state_machine__70289__auto__);

(statearr_71662[(1)] = (1));

return statearr_71662;
});
var cljs$core$async$state_machine__70289__auto____1 = (function (state_71628){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_71628);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e71663){var ex__70292__auto__ = e71663;
var statearr_71664_73994 = state_71628;
(statearr_71664_73994[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_71628[(4)]))){
var statearr_71665_73996 = state_71628;
(statearr_71665_73996[(1)] = cljs.core.first((state_71628[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74000 = state_71628;
state_71628 = G__74000;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$state_machine__70289__auto__ = function(state_71628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70289__auto____1.call(this,state_71628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70289__auto____0;
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70289__auto____1;
return cljs$core$async$state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_71667 = f__70473__auto__();
(statearr_71667[(6)] = c__70472__auto___73963);

return statearr_71667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__70472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_71695){
var state_val_71696 = (state_71695[(1)]);
if((state_val_71696 === (7))){
var inst_71688 = (state_71695[(2)]);
var state_71695__$1 = state_71695;
var statearr_71709_74004 = state_71695__$1;
(statearr_71709_74004[(2)] = inst_71688);

(statearr_71709_74004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71696 === (1))){
var inst_71668 = init;
var inst_71670 = inst_71668;
var state_71695__$1 = (function (){var statearr_71711 = state_71695;
(statearr_71711[(7)] = inst_71670);

return statearr_71711;
})();
var statearr_71715_74008 = state_71695__$1;
(statearr_71715_74008[(2)] = null);

(statearr_71715_74008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71696 === (4))){
var inst_71673 = (state_71695[(8)]);
var inst_71673__$1 = (state_71695[(2)]);
var inst_71674 = (inst_71673__$1 == null);
var state_71695__$1 = (function (){var statearr_71716 = state_71695;
(statearr_71716[(8)] = inst_71673__$1);

return statearr_71716;
})();
if(cljs.core.truth_(inst_71674)){
var statearr_71717_74009 = state_71695__$1;
(statearr_71717_74009[(1)] = (5));

} else {
var statearr_71718_74010 = state_71695__$1;
(statearr_71718_74010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71696 === (6))){
var inst_71670 = (state_71695[(7)]);
var inst_71678 = (state_71695[(9)]);
var inst_71673 = (state_71695[(8)]);
var inst_71678__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_71670,inst_71673) : f.call(null,inst_71670,inst_71673));
var inst_71679 = cljs.core.reduced_QMARK_(inst_71678__$1);
var state_71695__$1 = (function (){var statearr_71719 = state_71695;
(statearr_71719[(9)] = inst_71678__$1);

return statearr_71719;
})();
if(inst_71679){
var statearr_71720_74011 = state_71695__$1;
(statearr_71720_74011[(1)] = (8));

} else {
var statearr_71721_74012 = state_71695__$1;
(statearr_71721_74012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71696 === (3))){
var inst_71690 = (state_71695[(2)]);
var state_71695__$1 = state_71695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71695__$1,inst_71690);
} else {
if((state_val_71696 === (2))){
var state_71695__$1 = state_71695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71695__$1,(4),ch);
} else {
if((state_val_71696 === (9))){
var inst_71678 = (state_71695[(9)]);
var inst_71670 = inst_71678;
var state_71695__$1 = (function (){var statearr_71724 = state_71695;
(statearr_71724[(7)] = inst_71670);

return statearr_71724;
})();
var statearr_71729_74016 = state_71695__$1;
(statearr_71729_74016[(2)] = null);

(statearr_71729_74016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71696 === (5))){
var inst_71670 = (state_71695[(7)]);
var state_71695__$1 = state_71695;
var statearr_71730_74017 = state_71695__$1;
(statearr_71730_74017[(2)] = inst_71670);

(statearr_71730_74017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71696 === (10))){
var inst_71685 = (state_71695[(2)]);
var state_71695__$1 = state_71695;
var statearr_71734_74018 = state_71695__$1;
(statearr_71734_74018[(2)] = inst_71685);

(statearr_71734_74018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71696 === (8))){
var inst_71678 = (state_71695[(9)]);
var inst_71681 = cljs.core.deref(inst_71678);
var state_71695__$1 = state_71695;
var statearr_71735_74019 = state_71695__$1;
(statearr_71735_74019[(2)] = inst_71681);

(statearr_71735_74019[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__70289__auto__ = null;
var cljs$core$async$reduce_$_state_machine__70289__auto____0 = (function (){
var statearr_71741 = [null,null,null,null,null,null,null,null,null,null];
(statearr_71741[(0)] = cljs$core$async$reduce_$_state_machine__70289__auto__);

(statearr_71741[(1)] = (1));

return statearr_71741;
});
var cljs$core$async$reduce_$_state_machine__70289__auto____1 = (function (state_71695){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_71695);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e71742){var ex__70292__auto__ = e71742;
var statearr_71746_74021 = state_71695;
(statearr_71746_74021[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_71695[(4)]))){
var statearr_71747_74022 = state_71695;
(statearr_71747_74022[(1)] = cljs.core.first((state_71695[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74023 = state_71695;
state_71695 = G__74023;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__70289__auto__ = function(state_71695){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__70289__auto____1.call(this,state_71695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__70289__auto____0;
cljs$core$async$reduce_$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__70289__auto____1;
return cljs$core$async$reduce_$_state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_71749 = f__70473__auto__();
(statearr_71749[(6)] = c__70472__auto__);

return statearr_71749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));

return c__70472__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__70472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_71759){
var state_val_71760 = (state_71759[(1)]);
if((state_val_71760 === (1))){
var inst_71754 = cljs.core.async.reduce(f__$1,init,ch);
var state_71759__$1 = state_71759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71759__$1,(2),inst_71754);
} else {
if((state_val_71760 === (2))){
var inst_71756 = (state_71759[(2)]);
var inst_71757 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_71756) : f__$1.call(null,inst_71756));
var state_71759__$1 = state_71759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71759__$1,inst_71757);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__70289__auto__ = null;
var cljs$core$async$transduce_$_state_machine__70289__auto____0 = (function (){
var statearr_71764 = [null,null,null,null,null,null,null];
(statearr_71764[(0)] = cljs$core$async$transduce_$_state_machine__70289__auto__);

(statearr_71764[(1)] = (1));

return statearr_71764;
});
var cljs$core$async$transduce_$_state_machine__70289__auto____1 = (function (state_71759){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_71759);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e71765){var ex__70292__auto__ = e71765;
var statearr_71766_74024 = state_71759;
(statearr_71766_74024[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_71759[(4)]))){
var statearr_71767_74025 = state_71759;
(statearr_71767_74025[(1)] = cljs.core.first((state_71759[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74026 = state_71759;
state_71759 = G__74026;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__70289__auto__ = function(state_71759){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__70289__auto____1.call(this,state_71759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__70289__auto____0;
cljs$core$async$transduce_$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__70289__auto____1;
return cljs$core$async$transduce_$_state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_71774 = f__70473__auto__();
(statearr_71774[(6)] = c__70472__auto__);

return statearr_71774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));

return c__70472__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__71776 = arguments.length;
switch (G__71776) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__70472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_71801){
var state_val_71802 = (state_71801[(1)]);
if((state_val_71802 === (7))){
var inst_71783 = (state_71801[(2)]);
var state_71801__$1 = state_71801;
var statearr_71805_74028 = state_71801__$1;
(statearr_71805_74028[(2)] = inst_71783);

(statearr_71805_74028[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71802 === (1))){
var inst_71777 = cljs.core.seq(coll);
var inst_71778 = inst_71777;
var state_71801__$1 = (function (){var statearr_71807 = state_71801;
(statearr_71807[(7)] = inst_71778);

return statearr_71807;
})();
var statearr_71811_74029 = state_71801__$1;
(statearr_71811_74029[(2)] = null);

(statearr_71811_74029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71802 === (4))){
var inst_71778 = (state_71801[(7)]);
var inst_71781 = cljs.core.first(inst_71778);
var state_71801__$1 = state_71801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71801__$1,(7),ch,inst_71781);
} else {
if((state_val_71802 === (13))){
var inst_71795 = (state_71801[(2)]);
var state_71801__$1 = state_71801;
var statearr_71815_74030 = state_71801__$1;
(statearr_71815_74030[(2)] = inst_71795);

(statearr_71815_74030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71802 === (6))){
var inst_71786 = (state_71801[(2)]);
var state_71801__$1 = state_71801;
if(cljs.core.truth_(inst_71786)){
var statearr_71816_74031 = state_71801__$1;
(statearr_71816_74031[(1)] = (8));

} else {
var statearr_71817_74032 = state_71801__$1;
(statearr_71817_74032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71802 === (3))){
var inst_71799 = (state_71801[(2)]);
var state_71801__$1 = state_71801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71801__$1,inst_71799);
} else {
if((state_val_71802 === (12))){
var state_71801__$1 = state_71801;
var statearr_71820_74034 = state_71801__$1;
(statearr_71820_74034[(2)] = null);

(statearr_71820_74034[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71802 === (2))){
var inst_71778 = (state_71801[(7)]);
var state_71801__$1 = state_71801;
if(cljs.core.truth_(inst_71778)){
var statearr_71821_74035 = state_71801__$1;
(statearr_71821_74035[(1)] = (4));

} else {
var statearr_71822_74036 = state_71801__$1;
(statearr_71822_74036[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71802 === (11))){
var inst_71792 = cljs.core.async.close_BANG_(ch);
var state_71801__$1 = state_71801;
var statearr_71823_74037 = state_71801__$1;
(statearr_71823_74037[(2)] = inst_71792);

(statearr_71823_74037[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71802 === (9))){
var state_71801__$1 = state_71801;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71825_74039 = state_71801__$1;
(statearr_71825_74039[(1)] = (11));

} else {
var statearr_71829_74040 = state_71801__$1;
(statearr_71829_74040[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71802 === (5))){
var inst_71778 = (state_71801[(7)]);
var state_71801__$1 = state_71801;
var statearr_71830_74041 = state_71801__$1;
(statearr_71830_74041[(2)] = inst_71778);

(statearr_71830_74041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71802 === (10))){
var inst_71797 = (state_71801[(2)]);
var state_71801__$1 = state_71801;
var statearr_71831_74042 = state_71801__$1;
(statearr_71831_74042[(2)] = inst_71797);

(statearr_71831_74042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71802 === (8))){
var inst_71778 = (state_71801[(7)]);
var inst_71788 = cljs.core.next(inst_71778);
var inst_71778__$1 = inst_71788;
var state_71801__$1 = (function (){var statearr_71832 = state_71801;
(statearr_71832[(7)] = inst_71778__$1);

return statearr_71832;
})();
var statearr_71833_74043 = state_71801__$1;
(statearr_71833_74043[(2)] = null);

(statearr_71833_74043[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__70289__auto__ = null;
var cljs$core$async$state_machine__70289__auto____0 = (function (){
var statearr_71834 = [null,null,null,null,null,null,null,null];
(statearr_71834[(0)] = cljs$core$async$state_machine__70289__auto__);

(statearr_71834[(1)] = (1));

return statearr_71834;
});
var cljs$core$async$state_machine__70289__auto____1 = (function (state_71801){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_71801);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e71837){var ex__70292__auto__ = e71837;
var statearr_71838_74044 = state_71801;
(statearr_71838_74044[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_71801[(4)]))){
var statearr_71839_74045 = state_71801;
(statearr_71839_74045[(1)] = cljs.core.first((state_71801[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74046 = state_71801;
state_71801 = G__74046;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$state_machine__70289__auto__ = function(state_71801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70289__auto____1.call(this,state_71801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70289__auto____0;
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70289__auto____1;
return cljs$core$async$state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_71840 = f__70473__auto__();
(statearr_71840[(6)] = c__70472__auto__);

return statearr_71840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));

return c__70472__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__71846 = arguments.length;
switch (G__71846) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_74057 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_74057(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_74059 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_74059(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_74062 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_74062(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_74063 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_74063(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71901 = (function (ch,cs,meta71902){
this.ch = ch;
this.cs = cs;
this.meta71902 = meta71902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71903,meta71902__$1){
var self__ = this;
var _71903__$1 = this;
return (new cljs.core.async.t_cljs$core$async71901(self__.ch,self__.cs,meta71902__$1));
}));

(cljs.core.async.t_cljs$core$async71901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71903){
var self__ = this;
var _71903__$1 = this;
return self__.meta71902;
}));

(cljs.core.async.t_cljs$core$async71901.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async71901.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71901.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async71901.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async71901.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async71901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta71902","meta71902",1768552242,null)], null);
}));

(cljs.core.async.t_cljs$core$async71901.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71901");

(cljs.core.async.t_cljs$core$async71901.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async71901");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71901.
 */
cljs.core.async.__GT_t_cljs$core$async71901 = (function cljs$core$async$mult_$___GT_t_cljs$core$async71901(ch__$1,cs__$1,meta71902){
return (new cljs.core.async.t_cljs$core$async71901(ch__$1,cs__$1,meta71902));
});

}

return (new cljs.core.async.t_cljs$core$async71901(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__70472__auto___74076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_72140){
var state_val_72141 = (state_72140[(1)]);
if((state_val_72141 === (7))){
var inst_72135 = (state_72140[(2)]);
var state_72140__$1 = state_72140;
var statearr_72143_74077 = state_72140__$1;
(statearr_72143_74077[(2)] = inst_72135);

(statearr_72143_74077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (20))){
var inst_72023 = (state_72140[(7)]);
var inst_72044 = cljs.core.first(inst_72023);
var inst_72045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72044,(0),null);
var inst_72049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72044,(1),null);
var state_72140__$1 = (function (){var statearr_72152 = state_72140;
(statearr_72152[(8)] = inst_72045);

return statearr_72152;
})();
if(cljs.core.truth_(inst_72049)){
var statearr_72153_74082 = state_72140__$1;
(statearr_72153_74082[(1)] = (22));

} else {
var statearr_72158_74083 = state_72140__$1;
(statearr_72158_74083[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (27))){
var inst_72080 = (state_72140[(9)]);
var inst_71975 = (state_72140[(10)]);
var inst_72078 = (state_72140[(11)]);
var inst_72085 = (state_72140[(12)]);
var inst_72085__$1 = cljs.core._nth(inst_72078,inst_72080);
var inst_72086 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_72085__$1,inst_71975,done);
var state_72140__$1 = (function (){var statearr_72164 = state_72140;
(statearr_72164[(12)] = inst_72085__$1);

return statearr_72164;
})();
if(cljs.core.truth_(inst_72086)){
var statearr_72165_74088 = state_72140__$1;
(statearr_72165_74088[(1)] = (30));

} else {
var statearr_72166_74089 = state_72140__$1;
(statearr_72166_74089[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (1))){
var state_72140__$1 = state_72140;
var statearr_72167_74096 = state_72140__$1;
(statearr_72167_74096[(2)] = null);

(statearr_72167_74096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (24))){
var inst_72023 = (state_72140[(7)]);
var inst_72054 = (state_72140[(2)]);
var inst_72055 = cljs.core.next(inst_72023);
var inst_71984 = inst_72055;
var inst_71985 = null;
var inst_71986 = (0);
var inst_71987 = (0);
var state_72140__$1 = (function (){var statearr_72169 = state_72140;
(statearr_72169[(13)] = inst_71987);

(statearr_72169[(14)] = inst_71986);

(statearr_72169[(15)] = inst_71984);

(statearr_72169[(16)] = inst_72054);

(statearr_72169[(17)] = inst_71985);

return statearr_72169;
})();
var statearr_72171_74097 = state_72140__$1;
(statearr_72171_74097[(2)] = null);

(statearr_72171_74097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (39))){
var state_72140__$1 = state_72140;
var statearr_72180_74098 = state_72140__$1;
(statearr_72180_74098[(2)] = null);

(statearr_72180_74098[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (4))){
var inst_71975 = (state_72140[(10)]);
var inst_71975__$1 = (state_72140[(2)]);
var inst_71976 = (inst_71975__$1 == null);
var state_72140__$1 = (function (){var statearr_72181 = state_72140;
(statearr_72181[(10)] = inst_71975__$1);

return statearr_72181;
})();
if(cljs.core.truth_(inst_71976)){
var statearr_72182_74099 = state_72140__$1;
(statearr_72182_74099[(1)] = (5));

} else {
var statearr_72183_74100 = state_72140__$1;
(statearr_72183_74100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (15))){
var inst_71987 = (state_72140[(13)]);
var inst_71986 = (state_72140[(14)]);
var inst_71984 = (state_72140[(15)]);
var inst_71985 = (state_72140[(17)]);
var inst_72013 = (state_72140[(2)]);
var inst_72015 = (inst_71987 + (1));
var tmp72177 = inst_71986;
var tmp72178 = inst_71984;
var tmp72179 = inst_71985;
var inst_71984__$1 = tmp72178;
var inst_71985__$1 = tmp72179;
var inst_71986__$1 = tmp72177;
var inst_71987__$1 = inst_72015;
var state_72140__$1 = (function (){var statearr_72184 = state_72140;
(statearr_72184[(13)] = inst_71987__$1);

(statearr_72184[(18)] = inst_72013);

(statearr_72184[(14)] = inst_71986__$1);

(statearr_72184[(15)] = inst_71984__$1);

(statearr_72184[(17)] = inst_71985__$1);

return statearr_72184;
})();
var statearr_72186_74101 = state_72140__$1;
(statearr_72186_74101[(2)] = null);

(statearr_72186_74101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (21))){
var inst_72058 = (state_72140[(2)]);
var state_72140__$1 = state_72140;
var statearr_72191_74102 = state_72140__$1;
(statearr_72191_74102[(2)] = inst_72058);

(statearr_72191_74102[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (31))){
var inst_72085 = (state_72140[(12)]);
var inst_72089 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_72085);
var state_72140__$1 = state_72140;
var statearr_72192_74103 = state_72140__$1;
(statearr_72192_74103[(2)] = inst_72089);

(statearr_72192_74103[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (32))){
var inst_72077 = (state_72140[(19)]);
var inst_72080 = (state_72140[(9)]);
var inst_72078 = (state_72140[(11)]);
var inst_72079 = (state_72140[(20)]);
var inst_72091 = (state_72140[(2)]);
var inst_72092 = (inst_72080 + (1));
var tmp72188 = inst_72077;
var tmp72189 = inst_72078;
var tmp72190 = inst_72079;
var inst_72077__$1 = tmp72188;
var inst_72078__$1 = tmp72189;
var inst_72079__$1 = tmp72190;
var inst_72080__$1 = inst_72092;
var state_72140__$1 = (function (){var statearr_72198 = state_72140;
(statearr_72198[(19)] = inst_72077__$1);

(statearr_72198[(9)] = inst_72080__$1);

(statearr_72198[(21)] = inst_72091);

(statearr_72198[(11)] = inst_72078__$1);

(statearr_72198[(20)] = inst_72079__$1);

return statearr_72198;
})();
var statearr_72199_74104 = state_72140__$1;
(statearr_72199_74104[(2)] = null);

(statearr_72199_74104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (40))){
var inst_72107 = (state_72140[(22)]);
var inst_72111 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_72107);
var state_72140__$1 = state_72140;
var statearr_72200_74105 = state_72140__$1;
(statearr_72200_74105[(2)] = inst_72111);

(statearr_72200_74105[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (33))){
var inst_72096 = (state_72140[(23)]);
var inst_72099 = cljs.core.chunked_seq_QMARK_(inst_72096);
var state_72140__$1 = state_72140;
if(inst_72099){
var statearr_72201_74106 = state_72140__$1;
(statearr_72201_74106[(1)] = (36));

} else {
var statearr_72202_74107 = state_72140__$1;
(statearr_72202_74107[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (13))){
var inst_72001 = (state_72140[(24)]);
var inst_72009 = cljs.core.async.close_BANG_(inst_72001);
var state_72140__$1 = state_72140;
var statearr_72210_74108 = state_72140__$1;
(statearr_72210_74108[(2)] = inst_72009);

(statearr_72210_74108[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (22))){
var inst_72045 = (state_72140[(8)]);
var inst_72051 = cljs.core.async.close_BANG_(inst_72045);
var state_72140__$1 = state_72140;
var statearr_72211_74123 = state_72140__$1;
(statearr_72211_74123[(2)] = inst_72051);

(statearr_72211_74123[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (36))){
var inst_72096 = (state_72140[(23)]);
var inst_72101 = cljs.core.chunk_first(inst_72096);
var inst_72103 = cljs.core.chunk_rest(inst_72096);
var inst_72104 = cljs.core.count(inst_72101);
var inst_72077 = inst_72103;
var inst_72078 = inst_72101;
var inst_72079 = inst_72104;
var inst_72080 = (0);
var state_72140__$1 = (function (){var statearr_72216 = state_72140;
(statearr_72216[(19)] = inst_72077);

(statearr_72216[(9)] = inst_72080);

(statearr_72216[(11)] = inst_72078);

(statearr_72216[(20)] = inst_72079);

return statearr_72216;
})();
var statearr_72218_74133 = state_72140__$1;
(statearr_72218_74133[(2)] = null);

(statearr_72218_74133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (41))){
var inst_72096 = (state_72140[(23)]);
var inst_72113 = (state_72140[(2)]);
var inst_72114 = cljs.core.next(inst_72096);
var inst_72077 = inst_72114;
var inst_72078 = null;
var inst_72079 = (0);
var inst_72080 = (0);
var state_72140__$1 = (function (){var statearr_72228 = state_72140;
(statearr_72228[(19)] = inst_72077);

(statearr_72228[(25)] = inst_72113);

(statearr_72228[(9)] = inst_72080);

(statearr_72228[(11)] = inst_72078);

(statearr_72228[(20)] = inst_72079);

return statearr_72228;
})();
var statearr_72232_74141 = state_72140__$1;
(statearr_72232_74141[(2)] = null);

(statearr_72232_74141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (43))){
var state_72140__$1 = state_72140;
var statearr_72234_74142 = state_72140__$1;
(statearr_72234_74142[(2)] = null);

(statearr_72234_74142[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (29))){
var inst_72122 = (state_72140[(2)]);
var state_72140__$1 = state_72140;
var statearr_72238_74143 = state_72140__$1;
(statearr_72238_74143[(2)] = inst_72122);

(statearr_72238_74143[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (44))){
var inst_72132 = (state_72140[(2)]);
var state_72140__$1 = (function (){var statearr_72240 = state_72140;
(statearr_72240[(26)] = inst_72132);

return statearr_72240;
})();
var statearr_72242_74144 = state_72140__$1;
(statearr_72242_74144[(2)] = null);

(statearr_72242_74144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (6))){
var inst_72069 = (state_72140[(27)]);
var inst_72068 = cljs.core.deref(cs);
var inst_72069__$1 = cljs.core.keys(inst_72068);
var inst_72070 = cljs.core.count(inst_72069__$1);
var inst_72071 = cljs.core.reset_BANG_(dctr,inst_72070);
var inst_72076 = cljs.core.seq(inst_72069__$1);
var inst_72077 = inst_72076;
var inst_72078 = null;
var inst_72079 = (0);
var inst_72080 = (0);
var state_72140__$1 = (function (){var statearr_72250 = state_72140;
(statearr_72250[(19)] = inst_72077);

(statearr_72250[(9)] = inst_72080);

(statearr_72250[(11)] = inst_72078);

(statearr_72250[(28)] = inst_72071);

(statearr_72250[(20)] = inst_72079);

(statearr_72250[(27)] = inst_72069__$1);

return statearr_72250;
})();
var statearr_72251_74153 = state_72140__$1;
(statearr_72251_74153[(2)] = null);

(statearr_72251_74153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (28))){
var inst_72077 = (state_72140[(19)]);
var inst_72096 = (state_72140[(23)]);
var inst_72096__$1 = cljs.core.seq(inst_72077);
var state_72140__$1 = (function (){var statearr_72257 = state_72140;
(statearr_72257[(23)] = inst_72096__$1);

return statearr_72257;
})();
if(inst_72096__$1){
var statearr_72260_74160 = state_72140__$1;
(statearr_72260_74160[(1)] = (33));

} else {
var statearr_72261_74161 = state_72140__$1;
(statearr_72261_74161[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (25))){
var inst_72080 = (state_72140[(9)]);
var inst_72079 = (state_72140[(20)]);
var inst_72082 = (inst_72080 < inst_72079);
var inst_72083 = inst_72082;
var state_72140__$1 = state_72140;
if(cljs.core.truth_(inst_72083)){
var statearr_72262_74165 = state_72140__$1;
(statearr_72262_74165[(1)] = (27));

} else {
var statearr_72265_74172 = state_72140__$1;
(statearr_72265_74172[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (34))){
var state_72140__$1 = state_72140;
var statearr_72268_74180 = state_72140__$1;
(statearr_72268_74180[(2)] = null);

(statearr_72268_74180[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (17))){
var state_72140__$1 = state_72140;
var statearr_72271_74181 = state_72140__$1;
(statearr_72271_74181[(2)] = null);

(statearr_72271_74181[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (3))){
var inst_72137 = (state_72140[(2)]);
var state_72140__$1 = state_72140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72140__$1,inst_72137);
} else {
if((state_val_72141 === (12))){
var inst_72063 = (state_72140[(2)]);
var state_72140__$1 = state_72140;
var statearr_72280_74182 = state_72140__$1;
(statearr_72280_74182[(2)] = inst_72063);

(statearr_72280_74182[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (2))){
var state_72140__$1 = state_72140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72140__$1,(4),ch);
} else {
if((state_val_72141 === (23))){
var state_72140__$1 = state_72140;
var statearr_72285_74183 = state_72140__$1;
(statearr_72285_74183[(2)] = null);

(statearr_72285_74183[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (35))){
var inst_72120 = (state_72140[(2)]);
var state_72140__$1 = state_72140;
var statearr_72291_74184 = state_72140__$1;
(statearr_72291_74184[(2)] = inst_72120);

(statearr_72291_74184[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (19))){
var inst_72023 = (state_72140[(7)]);
var inst_72035 = cljs.core.chunk_first(inst_72023);
var inst_72036 = cljs.core.chunk_rest(inst_72023);
var inst_72037 = cljs.core.count(inst_72035);
var inst_71984 = inst_72036;
var inst_71985 = inst_72035;
var inst_71986 = inst_72037;
var inst_71987 = (0);
var state_72140__$1 = (function (){var statearr_72297 = state_72140;
(statearr_72297[(13)] = inst_71987);

(statearr_72297[(14)] = inst_71986);

(statearr_72297[(15)] = inst_71984);

(statearr_72297[(17)] = inst_71985);

return statearr_72297;
})();
var statearr_72306_74187 = state_72140__$1;
(statearr_72306_74187[(2)] = null);

(statearr_72306_74187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (11))){
var inst_72023 = (state_72140[(7)]);
var inst_71984 = (state_72140[(15)]);
var inst_72023__$1 = cljs.core.seq(inst_71984);
var state_72140__$1 = (function (){var statearr_72312 = state_72140;
(statearr_72312[(7)] = inst_72023__$1);

return statearr_72312;
})();
if(inst_72023__$1){
var statearr_72318_74192 = state_72140__$1;
(statearr_72318_74192[(1)] = (16));

} else {
var statearr_72323_74194 = state_72140__$1;
(statearr_72323_74194[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (9))){
var inst_72065 = (state_72140[(2)]);
var state_72140__$1 = state_72140;
var statearr_72324_74197 = state_72140__$1;
(statearr_72324_74197[(2)] = inst_72065);

(statearr_72324_74197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (5))){
var inst_71982 = cljs.core.deref(cs);
var inst_71983 = cljs.core.seq(inst_71982);
var inst_71984 = inst_71983;
var inst_71985 = null;
var inst_71986 = (0);
var inst_71987 = (0);
var state_72140__$1 = (function (){var statearr_72325 = state_72140;
(statearr_72325[(13)] = inst_71987);

(statearr_72325[(14)] = inst_71986);

(statearr_72325[(15)] = inst_71984);

(statearr_72325[(17)] = inst_71985);

return statearr_72325;
})();
var statearr_72328_74198 = state_72140__$1;
(statearr_72328_74198[(2)] = null);

(statearr_72328_74198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (14))){
var state_72140__$1 = state_72140;
var statearr_72333_74200 = state_72140__$1;
(statearr_72333_74200[(2)] = null);

(statearr_72333_74200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (45))){
var inst_72129 = (state_72140[(2)]);
var state_72140__$1 = state_72140;
var statearr_72334_74201 = state_72140__$1;
(statearr_72334_74201[(2)] = inst_72129);

(statearr_72334_74201[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (26))){
var inst_72069 = (state_72140[(27)]);
var inst_72124 = (state_72140[(2)]);
var inst_72125 = cljs.core.seq(inst_72069);
var state_72140__$1 = (function (){var statearr_72335 = state_72140;
(statearr_72335[(29)] = inst_72124);

return statearr_72335;
})();
if(inst_72125){
var statearr_72336_74202 = state_72140__$1;
(statearr_72336_74202[(1)] = (42));

} else {
var statearr_72337_74204 = state_72140__$1;
(statearr_72337_74204[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (16))){
var inst_72023 = (state_72140[(7)]);
var inst_72033 = cljs.core.chunked_seq_QMARK_(inst_72023);
var state_72140__$1 = state_72140;
if(inst_72033){
var statearr_72342_74208 = state_72140__$1;
(statearr_72342_74208[(1)] = (19));

} else {
var statearr_72343_74214 = state_72140__$1;
(statearr_72343_74214[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (38))){
var inst_72117 = (state_72140[(2)]);
var state_72140__$1 = state_72140;
var statearr_72344_74218 = state_72140__$1;
(statearr_72344_74218[(2)] = inst_72117);

(statearr_72344_74218[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (30))){
var state_72140__$1 = state_72140;
var statearr_72345_74219 = state_72140__$1;
(statearr_72345_74219[(2)] = null);

(statearr_72345_74219[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (10))){
var inst_71987 = (state_72140[(13)]);
var inst_71985 = (state_72140[(17)]);
var inst_72000 = cljs.core._nth(inst_71985,inst_71987);
var inst_72001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72000,(0),null);
var inst_72006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72000,(1),null);
var state_72140__$1 = (function (){var statearr_72346 = state_72140;
(statearr_72346[(24)] = inst_72001);

return statearr_72346;
})();
if(cljs.core.truth_(inst_72006)){
var statearr_72349_74220 = state_72140__$1;
(statearr_72349_74220[(1)] = (13));

} else {
var statearr_72351_74221 = state_72140__$1;
(statearr_72351_74221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (18))){
var inst_72061 = (state_72140[(2)]);
var state_72140__$1 = state_72140;
var statearr_72353_74222 = state_72140__$1;
(statearr_72353_74222[(2)] = inst_72061);

(statearr_72353_74222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (42))){
var state_72140__$1 = state_72140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72140__$1,(45),dchan);
} else {
if((state_val_72141 === (37))){
var inst_72096 = (state_72140[(23)]);
var inst_71975 = (state_72140[(10)]);
var inst_72107 = (state_72140[(22)]);
var inst_72107__$1 = cljs.core.first(inst_72096);
var inst_72108 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_72107__$1,inst_71975,done);
var state_72140__$1 = (function (){var statearr_72355 = state_72140;
(statearr_72355[(22)] = inst_72107__$1);

return statearr_72355;
})();
if(cljs.core.truth_(inst_72108)){
var statearr_72356_74223 = state_72140__$1;
(statearr_72356_74223[(1)] = (39));

} else {
var statearr_72357_74224 = state_72140__$1;
(statearr_72357_74224[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72141 === (8))){
var inst_71987 = (state_72140[(13)]);
var inst_71986 = (state_72140[(14)]);
var inst_71989 = (inst_71987 < inst_71986);
var inst_71990 = inst_71989;
var state_72140__$1 = state_72140;
if(cljs.core.truth_(inst_71990)){
var statearr_72362_74225 = state_72140__$1;
(statearr_72362_74225[(1)] = (10));

} else {
var statearr_72363_74226 = state_72140__$1;
(statearr_72363_74226[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__70289__auto__ = null;
var cljs$core$async$mult_$_state_machine__70289__auto____0 = (function (){
var statearr_72364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72364[(0)] = cljs$core$async$mult_$_state_machine__70289__auto__);

(statearr_72364[(1)] = (1));

return statearr_72364;
});
var cljs$core$async$mult_$_state_machine__70289__auto____1 = (function (state_72140){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_72140);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e72365){var ex__70292__auto__ = e72365;
var statearr_72367_74227 = state_72140;
(statearr_72367_74227[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_72140[(4)]))){
var statearr_72370_74228 = state_72140;
(statearr_72370_74228[(1)] = cljs.core.first((state_72140[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74229 = state_72140;
state_72140 = G__74229;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__70289__auto__ = function(state_72140){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__70289__auto____1.call(this,state_72140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__70289__auto____0;
cljs$core$async$mult_$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__70289__auto____1;
return cljs$core$async$mult_$_state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_72384 = f__70473__auto__();
(statearr_72384[(6)] = c__70472__auto___74076);

return statearr_72384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__72394 = arguments.length;
switch (G__72394) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_74231 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_74231(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_74232 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_74232(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_74233 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_74233(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_74234 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_74234(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_74236 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_74236(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___74241 = arguments.length;
var i__4865__auto___74242 = (0);
while(true){
if((i__4865__auto___74242 < len__4864__auto___74241)){
args__4870__auto__.push((arguments[i__4865__auto___74242]));

var G__74243 = (i__4865__auto___74242 + (1));
i__4865__auto___74242 = G__74243;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__72450){
var map__72452 = p__72450;
var map__72452__$1 = cljs.core.__destructure_map(map__72452);
var opts = map__72452__$1;
var statearr_72453_74244 = state;
(statearr_72453_74244[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_72458_74245 = state;
(statearr_72458_74245[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_72460_74246 = state;
(statearr_72460_74246[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq72444){
var G__72445 = cljs.core.first(seq72444);
var seq72444__$1 = cljs.core.next(seq72444);
var G__72446 = cljs.core.first(seq72444__$1);
var seq72444__$2 = cljs.core.next(seq72444__$1);
var G__72447 = cljs.core.first(seq72444__$2);
var seq72444__$3 = cljs.core.next(seq72444__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72445,G__72446,G__72447,seq72444__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72469 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta72470){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta72470 = meta72470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72471,meta72470__$1){
var self__ = this;
var _72471__$1 = this;
return (new cljs.core.async.t_cljs$core$async72469(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta72470__$1));
}));

(cljs.core.async.t_cljs$core$async72469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72471){
var self__ = this;
var _72471__$1 = this;
return self__.meta72470;
}));

(cljs.core.async.t_cljs$core$async72469.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72469.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async72469.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72469.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async72469.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async72469.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async72469.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async72469.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async72469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta72470","meta72470",2032184709,null)], null);
}));

(cljs.core.async.t_cljs$core$async72469.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72469");

(cljs.core.async.t_cljs$core$async72469.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async72469");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72469.
 */
cljs.core.async.__GT_t_cljs$core$async72469 = (function cljs$core$async$mix_$___GT_t_cljs$core$async72469(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta72470){
return (new cljs.core.async.t_cljs$core$async72469(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta72470));
});

}

return (new cljs.core.async.t_cljs$core$async72469(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__70472__auto___74262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_72548){
var state_val_72549 = (state_72548[(1)]);
if((state_val_72549 === (7))){
var inst_72507 = (state_72548[(2)]);
var state_72548__$1 = state_72548;
if(cljs.core.truth_(inst_72507)){
var statearr_72551_74263 = state_72548__$1;
(statearr_72551_74263[(1)] = (8));

} else {
var statearr_72552_74264 = state_72548__$1;
(statearr_72552_74264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (20))){
var inst_72499 = (state_72548[(7)]);
var state_72548__$1 = state_72548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72548__$1,(23),out,inst_72499);
} else {
if((state_val_72549 === (1))){
var inst_72481 = calc_state();
var inst_72482 = cljs.core.__destructure_map(inst_72481);
var inst_72483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72482,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_72484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72482,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_72485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72482,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_72486 = inst_72481;
var state_72548__$1 = (function (){var statearr_72553 = state_72548;
(statearr_72553[(8)] = inst_72486);

(statearr_72553[(9)] = inst_72485);

(statearr_72553[(10)] = inst_72484);

(statearr_72553[(11)] = inst_72483);

return statearr_72553;
})();
var statearr_72554_74265 = state_72548__$1;
(statearr_72554_74265[(2)] = null);

(statearr_72554_74265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (24))){
var inst_72490 = (state_72548[(12)]);
var inst_72486 = inst_72490;
var state_72548__$1 = (function (){var statearr_72555 = state_72548;
(statearr_72555[(8)] = inst_72486);

return statearr_72555;
})();
var statearr_72556_74266 = state_72548__$1;
(statearr_72556_74266[(2)] = null);

(statearr_72556_74266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (4))){
var inst_72502 = (state_72548[(13)]);
var inst_72499 = (state_72548[(7)]);
var inst_72498 = (state_72548[(2)]);
var inst_72499__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72498,(0),null);
var inst_72500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72498,(1),null);
var inst_72502__$1 = (inst_72499__$1 == null);
var state_72548__$1 = (function (){var statearr_72557 = state_72548;
(statearr_72557[(13)] = inst_72502__$1);

(statearr_72557[(7)] = inst_72499__$1);

(statearr_72557[(14)] = inst_72500);

return statearr_72557;
})();
if(cljs.core.truth_(inst_72502__$1)){
var statearr_72560_74267 = state_72548__$1;
(statearr_72560_74267[(1)] = (5));

} else {
var statearr_72561_74268 = state_72548__$1;
(statearr_72561_74268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (15))){
var inst_72521 = (state_72548[(15)]);
var inst_72491 = (state_72548[(16)]);
var inst_72521__$1 = cljs.core.empty_QMARK_(inst_72491);
var state_72548__$1 = (function (){var statearr_72562 = state_72548;
(statearr_72562[(15)] = inst_72521__$1);

return statearr_72562;
})();
if(inst_72521__$1){
var statearr_72563_74269 = state_72548__$1;
(statearr_72563_74269[(1)] = (17));

} else {
var statearr_72564_74270 = state_72548__$1;
(statearr_72564_74270[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (21))){
var inst_72490 = (state_72548[(12)]);
var inst_72486 = inst_72490;
var state_72548__$1 = (function (){var statearr_72565 = state_72548;
(statearr_72565[(8)] = inst_72486);

return statearr_72565;
})();
var statearr_72566_74271 = state_72548__$1;
(statearr_72566_74271[(2)] = null);

(statearr_72566_74271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (13))){
var inst_72514 = (state_72548[(2)]);
var inst_72515 = calc_state();
var inst_72486 = inst_72515;
var state_72548__$1 = (function (){var statearr_72567 = state_72548;
(statearr_72567[(17)] = inst_72514);

(statearr_72567[(8)] = inst_72486);

return statearr_72567;
})();
var statearr_72568_74273 = state_72548__$1;
(statearr_72568_74273[(2)] = null);

(statearr_72568_74273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (22))){
var inst_72541 = (state_72548[(2)]);
var state_72548__$1 = state_72548;
var statearr_72569_74275 = state_72548__$1;
(statearr_72569_74275[(2)] = inst_72541);

(statearr_72569_74275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (6))){
var inst_72500 = (state_72548[(14)]);
var inst_72505 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_72500,change);
var state_72548__$1 = state_72548;
var statearr_72571_74276 = state_72548__$1;
(statearr_72571_74276[(2)] = inst_72505);

(statearr_72571_74276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (25))){
var state_72548__$1 = state_72548;
var statearr_72572_74277 = state_72548__$1;
(statearr_72572_74277[(2)] = null);

(statearr_72572_74277[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (17))){
var inst_72492 = (state_72548[(18)]);
var inst_72500 = (state_72548[(14)]);
var inst_72523 = (inst_72492.cljs$core$IFn$_invoke$arity$1 ? inst_72492.cljs$core$IFn$_invoke$arity$1(inst_72500) : inst_72492.call(null,inst_72500));
var inst_72524 = cljs.core.not(inst_72523);
var state_72548__$1 = state_72548;
var statearr_72573_74278 = state_72548__$1;
(statearr_72573_74278[(2)] = inst_72524);

(statearr_72573_74278[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (3))){
var inst_72545 = (state_72548[(2)]);
var state_72548__$1 = state_72548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72548__$1,inst_72545);
} else {
if((state_val_72549 === (12))){
var state_72548__$1 = state_72548;
var statearr_72574_74279 = state_72548__$1;
(statearr_72574_74279[(2)] = null);

(statearr_72574_74279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (2))){
var inst_72486 = (state_72548[(8)]);
var inst_72490 = (state_72548[(12)]);
var inst_72490__$1 = cljs.core.__destructure_map(inst_72486);
var inst_72491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72490__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_72492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72490__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_72493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72490__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_72548__$1 = (function (){var statearr_72576 = state_72548;
(statearr_72576[(12)] = inst_72490__$1);

(statearr_72576[(18)] = inst_72492);

(statearr_72576[(16)] = inst_72491);

return statearr_72576;
})();
return cljs.core.async.ioc_alts_BANG_(state_72548__$1,(4),inst_72493);
} else {
if((state_val_72549 === (23))){
var inst_72532 = (state_72548[(2)]);
var state_72548__$1 = state_72548;
if(cljs.core.truth_(inst_72532)){
var statearr_72577_74280 = state_72548__$1;
(statearr_72577_74280[(1)] = (24));

} else {
var statearr_72578_74281 = state_72548__$1;
(statearr_72578_74281[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (19))){
var inst_72527 = (state_72548[(2)]);
var state_72548__$1 = state_72548;
var statearr_72579_74282 = state_72548__$1;
(statearr_72579_74282[(2)] = inst_72527);

(statearr_72579_74282[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (11))){
var inst_72500 = (state_72548[(14)]);
var inst_72511 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_72500);
var state_72548__$1 = state_72548;
var statearr_72580_74283 = state_72548__$1;
(statearr_72580_74283[(2)] = inst_72511);

(statearr_72580_74283[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (9))){
var inst_72518 = (state_72548[(19)]);
var inst_72500 = (state_72548[(14)]);
var inst_72491 = (state_72548[(16)]);
var inst_72518__$1 = (inst_72491.cljs$core$IFn$_invoke$arity$1 ? inst_72491.cljs$core$IFn$_invoke$arity$1(inst_72500) : inst_72491.call(null,inst_72500));
var state_72548__$1 = (function (){var statearr_72581 = state_72548;
(statearr_72581[(19)] = inst_72518__$1);

return statearr_72581;
})();
if(cljs.core.truth_(inst_72518__$1)){
var statearr_72583_74284 = state_72548__$1;
(statearr_72583_74284[(1)] = (14));

} else {
var statearr_72584_74285 = state_72548__$1;
(statearr_72584_74285[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (5))){
var inst_72502 = (state_72548[(13)]);
var state_72548__$1 = state_72548;
var statearr_72585_74286 = state_72548__$1;
(statearr_72585_74286[(2)] = inst_72502);

(statearr_72585_74286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (14))){
var inst_72518 = (state_72548[(19)]);
var state_72548__$1 = state_72548;
var statearr_72586_74287 = state_72548__$1;
(statearr_72586_74287[(2)] = inst_72518);

(statearr_72586_74287[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (26))){
var inst_72537 = (state_72548[(2)]);
var state_72548__$1 = state_72548;
var statearr_72587_74288 = state_72548__$1;
(statearr_72587_74288[(2)] = inst_72537);

(statearr_72587_74288[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (16))){
var inst_72529 = (state_72548[(2)]);
var state_72548__$1 = state_72548;
if(cljs.core.truth_(inst_72529)){
var statearr_72588_74290 = state_72548__$1;
(statearr_72588_74290[(1)] = (20));

} else {
var statearr_72589_74291 = state_72548__$1;
(statearr_72589_74291[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (10))){
var inst_72543 = (state_72548[(2)]);
var state_72548__$1 = state_72548;
var statearr_72590_74292 = state_72548__$1;
(statearr_72590_74292[(2)] = inst_72543);

(statearr_72590_74292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (18))){
var inst_72521 = (state_72548[(15)]);
var state_72548__$1 = state_72548;
var statearr_72592_74294 = state_72548__$1;
(statearr_72592_74294[(2)] = inst_72521);

(statearr_72592_74294[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72549 === (8))){
var inst_72499 = (state_72548[(7)]);
var inst_72509 = (inst_72499 == null);
var state_72548__$1 = state_72548;
if(cljs.core.truth_(inst_72509)){
var statearr_72596_74295 = state_72548__$1;
(statearr_72596_74295[(1)] = (11));

} else {
var statearr_72597_74296 = state_72548__$1;
(statearr_72597_74296[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__70289__auto__ = null;
var cljs$core$async$mix_$_state_machine__70289__auto____0 = (function (){
var statearr_72599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72599[(0)] = cljs$core$async$mix_$_state_machine__70289__auto__);

(statearr_72599[(1)] = (1));

return statearr_72599;
});
var cljs$core$async$mix_$_state_machine__70289__auto____1 = (function (state_72548){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_72548);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e72603){var ex__70292__auto__ = e72603;
var statearr_72604_74300 = state_72548;
(statearr_72604_74300[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_72548[(4)]))){
var statearr_72607_74301 = state_72548;
(statearr_72607_74301[(1)] = cljs.core.first((state_72548[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74302 = state_72548;
state_72548 = G__74302;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__70289__auto__ = function(state_72548){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__70289__auto____1.call(this,state_72548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__70289__auto____0;
cljs$core$async$mix_$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__70289__auto____1;
return cljs$core$async$mix_$_state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_72609 = f__70473__auto__();
(statearr_72609[(6)] = c__70472__auto___74262);

return statearr_72609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_74309 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_74309(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_74311 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_74311(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_74313 = (function() {
var G__74314 = null;
var G__74314__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__74314__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__74314 = function(p,v){
switch(arguments.length){
case 1:
return G__74314__1.call(this,p);
case 2:
return G__74314__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__74314.cljs$core$IFn$_invoke$arity$1 = G__74314__1;
G__74314.cljs$core$IFn$_invoke$arity$2 = G__74314__2;
return G__74314;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__72622 = arguments.length;
switch (G__72622) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_74313(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_74313(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__72626 = arguments.length;
switch (G__72626) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__72624_SHARP_){
if(cljs.core.truth_((p1__72624_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__72624_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__72624_SHARP_.call(null,topic)))){
return p1__72624_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__72624_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72633 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta72634){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta72634 = meta72634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72635,meta72634__$1){
var self__ = this;
var _72635__$1 = this;
return (new cljs.core.async.t_cljs$core$async72633(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta72634__$1));
}));

(cljs.core.async.t_cljs$core$async72633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72635){
var self__ = this;
var _72635__$1 = this;
return self__.meta72634;
}));

(cljs.core.async.t_cljs$core$async72633.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72633.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async72633.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72633.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async72633.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async72633.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async72633.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async72633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta72634","meta72634",1799720879,null)], null);
}));

(cljs.core.async.t_cljs$core$async72633.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72633");

(cljs.core.async.t_cljs$core$async72633.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async72633");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72633.
 */
cljs.core.async.__GT_t_cljs$core$async72633 = (function cljs$core$async$__GT_t_cljs$core$async72633(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta72634){
return (new cljs.core.async.t_cljs$core$async72633(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta72634));
});

}

return (new cljs.core.async.t_cljs$core$async72633(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__70472__auto___74333 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_72711){
var state_val_72712 = (state_72711[(1)]);
if((state_val_72712 === (7))){
var inst_72706 = (state_72711[(2)]);
var state_72711__$1 = state_72711;
var statearr_72713_74335 = state_72711__$1;
(statearr_72713_74335[(2)] = inst_72706);

(statearr_72713_74335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (20))){
var state_72711__$1 = state_72711;
var statearr_72714_74343 = state_72711__$1;
(statearr_72714_74343[(2)] = null);

(statearr_72714_74343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (1))){
var state_72711__$1 = state_72711;
var statearr_72715_74344 = state_72711__$1;
(statearr_72715_74344[(2)] = null);

(statearr_72715_74344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (24))){
var inst_72689 = (state_72711[(7)]);
var inst_72698 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_72689);
var state_72711__$1 = state_72711;
var statearr_72716_74346 = state_72711__$1;
(statearr_72716_74346[(2)] = inst_72698);

(statearr_72716_74346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (4))){
var inst_72640 = (state_72711[(8)]);
var inst_72640__$1 = (state_72711[(2)]);
var inst_72641 = (inst_72640__$1 == null);
var state_72711__$1 = (function (){var statearr_72718 = state_72711;
(statearr_72718[(8)] = inst_72640__$1);

return statearr_72718;
})();
if(cljs.core.truth_(inst_72641)){
var statearr_72719_74347 = state_72711__$1;
(statearr_72719_74347[(1)] = (5));

} else {
var statearr_72720_74348 = state_72711__$1;
(statearr_72720_74348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (15))){
var inst_72683 = (state_72711[(2)]);
var state_72711__$1 = state_72711;
var statearr_72721_74350 = state_72711__$1;
(statearr_72721_74350[(2)] = inst_72683);

(statearr_72721_74350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (21))){
var inst_72703 = (state_72711[(2)]);
var state_72711__$1 = (function (){var statearr_72722 = state_72711;
(statearr_72722[(9)] = inst_72703);

return statearr_72722;
})();
var statearr_72723_74351 = state_72711__$1;
(statearr_72723_74351[(2)] = null);

(statearr_72723_74351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (13))){
var inst_72665 = (state_72711[(10)]);
var inst_72667 = cljs.core.chunked_seq_QMARK_(inst_72665);
var state_72711__$1 = state_72711;
if(inst_72667){
var statearr_72724_74352 = state_72711__$1;
(statearr_72724_74352[(1)] = (16));

} else {
var statearr_72725_74353 = state_72711__$1;
(statearr_72725_74353[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (22))){
var inst_72695 = (state_72711[(2)]);
var state_72711__$1 = state_72711;
if(cljs.core.truth_(inst_72695)){
var statearr_72726_74355 = state_72711__$1;
(statearr_72726_74355[(1)] = (23));

} else {
var statearr_72727_74356 = state_72711__$1;
(statearr_72727_74356[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (6))){
var inst_72640 = (state_72711[(8)]);
var inst_72691 = (state_72711[(11)]);
var inst_72689 = (state_72711[(7)]);
var inst_72689__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_72640) : topic_fn.call(null,inst_72640));
var inst_72690 = cljs.core.deref(mults);
var inst_72691__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72690,inst_72689__$1);
var state_72711__$1 = (function (){var statearr_72729 = state_72711;
(statearr_72729[(11)] = inst_72691__$1);

(statearr_72729[(7)] = inst_72689__$1);

return statearr_72729;
})();
if(cljs.core.truth_(inst_72691__$1)){
var statearr_72730_74358 = state_72711__$1;
(statearr_72730_74358[(1)] = (19));

} else {
var statearr_72731_74359 = state_72711__$1;
(statearr_72731_74359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (25))){
var inst_72700 = (state_72711[(2)]);
var state_72711__$1 = state_72711;
var statearr_72732_74364 = state_72711__$1;
(statearr_72732_74364[(2)] = inst_72700);

(statearr_72732_74364[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (17))){
var inst_72665 = (state_72711[(10)]);
var inst_72674 = cljs.core.first(inst_72665);
var inst_72675 = cljs.core.async.muxch_STAR_(inst_72674);
var inst_72676 = cljs.core.async.close_BANG_(inst_72675);
var inst_72677 = cljs.core.next(inst_72665);
var inst_72651 = inst_72677;
var inst_72652 = null;
var inst_72653 = (0);
var inst_72654 = (0);
var state_72711__$1 = (function (){var statearr_72733 = state_72711;
(statearr_72733[(12)] = inst_72676);

(statearr_72733[(13)] = inst_72653);

(statearr_72733[(14)] = inst_72654);

(statearr_72733[(15)] = inst_72652);

(statearr_72733[(16)] = inst_72651);

return statearr_72733;
})();
var statearr_72734_74372 = state_72711__$1;
(statearr_72734_74372[(2)] = null);

(statearr_72734_74372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (3))){
var inst_72708 = (state_72711[(2)]);
var state_72711__$1 = state_72711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72711__$1,inst_72708);
} else {
if((state_val_72712 === (12))){
var inst_72685 = (state_72711[(2)]);
var state_72711__$1 = state_72711;
var statearr_72736_74376 = state_72711__$1;
(statearr_72736_74376[(2)] = inst_72685);

(statearr_72736_74376[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (2))){
var state_72711__$1 = state_72711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72711__$1,(4),ch);
} else {
if((state_val_72712 === (23))){
var state_72711__$1 = state_72711;
var statearr_72737_74377 = state_72711__$1;
(statearr_72737_74377[(2)] = null);

(statearr_72737_74377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (19))){
var inst_72640 = (state_72711[(8)]);
var inst_72691 = (state_72711[(11)]);
var inst_72693 = cljs.core.async.muxch_STAR_(inst_72691);
var state_72711__$1 = state_72711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72711__$1,(22),inst_72693,inst_72640);
} else {
if((state_val_72712 === (11))){
var inst_72665 = (state_72711[(10)]);
var inst_72651 = (state_72711[(16)]);
var inst_72665__$1 = cljs.core.seq(inst_72651);
var state_72711__$1 = (function (){var statearr_72738 = state_72711;
(statearr_72738[(10)] = inst_72665__$1);

return statearr_72738;
})();
if(inst_72665__$1){
var statearr_72739_74378 = state_72711__$1;
(statearr_72739_74378[(1)] = (13));

} else {
var statearr_72740_74379 = state_72711__$1;
(statearr_72740_74379[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (9))){
var inst_72687 = (state_72711[(2)]);
var state_72711__$1 = state_72711;
var statearr_72741_74380 = state_72711__$1;
(statearr_72741_74380[(2)] = inst_72687);

(statearr_72741_74380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (5))){
var inst_72648 = cljs.core.deref(mults);
var inst_72649 = cljs.core.vals(inst_72648);
var inst_72650 = cljs.core.seq(inst_72649);
var inst_72651 = inst_72650;
var inst_72652 = null;
var inst_72653 = (0);
var inst_72654 = (0);
var state_72711__$1 = (function (){var statearr_72743 = state_72711;
(statearr_72743[(13)] = inst_72653);

(statearr_72743[(14)] = inst_72654);

(statearr_72743[(15)] = inst_72652);

(statearr_72743[(16)] = inst_72651);

return statearr_72743;
})();
var statearr_72744_74388 = state_72711__$1;
(statearr_72744_74388[(2)] = null);

(statearr_72744_74388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (14))){
var state_72711__$1 = state_72711;
var statearr_72748_74389 = state_72711__$1;
(statearr_72748_74389[(2)] = null);

(statearr_72748_74389[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (16))){
var inst_72665 = (state_72711[(10)]);
var inst_72669 = cljs.core.chunk_first(inst_72665);
var inst_72670 = cljs.core.chunk_rest(inst_72665);
var inst_72671 = cljs.core.count(inst_72669);
var inst_72651 = inst_72670;
var inst_72652 = inst_72669;
var inst_72653 = inst_72671;
var inst_72654 = (0);
var state_72711__$1 = (function (){var statearr_72749 = state_72711;
(statearr_72749[(13)] = inst_72653);

(statearr_72749[(14)] = inst_72654);

(statearr_72749[(15)] = inst_72652);

(statearr_72749[(16)] = inst_72651);

return statearr_72749;
})();
var statearr_72750_74393 = state_72711__$1;
(statearr_72750_74393[(2)] = null);

(statearr_72750_74393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (10))){
var inst_72653 = (state_72711[(13)]);
var inst_72654 = (state_72711[(14)]);
var inst_72652 = (state_72711[(15)]);
var inst_72651 = (state_72711[(16)]);
var inst_72659 = cljs.core._nth(inst_72652,inst_72654);
var inst_72660 = cljs.core.async.muxch_STAR_(inst_72659);
var inst_72661 = cljs.core.async.close_BANG_(inst_72660);
var inst_72662 = (inst_72654 + (1));
var tmp72745 = inst_72653;
var tmp72746 = inst_72652;
var tmp72747 = inst_72651;
var inst_72651__$1 = tmp72747;
var inst_72652__$1 = tmp72746;
var inst_72653__$1 = tmp72745;
var inst_72654__$1 = inst_72662;
var state_72711__$1 = (function (){var statearr_72752 = state_72711;
(statearr_72752[(17)] = inst_72661);

(statearr_72752[(13)] = inst_72653__$1);

(statearr_72752[(14)] = inst_72654__$1);

(statearr_72752[(15)] = inst_72652__$1);

(statearr_72752[(16)] = inst_72651__$1);

return statearr_72752;
})();
var statearr_72753_74397 = state_72711__$1;
(statearr_72753_74397[(2)] = null);

(statearr_72753_74397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (18))){
var inst_72680 = (state_72711[(2)]);
var state_72711__$1 = state_72711;
var statearr_72754_74398 = state_72711__$1;
(statearr_72754_74398[(2)] = inst_72680);

(statearr_72754_74398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72712 === (8))){
var inst_72653 = (state_72711[(13)]);
var inst_72654 = (state_72711[(14)]);
var inst_72656 = (inst_72654 < inst_72653);
var inst_72657 = inst_72656;
var state_72711__$1 = state_72711;
if(cljs.core.truth_(inst_72657)){
var statearr_72755_74406 = state_72711__$1;
(statearr_72755_74406[(1)] = (10));

} else {
var statearr_72756_74407 = state_72711__$1;
(statearr_72756_74407[(1)] = (11));

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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__70289__auto__ = null;
var cljs$core$async$state_machine__70289__auto____0 = (function (){
var statearr_72757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72757[(0)] = cljs$core$async$state_machine__70289__auto__);

(statearr_72757[(1)] = (1));

return statearr_72757;
});
var cljs$core$async$state_machine__70289__auto____1 = (function (state_72711){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_72711);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e72758){var ex__70292__auto__ = e72758;
var statearr_72760_74417 = state_72711;
(statearr_72760_74417[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_72711[(4)]))){
var statearr_72761_74422 = state_72711;
(statearr_72761_74422[(1)] = cljs.core.first((state_72711[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74424 = state_72711;
state_72711 = G__74424;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$state_machine__70289__auto__ = function(state_72711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70289__auto____1.call(this,state_72711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70289__auto____0;
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70289__auto____1;
return cljs$core$async$state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_72762 = f__70473__auto__();
(statearr_72762[(6)] = c__70472__auto___74333);

return statearr_72762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__72764 = arguments.length;
switch (G__72764) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__72767 = arguments.length;
switch (G__72767) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__72770 = arguments.length;
switch (G__72770) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__70472__auto___74443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_72815){
var state_val_72816 = (state_72815[(1)]);
if((state_val_72816 === (7))){
var state_72815__$1 = state_72815;
var statearr_72817_74445 = state_72815__$1;
(statearr_72817_74445[(2)] = null);

(statearr_72817_74445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72816 === (1))){
var state_72815__$1 = state_72815;
var statearr_72819_74446 = state_72815__$1;
(statearr_72819_74446[(2)] = null);

(statearr_72819_74446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72816 === (4))){
var inst_72774 = (state_72815[(7)]);
var inst_72775 = (state_72815[(8)]);
var inst_72777 = (inst_72775 < inst_72774);
var state_72815__$1 = state_72815;
if(cljs.core.truth_(inst_72777)){
var statearr_72820_74447 = state_72815__$1;
(statearr_72820_74447[(1)] = (6));

} else {
var statearr_72821_74448 = state_72815__$1;
(statearr_72821_74448[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72816 === (15))){
var inst_72801 = (state_72815[(9)]);
var inst_72806 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_72801);
var state_72815__$1 = state_72815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72815__$1,(17),out,inst_72806);
} else {
if((state_val_72816 === (13))){
var inst_72801 = (state_72815[(9)]);
var inst_72801__$1 = (state_72815[(2)]);
var inst_72802 = cljs.core.some(cljs.core.nil_QMARK_,inst_72801__$1);
var state_72815__$1 = (function (){var statearr_72822 = state_72815;
(statearr_72822[(9)] = inst_72801__$1);

return statearr_72822;
})();
if(cljs.core.truth_(inst_72802)){
var statearr_72823_74454 = state_72815__$1;
(statearr_72823_74454[(1)] = (14));

} else {
var statearr_72824_74455 = state_72815__$1;
(statearr_72824_74455[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72816 === (6))){
var state_72815__$1 = state_72815;
var statearr_72825_74456 = state_72815__$1;
(statearr_72825_74456[(2)] = null);

(statearr_72825_74456[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72816 === (17))){
var inst_72808 = (state_72815[(2)]);
var state_72815__$1 = (function (){var statearr_72828 = state_72815;
(statearr_72828[(10)] = inst_72808);

return statearr_72828;
})();
var statearr_72829_74457 = state_72815__$1;
(statearr_72829_74457[(2)] = null);

(statearr_72829_74457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72816 === (3))){
var inst_72813 = (state_72815[(2)]);
var state_72815__$1 = state_72815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72815__$1,inst_72813);
} else {
if((state_val_72816 === (12))){
var _ = (function (){var statearr_72830 = state_72815;
(statearr_72830[(4)] = cljs.core.rest((state_72815[(4)])));

return statearr_72830;
})();
var state_72815__$1 = state_72815;
var ex72827 = (state_72815__$1[(2)]);
var statearr_72831_74462 = state_72815__$1;
(statearr_72831_74462[(5)] = ex72827);


if((ex72827 instanceof Object)){
var statearr_72832_74463 = state_72815__$1;
(statearr_72832_74463[(1)] = (11));

(statearr_72832_74463[(5)] = null);

} else {
throw ex72827;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72816 === (2))){
var inst_72773 = cljs.core.reset_BANG_(dctr,cnt);
var inst_72774 = cnt;
var inst_72775 = (0);
var state_72815__$1 = (function (){var statearr_72834 = state_72815;
(statearr_72834[(7)] = inst_72774);

(statearr_72834[(8)] = inst_72775);

(statearr_72834[(11)] = inst_72773);

return statearr_72834;
})();
var statearr_72835_74465 = state_72815__$1;
(statearr_72835_74465[(2)] = null);

(statearr_72835_74465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72816 === (11))){
var inst_72780 = (state_72815[(2)]);
var inst_72781 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_72815__$1 = (function (){var statearr_72836 = state_72815;
(statearr_72836[(12)] = inst_72780);

return statearr_72836;
})();
var statearr_72837_74470 = state_72815__$1;
(statearr_72837_74470[(2)] = inst_72781);

(statearr_72837_74470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72816 === (9))){
var inst_72775 = (state_72815[(8)]);
var _ = (function (){var statearr_72838 = state_72815;
(statearr_72838[(4)] = cljs.core.cons((12),(state_72815[(4)])));

return statearr_72838;
})();
var inst_72787 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_72775) : chs__$1.call(null,inst_72775));
var inst_72788 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_72775) : done.call(null,inst_72775));
var inst_72789 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_72787,inst_72788);
var ___$1 = (function (){var statearr_72840 = state_72815;
(statearr_72840[(4)] = cljs.core.rest((state_72815[(4)])));

return statearr_72840;
})();
var state_72815__$1 = state_72815;
var statearr_72841_74471 = state_72815__$1;
(statearr_72841_74471[(2)] = inst_72789);

(statearr_72841_74471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72816 === (5))){
var inst_72799 = (state_72815[(2)]);
var state_72815__$1 = (function (){var statearr_72842 = state_72815;
(statearr_72842[(13)] = inst_72799);

return statearr_72842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72815__$1,(13),dchan);
} else {
if((state_val_72816 === (14))){
var inst_72804 = cljs.core.async.close_BANG_(out);
var state_72815__$1 = state_72815;
var statearr_72843_74472 = state_72815__$1;
(statearr_72843_74472[(2)] = inst_72804);

(statearr_72843_74472[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72816 === (16))){
var inst_72811 = (state_72815[(2)]);
var state_72815__$1 = state_72815;
var statearr_72844_74474 = state_72815__$1;
(statearr_72844_74474[(2)] = inst_72811);

(statearr_72844_74474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72816 === (10))){
var inst_72775 = (state_72815[(8)]);
var inst_72792 = (state_72815[(2)]);
var inst_72793 = (inst_72775 + (1));
var inst_72775__$1 = inst_72793;
var state_72815__$1 = (function (){var statearr_72845 = state_72815;
(statearr_72845[(14)] = inst_72792);

(statearr_72845[(8)] = inst_72775__$1);

return statearr_72845;
})();
var statearr_72846_74477 = state_72815__$1;
(statearr_72846_74477[(2)] = null);

(statearr_72846_74477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72816 === (8))){
var inst_72797 = (state_72815[(2)]);
var state_72815__$1 = state_72815;
var statearr_72847_74479 = state_72815__$1;
(statearr_72847_74479[(2)] = inst_72797);

(statearr_72847_74479[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__70289__auto__ = null;
var cljs$core$async$state_machine__70289__auto____0 = (function (){
var statearr_72849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72849[(0)] = cljs$core$async$state_machine__70289__auto__);

(statearr_72849[(1)] = (1));

return statearr_72849;
});
var cljs$core$async$state_machine__70289__auto____1 = (function (state_72815){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_72815);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e72850){var ex__70292__auto__ = e72850;
var statearr_72851_74483 = state_72815;
(statearr_72851_74483[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_72815[(4)]))){
var statearr_72852_74485 = state_72815;
(statearr_72852_74485[(1)] = cljs.core.first((state_72815[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74487 = state_72815;
state_72815 = G__74487;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$state_machine__70289__auto__ = function(state_72815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70289__auto____1.call(this,state_72815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70289__auto____0;
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70289__auto____1;
return cljs$core$async$state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_72854 = f__70473__auto__();
(statearr_72854[(6)] = c__70472__auto___74443);

return statearr_72854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__72858 = arguments.length;
switch (G__72858) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__70472__auto___74490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_72892){
var state_val_72893 = (state_72892[(1)]);
if((state_val_72893 === (7))){
var inst_72869 = (state_72892[(7)]);
var inst_72870 = (state_72892[(8)]);
var inst_72869__$1 = (state_72892[(2)]);
var inst_72870__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72869__$1,(0),null);
var inst_72871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72869__$1,(1),null);
var inst_72872 = (inst_72870__$1 == null);
var state_72892__$1 = (function (){var statearr_72894 = state_72892;
(statearr_72894[(7)] = inst_72869__$1);

(statearr_72894[(8)] = inst_72870__$1);

(statearr_72894[(9)] = inst_72871);

return statearr_72894;
})();
if(cljs.core.truth_(inst_72872)){
var statearr_72895_74495 = state_72892__$1;
(statearr_72895_74495[(1)] = (8));

} else {
var statearr_72896_74496 = state_72892__$1;
(statearr_72896_74496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72893 === (1))){
var inst_72859 = cljs.core.vec(chs);
var inst_72860 = inst_72859;
var state_72892__$1 = (function (){var statearr_72897 = state_72892;
(statearr_72897[(10)] = inst_72860);

return statearr_72897;
})();
var statearr_72898_74499 = state_72892__$1;
(statearr_72898_74499[(2)] = null);

(statearr_72898_74499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72893 === (4))){
var inst_72860 = (state_72892[(10)]);
var state_72892__$1 = state_72892;
return cljs.core.async.ioc_alts_BANG_(state_72892__$1,(7),inst_72860);
} else {
if((state_val_72893 === (6))){
var inst_72888 = (state_72892[(2)]);
var state_72892__$1 = state_72892;
var statearr_72899_74502 = state_72892__$1;
(statearr_72899_74502[(2)] = inst_72888);

(statearr_72899_74502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72893 === (3))){
var inst_72890 = (state_72892[(2)]);
var state_72892__$1 = state_72892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72892__$1,inst_72890);
} else {
if((state_val_72893 === (2))){
var inst_72860 = (state_72892[(10)]);
var inst_72862 = cljs.core.count(inst_72860);
var inst_72863 = (inst_72862 > (0));
var state_72892__$1 = state_72892;
if(cljs.core.truth_(inst_72863)){
var statearr_72901_74506 = state_72892__$1;
(statearr_72901_74506[(1)] = (4));

} else {
var statearr_72902_74507 = state_72892__$1;
(statearr_72902_74507[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72893 === (11))){
var inst_72860 = (state_72892[(10)]);
var inst_72881 = (state_72892[(2)]);
var tmp72900 = inst_72860;
var inst_72860__$1 = tmp72900;
var state_72892__$1 = (function (){var statearr_72903 = state_72892;
(statearr_72903[(11)] = inst_72881);

(statearr_72903[(10)] = inst_72860__$1);

return statearr_72903;
})();
var statearr_72904_74510 = state_72892__$1;
(statearr_72904_74510[(2)] = null);

(statearr_72904_74510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72893 === (9))){
var inst_72870 = (state_72892[(8)]);
var state_72892__$1 = state_72892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72892__$1,(11),out,inst_72870);
} else {
if((state_val_72893 === (5))){
var inst_72886 = cljs.core.async.close_BANG_(out);
var state_72892__$1 = state_72892;
var statearr_72907_74516 = state_72892__$1;
(statearr_72907_74516[(2)] = inst_72886);

(statearr_72907_74516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72893 === (10))){
var inst_72884 = (state_72892[(2)]);
var state_72892__$1 = state_72892;
var statearr_72908_74518 = state_72892__$1;
(statearr_72908_74518[(2)] = inst_72884);

(statearr_72908_74518[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72893 === (8))){
var inst_72869 = (state_72892[(7)]);
var inst_72870 = (state_72892[(8)]);
var inst_72871 = (state_72892[(9)]);
var inst_72860 = (state_72892[(10)]);
var inst_72876 = (function (){var cs = inst_72860;
var vec__72865 = inst_72869;
var v = inst_72870;
var c = inst_72871;
return (function (p1__72856_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__72856_SHARP_);
});
})();
var inst_72877 = cljs.core.filterv(inst_72876,inst_72860);
var inst_72860__$1 = inst_72877;
var state_72892__$1 = (function (){var statearr_72909 = state_72892;
(statearr_72909[(10)] = inst_72860__$1);

return statearr_72909;
})();
var statearr_72910_74532 = state_72892__$1;
(statearr_72910_74532[(2)] = null);

(statearr_72910_74532[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__70289__auto__ = null;
var cljs$core$async$state_machine__70289__auto____0 = (function (){
var statearr_72911 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72911[(0)] = cljs$core$async$state_machine__70289__auto__);

(statearr_72911[(1)] = (1));

return statearr_72911;
});
var cljs$core$async$state_machine__70289__auto____1 = (function (state_72892){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_72892);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e72912){var ex__70292__auto__ = e72912;
var statearr_72913_74535 = state_72892;
(statearr_72913_74535[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_72892[(4)]))){
var statearr_72914_74536 = state_72892;
(statearr_72914_74536[(1)] = cljs.core.first((state_72892[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74537 = state_72892;
state_72892 = G__74537;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$state_machine__70289__auto__ = function(state_72892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70289__auto____1.call(this,state_72892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70289__auto____0;
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70289__auto____1;
return cljs$core$async$state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_72915 = f__70473__auto__();
(statearr_72915[(6)] = c__70472__auto___74490);

return statearr_72915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__72922 = arguments.length;
switch (G__72922) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__70472__auto___74543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_72950){
var state_val_72951 = (state_72950[(1)]);
if((state_val_72951 === (7))){
var inst_72932 = (state_72950[(7)]);
var inst_72932__$1 = (state_72950[(2)]);
var inst_72933 = (inst_72932__$1 == null);
var inst_72934 = cljs.core.not(inst_72933);
var state_72950__$1 = (function (){var statearr_72956 = state_72950;
(statearr_72956[(7)] = inst_72932__$1);

return statearr_72956;
})();
if(inst_72934){
var statearr_72958_74544 = state_72950__$1;
(statearr_72958_74544[(1)] = (8));

} else {
var statearr_72959_74545 = state_72950__$1;
(statearr_72959_74545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72951 === (1))){
var inst_72927 = (0);
var state_72950__$1 = (function (){var statearr_72963 = state_72950;
(statearr_72963[(8)] = inst_72927);

return statearr_72963;
})();
var statearr_72964_74546 = state_72950__$1;
(statearr_72964_74546[(2)] = null);

(statearr_72964_74546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72951 === (4))){
var state_72950__$1 = state_72950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72950__$1,(7),ch);
} else {
if((state_val_72951 === (6))){
var inst_72945 = (state_72950[(2)]);
var state_72950__$1 = state_72950;
var statearr_72966_74550 = state_72950__$1;
(statearr_72966_74550[(2)] = inst_72945);

(statearr_72966_74550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72951 === (3))){
var inst_72947 = (state_72950[(2)]);
var inst_72948 = cljs.core.async.close_BANG_(out);
var state_72950__$1 = (function (){var statearr_72970 = state_72950;
(statearr_72970[(9)] = inst_72947);

return statearr_72970;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72950__$1,inst_72948);
} else {
if((state_val_72951 === (2))){
var inst_72927 = (state_72950[(8)]);
var inst_72929 = (inst_72927 < n);
var state_72950__$1 = state_72950;
if(cljs.core.truth_(inst_72929)){
var statearr_72972_74553 = state_72950__$1;
(statearr_72972_74553[(1)] = (4));

} else {
var statearr_72973_74554 = state_72950__$1;
(statearr_72973_74554[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72951 === (11))){
var inst_72927 = (state_72950[(8)]);
var inst_72937 = (state_72950[(2)]);
var inst_72938 = (inst_72927 + (1));
var inst_72927__$1 = inst_72938;
var state_72950__$1 = (function (){var statearr_72977 = state_72950;
(statearr_72977[(8)] = inst_72927__$1);

(statearr_72977[(10)] = inst_72937);

return statearr_72977;
})();
var statearr_72978_74555 = state_72950__$1;
(statearr_72978_74555[(2)] = null);

(statearr_72978_74555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72951 === (9))){
var state_72950__$1 = state_72950;
var statearr_72980_74556 = state_72950__$1;
(statearr_72980_74556[(2)] = null);

(statearr_72980_74556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72951 === (5))){
var state_72950__$1 = state_72950;
var statearr_72984_74557 = state_72950__$1;
(statearr_72984_74557[(2)] = null);

(statearr_72984_74557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72951 === (10))){
var inst_72942 = (state_72950[(2)]);
var state_72950__$1 = state_72950;
var statearr_72985_74558 = state_72950__$1;
(statearr_72985_74558[(2)] = inst_72942);

(statearr_72985_74558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72951 === (8))){
var inst_72932 = (state_72950[(7)]);
var state_72950__$1 = state_72950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72950__$1,(11),out,inst_72932);
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
});
return (function() {
var cljs$core$async$state_machine__70289__auto__ = null;
var cljs$core$async$state_machine__70289__auto____0 = (function (){
var statearr_72990 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_72990[(0)] = cljs$core$async$state_machine__70289__auto__);

(statearr_72990[(1)] = (1));

return statearr_72990;
});
var cljs$core$async$state_machine__70289__auto____1 = (function (state_72950){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_72950);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e72992){var ex__70292__auto__ = e72992;
var statearr_72993_74559 = state_72950;
(statearr_72993_74559[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_72950[(4)]))){
var statearr_72994_74560 = state_72950;
(statearr_72994_74560[(1)] = cljs.core.first((state_72950[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74561 = state_72950;
state_72950 = G__74561;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$state_machine__70289__auto__ = function(state_72950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70289__auto____1.call(this,state_72950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70289__auto____0;
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70289__auto____1;
return cljs$core$async$state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_72998 = f__70473__auto__();
(statearr_72998[(6)] = c__70472__auto___74543);

return statearr_72998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async73005 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73005 = (function (f,ch,meta73006){
this.f = f;
this.ch = ch;
this.meta73006 = meta73006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73007,meta73006__$1){
var self__ = this;
var _73007__$1 = this;
return (new cljs.core.async.t_cljs$core$async73005(self__.f,self__.ch,meta73006__$1));
}));

(cljs.core.async.t_cljs$core$async73005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73007){
var self__ = this;
var _73007__$1 = this;
return self__.meta73006;
}));

(cljs.core.async.t_cljs$core$async73005.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73005.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async73005.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async73005.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73005.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async73019 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73019 = (function (f,ch,meta73006,_,fn1,meta73020){
this.f = f;
this.ch = ch;
this.meta73006 = meta73006;
this._ = _;
this.fn1 = fn1;
this.meta73020 = meta73020;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73019.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73021,meta73020__$1){
var self__ = this;
var _73021__$1 = this;
return (new cljs.core.async.t_cljs$core$async73019(self__.f,self__.ch,self__.meta73006,self__._,self__.fn1,meta73020__$1));
}));

(cljs.core.async.t_cljs$core$async73019.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73021){
var self__ = this;
var _73021__$1 = this;
return self__.meta73020;
}));

(cljs.core.async.t_cljs$core$async73019.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73019.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async73019.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async73019.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__73003_SHARP_){
var G__73032 = (((p1__73003_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__73003_SHARP_) : self__.f.call(null,p1__73003_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__73032) : f1.call(null,G__73032));
});
}));

(cljs.core.async.t_cljs$core$async73019.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta73006","meta73006",-508653999,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async73005","cljs.core.async/t_cljs$core$async73005",-444963605,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta73020","meta73020",1248162132,null)], null);
}));

(cljs.core.async.t_cljs$core$async73019.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73019.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73019");

(cljs.core.async.t_cljs$core$async73019.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async73019");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73019.
 */
cljs.core.async.__GT_t_cljs$core$async73019 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async73019(f__$1,ch__$1,meta73006__$1,___$2,fn1__$1,meta73020){
return (new cljs.core.async.t_cljs$core$async73019(f__$1,ch__$1,meta73006__$1,___$2,fn1__$1,meta73020));
});

}

return (new cljs.core.async.t_cljs$core$async73019(self__.f,self__.ch,self__.meta73006,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__73043 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__73043) : self__.f.call(null,G__73043));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async73005.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73005.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async73005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta73006","meta73006",-508653999,null)], null);
}));

(cljs.core.async.t_cljs$core$async73005.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73005");

(cljs.core.async.t_cljs$core$async73005.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async73005");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73005.
 */
cljs.core.async.__GT_t_cljs$core$async73005 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async73005(f__$1,ch__$1,meta73006){
return (new cljs.core.async.t_cljs$core$async73005(f__$1,ch__$1,meta73006));
});

}

return (new cljs.core.async.t_cljs$core$async73005(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async73052 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73052 = (function (f,ch,meta73053){
this.f = f;
this.ch = ch;
this.meta73053 = meta73053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73054,meta73053__$1){
var self__ = this;
var _73054__$1 = this;
return (new cljs.core.async.t_cljs$core$async73052(self__.f,self__.ch,meta73053__$1));
}));

(cljs.core.async.t_cljs$core$async73052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73054){
var self__ = this;
var _73054__$1 = this;
return self__.meta73053;
}));

(cljs.core.async.t_cljs$core$async73052.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73052.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async73052.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73052.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async73052.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73052.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async73052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta73053","meta73053",1949837933,null)], null);
}));

(cljs.core.async.t_cljs$core$async73052.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73052");

(cljs.core.async.t_cljs$core$async73052.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async73052");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73052.
 */
cljs.core.async.__GT_t_cljs$core$async73052 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async73052(f__$1,ch__$1,meta73053){
return (new cljs.core.async.t_cljs$core$async73052(f__$1,ch__$1,meta73053));
});

}

return (new cljs.core.async.t_cljs$core$async73052(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async73078 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async73078 = (function (p,ch,meta73079){
this.p = p;
this.ch = ch;
this.meta73079 = meta73079;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async73078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73080,meta73079__$1){
var self__ = this;
var _73080__$1 = this;
return (new cljs.core.async.t_cljs$core$async73078(self__.p,self__.ch,meta73079__$1));
}));

(cljs.core.async.t_cljs$core$async73078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73080){
var self__ = this;
var _73080__$1 = this;
return self__.meta73079;
}));

(cljs.core.async.t_cljs$core$async73078.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73078.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async73078.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async73078.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73078.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async73078.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async73078.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async73078.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta73079","meta73079",1340259636,null)], null);
}));

(cljs.core.async.t_cljs$core$async73078.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async73078.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async73078");

(cljs.core.async.t_cljs$core$async73078.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async73078");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async73078.
 */
cljs.core.async.__GT_t_cljs$core$async73078 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async73078(p__$1,ch__$1,meta73079){
return (new cljs.core.async.t_cljs$core$async73078(p__$1,ch__$1,meta73079));
});

}

return (new cljs.core.async.t_cljs$core$async73078(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__73105 = arguments.length;
switch (G__73105) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__70472__auto___74588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_73134){
var state_val_73135 = (state_73134[(1)]);
if((state_val_73135 === (7))){
var inst_73130 = (state_73134[(2)]);
var state_73134__$1 = state_73134;
var statearr_73141_74589 = state_73134__$1;
(statearr_73141_74589[(2)] = inst_73130);

(statearr_73141_74589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73135 === (1))){
var state_73134__$1 = state_73134;
var statearr_73145_74590 = state_73134__$1;
(statearr_73145_74590[(2)] = null);

(statearr_73145_74590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73135 === (4))){
var inst_73115 = (state_73134[(7)]);
var inst_73115__$1 = (state_73134[(2)]);
var inst_73116 = (inst_73115__$1 == null);
var state_73134__$1 = (function (){var statearr_73147 = state_73134;
(statearr_73147[(7)] = inst_73115__$1);

return statearr_73147;
})();
if(cljs.core.truth_(inst_73116)){
var statearr_73149_74591 = state_73134__$1;
(statearr_73149_74591[(1)] = (5));

} else {
var statearr_73150_74592 = state_73134__$1;
(statearr_73150_74592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73135 === (6))){
var inst_73115 = (state_73134[(7)]);
var inst_73121 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_73115) : p.call(null,inst_73115));
var state_73134__$1 = state_73134;
if(cljs.core.truth_(inst_73121)){
var statearr_73154_74593 = state_73134__$1;
(statearr_73154_74593[(1)] = (8));

} else {
var statearr_73155_74594 = state_73134__$1;
(statearr_73155_74594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73135 === (3))){
var inst_73132 = (state_73134[(2)]);
var state_73134__$1 = state_73134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73134__$1,inst_73132);
} else {
if((state_val_73135 === (2))){
var state_73134__$1 = state_73134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73134__$1,(4),ch);
} else {
if((state_val_73135 === (11))){
var inst_73124 = (state_73134[(2)]);
var state_73134__$1 = state_73134;
var statearr_73160_74599 = state_73134__$1;
(statearr_73160_74599[(2)] = inst_73124);

(statearr_73160_74599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73135 === (9))){
var state_73134__$1 = state_73134;
var statearr_73162_74600 = state_73134__$1;
(statearr_73162_74600[(2)] = null);

(statearr_73162_74600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73135 === (5))){
var inst_73118 = cljs.core.async.close_BANG_(out);
var state_73134__$1 = state_73134;
var statearr_73165_74601 = state_73134__$1;
(statearr_73165_74601[(2)] = inst_73118);

(statearr_73165_74601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73135 === (10))){
var inst_73127 = (state_73134[(2)]);
var state_73134__$1 = (function (){var statearr_73167 = state_73134;
(statearr_73167[(8)] = inst_73127);

return statearr_73167;
})();
var statearr_73168_74605 = state_73134__$1;
(statearr_73168_74605[(2)] = null);

(statearr_73168_74605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73135 === (8))){
var inst_73115 = (state_73134[(7)]);
var state_73134__$1 = state_73134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73134__$1,(11),out,inst_73115);
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
});
return (function() {
var cljs$core$async$state_machine__70289__auto__ = null;
var cljs$core$async$state_machine__70289__auto____0 = (function (){
var statearr_73173 = [null,null,null,null,null,null,null,null,null];
(statearr_73173[(0)] = cljs$core$async$state_machine__70289__auto__);

(statearr_73173[(1)] = (1));

return statearr_73173;
});
var cljs$core$async$state_machine__70289__auto____1 = (function (state_73134){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_73134);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e73175){var ex__70292__auto__ = e73175;
var statearr_73176_74607 = state_73134;
(statearr_73176_74607[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_73134[(4)]))){
var statearr_73178_74608 = state_73134;
(statearr_73178_74608[(1)] = cljs.core.first((state_73134[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74609 = state_73134;
state_73134 = G__74609;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$state_machine__70289__auto__ = function(state_73134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70289__auto____1.call(this,state_73134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70289__auto____0;
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70289__auto____1;
return cljs$core$async$state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_73182 = f__70473__auto__();
(statearr_73182[(6)] = c__70472__auto___74588);

return statearr_73182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__73188 = arguments.length;
switch (G__73188) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__70472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_73270){
var state_val_73271 = (state_73270[(1)]);
if((state_val_73271 === (7))){
var inst_73265 = (state_73270[(2)]);
var state_73270__$1 = state_73270;
var statearr_73280_74613 = state_73270__$1;
(statearr_73280_74613[(2)] = inst_73265);

(statearr_73280_74613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (20))){
var inst_73228 = (state_73270[(7)]);
var inst_73244 = (state_73270[(2)]);
var inst_73245 = cljs.core.next(inst_73228);
var inst_73213 = inst_73245;
var inst_73214 = null;
var inst_73215 = (0);
var inst_73216 = (0);
var state_73270__$1 = (function (){var statearr_73282 = state_73270;
(statearr_73282[(8)] = inst_73215);

(statearr_73282[(9)] = inst_73244);

(statearr_73282[(10)] = inst_73216);

(statearr_73282[(11)] = inst_73214);

(statearr_73282[(12)] = inst_73213);

return statearr_73282;
})();
var statearr_73283_74616 = state_73270__$1;
(statearr_73283_74616[(2)] = null);

(statearr_73283_74616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (1))){
var state_73270__$1 = state_73270;
var statearr_73284_74617 = state_73270__$1;
(statearr_73284_74617[(2)] = null);

(statearr_73284_74617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (4))){
var inst_73199 = (state_73270[(13)]);
var inst_73199__$1 = (state_73270[(2)]);
var inst_73201 = (inst_73199__$1 == null);
var state_73270__$1 = (function (){var statearr_73285 = state_73270;
(statearr_73285[(13)] = inst_73199__$1);

return statearr_73285;
})();
if(cljs.core.truth_(inst_73201)){
var statearr_73286_74618 = state_73270__$1;
(statearr_73286_74618[(1)] = (5));

} else {
var statearr_73287_74620 = state_73270__$1;
(statearr_73287_74620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (15))){
var state_73270__$1 = state_73270;
var statearr_73298_74621 = state_73270__$1;
(statearr_73298_74621[(2)] = null);

(statearr_73298_74621[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (21))){
var state_73270__$1 = state_73270;
var statearr_73300_74622 = state_73270__$1;
(statearr_73300_74622[(2)] = null);

(statearr_73300_74622[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (13))){
var inst_73215 = (state_73270[(8)]);
var inst_73216 = (state_73270[(10)]);
var inst_73214 = (state_73270[(11)]);
var inst_73213 = (state_73270[(12)]);
var inst_73224 = (state_73270[(2)]);
var inst_73225 = (inst_73216 + (1));
var tmp73292 = inst_73215;
var tmp73293 = inst_73214;
var tmp73294 = inst_73213;
var inst_73213__$1 = tmp73294;
var inst_73214__$1 = tmp73293;
var inst_73215__$1 = tmp73292;
var inst_73216__$1 = inst_73225;
var state_73270__$1 = (function (){var statearr_73301 = state_73270;
(statearr_73301[(8)] = inst_73215__$1);

(statearr_73301[(10)] = inst_73216__$1);

(statearr_73301[(11)] = inst_73214__$1);

(statearr_73301[(14)] = inst_73224);

(statearr_73301[(12)] = inst_73213__$1);

return statearr_73301;
})();
var statearr_73305_74625 = state_73270__$1;
(statearr_73305_74625[(2)] = null);

(statearr_73305_74625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (22))){
var state_73270__$1 = state_73270;
var statearr_73307_74626 = state_73270__$1;
(statearr_73307_74626[(2)] = null);

(statearr_73307_74626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (6))){
var inst_73199 = (state_73270[(13)]);
var inst_73211 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_73199) : f.call(null,inst_73199));
var inst_73212 = cljs.core.seq(inst_73211);
var inst_73213 = inst_73212;
var inst_73214 = null;
var inst_73215 = (0);
var inst_73216 = (0);
var state_73270__$1 = (function (){var statearr_73308 = state_73270;
(statearr_73308[(8)] = inst_73215);

(statearr_73308[(10)] = inst_73216);

(statearr_73308[(11)] = inst_73214);

(statearr_73308[(12)] = inst_73213);

return statearr_73308;
})();
var statearr_73312_74627 = state_73270__$1;
(statearr_73312_74627[(2)] = null);

(statearr_73312_74627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (17))){
var inst_73228 = (state_73270[(7)]);
var inst_73237 = cljs.core.chunk_first(inst_73228);
var inst_73238 = cljs.core.chunk_rest(inst_73228);
var inst_73239 = cljs.core.count(inst_73237);
var inst_73213 = inst_73238;
var inst_73214 = inst_73237;
var inst_73215 = inst_73239;
var inst_73216 = (0);
var state_73270__$1 = (function (){var statearr_73314 = state_73270;
(statearr_73314[(8)] = inst_73215);

(statearr_73314[(10)] = inst_73216);

(statearr_73314[(11)] = inst_73214);

(statearr_73314[(12)] = inst_73213);

return statearr_73314;
})();
var statearr_73315_74628 = state_73270__$1;
(statearr_73315_74628[(2)] = null);

(statearr_73315_74628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (3))){
var inst_73267 = (state_73270[(2)]);
var state_73270__$1 = state_73270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73270__$1,inst_73267);
} else {
if((state_val_73271 === (12))){
var inst_73253 = (state_73270[(2)]);
var state_73270__$1 = state_73270;
var statearr_73320_74629 = state_73270__$1;
(statearr_73320_74629[(2)] = inst_73253);

(statearr_73320_74629[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (2))){
var state_73270__$1 = state_73270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73270__$1,(4),in$);
} else {
if((state_val_73271 === (23))){
var inst_73263 = (state_73270[(2)]);
var state_73270__$1 = state_73270;
var statearr_73321_74630 = state_73270__$1;
(statearr_73321_74630[(2)] = inst_73263);

(statearr_73321_74630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (19))){
var inst_73248 = (state_73270[(2)]);
var state_73270__$1 = state_73270;
var statearr_73323_74631 = state_73270__$1;
(statearr_73323_74631[(2)] = inst_73248);

(statearr_73323_74631[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (11))){
var inst_73213 = (state_73270[(12)]);
var inst_73228 = (state_73270[(7)]);
var inst_73228__$1 = cljs.core.seq(inst_73213);
var state_73270__$1 = (function (){var statearr_73324 = state_73270;
(statearr_73324[(7)] = inst_73228__$1);

return statearr_73324;
})();
if(inst_73228__$1){
var statearr_73325_74639 = state_73270__$1;
(statearr_73325_74639[(1)] = (14));

} else {
var statearr_73326_74640 = state_73270__$1;
(statearr_73326_74640[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (9))){
var inst_73255 = (state_73270[(2)]);
var inst_73256 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_73270__$1 = (function (){var statearr_73327 = state_73270;
(statearr_73327[(15)] = inst_73255);

return statearr_73327;
})();
if(cljs.core.truth_(inst_73256)){
var statearr_73332_74641 = state_73270__$1;
(statearr_73332_74641[(1)] = (21));

} else {
var statearr_73333_74642 = state_73270__$1;
(statearr_73333_74642[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (5))){
var inst_73204 = cljs.core.async.close_BANG_(out);
var state_73270__$1 = state_73270;
var statearr_73337_74643 = state_73270__$1;
(statearr_73337_74643[(2)] = inst_73204);

(statearr_73337_74643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (14))){
var inst_73228 = (state_73270[(7)]);
var inst_73234 = cljs.core.chunked_seq_QMARK_(inst_73228);
var state_73270__$1 = state_73270;
if(inst_73234){
var statearr_73341_74645 = state_73270__$1;
(statearr_73341_74645[(1)] = (17));

} else {
var statearr_73343_74646 = state_73270__$1;
(statearr_73343_74646[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (16))){
var inst_73251 = (state_73270[(2)]);
var state_73270__$1 = state_73270;
var statearr_73346_74647 = state_73270__$1;
(statearr_73346_74647[(2)] = inst_73251);

(statearr_73346_74647[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73271 === (10))){
var inst_73216 = (state_73270[(10)]);
var inst_73214 = (state_73270[(11)]);
var inst_73222 = cljs.core._nth(inst_73214,inst_73216);
var state_73270__$1 = state_73270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73270__$1,(13),out,inst_73222);
} else {
if((state_val_73271 === (18))){
var inst_73228 = (state_73270[(7)]);
var inst_73242 = cljs.core.first(inst_73228);
var state_73270__$1 = state_73270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73270__$1,(20),out,inst_73242);
} else {
if((state_val_73271 === (8))){
var inst_73215 = (state_73270[(8)]);
var inst_73216 = (state_73270[(10)]);
var inst_73218 = (inst_73216 < inst_73215);
var inst_73219 = inst_73218;
var state_73270__$1 = state_73270;
if(cljs.core.truth_(inst_73219)){
var statearr_73356_74657 = state_73270__$1;
(statearr_73356_74657[(1)] = (10));

} else {
var statearr_73358_74658 = state_73270__$1;
(statearr_73358_74658[(1)] = (11));

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__70289__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__70289__auto____0 = (function (){
var statearr_73362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73362[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__70289__auto__);

(statearr_73362[(1)] = (1));

return statearr_73362;
});
var cljs$core$async$mapcat_STAR__$_state_machine__70289__auto____1 = (function (state_73270){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_73270);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e73364){var ex__70292__auto__ = e73364;
var statearr_73365_74663 = state_73270;
(statearr_73365_74663[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_73270[(4)]))){
var statearr_73370_74664 = state_73270;
(statearr_73370_74664[(1)] = cljs.core.first((state_73270[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74667 = state_73270;
state_73270 = G__74667;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__70289__auto__ = function(state_73270){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__70289__auto____1.call(this,state_73270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__70289__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__70289__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_73375 = f__70473__auto__();
(statearr_73375[(6)] = c__70472__auto__);

return statearr_73375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));

return c__70472__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__73383 = arguments.length;
switch (G__73383) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__73399 = arguments.length;
switch (G__73399) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__73418 = arguments.length;
switch (G__73418) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__70472__auto___74687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_73458){
var state_val_73459 = (state_73458[(1)]);
if((state_val_73459 === (7))){
var inst_73451 = (state_73458[(2)]);
var state_73458__$1 = state_73458;
var statearr_73465_74688 = state_73458__$1;
(statearr_73465_74688[(2)] = inst_73451);

(statearr_73465_74688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73459 === (1))){
var inst_73430 = null;
var state_73458__$1 = (function (){var statearr_73468 = state_73458;
(statearr_73468[(7)] = inst_73430);

return statearr_73468;
})();
var statearr_73470_74689 = state_73458__$1;
(statearr_73470_74689[(2)] = null);

(statearr_73470_74689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73459 === (4))){
var inst_73433 = (state_73458[(8)]);
var inst_73433__$1 = (state_73458[(2)]);
var inst_73434 = (inst_73433__$1 == null);
var inst_73435 = cljs.core.not(inst_73434);
var state_73458__$1 = (function (){var statearr_73478 = state_73458;
(statearr_73478[(8)] = inst_73433__$1);

return statearr_73478;
})();
if(inst_73435){
var statearr_73480_74692 = state_73458__$1;
(statearr_73480_74692[(1)] = (5));

} else {
var statearr_73482_74694 = state_73458__$1;
(statearr_73482_74694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73459 === (6))){
var state_73458__$1 = state_73458;
var statearr_73486_74697 = state_73458__$1;
(statearr_73486_74697[(2)] = null);

(statearr_73486_74697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73459 === (3))){
var inst_73453 = (state_73458[(2)]);
var inst_73454 = cljs.core.async.close_BANG_(out);
var state_73458__$1 = (function (){var statearr_73487 = state_73458;
(statearr_73487[(9)] = inst_73453);

return statearr_73487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73458__$1,inst_73454);
} else {
if((state_val_73459 === (2))){
var state_73458__$1 = state_73458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73458__$1,(4),ch);
} else {
if((state_val_73459 === (11))){
var inst_73433 = (state_73458[(8)]);
var inst_73444 = (state_73458[(2)]);
var inst_73430 = inst_73433;
var state_73458__$1 = (function (){var statearr_73495 = state_73458;
(statearr_73495[(7)] = inst_73430);

(statearr_73495[(10)] = inst_73444);

return statearr_73495;
})();
var statearr_73498_74702 = state_73458__$1;
(statearr_73498_74702[(2)] = null);

(statearr_73498_74702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73459 === (9))){
var inst_73433 = (state_73458[(8)]);
var state_73458__$1 = state_73458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73458__$1,(11),out,inst_73433);
} else {
if((state_val_73459 === (5))){
var inst_73430 = (state_73458[(7)]);
var inst_73433 = (state_73458[(8)]);
var inst_73439 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_73433,inst_73430);
var state_73458__$1 = state_73458;
if(inst_73439){
var statearr_73505_74705 = state_73458__$1;
(statearr_73505_74705[(1)] = (8));

} else {
var statearr_73508_74706 = state_73458__$1;
(statearr_73508_74706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73459 === (10))){
var inst_73448 = (state_73458[(2)]);
var state_73458__$1 = state_73458;
var statearr_73511_74708 = state_73458__$1;
(statearr_73511_74708[(2)] = inst_73448);

(statearr_73511_74708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73459 === (8))){
var inst_73430 = (state_73458[(7)]);
var tmp73502 = inst_73430;
var inst_73430__$1 = tmp73502;
var state_73458__$1 = (function (){var statearr_73512 = state_73458;
(statearr_73512[(7)] = inst_73430__$1);

return statearr_73512;
})();
var statearr_73516_74710 = state_73458__$1;
(statearr_73516_74710[(2)] = null);

(statearr_73516_74710[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__70289__auto__ = null;
var cljs$core$async$state_machine__70289__auto____0 = (function (){
var statearr_73521 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_73521[(0)] = cljs$core$async$state_machine__70289__auto__);

(statearr_73521[(1)] = (1));

return statearr_73521;
});
var cljs$core$async$state_machine__70289__auto____1 = (function (state_73458){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_73458);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e73524){var ex__70292__auto__ = e73524;
var statearr_73525_74712 = state_73458;
(statearr_73525_74712[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_73458[(4)]))){
var statearr_73526_74713 = state_73458;
(statearr_73526_74713[(1)] = cljs.core.first((state_73458[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74714 = state_73458;
state_73458 = G__74714;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$state_machine__70289__auto__ = function(state_73458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70289__auto____1.call(this,state_73458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70289__auto____0;
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70289__auto____1;
return cljs$core$async$state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_73532 = f__70473__auto__();
(statearr_73532[(6)] = c__70472__auto___74687);

return statearr_73532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__73542 = arguments.length;
switch (G__73542) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__70472__auto___74720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_73582){
var state_val_73583 = (state_73582[(1)]);
if((state_val_73583 === (7))){
var inst_73578 = (state_73582[(2)]);
var state_73582__$1 = state_73582;
var statearr_73586_74721 = state_73582__$1;
(statearr_73586_74721[(2)] = inst_73578);

(statearr_73586_74721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73583 === (1))){
var inst_73545 = (new Array(n));
var inst_73546 = inst_73545;
var inst_73547 = (0);
var state_73582__$1 = (function (){var statearr_73587 = state_73582;
(statearr_73587[(7)] = inst_73546);

(statearr_73587[(8)] = inst_73547);

return statearr_73587;
})();
var statearr_73588_74725 = state_73582__$1;
(statearr_73588_74725[(2)] = null);

(statearr_73588_74725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73583 === (4))){
var inst_73550 = (state_73582[(9)]);
var inst_73550__$1 = (state_73582[(2)]);
var inst_73551 = (inst_73550__$1 == null);
var inst_73552 = cljs.core.not(inst_73551);
var state_73582__$1 = (function (){var statearr_73590 = state_73582;
(statearr_73590[(9)] = inst_73550__$1);

return statearr_73590;
})();
if(inst_73552){
var statearr_73592_74726 = state_73582__$1;
(statearr_73592_74726[(1)] = (5));

} else {
var statearr_73595_74727 = state_73582__$1;
(statearr_73595_74727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73583 === (15))){
var inst_73572 = (state_73582[(2)]);
var state_73582__$1 = state_73582;
var statearr_73598_74728 = state_73582__$1;
(statearr_73598_74728[(2)] = inst_73572);

(statearr_73598_74728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73583 === (13))){
var state_73582__$1 = state_73582;
var statearr_73599_74729 = state_73582__$1;
(statearr_73599_74729[(2)] = null);

(statearr_73599_74729[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73583 === (6))){
var inst_73547 = (state_73582[(8)]);
var inst_73568 = (inst_73547 > (0));
var state_73582__$1 = state_73582;
if(cljs.core.truth_(inst_73568)){
var statearr_73600_74731 = state_73582__$1;
(statearr_73600_74731[(1)] = (12));

} else {
var statearr_73601_74732 = state_73582__$1;
(statearr_73601_74732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73583 === (3))){
var inst_73580 = (state_73582[(2)]);
var state_73582__$1 = state_73582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73582__$1,inst_73580);
} else {
if((state_val_73583 === (12))){
var inst_73546 = (state_73582[(7)]);
var inst_73570 = cljs.core.vec(inst_73546);
var state_73582__$1 = state_73582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73582__$1,(15),out,inst_73570);
} else {
if((state_val_73583 === (2))){
var state_73582__$1 = state_73582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73582__$1,(4),ch);
} else {
if((state_val_73583 === (11))){
var inst_73562 = (state_73582[(2)]);
var inst_73563 = (new Array(n));
var inst_73546 = inst_73563;
var inst_73547 = (0);
var state_73582__$1 = (function (){var statearr_73602 = state_73582;
(statearr_73602[(10)] = inst_73562);

(statearr_73602[(7)] = inst_73546);

(statearr_73602[(8)] = inst_73547);

return statearr_73602;
})();
var statearr_73603_74740 = state_73582__$1;
(statearr_73603_74740[(2)] = null);

(statearr_73603_74740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73583 === (9))){
var inst_73546 = (state_73582[(7)]);
var inst_73560 = cljs.core.vec(inst_73546);
var state_73582__$1 = state_73582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73582__$1,(11),out,inst_73560);
} else {
if((state_val_73583 === (5))){
var inst_73546 = (state_73582[(7)]);
var inst_73555 = (state_73582[(11)]);
var inst_73550 = (state_73582[(9)]);
var inst_73547 = (state_73582[(8)]);
var inst_73554 = (inst_73546[inst_73547] = inst_73550);
var inst_73555__$1 = (inst_73547 + (1));
var inst_73556 = (inst_73555__$1 < n);
var state_73582__$1 = (function (){var statearr_73604 = state_73582;
(statearr_73604[(11)] = inst_73555__$1);

(statearr_73604[(12)] = inst_73554);

return statearr_73604;
})();
if(cljs.core.truth_(inst_73556)){
var statearr_73605_74741 = state_73582__$1;
(statearr_73605_74741[(1)] = (8));

} else {
var statearr_73606_74742 = state_73582__$1;
(statearr_73606_74742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73583 === (14))){
var inst_73575 = (state_73582[(2)]);
var inst_73576 = cljs.core.async.close_BANG_(out);
var state_73582__$1 = (function (){var statearr_73608 = state_73582;
(statearr_73608[(13)] = inst_73575);

return statearr_73608;
})();
var statearr_73609_74744 = state_73582__$1;
(statearr_73609_74744[(2)] = inst_73576);

(statearr_73609_74744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73583 === (10))){
var inst_73566 = (state_73582[(2)]);
var state_73582__$1 = state_73582;
var statearr_73610_74745 = state_73582__$1;
(statearr_73610_74745[(2)] = inst_73566);

(statearr_73610_74745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73583 === (8))){
var inst_73546 = (state_73582[(7)]);
var inst_73555 = (state_73582[(11)]);
var tmp73607 = inst_73546;
var inst_73546__$1 = tmp73607;
var inst_73547 = inst_73555;
var state_73582__$1 = (function (){var statearr_73611 = state_73582;
(statearr_73611[(7)] = inst_73546__$1);

(statearr_73611[(8)] = inst_73547);

return statearr_73611;
})();
var statearr_73612_74749 = state_73582__$1;
(statearr_73612_74749[(2)] = null);

(statearr_73612_74749[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__70289__auto__ = null;
var cljs$core$async$state_machine__70289__auto____0 = (function (){
var statearr_73613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73613[(0)] = cljs$core$async$state_machine__70289__auto__);

(statearr_73613[(1)] = (1));

return statearr_73613;
});
var cljs$core$async$state_machine__70289__auto____1 = (function (state_73582){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_73582);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e73614){var ex__70292__auto__ = e73614;
var statearr_73615_74754 = state_73582;
(statearr_73615_74754[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_73582[(4)]))){
var statearr_73616_74758 = state_73582;
(statearr_73616_74758[(1)] = cljs.core.first((state_73582[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74759 = state_73582;
state_73582 = G__74759;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$state_machine__70289__auto__ = function(state_73582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70289__auto____1.call(this,state_73582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70289__auto____0;
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70289__auto____1;
return cljs$core$async$state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_73617 = f__70473__auto__();
(statearr_73617[(6)] = c__70472__auto___74720);

return statearr_73617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__73620 = arguments.length;
switch (G__73620) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__70472__auto___74763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__70473__auto__ = (function (){var switch__70288__auto__ = (function (state_73668){
var state_val_73669 = (state_73668[(1)]);
if((state_val_73669 === (7))){
var inst_73663 = (state_73668[(2)]);
var state_73668__$1 = state_73668;
var statearr_73670_74766 = state_73668__$1;
(statearr_73670_74766[(2)] = inst_73663);

(statearr_73670_74766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (1))){
var inst_73622 = [];
var inst_73623 = inst_73622;
var inst_73624 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_73668__$1 = (function (){var statearr_73671 = state_73668;
(statearr_73671[(7)] = inst_73623);

(statearr_73671[(8)] = inst_73624);

return statearr_73671;
})();
var statearr_73672_74770 = state_73668__$1;
(statearr_73672_74770[(2)] = null);

(statearr_73672_74770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (4))){
var inst_73627 = (state_73668[(9)]);
var inst_73627__$1 = (state_73668[(2)]);
var inst_73628 = (inst_73627__$1 == null);
var inst_73629 = cljs.core.not(inst_73628);
var state_73668__$1 = (function (){var statearr_73673 = state_73668;
(statearr_73673[(9)] = inst_73627__$1);

return statearr_73673;
})();
if(inst_73629){
var statearr_73675_74771 = state_73668__$1;
(statearr_73675_74771[(1)] = (5));

} else {
var statearr_73676_74772 = state_73668__$1;
(statearr_73676_74772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (15))){
var inst_73623 = (state_73668[(7)]);
var inst_73655 = cljs.core.vec(inst_73623);
var state_73668__$1 = state_73668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73668__$1,(18),out,inst_73655);
} else {
if((state_val_73669 === (13))){
var inst_73649 = (state_73668[(2)]);
var state_73668__$1 = state_73668;
var statearr_73678_74777 = state_73668__$1;
(statearr_73678_74777[(2)] = inst_73649);

(statearr_73678_74777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (6))){
var inst_73623 = (state_73668[(7)]);
var inst_73651 = inst_73623.length;
var inst_73652 = (inst_73651 > (0));
var state_73668__$1 = state_73668;
if(cljs.core.truth_(inst_73652)){
var statearr_73679_74781 = state_73668__$1;
(statearr_73679_74781[(1)] = (15));

} else {
var statearr_73680_74782 = state_73668__$1;
(statearr_73680_74782[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (17))){
var inst_73660 = (state_73668[(2)]);
var inst_73661 = cljs.core.async.close_BANG_(out);
var state_73668__$1 = (function (){var statearr_73681 = state_73668;
(statearr_73681[(10)] = inst_73660);

return statearr_73681;
})();
var statearr_73682_74783 = state_73668__$1;
(statearr_73682_74783[(2)] = inst_73661);

(statearr_73682_74783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (3))){
var inst_73665 = (state_73668[(2)]);
var state_73668__$1 = state_73668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_73668__$1,inst_73665);
} else {
if((state_val_73669 === (12))){
var inst_73623 = (state_73668[(7)]);
var inst_73642 = cljs.core.vec(inst_73623);
var state_73668__$1 = state_73668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_73668__$1,(14),out,inst_73642);
} else {
if((state_val_73669 === (2))){
var state_73668__$1 = state_73668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73668__$1,(4),ch);
} else {
if((state_val_73669 === (11))){
var inst_73623 = (state_73668[(7)]);
var inst_73631 = (state_73668[(11)]);
var inst_73627 = (state_73668[(9)]);
var inst_73639 = inst_73623.push(inst_73627);
var tmp73683 = inst_73623;
var inst_73623__$1 = tmp73683;
var inst_73624 = inst_73631;
var state_73668__$1 = (function (){var statearr_73684 = state_73668;
(statearr_73684[(7)] = inst_73623__$1);

(statearr_73684[(12)] = inst_73639);

(statearr_73684[(8)] = inst_73624);

return statearr_73684;
})();
var statearr_73685_74790 = state_73668__$1;
(statearr_73685_74790[(2)] = null);

(statearr_73685_74790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (9))){
var inst_73624 = (state_73668[(8)]);
var inst_73635 = cljs.core.keyword_identical_QMARK_(inst_73624,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_73668__$1 = state_73668;
var statearr_73686_74791 = state_73668__$1;
(statearr_73686_74791[(2)] = inst_73635);

(statearr_73686_74791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (5))){
var inst_73631 = (state_73668[(11)]);
var inst_73627 = (state_73668[(9)]);
var inst_73624 = (state_73668[(8)]);
var inst_73632 = (state_73668[(13)]);
var inst_73631__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_73627) : f.call(null,inst_73627));
var inst_73632__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_73631__$1,inst_73624);
var state_73668__$1 = (function (){var statearr_73687 = state_73668;
(statearr_73687[(11)] = inst_73631__$1);

(statearr_73687[(13)] = inst_73632__$1);

return statearr_73687;
})();
if(inst_73632__$1){
var statearr_73688_74792 = state_73668__$1;
(statearr_73688_74792[(1)] = (8));

} else {
var statearr_73689_74793 = state_73668__$1;
(statearr_73689_74793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (14))){
var inst_73631 = (state_73668[(11)]);
var inst_73627 = (state_73668[(9)]);
var inst_73644 = (state_73668[(2)]);
var inst_73645 = [];
var inst_73646 = inst_73645.push(inst_73627);
var inst_73623 = inst_73645;
var inst_73624 = inst_73631;
var state_73668__$1 = (function (){var statearr_73692 = state_73668;
(statearr_73692[(7)] = inst_73623);

(statearr_73692[(14)] = inst_73646);

(statearr_73692[(8)] = inst_73624);

(statearr_73692[(15)] = inst_73644);

return statearr_73692;
})();
var statearr_73693_74795 = state_73668__$1;
(statearr_73693_74795[(2)] = null);

(statearr_73693_74795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (16))){
var state_73668__$1 = state_73668;
var statearr_73694_74796 = state_73668__$1;
(statearr_73694_74796[(2)] = null);

(statearr_73694_74796[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (10))){
var inst_73637 = (state_73668[(2)]);
var state_73668__$1 = state_73668;
if(cljs.core.truth_(inst_73637)){
var statearr_73695_74799 = state_73668__$1;
(statearr_73695_74799[(1)] = (11));

} else {
var statearr_73696_74800 = state_73668__$1;
(statearr_73696_74800[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (18))){
var inst_73657 = (state_73668[(2)]);
var state_73668__$1 = state_73668;
var statearr_73698_74801 = state_73668__$1;
(statearr_73698_74801[(2)] = inst_73657);

(statearr_73698_74801[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73669 === (8))){
var inst_73632 = (state_73668[(13)]);
var state_73668__$1 = state_73668;
var statearr_73702_74805 = state_73668__$1;
(statearr_73702_74805[(2)] = inst_73632);

(statearr_73702_74805[(1)] = (10));


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
var cljs$core$async$state_machine__70289__auto__ = null;
var cljs$core$async$state_machine__70289__auto____0 = (function (){
var statearr_73703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73703[(0)] = cljs$core$async$state_machine__70289__auto__);

(statearr_73703[(1)] = (1));

return statearr_73703;
});
var cljs$core$async$state_machine__70289__auto____1 = (function (state_73668){
while(true){
var ret_value__70290__auto__ = (function (){try{while(true){
var result__70291__auto__ = switch__70288__auto__(state_73668);
if(cljs.core.keyword_identical_QMARK_(result__70291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__70291__auto__;
}
break;
}
}catch (e73705){var ex__70292__auto__ = e73705;
var statearr_73706_74816 = state_73668;
(statearr_73706_74816[(2)] = ex__70292__auto__);


if(cljs.core.seq((state_73668[(4)]))){
var statearr_73707_74817 = state_73668;
(statearr_73707_74817[(1)] = cljs.core.first((state_73668[(4)])));

} else {
throw ex__70292__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__70290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__74818 = state_73668;
state_73668 = G__74818;
continue;
} else {
return ret_value__70290__auto__;
}
break;
}
});
cljs$core$async$state_machine__70289__auto__ = function(state_73668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__70289__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__70289__auto____1.call(this,state_73668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__70289__auto____0;
cljs$core$async$state_machine__70289__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__70289__auto____1;
return cljs$core$async$state_machine__70289__auto__;
})()
})();
var state__70474__auto__ = (function (){var statearr_73713 = f__70473__auto__();
(statearr_73713[(6)] = c__70472__auto___74763);

return statearr_73713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__70474__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
