
const menu = document.getElementById("mobileMenu");
const openBtn = document.querySelector(".hamburger");
const closeBtn = document.getElementById("closeMenu");

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

document.querySelectorAll('.js-home')
  .forEach(link => {
    link.addEventListener('click', () => {
      const homeSection = document.getElementById('home-section-id');
      homeSection.scrollIntoView({ behavior: 'smooth' });
      menu.classList.remove("active");
    });
  });

document.querySelectorAll('.js-about')
  .forEach(link => {
    link.addEventListener('click', () => {
      const aboutSection = document.getElementById('about-section-id');
      aboutSection.scrollIntoView({ behavior: 'smooth' });
      menu.classList.remove("active");
    });
  });

document.querySelectorAll('.js-services')
  .forEach(link => {
    link.addEventListener('click', () => {
      const servicesSection = document.getElementById('services-section-id');
      servicesSection.scrollIntoView({ behavior: 'smooth' });
      menu.classList.remove("active");
    });
  });
