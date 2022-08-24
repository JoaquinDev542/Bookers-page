window.addEventListener ('load', function () {  

    // Menu Section
    const $menuCloseDisplay = document.querySelector("#menuClose"); 
    const $menu = document.querySelector("#menu"); 
    const $menuOpen = document.querySelector("#menuOpen"); 
    const $menuClose = document.querySelector("#menuOpen__closeLink"); 

    // Utilities Section
    // const artLink = document.querySelector("#artLink");
    // const communityLink = document.querySelector("#communityLink");
    // const leaderSummariesLink = document.querySelector("#leaderSummariesLink");
    // const flashLibrosLink = document.querySelector("#flashLibrosLink");
    // const metaversesLink = document.querySelector("#metaversesLink");
    // const utilitiesSubtitle = document.querySelector("#utilitiesSubtitle");


    const menuFunction = function () {
        $menu.addEventListener("click" , ()=> {
            $menuOpen.classList.add("active");
            $menuCloseDisplay.classList.add("active")
        })
    }
    menuFunction();

    const menuFunctionClose = function () {
        $menuClose.addEventListener("click" , () => {
            $menuOpen.classList.remove("active");
            $menuCloseDisplay.classList.remove("active");
        })
    }
    menuFunctionClose();

    // const utilitiesCommunityFunction = function () {
    //     communityLink.addEventListener("click" , () => {
    //         utilitiesSubtitle.textContent = "Community";
    // SWITCH OPCIONES SI TU HACES CLICK EN X LADO
    //     })
    // }
    // utilitiesCommunityFunction();

})

