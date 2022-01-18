let cayo =
{
    frame: null,

    /*
        FUNCTIONALITY
    */
    load: function()
    {
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
    open: function()
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
