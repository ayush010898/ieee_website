var toggleMenu = () =>{
    let menuList = document.querySelectorAll(".nav-element");
    menuList.forEach(menuElement => {
        if(menuElement.className.search("hidden") == -1){
            menuElement.classList.add("hidden");
            menuElement.classList.remove("block");
        }else{
            menuElement.classList.add("block");
            menuElement.classList.remove("hidden");
        }
    });
}
