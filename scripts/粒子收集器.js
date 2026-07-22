const library = require("CTIlibrary");
const myliquids = require("CTIliquids");
const myitems = require("CTIitems");
const 粒子收集器 = library.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "粒子收集器", [
    {
        input: {
            items: [],
            power: 7
            },
        output: {
            items: [
            "将至-物质原子/1"
            ],
            },
        craftTime: 750
    },
    {
        input: {
            items: [
            "phase-fabric/1"
            ],
            power: 14
            },
        output: {
            items: [
            "将至-原质/1"
            ],
        },
        craftTime: 1200
    },
]);

