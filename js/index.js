const menu = document.querySelector(".navbar-responsive");
const nav = document.querySelector(".navbar-container");

menu.addEventListener("click", function () {
   menu.classList.toggle("is-acive");
   nav.classList.toggle("active");
});