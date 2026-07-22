const { 阿克苏, dt1, dt2, dt3, dt4, dt5, dt6, dt7, dt8, dt9, } = require("星系");//必须包含全部当前星球区块
const { 诺昂克, nk1, } = require("星系");//必须包含全部当前星球区块
const { 阿切斯, aq1, aq2, aq3, aq4, } = require("远星系");//必须包含全部星球区块
//let allDatabaseTabs = true
let core = new CoreBlock("基础战斗中心");//科技树起点
let node = TechTree.node;
let SectorComplete = Objectives.SectorComplete;

const myliquid = require("CTIliquids");
const myitem = require("CTIitems");

const 光伏板 =extend(SolarGenerator,"光伏板",{});

const 歼星 =extend(ItemTurret, "歼星",{});
const 导弹塔 =extend(ItemTurret, "导弹塔",{});
const 动能炮 =extend(ItemTurret, "动能炮",{});
const 毁灭者 =extend(ItemTurret, "毁灭者",{});
const 近防炮 =extend(ItemTurret, "近防炮",{});
const 电磁加速炮 =extend(ItemTurret, "电磁加速炮",{});
const 电磁激光塔 =extend(PowerTurret, "电磁激光塔",{});
const 多管激光塔 =extend(PowerTurret, "多管激光塔",{});
const 连发激光塔 =extend(PowerTurret, "连发激光塔",{});
const 炙烤 =extend(ContinuousLiquidTurret, "炙烤",{});

阿克苏.techTree = 诺昂克.techTree = 阿切斯.techTree  = TechTree.nodeRoot("将至", core, true, () => {
//地图研究顺序从上至下
{
node(dt1, Seq.with(
new Objectives.SectorComplete(SectorPresets.stainedMountains),//占领:绵延群山
new Objectives.Research(Blocks.lancer),//研究:蓝瑟
), () => {

node(nk1, Seq.with(
new Objectives.SectorComplete(dt1),
new Objectives.Research(近防炮),
), () => {

});//nk1  绝路

node(dt5, Seq.with(
new Objectives.SectorComplete(dt1),
new Objectives.SectorComplete(SectorPresets.nuclearComplex),//占领:核裂阵
new Objectives.Research(Items.thorium),
), () => {

node(dt2, Seq.with(
new Objectives.SectorComplete(dt5),
new Objectives.Research(电磁激光塔),
), () => {

node(dt3, Seq.with(
new Objectives.SectorComplete(dt2),
new Objectives.Research(动能炮),
new Objectives.Research(毁灭者),
), () => {

node(dt7, Seq.with(
new Objectives.SectorComplete(dt3),
new Objectives.Research(myitem.金刚石),
new Objectives.Research(光伏板),
), () => {

});//dt7  光伏基地
});//dt3  熔岩山谷

node(dt8, Seq.with(
new Objectives.SectorComplete(dt7),
new Objectives.Research(多管激光塔),
new Objectives.Research(连发激光塔),
), () => {

//node(dt4, Seq.with(
//new Objectives.SectorComplete(dt8),
//new Objectives.Research(毁灭者),
//new Objectives.Research(电磁加速炮),
//), () => {

node(dt9, Seq.with(
//new Objectives.SectorComplete(dt4),
new Objectives.SectorComplete(dt7),
new Objectives.SectorComplete(dt3),
new Objectives.Research(导弹塔),
new Objectives.Research(电磁加速炮),
new Objectives.Research(炙烤),
), () => {

});//dt9  熔毁区[BETA]
//});//dt4  孢子城
});//dt8  侵蚀基地  位于禁区079之后
});//dt2  禁区079
});//dt5  陨落172

node(aq1, Seq.with(
new Objectives.Research(myliquid.液氮),
), () => {

node(aq3, Seq.with(
new Objectives.SectorComplete(aq1),
new Objectives.Research(myliquid.液氮),
), () => {

node(aq4, Seq.with(
new Objectives.SectorComplete(aq3),
new Objectives.Research(myliquid.液氮),
), () => {
});//aq4 勘测点2

node(aq2, Seq.with(
new Objectives.SectorComplete(aq3),
new Objectives.Research(歼星),
), () => {
});//aq2  冰封旧都
});//aq3  勘测点1
});//aq1  陨石降落点

});//dt1  战争遗迹  模组起始地图
};

});



//以上所以地图名称均使用游戏内战役地图名称
/*
{
node(地图名字, Seq.with(
new Objectives.SectorComplete(SectorPresets.impact0078),占领:冲击区0078
new Objectives.SectorComplete(dt1),模组占领:战争遗迹
new Objectives.Research(Units.bryde),研究:戟鲸
new Objectives.Research(Blocks.surgeSmelter),研究:合金厂
new Objectives.Research(电磁激光塔),模组研究
new Objectives.Research(Items.thorium),研究:钍
new Objectives.Research(Liquids.cryofluid),研究:冷冻液
new Objectives.Research(myitem.金刚石),模组研究
new Objectives.Research(myliquid.液氮),模组研究
), () => {

});
};
*/