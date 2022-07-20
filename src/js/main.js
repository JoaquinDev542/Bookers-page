window.addEventListener ('load', function () {  

    const $menuCloseDisplay = document.querySelector("#menuClose");

    const $menu = document.querySelector("#menu");
    const $menuOpen = document.querySelector("#menuOpen");
    const $menuClose = document.querySelector("#menuOpen__closeLink");

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

})

