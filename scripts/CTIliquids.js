/*function newLiquid(name) {
	exports[name] = (() => {
		let myLiquid = extend(Liquid, name, {});
		return myLiquid;
	})();
}*/
function newLiquid(name) {
	exports[name] = extend(Liquid, name, {});
}
newLiquid("孢子液")
newLiquid("冷凝水")
newLiquid("熔岩")
newLiquid("液氮")
newLiquid("液氧")
newLiquid("极寒")
newLiquid("气化熔岩")
