const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");

menu.addEventListener("click", () => {
  overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  overlay.classList.remove("active");
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".next-button",
    prevEl: ".prev-button",
  },
});
