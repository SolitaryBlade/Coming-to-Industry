var lib = require("将至lib");

lib.setBuildingSimple(extend(Wall, "测试墙", {}), Wall.WallBuild, {
    damage(damage) {  },
    handleDamage(tile, amount) { return 0; },
});
