const lib = require("将至lib");

const 太阳11 = new Planet("太阳11", null, 4);
太阳11.cloudMeshLoader = prov(() => new MultiMesh(
    new HexSkyMesh(太阳11, 2, 0.15, 0.14, 5, Color.valueOf("ffffff00"), 2, 0.42, 1, 0.43),
    new HexSkyMesh(太阳11, 3, 0.6, 0.15, 5, Color.valueOf("ffffff00"), 2, 0.42, 1.2, 0.45)
));
太阳11.localizedName = "太阳11（人造恒星）"
太阳11.accessible = false
太阳11.icon = "none"
exports.太阳11 = 太阳11;

const 阿克苏 = new Planet("阿克苏", 太阳11, 1, 3);
阿克苏.meshLoader = prov(() => new MultiMesh(
	new HexMesh(阿克苏, 8)
));
/*阿克苏.generator = extend(SerpuloPlanetGenerator, {
	getDefaultLoadout() {
		return Schematics.readBase64("bXNjaAF4nGNgZWBlYWDJS8xNZeB9ObP3xYS9zxbseLq/2ZGBKzk/ryQ1r8Q3sYCBqbqWgTsltTi5KLOgJDM/j4GBgS0nMSk1p5iBKTqWkUHy6Ya2F+2bdZ/O3/V8YcOzjhnPpk1/smMt0BygSkYGBiYgZAAAiskpAg==")
	}
});*/
阿克苏.cloudMeshLoader = prov(() => new MultiMesh(
	new HexSkyMesh(阿克苏, 2, 0.15, 0.14, 5, Color.valueOf("f1dd418e"), 2, 0.42, 1, 0.43),
	new HexSkyMesh(阿克苏, 3, 0.6, 0.15, 5, Color.valueOf("ffee80aa"), 2, 0.42, 1.2, 0.45)
));
阿克苏.generator = new SerpuloPlanetGenerator();
阿克苏.loadPlanetData = true;
阿克苏.prebuildBase = true;
阿克苏.sectorSeed = 1;
阿克苏.allowWaves = true;
阿克苏.allowLegacyLaunchPads = true;
阿克苏.allowSectorInvasion = true;
阿克苏.allowLaunchSchematics = true;
阿克苏.enemyCoreSpawnReplace = true;
阿克苏.allowLaunchLoadout = true;
阿克苏.visible = true
阿克苏.accessible = true
阿克苏.alwaysUnlocked = true
阿克苏.clearSectorOnLose = true
阿克苏.tidalLock = true
阿克苏.localizedName = "阿克苏";
阿克苏.bloom = true;
阿克苏.startSector = 166//星球的起始地图
阿克苏.orbitRadius = 45;//星球旋转半径
阿克苏.allowSelfSectorLaunch = true;
阿克苏.showRtsAIRule = true;
阿克苏.orbitTime = 600
阿克苏.rotateTime = 10
阿克苏.allowLaunchToNumbered = true
阿克苏.allowCampaignRules = true
阿克苏.enemyCoreSpawnReplace = true
阿克苏.atmosphereRadIn = 0.02;
阿克苏.atmosphereRadOut = 0.3;
阿克苏.icon = "hammer"
阿克苏.updateLighting = true
阿克苏.allDatabaseTabs = true
阿克苏.atmosphereColor = Color.valueOf("a2861f87");
阿克苏.lightColor = Color.valueOf("eb8585b9");
阿克苏.iconColor = Color.valueOf("be9e2bff");
exports.阿克苏 = 阿克苏;

const dt1 = new SectorPreset("战争遗迹", 阿克苏, 166);
dt1.description = "即使那次战争已过去500宇宙历纪元，但[YG]联队的一小股部队现在仍然活跃在这个地方"
//dt1.alwaysUnlocked = true
dt1.difficulty = 1
dt1.captureWave = 35
dt1.localizedName = "战争遗迹"
exports.dt1 = dt1;

const dt2 = new SectorPreset("禁区079", 阿克苏, 54);
dt2.description = "这个火山已于1宇宙历纪元前停止喷发，现今已有重新活跃的迹象，但仍产生了非常丰富的矿物，且不久前还有一架[KT]的货运飞船不幸坠落在这个位置，并且[KT]已派出先遣部队前往这里，你已难逃一战"
dt2.difficulty = 5
//dt2.alwaysUnlocked = true
dt2.captureWave = 60
dt2.localizedName = "禁区079"
exports.dt2 = dt2;

const dt3 = new SectorPreset("熔岩山谷", 阿克苏, 47);
dt3.description = "紧靠着一座活跃火山的第二熔岩喷口，拥有的难以估量的地热发电能力，现仍是无主之地，但你和敌人同时投入开发，注意，敌方兵力异常强大"
dt3.difficulty = 8
//dt3.alwaysUnlocked = true
dt3.captureWave = 80
dt3.localizedName = "熔岩山谷"
exports.dt3 = dt3;
/*
const dt4 = new SectorPreset("孢子城", 阿克苏, 69);
dt4.description = "目前已经发现的孢子生物的第二繁殖地，较难攻克，兵力并不强大，但是防御十分坚硬"
dt4.difficulty = 14
//dt4.alwaysUnlocked = true
dt4.captureWave = 45
dt4.localizedName = "孢子城"
exports.dt4 = dt4;
*/
const dt5 = new SectorPreset("陨落", 阿克苏, 172);
dt5.description = "这是一个文明曾今的核心工业基地，如今仅剩这些异常顽强的核心建筑，且这里的日照较强，似乎有不速之客，但应该只是侦查，稍加注意"
dt5.difficulty = 2
//dt5.alwaysUnlocked = true
dt5.captureWave = 60
dt5.localizedName = "陨落地区172"
exports.dt5 = dt5;

