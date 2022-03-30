goog.provide('kol.events');
kol.events.base_url = "http://localhost:3000/api/";
kol.events.api_url = (function kol$events$api_url(route){
return [kol.events.base_url,cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('');
});
kol.events.default_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"special","special",-1125941630),new cljs.core.Keyword(null,"value","value",305978217),"Clojure REPL v1.0"], null)], null)], null)], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),kol.events.default_db], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-error","set-error",1627685300),(function (db,p__74170){
var vec__74171 = p__74170;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74171,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74171,(1),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74171,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),key], null),error);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),(function (db,p__74174){
var vec__74175 = p__74174;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74175,(0),null);
var map__74178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74175,(1),null);
var map__74178__$1 = cljs.core.__destructure_map(map__74178);
var request_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74178__$1,new cljs.core.Keyword(null,"request-type","request-type",403662144));
var loading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74178__$1,new cljs.core.Keyword(null,"loading","loading",-737050189));
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74175,(2),null);
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
var error = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"error","error",-978969032)], null));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,(403))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,(401))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error,"Access not authorized.")))))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null));
} else {
}

var error_kw = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(request_type),"-error"].join(''));
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),error_kw], null),error),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),(function (){var or__4253__auto__ = loading;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return request_type;
}
})()], null),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("common","navigate","common/navigate",-1770818836),(function (db,p__74179){
var vec__74180 = p__74179;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74180,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74180,(1),null);
var old_match = new cljs.core.Keyword("common","route","common/route",1651124616).cljs$core$IFn$_invoke$arity$1(db);
var new_match = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),match));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("common","route","common/route",1651124616),new_match);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("common","navigate-fx!","common/navigate-fx!",-1088243503),(function (p__74183){
var vec__74184 = p__74183;
var seq__74185 = cljs.core.seq(vec__74184);
var first__74186 = cljs.core.first(seq__74185);
var seq__74185__$1 = cljs.core.next(seq__74185);
var k = first__74186;
var vec__74187 = seq__74185__$1;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74187,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74187,(1),null);
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(k,params,query);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigate!","navigate!",79998348),(function (_,p__74190){
var vec__74191 = p__74190;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74191,(0),null);
var url_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74191,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74191,(2),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74191,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("common","navigate-fx!","common/navigate-fx!",-1088243503),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [url_key,params,query], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repl-history-append","repl-history-append",-1822532236),(function (db,p__74194){
var vec__74195 = p__74194;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74195,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74195,(1),null);
var history = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"repl","repl",-35398667).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"history","history",-247395220)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(history,item));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repl-input-set","repl-input-set",104611728),(function (db,p__74198){
var vec__74199 = p__74198;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74199,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74199,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"input","input",556931961)], null),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repl-input-reset","repl-input-reset",1918963971),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"input","input",556931961)], null),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repl-multiline-append","repl-multiline-append",-1964212958),(function (db,p__74202){
var vec__74203 = p__74202;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74203,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74203,(1),null);
var old = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"multiline","multiline",-1084693234)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"multiline","multiline",-1084693234)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(old),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repl-reset-all","repl-reset-all",-1988194059),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl","repl",-35398667)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"input","input",556931961),null,new cljs.core.Keyword(null,"multiline","multiline",-1084693234),null,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),null], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"repl-set-placeholder","repl-set-placeholder",-1174595908),(function (db,p__74206){
var vec__74207 = p__74206;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74207,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74207,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl","repl",-35398667),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083)], null),value);
}));

//# sourceMappingURL=kol.events.js.map
