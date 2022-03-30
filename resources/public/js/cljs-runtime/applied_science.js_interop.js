goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4870__auto__ = [];
var len__4864__auto___71156 = arguments.length;
var i__4865__auto___71157 = (0);
while(true){
if((i__4865__auto___71157 < len__4864__auto___71156)){
args__4870__auto__.push((arguments[i__4865__auto___71157]));

var G__71158 = (i__4865__auto___71157 + (1));
i__4865__auto___71157 = G__71158;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__71055_71159 = keyvals;
var vec__71056_71160 = G__71055_71159;
var seq__71057_71161 = cljs.core.seq(vec__71056_71160);
var first__71058_71162 = cljs.core.first(seq__71057_71161);
var seq__71057_71163__$1 = cljs.core.next(seq__71057_71161);
var k_71164 = first__71058_71162;
var first__71058_71165__$1 = cljs.core.first(seq__71057_71163__$1);
var seq__71057_71166__$2 = cljs.core.next(seq__71057_71163__$1);
var v_71167 = first__71058_71165__$1;
var keyvals_71168__$1 = seq__71057_71166__$2;
var G__71055_71169__$1 = G__71055_71159;
while(true){
var vec__71059_71170 = G__71055_71169__$1;
var seq__71060_71171 = cljs.core.seq(vec__71059_71170);
var first__71061_71172 = cljs.core.first(seq__71060_71171);
var seq__71060_71173__$1 = cljs.core.next(seq__71060_71171);
var k_71174__$1 = first__71061_71172;
var first__71061_71175__$1 = cljs.core.first(seq__71060_71173__$1);
var seq__71060_71176__$2 = cljs.core.next(seq__71060_71173__$1);
var v_71177__$1 = first__71061_71175__$1;
var keyvals_71178__$2 = seq__71060_71176__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_71174__$1)] = v_71177__$1);

