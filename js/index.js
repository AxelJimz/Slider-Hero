const {nav__menu, nav__links} = {
    nav__menu: document.querySelector(".nav__menu"),
    nav__links : document.querySelector(".nav__links"),
}

let activeMenu = false;

const isActiveMenu = () => { 
    if (activeMenu === false) {
        activeMenu = true;
        nav__menu.classList.add("nav__menu--active");
        nav__links.classList.add("nav__links--active");
    } else {
        activeMenu = false;
        nav__menu.classList.remove("nav__menu--active");
        nav__links.classList.remove("nav__links--active");
    }
}

nav__menu.addEventListener("click", isActiveMenu);

