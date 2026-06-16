const menu = document.getElementById("menu-desktop");
const btn = document.getElementById("btn-menu");

btn.addEventListener("click", function () {
    menu.classList.toggle("menu-mobile");
})