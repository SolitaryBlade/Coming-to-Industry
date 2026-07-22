const library = require("CTIlibrary");
const myliquids = require("CTIliquids");
const myitems = require("CTIitems");
const 熔岩处理装置 = library.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "熔岩处理装置", [
    {
        input: {
            liquids: [
            "将至-熔岩/38"
            ],
            items: [
            "将至-钴/1"
            ],
            power: 5
            },
        output: {
            liquids: [
            "将至-气化熔岩/40"
            ],
            },
        craftTime: 60
    },
    {
        input: {
            liquids: [
            "将至-熔岩/50",
            "将至-液氮/16"
            ],
            },
        output: {
            liquids: [
            "slag/66"
            ],
            },
        craftTime: 120
    },
    {
        input: {
            liquids: [
            "slag/180",
            ],
            power: 12
            },
        output: {
            liquids: [
            "将至-熔岩/60"
            ],
            },
        craftTime: 120
    },
]);

