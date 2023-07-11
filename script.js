// Mobile Navigation work

const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerEL = document.querySelector(".main-header");

btnNavEL.addEventListener("click", function () {
  document.body.classList.toggle('no-scroll')
  headerEL.classList.toggle("nav-open");
});

// Mobile Dropdown footer
