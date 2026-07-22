const myliquid = require("CTIliquids");

const 大气分离液化装置 =extend(GenericCrafter,"大气分离液化装置",{});
大气分离液化装置.liquidOutputDirections = [1,3]
大气分离液化装置.outputLiquids = LiquidStack.with(myliquid.液氮, 0.7, myliquid.液氧, 0.7);
