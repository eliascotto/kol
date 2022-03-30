goog.provide('kol.comp.organism.editor');
var module$node_modules$$codemirror$closebrackets$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$closebrackets$dist$index_cjs", {});
var module$node_modules$$codemirror$fold$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$fold$dist$index_cjs", {});
var module$node_modules$$codemirror$gutter$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$gutter$dist$index_cjs", {});
var module$node_modules$$codemirror$highlight$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$highlight$dist$index_cjs", {});
var module$node_modules$$codemirror$history$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$history$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
if((typeof kol !== 'undefined') && (typeof kol.comp !== 'undefined') && (typeof kol.comp.organism !== 'undefined') && (typeof kol.comp.organism.editor !== 'undefined') && (typeof kol.comp.organism.editor.source !== 'undefined')){
} else {
kol.comp.organism.editor.source = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(";; Your Clojure file");
}
kol.comp.organism.editor.theme = module$node_modules$$codemirror$view$dist$index_cjs.EditorView.theme(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 8, [".cm-content",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre-wrap",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null),"&.cm-focused",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),".cm-line",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0 9px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"1.6",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"var(--code-font)"], null),".cm-matchingBracket",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid var(--teal-color)",new cljs.core.Keyword(null,"color","color",1011675173),"inherit"], null),".cm-gutters",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"transparent",new cljs.core.Keyword(null,"border","border",1444987323),"none"], null),".cm-gutterElement",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"5px"], null),".cm-cursor",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null),"&.cm-focused .cm-cursor",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"visible"], null)], null)));
kol.comp.organism.editor.editor = (function kol$comp$organism$editor$editor(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"fooo"], null);
});

//# sourceMappingURL=kol.comp.organism.editor.js.map
