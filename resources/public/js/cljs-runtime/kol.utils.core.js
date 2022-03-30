goog.provide('kol.utils.core');
/**
 * Get the value from event target.
 */
kol.utils.core.get_val = (function kol$utils$core$get_val(evt){
return evt.target.value;
});
/**
 * Returns true if `coll` contains `el`.
 */
kol.utils.core.in_QMARK_ = (function kol$utils$core$in_QMARK_(coll,el){
return cljs.core.some((function (p1__79766_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,p1__79766_SHARP_);
}),coll);
});
/**
 * Return true if platform is MacOS.
 */
kol.utils.core.mac_os_QMARK_ = (function (){var and__4251__auto__ = (typeof navigator !== 'undefined');
if(and__4251__auto__){
return /Mac/.test(navigator.platform);
} else {
return and__4251__auto__;
}
})();

//# sourceMappingURL=kol.utils.core.js.map
