const library = require("CTIlibrary");
const myliquids = require("CTIliquids");
const myitems = require("CTIitems");
const 钢化玻璃厂 = library.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "钢化玻璃厂", [
    {
        input: {
            items: [
            "将至-铁/1",
            "metaglass/1"
            ],
            power: 5
            },
        output: {
            items: [
            "将至-钢化玻璃/1"
            ],
            },
        craftTime: 60
    },
    {
        input: {
            items: [
            "将至-钢/1"
            ],
            power: 10
            },
        output: {
            items: [
            "将至-钢化玻璃/3"
            ],
            },
        craftTime: 120
    },
    {
        input: {
            items: [
            "将至-金刚石/1"
            ],
            power: 15
            },
        output: {
            items: [
            "将至-钢化玻璃/5"
            ],
            },
        craftTime: 120
    },
]);

