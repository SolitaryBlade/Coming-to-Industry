const myliquid = require("CTIliquids");
const 低温流体生产厂 =extend(GenericCrafter,"低温流体生产厂",{});
低温流体生产厂.rotate = true;
低温流体生产厂.invertFlip = true;
低温流体生产厂.group = BlockGroup.liquids;
低温流体生产厂.drawer = new DrawMulti(
                new DrawLiquidTile(),
                new DrawBubbles(),
                new DrawRegion(),
                new DrawLiquidOutputs(),
                new DrawGlowRegion()
            );
低温流体生产厂.liquidOutputDirections = [1,3]
低温流体生产厂.outputLiquids = LiquidStack.with(myliquid.熔岩, 0.7, myliquid.极寒, 0.7);