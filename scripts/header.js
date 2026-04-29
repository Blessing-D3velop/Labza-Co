
const menu = document.getElementById("mobileMenu");
const openBtn = document.querySelector(".hamburger");
const closeBtn = document.getElementById("closeMenu");

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
