let burgerMenuIcon = document.getElementsByClassName("burger-menu-icon")[0],
closeDropMenu = document.getElementsByClassName("close-drop-menu")[0],
menuMobile = document.getElementsByClassName("menu-mobile")[0],
body = document.getElementsByTagName("BODY")[0],
myName = document.getElementById("myName"),
darkMode = document.getElementById("darkMode")

burgerMenuIcon.addEventListener("click", () => {
    menuMobile.style.top = 0
})

closeDropMenu.addEventListener("click", () => {
    menuMobile.style.top  = "-100%"
})

body.addEventListener("wheel", () =>  {
    if(window.scrollY > 50) {
        burgerMenuIcon.style.backgroundColor = "#536DFE"
        burgerMenuIcon.style.display = "flex"
        burgerMenuIcon.style.justifyContent = "space-between"
        burgerMenuIcon.style.alignItems = "center"
        myName.style.display = "inline-block"
    }
    else {
        burgerMenuIcon.style.backgroundColor = "transparent"
        myName.style.display = "none"
    }
    

    
})