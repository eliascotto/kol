goog.provide('dda.utils.core');
/**
 * Get the value from event target.
 */
dda.utils.core.get_val = (function dda$utils$core$get_val(evt){
return evt.target.value;
});
/**
 * Returns true if `coll` contains `el`.
 */
dda.utils.core.in_QMARK_ = (function dda$utils$core$in_QMARK_(coll,el){
return cljs.core.some((function (p1__67670_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el,p1__67670_SHARP_);
}),coll);
});
/**
 * Return true if platform is MacOS.
 */
dda.utils.core.mac_os_QMARK_ = (function (){var and__4251__auto__ = (typeof navigator !== 'undefined');
if(and__4251__auto__){
return /Mac/.test(navigator.platform);
} else {
return and__4251__auto__;
}
})();

//# sourceMappingURL=dda.utils.core.js.map
