goog.provide('kol.comp.organism.repl');
/**
 * Return true if the current input is multiline.
 */
kol.comp.organism.repl.multiline_QMARK_ = (function kol$comp$organism$repl$multiline_QMARK_(){
return cljs.core.not_empty(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-multiline","repl-multiline",1630343426)], null))));
});
/**
 * Append `s` to the REPL history.
 *   Optional keyword `k` to use as a type.
 */
kol.comp.organism.repl.write_repl = (function kol$comp$organism$repl$write_repl(var_args){
var G__74459 = arguments.length;
switch (G__74459) {
case 1:
return kol.comp.organism.repl.write_repl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kol.comp.organism.repl.write_repl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kol.comp.organism.repl.write_repl.cljs$core$IFn$_invoke$arity$1 = (function (s){
return kol.comp.organism.repl.write_repl.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Keyword(null,"output","output",-1105869043));
}));

(kol.comp.organism.repl.write_repl.cljs$core$IFn$_invoke$arity$2 = (function (s,k){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-history-append","repl-history-append",-1822532236),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),k,new cljs.core.Keyword(null,"value","value",305978217),s], null)], null));
}));

(kol.comp.organism.repl.write_repl.cljs$lang$maxFixedArity = 2);

/**
 * Append `val` to the multiline expression.
 */
kol.comp.organism.repl.append_multiline = (function kol$comp$organism$repl$append_multiline(val){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-multiline-append","repl-multiline-append",-1964212958),val], null));
});
/**
 * If `repl-multiline` is not empty, append `in` value to it.
 */
kol.comp.organism.repl.update_multiline = (function kol$comp$organism$repl$update_multiline(in$){
if(cljs.core.truth_(kol.comp.organism.repl.multiline_QMARK_())){
return kol.comp.organism.repl.append_multiline(in$);
} else {
return null;
}
});
/**
 * Return the entire code typed into the REPL for evaluation.
 */
kol.comp.organism.repl.input_expr = (function kol$comp$organism$repl$input_expr(in$){
if(cljs.core.truth_(kol.comp.organism.repl.multiline_QMARK_())){
var multi = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-multiline","repl-multiline",1630343426)], null)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(multi),cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join('');
} else {
return in$;
}
});
/**
 * Append `in` to the REPL history.
 */
kol.comp.organism.repl.write_input_to_repl = (function kol$comp$organism$repl$write_input_to_repl(in$){
if(cljs.core.truth_(kol.comp.organism.repl.multiline_QMARK_())){
return kol.comp.organism.repl.write_repl.cljs$core$IFn$_invoke$arity$2(in$,new cljs.core.Keyword(null,"input-multi","input-multi",-1485391374));
} else {
return kol.comp.organism.repl.write_repl.cljs$core$IFn$_invoke$arity$2(in$,new cljs.core.Keyword(null,"input","input",556931961));
}
});
kol.comp.organism.repl.eval_input = (function kol$comp$organism$repl$eval_input(in$){
return window.electronAPI.eval(in$);
});
/**
 * Clear the REPL input.
 */
kol.comp.organism.repl.reset_repl_input = (function kol$comp$organism$repl$reset_repl_input(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-input-reset","repl-input-reset",1918963971)], null));
});
/**
 * Reset the REPL state, except the history.
 */
kol.comp.organism.repl.reset_repl = (function kol$comp$organism$repl$reset_repl(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-reset-all","repl-reset-all",-1988194059)], null));
});
kol.comp.organism.repl.set_placeholder = (function kol$comp$organism$repl$set_placeholder(val){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-set-placeholder","repl-set-placeholder",-1174595908),val], null));
});
/**
 * Try parsing the input expression. Throw an exception if catches a missing
 *   delimiter or returns the original expression.
 */
kol.comp.organism.repl.parse_expr = (function kol$comp$organism$repl$parse_expr(cmd){
try{if(cljs.core.truth_(edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$1(cmd))){
return cmd;
} else {
return null;
}
}catch (e74460){if((e74460 instanceof cljs.core.ExceptionInfo)){
var e = e74460;
var err_data = cljs.core.ex_data(e);
var delimiter = new cljs.core.Keyword("edamame","expected-delimiter","edamame/expected-delimiter",93379254).cljs$core$IFn$_invoke$arity$1(err_data);
if(cljs.core.truth_(delimiter)){
throw ["Expected delimiter '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delimiter),"' on column: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(err_data))].join('');
} else {
return cmd;
}
} else {
throw e74460;

}
}});
/**
 * on-keydown event for the REPL input.
 */
kol.comp.organism.repl.handle_keydown = (function kol$comp$organism$repl$handle_keydown(e){
var repl_input = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-input","repl-input",-1430642169)], null)));
var pred__74461 = cljs.core._EQ_;
var expr__74462 = e.key;
if(cljs.core.truth_((pred__74461.cljs$core$IFn$_invoke$arity$2 ? pred__74461.cljs$core$IFn$_invoke$arity$2("Enter",expr__74462) : pred__74461.call(null,"Enter",expr__74462)))){
var in$ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(repl_input),"\n"].join('');
var empty_expr_QMARK_ = cljs.core.empty_QMARK_(clojure.string.trim(in$));
kol.env.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL input:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in$], 0))], 0));

kol.comp.organism.repl.update_multiline(in$);

kol.comp.organism.repl.write_input_to_repl(in$);

if(empty_expr_QMARK_){
} else {
var expr_74466 = kol.comp.organism.repl.input_expr(in$);
try{kol.env.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Parsing expr: ",expr_74466], 0));

kol.comp.organism.repl.parse_expr(expr_74466);

kol.comp.organism.repl.eval_input(expr_74466);

kol.comp.organism.repl.reset_repl();
}catch (e74464){var e_74467__$1 = e74464;
kol.env.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Missing delimiter on expression."], 0));

kol.comp.organism.repl.set_placeholder(e_74467__$1);

kol.comp.organism.repl.append_multiline(expr_74466);
}}

return kol.comp.organism.repl.reset_repl_input();
} else {
return null;
}
});
/**
 * Handler for REPL responses.
 *   Write output/values/errors to the REPL history.
 */
kol.comp.organism.repl.handle_repl_response = (function kol$comp$organism$repl$handle_repl_response(_,data_str){
var data = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(data_str);
kol.env.debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Received data from nREPL ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], 0));

if(((cljs.core.contains_QMARK_(data,new cljs.core.Keyword(null,"value","value",305978217))) || (cljs.core.contains_QMARK_(data,new cljs.core.Keyword(null,"out","out",-910545517))))){
kol.comp.organism.repl.write_repl.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(data);
}
})());
} else {
}

if(cljs.core.contains_QMARK_(data,new cljs.core.Keyword(null,"err","err",-2089457205))){
return kol.comp.organism.repl.write_repl.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"err","err",-2089457205).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"error","error",-978969032));
} else {
return null;
}
});
kol.comp.organism.repl.view = (function kol$comp$organism$repl$view(){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"repl-view-component",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return window.electronAPI.handleResponse(kol.comp.organism.repl.handle_repl_response);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kol.comp.molecules.repl_view.repl_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-keydown","on-keydown",-2056941495),kol.comp.organism.repl.handle_keydown], null)], null);
})], null));
});

//# sourceMappingURL=kol.comp.organism.repl.js.map
