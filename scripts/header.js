
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

document.querySelectorAll('.js-projects')
  .forEach(link => {
    link.addEventListener('click', () => {
      const projectsSection = document.getElementById('projects-section-id');
      projectsSection.scrollIntoView({ behavior: 'smooth' });
      menu.classList.remove("active");
    });
  });

document.querySelectorAll('.js-contact')
  .forEach(link => {
    link.addEventListener('click', () => {
      const contactSection = document.getElementById('contact-section-id');
      contactSection.scrollIntoView({ behavior: 'smooth' });
      menu.classList.remove("active");
    });
  });



  const quoteButtons = document.querySelectorAll('.js-book-button');

quoteButtons.forEach((button) => {

  button.addEventListener('click', () => {

    const whatsappNumber = '27607900668';

    const message = 
`Hello Labza Co Services,

I would like to request a quote for a project.

Please provide me with more information.`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL =
`https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');

  });

});