if(keyvals_71178__$2){
var G__71179 = keyvals_71178__$2;
G__71055_71169__$1 = G__71179;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq71047){
var G__71051 = cljs.core.first(seq71047);
var seq71047__$1 = cljs.core.next(seq71047);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71051,seq71047__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__71063 = arguments.length;
switch (G__71063) {
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj71064 = obj;
var k71065 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj71066 = obj71064;
return (((!((obj71066 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71065,obj71066)));
})()){
return (obj71064[k71065]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj71067 = obj;
var k71068 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj71069 = obj71067;
return (((!((obj71069 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71068,obj71069)));
})()){
return (obj71067[k71068]);
} else {
return not_found;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__71071 = arguments.length;
switch (G__71071) {
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj71072 = self__.obj;
var k71073 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj71074 = obj71072;
return (((!((obj71074 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71073,obj71074)));
})()){
return (obj71072[k71073]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj71075 = self__.obj;
var k71076 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj71077 = obj71075;
return (((!((obj71077 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71076,obj71077)));
})()){
return (obj71075[k71076]);
} else {
return not_found;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___71184 = arguments.length;
var i__4865__auto___71185 = (0);
while(true){
if((i__4865__auto___71185 < len__4864__auto___71184)){
args__4870__auto__.push((arguments[i__4865__auto___71185]));

var G__71186 = (i__4865__auto___71185 + (1));
i__4865__auto___71185 = G__71186;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__71083 = keyvals;
var vec__71084 = G__71083;
var seq__71085 = cljs.core.seq(vec__71084);
var first__71086 = cljs.core.first(seq__71085);
var seq__71085__$1 = cljs.core.next(seq__71085);
var k = first__71086;
var first__71086__$1 = cljs.core.first(seq__71085__$1);
var seq__71085__$2 = cljs.core.next(seq__71085__$1);
var v = first__71086__$1;
var kvs = seq__71085__$2;
var G__71083__$1 = G__71083;
while(true){
var vec__71087 = G__71083__$1;
var seq__71088 = cljs.core.seq(vec__71087);
var first__71089 = cljs.core.first(seq__71088);
var seq__71088__$1 = cljs.core.next(seq__71088);
var k__$1 = first__71089;
var first__71089__$1 = cljs.core.first(seq__71088__$1);
var seq__71088__$2 = cljs.core.next(seq__71088__$1);
var v__$1 = first__71089__$1;
var kvs__$1 = seq__71088__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__71187 = kvs__$1;
G__71083__$1 = G__71187;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq71078){
var G__71079 = cljs.core.first(seq71078);
var seq71078__$1 = cljs.core.next(seq71078);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71079,seq71078__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___71188 = arguments.length;
var i__4865__auto___71189 = (0);
while(true){
if((i__4865__auto___71189 < len__4864__auto___71188)){
args__4870__auto__.push((arguments[i__4865__auto___71189]));

var G__71190 = (i__4865__auto___71189 + (1));
i__4865__auto___71189 = G__71190;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq71090){
var G__71091 = cljs.core.first(seq71090);
var seq71090__$1 = cljs.core.next(seq71090);
var G__71092 = cljs.core.first(seq71090__$1);
var seq71090__$2 = cljs.core.next(seq71090__$1);
var G__71093 = cljs.core.first(seq71090__$2);
var seq71090__$3 = cljs.core.next(seq71090__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71091,G__71092,G__71093,seq71090__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___71193 = arguments.length;
var i__4865__auto___71194 = (0);
while(true){
if((i__4865__auto___71194 < len__4864__auto___71193)){
args__4870__auto__.push((arguments[i__4865__auto___71194]));

var G__71195 = (i__4865__auto___71194 + (1));
i__4865__auto___71194 = G__71195;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq71094){
var G__71095 = cljs.core.first(seq71094);
var seq71094__$1 = cljs.core.next(seq71094);
var G__71096 = cljs.core.first(seq71094__$1);
var seq71094__$2 = cljs.core.next(seq71094__$1);
var G__71097 = cljs.core.first(seq71094__$2);
var seq71094__$3 = cljs.core.next(seq71094__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71095,G__71096,G__71097,seq71094__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend o other)
 *   (j/extend o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__71102 = arguments.length;
switch (G__71102) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___71197 = arguments.length;
var i__4865__auto___71198 = (0);
while(true){
if((i__4865__auto___71198 < len__4864__auto___71197)){
args_arr__4885__auto__.push((arguments[i__4865__auto___71198]));

var G__71199 = (i__4865__auto___71198 + (1));
i__4865__auto___71198 = G__71199;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__71103_71200 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__71104_71201 = null;
var count__71105_71202 = (0);
var i__71106_71203 = (0);
while(true){
if((i__71106_71203 < count__71105_71202)){
var k_71204 = chunk__71104_71201.cljs$core$IIndexed$_nth$arity$2(null,i__71106_71203);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_71204,applied_science.js_interop.unchecked_get(x,k_71204)], 0));


var G__71205 = seq__71103_71200;
var G__71206 = chunk__71104_71201;
var G__71207 = count__71105_71202;
var G__71208 = (i__71106_71203 + (1));
seq__71103_71200 = G__71205;
chunk__71104_71201 = G__71206;
count__71105_71202 = G__71207;
i__71106_71203 = G__71208;
continue;
} else {
var temp__5753__auto___71209 = cljs.core.seq(seq__71103_71200);
if(temp__5753__auto___71209){
var seq__71103_71210__$1 = temp__5753__auto___71209;
if(cljs.core.chunked_seq_QMARK_(seq__71103_71210__$1)){
var c__4679__auto___71211 = cljs.core.chunk_first(seq__71103_71210__$1);
var G__71212 = cljs.core.chunk_rest(seq__71103_71210__$1);
var G__71213 = c__4679__auto___71211;
var G__71214 = cljs.core.count(c__4679__auto___71211);
var G__71215 = (0);
seq__71103_71200 = G__71212;
chunk__71104_71201 = G__71213;
count__71105_71202 = G__71214;
i__71106_71203 = G__71215;
continue;
} else {
var k_71216 = cljs.core.first(seq__71103_71210__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_71216,applied_science.js_interop.unchecked_get(x,k_71216)], 0));


var G__71217 = cljs.core.next(seq__71103_71210__$1);
var G__71218 = null;
var G__71219 = (0);
var G__71220 = (0);
seq__71103_71200 = G__71217;
chunk__71104_71201 = G__71218;
count__71105_71202 = G__71219;
i__71106_71203 = G__71220;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq71099){
var G__71100 = cljs.core.first(seq71099);
var seq71099__$1 = cljs.core.next(seq71099);
var G__71101 = cljs.core.first(seq71099__$1);
var seq71099__$2 = cljs.core.next(seq71099__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71100,G__71101,seq71099__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__71107 = array;
G__71107.push(x);

return G__71107;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__71108 = array;
G__71108.unshift(x);

return G__71108;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4870__auto__ = [];
var len__4864__auto___71221 = arguments.length;
var i__4865__auto___71222 = (0);
while(true){
if((i__4865__auto___71222 < len__4864__auto___71221)){
args__4870__auto__.push((arguments[i__4865__auto___71222]));

var G__71223 = (i__4865__auto___71222 + (1));
i__4865__auto___71222 = G__71223;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj71112 = obj;
var k71113 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj71114 = obj71112;
return (((!((obj71114 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71113,obj71114)));
})()){
return (obj71112[k71113]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq71109){
var G__71110 = cljs.core.first(seq71109);
var seq71109__$1 = cljs.core.next(seq71109);
var G__71111 = cljs.core.first(seq71109__$1);
var seq71109__$2 = cljs.core.next(seq71109__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71110,G__71111,seq71109__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj71115 = obj;
var k71116 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj71117 = obj71115;
return (((!((obj71117 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k71116,obj71117)));
})()){
return (obj71115[k71116]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4870__auto__ = [];
var len__4864__auto___71225 = arguments.length;
var i__4865__auto___71226 = (0);
while(true){
if((i__4865__auto___71226 < len__4864__auto___71225)){
args__4870__auto__.push((arguments[i__4865__auto___71226]));

var G__71227 = (i__4865__auto___71226 + (1));
i__4865__auto___71226 = G__71227;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq71118){
var G__71119 = cljs.core.first(seq71118);
var seq71118__$1 = cljs.core.next(seq71118);
var G__71120 = cljs.core.first(seq71118__$1);
var seq71118__$2 = cljs.core.next(seq71118__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71119,G__71120,seq71118__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4870__auto__ = [];
var len__4864__auto___71228 = arguments.length;
var i__4865__auto___71229 = (0);
while(true){
if((i__4865__auto___71229 < len__4864__auto___71228)){
args__4870__auto__.push((arguments[i__4865__auto___71229]));

var G__71230 = (i__4865__auto___71229 + (1));
i__4865__auto___71229 = G__71230;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__71124_71232 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__71125_71233 = null;
var count__71126_71234 = (0);
var i__71127_71235 = (0);
while(true){
if((i__71127_71235 < count__71126_71234)){
var vec__71142_71236 = chunk__71125_71233.cljs$core$IIndexed$_nth$arity$2(null,i__71127_71235);
var k_71237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71142_71236,(0),null);
var v_71238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71142_71236,(1),null);
var obj71145_71239 = obj;
var obj71146_71240 = (((!((obj71145_71239 == null))))?obj71145_71239:({}));
(obj71146_71240[applied_science.js_interop.impl.wrap_key(k_71237)] = v_71238);



var G__71242 = seq__71124_71232;
var G__71243 = chunk__71125_71233;
var G__71244 = count__71126_71234;
var G__71245 = (i__71127_71235 + (1));
seq__71124_71232 = G__71242;
chunk__71125_71233 = G__71243;
count__71126_71234 = G__71244;
i__71127_71235 = G__71245;
continue;
} else {
var temp__5753__auto___71246 = cljs.core.seq(seq__71124_71232);
if(temp__5753__auto___71246){
var seq__71124_71247__$1 = temp__5753__auto___71246;
if(cljs.core.chunked_seq_QMARK_(seq__71124_71247__$1)){
var c__4679__auto___71248 = cljs.core.chunk_first(seq__71124_71247__$1);
var G__71249 = cljs.core.chunk_rest(seq__71124_71247__$1);
var G__71250 = c__4679__auto___71248;
var G__71251 = cljs.core.count(c__4679__auto___71248);
var G__71252 = (0);
seq__71124_71232 = G__71249;
chunk__71125_71233 = G__71250;
count__71126_71234 = G__71251;
i__71127_71235 = G__71252;
continue;
} else {
var vec__71149_71253 = cljs.core.first(seq__71124_71247__$1);
var k_71254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71149_71253,(0),null);
var v_71255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71149_71253,(1),null);
var obj71152_71257 = obj;
var obj71153_71258 = (((!((obj71152_71257 == null))))?obj71152_71257:({}));
(obj71153_71258[applied_science.js_interop.impl.wrap_key(k_71254)] = v_71255);



var G__71260 = cljs.core.next(seq__71124_71247__$1);
var G__71261 = null;
var G__71262 = (0);
var G__71263 = (0);
seq__71124_71232 = G__71260;
chunk__71125_71233 = G__71261;
count__71126_71234 = G__71262;
i__71127_71235 = G__71263;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq71121){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq71121));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
