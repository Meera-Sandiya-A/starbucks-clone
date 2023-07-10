// Mobile Navigation work

const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".main-header");

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});