/*const dt6 = new SectorPreset("地图文件名称", 阿克苏, 1);
dt6.description = "简介"
dt6.difficulty = 11
//dt6.alwaysUnlocked = true
dt6.captureWave = 1
dt6.localizedName = "游戏内名称"
exports.dt6 = dt6;*/

const dt7 = new SectorPreset("光伏基地", 阿克苏, 27);
Object.assign(dt7, {
    description: "这里是一个神奇的地方，由于此区域上空的大气层十分稀薄，导致这里的光照强度十分强大，黑夜仍然能够阻止光伏发电，但白日有强劲的光伏效率，且敌人并不很强，矿物十分丰富，注意，有两块超级大的石油区域，基础的三矿已开始挖掘，讯速发展，争取极速改造成一个强大的后勤基地",
//    alwaysUnlocked: true,
    difficulty: 2,
    captureWave: 30,
    localizedName: "光伏基地"
});
exports.dt7 = dt7;

const dt8 = new SectorPreset("侵蚀基地", 阿克苏, 128);
Object.assign(dt8, {
    description: "[AH]留下的遗产，同时也是孢子的一个主要基地，不过孢子并没有阻止基地原有AI运行，所以这个基地仍然有建造能力;防守兵力极强，包含六级单位，且[AH]建造了非常多的加速设备",
//    alwaysUnlocked: true,
    difficulty: 10,
    captureWave: 50,
    localizedName: "侵蚀基地"
});
exports.dt8 = dt8;

const dt9 = new SectorPreset("星际熔毁区", 阿克苏, 216);
Object.assign(dt9, {
    description: "[测试]\n这是一个配备有行星际发射台的基地，你落地的位置正好是敌方的防御正前方，自然你就成为了对方的首要消灭目标;注意，由于你位于敌人的正前方，所以你没有任何的后勤兵力支援，占领这里，你就可以在星球上的任何地方落地了\n[测试]",
//    alwaysUnlocked: true,
    difficulty: 20,
    captureWave: 115,
    localizedName: "熔毁区[Beta]"
});
exports.dt9 = dt9;


const 诺昂克 = new Planet("诺昂克", 太阳11, 1.6, 3.3);//"星球"-公转星球,星球地图大小上限(约1:350)-区块数量(赛普罗:3)(E星:2)(数字越大，区块越多，推荐3∽3.5)
诺昂克.meshLoader = prov(() => new MultiMesh(
	new HexMesh(诺昂克, 8)
));
/*诺昂克.generator = extend(SerpuloPlanetGenerator, {
	getDefaultLoadout() {
		return Schematics.readBase64("bXNjaAF4nGNgZWBlYWDJS8xNZeB9ObP3xYS9zxbseLq/2ZGBKzk/ryQ1r8Q3sYCBqbqWgTsltTi5KLOgJDM/j4GBgS0nMSk1p5iBKTqWkUHy6Ya2F+2bdZ/O3/V8YcOzjhnPpk1/smMt0BygSkYGBiYgZAAAiskpAg==")
	}
});*/
诺昂克.cloudMeshLoader = prov(() => new MultiMesh(
	new HexSkyMesh(诺昂克, 2, 0.15, 0.14, 5, Color.valueOf("ab1a1aA8"), 2, 0.42, 1, 0.43),
	new HexSkyMesh(诺昂克, 3, 0.6, 0.15, 5, Color.valueOf("E01616A8"), 2, 0.42, 1.2, 0.45)
));
诺昂克.generator = new SerpuloPlanetGenerator();
诺昂克.visible = true
诺昂克.accessible = true
诺昂克.alwaysUnlocked = true
诺昂克.clearSectorOnLose = false
诺昂克.allowLaunchSchematics = true
诺昂克.tidalLock = true
诺昂克.allowSectorInvasion = true;
诺昂克.allowLaunchLoadout = true
诺昂克.localizedName = "诺昂克";
诺昂克.bloom = true
诺昂克.startSector = 212//星球的起始地图
诺昂克.orbitRadius = 30;
诺昂克.orbitTime = 1200
诺昂克.rotateTime = 180
诺昂克.allowLaunchToNumbered = true
诺昂克.allowCampaignRules = true
诺昂克.enemyCoreSpawnReplace = true
诺昂克.allDatabaseTabs = true
诺昂克.atmosphereRadIn = 0.02;
诺昂克.atmosphereRadOut = 0.3;
诺昂克.updateLighting = true
诺昂克.icon = "admin"
诺昂克.allDatabaseTabs = true
诺昂克.iconColor = Color.valueOf("b21b1bff");
诺昂克.atmosphereColor = 诺昂克.lightColor = Color.valueOf("e31212ad");
exports.诺昂克 = 诺昂克;

const nk1 = new SectorPreset("彼岸", 诺昂克, 212);
nk1.description = "你的行踪已被发现，在敌方猛烈的进攻下，你现在仅剩一个核心及部分设施，现在他们仍紧追不放，已将你逼到崖边，支援已被拦截，存活或者结束"
nk1.difficulty = 6
//nk1.alwaysUnlocked = true
nk1.captureWave = 110
nk1.localizedName = "绝路"
exports.nk1 = nk1;



