goog.provide('kol.subs');
kol.subs.db_get = (function kol$subs$db_get(var_args){
var args__4870__auto__ = [];
var len__4864__auto___72859 = arguments.length;
var i__4865__auto___72860 = (0);
while(true){
if((i__4865__auto___72860 < len__4864__auto___72859)){
args__4870__auto__.push((arguments[i__4865__auto___72860]));

var G__72861 = (i__4865__auto___72860 + (1));
i__4865__auto___72860 = G__72861;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return kol.subs.db_get.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(kol.subs.db_get.cljs$core$IFn$_invoke$arity$variadic = (function (keys){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,keys);
});
}));

(kol.subs.db_get.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(kol.subs.db_get.cljs$lang$applyTo = (function (seq72856){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72856));
}));

kol.subs.def_sub_handler = (function kol$subs$def_sub_handler(var_args){
var G__72858 = arguments.length;
switch (G__72858) {
case 1:
return kol.subs.def_sub_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kol.subs.def_sub_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kol.subs.def_sub_handler.cljs$core$IFn$_invoke$arity$1 = (function (k){
return kol.subs.def_sub_handler.cljs$core$IFn$_invoke$arity$2(k,k);
}));

(kol.subs.def_sub_handler.cljs$core$IFn$_invoke$arity$2 = (function (k_sub,k){
return re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(k_sub,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kol.subs.db_get.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], 0));
}));

(kol.subs.def_sub_handler.cljs$lang$maxFixedArity = 2);

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("common","route","common/route",1651124616),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("common","route","common/route",1651124616).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("common","page-id","common/page-id",-1732721743),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","route","common/route",1651124616)], null),(function (route,_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("common","page","common/page",-2099452134),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","route","common/route",1651124616)], null),(function (route,_){
return new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("common","error","common/error",-1805182973),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword("common","error","common/error",-1805182973).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"repl","repl",-35398667),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"repl","repl",-35398667).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"repl-history","repl-history",-1696427534),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl","repl",-35398667)], null),(function (repl,_){
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(repl);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"repl-input","repl-input",-1430642169),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl","repl",-35398667)], null),(function (repl,_){
return new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(repl);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"repl-multiline","repl-multiline",1630343426),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl","repl",-35398667)], null),(function (repl,_){
return new cljs.core.Keyword(null,"multiline","multiline",-1084693234).cljs$core$IFn$_invoke$arity$1(repl);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"repl-placeholder","repl-placeholder",627312876),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl","repl",-35398667)], null),(function (repl,_){
return new cljs.core.Keyword(null,"placeholder","placeholder",-104873083).cljs$core$IFn$_invoke$arity$1(repl);
})], 0));

//# sourceMappingURL=kol.subs.js.map
