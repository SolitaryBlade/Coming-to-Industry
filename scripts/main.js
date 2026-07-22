
MapResizeDialog.minSize = 1;
MapResizeDialog.maxSize = 2000;

require("公告");
//require("itemsColor");
require("tree");//科技树
require("将至lib");

require("核心资源显示");

require("秒杀炮");
require("测试墙");

require("CTIitems");//物品文件
require("CTIliquids");//液体文件
require("CTIlibrary");
require("blocks");//地板文件

require("锤板机");
require("粒子收集器");
require("原质盾墙");
require("物质升华厂");
require("钢化玻璃厂");
require("量子护盾发生器");
require("大气分离液化装置");
require("低温流体生产厂");
require("熔岩处理装置");
require("寄生物反应堆")


if (!global.errorMessages) {
    global.errorMessages = [];
}

try {
    require("星系"),
    require("远星系");
} catch (error) {
    log("星球检测 加载或执行失败：", error);
    log("已跳过星球检测，继续执行下一个 xxx.js");
    global.errorMessages.push(error.message);
}
log("星球已正常运行");

require("提醒"); 
