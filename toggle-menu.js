function toggleMenu() {
    let menu = document.getElementById("mobile-menu-closed")

    if(menu == null) {
        menu = document.getElementById("mobile-menu-open")
        menu.id = "mobile-menu-closed" 
        return
    }
    
    menu.id = "mobile-menu-open" 
}