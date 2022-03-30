goog.provide('dda.comp.organism.repl');
if((typeof dda !== 'undefined') && (typeof dda.comp !== 'undefined') && (typeof dda.comp.organism !== 'undefined') && (typeof dda.comp.organism.repl !== 'undefined') && (typeof dda.comp.organism.repl.repl_history !== 'undefined')){
} else {
dda.comp.organism.repl.repl_history = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"special","special",-1125941630),new cljs.core.Keyword(null,"value","value",305978217),"Type your Clojure symbolic expressions here"], null)], null));
}
if((typeof dda !== 'undefined') && (typeof dda.comp !== 'undefined') && (typeof dda.comp.organism !== 'undefined') && (typeof dda.comp.organism.repl !== 'undefined') && (typeof dda.comp.organism.repl.repl_input !== 'undefined')){
} else {
dda.comp.organism.repl.repl_input = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dda !== 'undefined') && (typeof dda.comp !== 'undefined') && (typeof dda.comp.organism !== 'undefined') && (typeof dda.comp.organism.repl !== 'undefined') && (typeof dda.comp.organism.repl.repl_multiline !== 'undefined')){
} else {
dda.comp.organism.repl.repl_multiline = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dda !== 'undefined') && (typeof dda.comp !== 'undefined') && (typeof dda.comp.organism !== 'undefined') && (typeof dda.comp.organism.repl !== 'undefined') && (typeof dda.comp.organism.repl.input_el !== 'undefined')){
} else {
dda.comp.organism.repl.input_el = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof dda !== 'undefined') && (typeof dda.comp !== 'undefined') && (typeof dda.comp.organism !== 'undefined') && (typeof dda.comp.organism.repl !== 'undefined') && (typeof dda.comp.organism.repl.input_placeholder !== 'undefined')){
} else {
dda.comp.organism.repl.input_placeholder = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
/**
 * Onkeydown event for the REPL input; Evaluate the string
 *   using SCI and add the output/error to the REPL. Manage
 *   the last command using arrow-up and a basic multiline
 *   in case of EOF error.
 */
dda.comp.organism.repl.handle_keydown = (function dda$comp$organism$repl$handle_keydown(e){
return console.log(e);
});
dda.comp.organism.repl.view = (function dda$comp$organism$repl$view(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dda.comp.molecules.repl_view.repl_view,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"input-el","input-el",1688931956),dda.comp.organism.repl.input_el,new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860),dda.comp.organism.repl.input_placeholder,new cljs.core.Keyword(null,"on-keydown","on-keydown",-2056941495),dda.comp.organism.repl.handle_keydown,new cljs.core.Keyword(null,"repl-input","repl-input",-1430642169),dda.comp.organism.repl.repl_input,new cljs.core.Keyword(null,"repl-history","repl-history",-1696427534),dda.comp.organism.repl.repl_history,new cljs.core.Keyword(null,"repl-multiline","repl-multiline",1630343426),dda.comp.organism.repl.repl_multiline], null)], null)], null);
});

//# sourceMappingURL=dda.comp.organism.repl.js.map
