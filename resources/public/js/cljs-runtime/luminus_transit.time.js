goog.provide('luminus_transit.time');
luminus_transit.time.iso_local_time = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS");
luminus_transit.time.iso_local_date = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd");
luminus_transit.time.iso_local_date_time = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS");
luminus_transit.time.iso_zoned_date_time = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
luminus_transit.time.time_deserialization_handlers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 4, ["LocalTime",cognitect.transit.read_handler((function (p1__80454_SHARP_){
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(luminus_transit.time.iso_local_time,p1__80454_SHARP_);
})),"LocalDate",cognitect.transit.read_handler((function (p1__80455_SHARP_){
return cljs_time.format.parse_local_date.cljs$core$IFn$_invoke$arity$2(luminus_transit.time.iso_local_date,p1__80455_SHARP_);
})),"LocalDateTime",cognitect.transit.read_handler((function (p1__80456_SHARP_){
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(luminus_transit.time.iso_local_date_time,p1__80456_SHARP_);
})),"ZonedDateTime",cognitect.transit.read_handler((function (p1__80457_SHARP_){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(luminus_transit.time.iso_zoned_date_time,p1__80457_SHARP_);
}))], null)], null);
luminus_transit.time.time_serialization_handlers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.date.Date,cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly("LocalDate"),(function (p1__80474_SHARP_){
return cljs_time.format.unparse(luminus_transit.time.iso_local_date,p1__80474_SHARP_);
})),goog.date.DateTime,cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly("LocalDateTime"),(function (p1__80475_SHARP_){
return cljs_time.format.unparse(luminus_transit.time.iso_local_date_time,p1__80475_SHARP_);
})),goog.date.UtcDateTime,cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly("ZonedDateTime"),(function (p1__80476_SHARP_){
return cljs_time.format.unparse(luminus_transit.time.iso_zoned_date_time,p1__80476_SHARP_);
}))])], null);

//# sourceMappingURL=luminus_transit.time.js.map
