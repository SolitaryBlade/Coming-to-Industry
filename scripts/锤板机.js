const library = require("CTIlibrary");
const myliquids = require("CTIliquids");
const myitems = require("CTIitems");
const 锤板机 = library.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "锤板机", [
    {
        input: {
            items: [
            "lead/4"
            ],
            power: 3.8
        },
        output: {
            items: [
            "将至-铅板/1"
            ]
        },
        craftTime: 35
    },
    {
        input: {
            items: [
            "surge-alloy/2",
            "将至-铁/4"
            ],
            power: 4.5
            },
        output: {
            items: [
            "将至-合金板/1"
            ]
            },
        craftTime: 60
    },
    {
        input: {
            items: [
            "将至-晶金/2",
            "将至-铁/4"
            ],
            power: 6
            },
        output: {
            items: [
            "将至-晶金板/1"
            ]
        },
        craftTime: 75
    },
    {
        input: {
            items: [
            "将至-孢子合金/2"
            ],
            power: 7
        },
        output: {
            items: [
            "将至-压缩孢子合金/1"
            ]
        },
        craftTime: 120
    },
]);

