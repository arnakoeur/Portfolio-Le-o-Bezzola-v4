var menuTrigger = document.querySelector(".menu-trigger");
var menu = document.querySelector(".burger-menu");

console.log(menu, menuTrigger);

menuTrigger.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});
