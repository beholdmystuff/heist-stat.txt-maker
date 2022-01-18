let cayo =
{
    data:
    {
        primary:
        [
            { name: "Minimadrazzo Files", price: 1100000, value: 4, className: "lootFiles" },
            { name: "Sinsimito Tequilla", price: 900000, value: 0, className: "lootTequilla" },
            { name: "Ruby Necklace", price: 1000000, value: 1, className: "lootNecklace" },
            { name: "Bearer Bonds", price: 1100000, value: 2, className: "lootBonds" },
            { name: "Pink Diamond", price: 1300000, value: 3, className: "lootDiamond" },
            { name: "Panther Statue", price: 1900000, value: 5, className: "lootPanther" }
        ],
        secondary:
        [
            { name: "Cash", size: 0.25, variable: "CASH" },
            { name: "Painting",  size: 0.5, variable: "PAINT"},
            { name: "Weed",  size: 0.4, variable: "WEED" },
            { name: "Coke",  size: 0.5, variable: "COKE" },
            { name: "Gold",  size: 0.6666666, variable: "GOLD" }
        ],
        npcCutPercentage: 12,
        hardModeMultiplier: 1.1,
        defaultCutLimit: 2550000,
        normalModeTakeLimit: 6662960,
        hardModeTakeLimit: 10818212,
        officeSafeMax: 120000
    },
    settings:
    {
        primary: 1, //cayo.primary.loot array id
        difficulty: "normal", //cayo.difficulty
        takeOfficeSafe: true,
        missionsBinary: 1+1024+2048+512, // gather intel + mandatory cutter + cloner + torch
        pois: 16384+65536, //power station + control tower
        compoundCash: 0,
        compoundCoke: 0,
        compoundGold: 0,
        compoundWeed: 0,
        compoundPainting: 0,
        islandCash: 0,
        islandCoke: 0,
        islandGold: 0,
        islandWeed: 0,
        defaultLootPrice: false,
        defaultLootPlacement: false
    },
    frame: null,

    /*
        FUNCTIONALITY
    */
    open: function(event)
    {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function()
        {
            if (this.readyState == 4 && this.status == 200)
            {
                console.log(xhttp.responseText);
                let frame = document.querySelector(".frame");
                frame.innerHTML = xhttp.responseText;
                frame.classList.add("cayo");
                document.querySelector(".card").classList.add("hidden");
                cayo.load();
            }
        };
        xhttp.open("GET", "/cayo.html");
        xhttp.send();

        cayo.frame = document.createElement("div");
        cayo.frame.className = "cayoFrame";

        // TODO primary loot selector
        // default max money option:
        // panther, hardmode, kosatka, conspirator, suppressors
        //
        //

        // TODO secondary loot selector
        //




        document.querySelector(".card").appendChild(cayo.frame);
    },
    load: function(event)
    {
        document.querySelector(".card .doomsday").classList.add("hidden");
        document.querySelector(".card .casino").classList.add("hidden");
        document.querySelector(".card .cayo").classList.add("hidden");

        if (cayo.frame)
            cayo.frame.classList.remove("hidden");

        console.log("poop");
    },
    close: function()
    {
        document.querySelector(".cayoFrame").classList.add("hidden");
    }

}
