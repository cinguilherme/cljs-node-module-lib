import "./cljs_env.js";
goog.provide('core');
core.say = (function core$say(n){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"Yaaaa"].join('')], 0));
});
core.lib = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"say","say",504378016),core.say], null);

//# sourceMappingURL=core.js.map
