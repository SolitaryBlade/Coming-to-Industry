const library = require("CTIlibrary");
const myliquids = require("CTIliquids");
const myitems = require("CTIitems");
const 寄生物反应堆 = library.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "寄生物反应堆", [
    {
        input: {
            liquids: [
            "cryofluid/24"
            ],
            items: [
            "将至-孢子合金/3"
            ],
            },
        output: {
            power:315
            },
        craftTime: 90
    },
    {
        input: {
            liquids: [
            "cryofluid/18"
            ],
            items: [
            "将至-压缩孢子合金/1"
            ],
            },
        output: {
          power:320
        },
        craftTime: 30
    },
]);

