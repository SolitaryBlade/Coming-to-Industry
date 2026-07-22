const myitems = require("CTIitems");

const 原质盾墙 =extend(ForceProjector,"原质盾墙",{});
原质盾墙.phaseUseTime = 300;
原质盾墙.phaseShieldBoost = 45000;
原质盾墙.itemConsumer = 原质盾墙.consumeItems(ItemStack.with(myitems.原质,1)).boost();