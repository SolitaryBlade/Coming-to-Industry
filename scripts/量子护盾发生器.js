const myitems = require("CTIitems");

const 量子护盾发生器 =extend(ForceProjector,"量子护盾发生器",{});
量子护盾发生器.phaseUseTime = 180;
量子护盾发生器.phaseShieldBoost = 9500;
量子护盾发生器.itemConsumer = 量子护盾发生器.consumeItems(ItemStack.with(myitems.晶金,1)).boost();