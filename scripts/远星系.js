const lib = require("将至lib");

const FS1 = new Planet("FS1", null, 4);
FS1.cloudMeshLoader = prov(() => new MultiMesh(
    new HexSkyMesh(FS1, 2, 0.15, 0.14, 5, Color.valueOf("ffffff00"), 2, 0.42, 1, 0.43),
    new HexSkyMesh(FS1, 3, 0.6, 0.15, 5, Color.valueOf("ffffff00"), 2, 0.42, 1.2, 0.45)
));
FS1.localizedName = "远恒星:AH（新生恒星）"
FS1.accessible = false
FS1.icon = "none"
exports.FS1 = FS1;

const 阿切斯 = new Planet("阿切斯", FS1, 1.2, 3.3);
阿切斯.meshLoader = prov(() => new MultiMesh(
	new HexMesh(阿切斯, 8)
));
/*阿切斯.generator = extend(SerpuloPlanetGenerator, {
	getDefaultLoadout() {
		return Schematics.readBase64("bXNjaAF4nGNgZWBlYWDJS8xNZeB9ObP3xYS9zxbseLq/2ZGBKzk/ryQ1r8Q3sYCBqbqWgTsltTi5KLOgJDM/j4GBgS0nMSk1p5iBKTqWkUHy6Ya2F+2bdZ/O3/V8YcOzjhnPpk1/smMt0BygSkYGBiYgZAAAiskpAg==")
	}
});*/
阿切斯.cloudMeshLoader = prov(() => new MultiMesh(
	new HexSkyMesh(阿切斯, 2, 0.15, 0.14, 5, Color.valueOf("81646aa8"), 2, 0.42, 1, 0.43),
	new HexSkyMesh(阿切斯, 3, 0.6, 0.15, 5, Color.valueOf("8e736bA8"), 2, 0.42, 1.2, 0.45)
));
阿切斯.generator = new SerpuloPlanetGenerator();
//阿切斯.generator = new AchesPlanetGenerator();
阿切斯.visible = true
阿切斯.accessible = true
阿切斯.alwaysUnlocked = true
阿切斯.clearSectorOnLose = false
阿切斯.allowLaunchSchematics = true
阿切斯.tidalLock = true
阿切斯.allowSectorInvasion = true;
阿切斯.allowLaunchLoadout = true
阿切斯.localizedName = "阿切斯";
阿切斯.bloom = true
阿切斯.startSector = 0//星球的起始地图
阿切斯.orbitRadius = 100;
阿切斯.orbitTime = 1200
阿切斯.rotateTime = 180
阿切斯.defaultCore = Blocks.coreNucleus;
阿切斯.allowLaunchToNumbered = true
阿切斯.allowCampaignRules = true
阿切斯.enemyCoreSpawnReplace = true
阿切斯.allDatabaseTabs = true
阿切斯.atmosphereRadIn = 0.02;
阿切斯.atmosphereRadOut = 0.3;
阿切斯.updateLighting = true
阿切斯.icon = "map"
阿切斯.allDatabaseTabs = true
阿切斯.iconColor = Color.valueOf("8e736bff");
阿切斯.atmosphereColor = 阿切斯.lightColor = Color.valueOf("e31212ad");
exports.阿切斯 = 阿切斯;


// 预设扇区示例
const aq1 = new SectorPreset("阿切斯陨石区", 阿切斯, 0);
Object.assign(aq1, {
    description: "暂时不确定星球上地形是否平坦，为保证开发工作顺利进行，现在暂时降落在星球外的环球陨石带上面;即使是环球陨石，也有丰富的矿藏，而且还有一种全新的矿石，这里十分的安全，仅仅时不时来点蚊子而已",
    //alwaysUnlocked: true,
    difficulty: 0,
    captureWave: 10,
    localizedName: "陨石降落点"
});
exports.aq1 = aq1;

const aq2 = new SectorPreset("冰封旧都", 阿切斯, 168);
aq2.description = "一座曾经的军事壁垒，如今人去楼空，只剩基本的人工智能保卫措施;注意，仍有大量的兵力残留，确认，这里只有陆军，且在第50波时有大批6级单位，初步判断是此基地隐藏的最后防卫措施，务必提前完成任务"
aq2.difficulty = 16
//aq2.alwaysUnlocked = true
aq2.captureWave = 51
aq2.localizedName = "冰封旧都"
exports.aq2 = aq2


const aq3 = new SectorPreset("勘测点1", 阿切斯, 166);
Object.assign(aq3, {
    description: "为方便勘测而精心挑选的平原地形，这里十分安全，没有任何敌人来阻止你挖掘矿物，十分利于今后在阿切斯上面定居",
    //alwaysUnlocked: true,
    difficulty: 0,
    captureWave: 10,
    localizedName: "矿物勘测点-1"
});
exports.aq3 = aq3;

const aq4 = new SectorPreset("勘测点2", 阿切斯, 271);
Object.assign(aq4, {
    description: "一块有孢子寄生的区域，低危险，但矿石资源丰富，且含有一种超高硬度的特殊矿石",
    //alwaysUnlocked: true,
    difficulty: 2,
    captureWave: 20,
    localizedName: "矿物勘测点-2"
});
exports.aq4 = aq4;