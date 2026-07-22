const library = require("CTIlibrary");
const myliquids = require("CTIliquids");
const myitems = require("CTIitems");
const 物质升华厂 = library.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "物质升华厂", [
    {
        input: {
            items: [
            "将至-钯金/1"
            ],
            power: 20
            },
        output: {
            items: [
            "将至-自塑合金/1"
            ],
            },
        craftTime: 60
    },
    
]);

