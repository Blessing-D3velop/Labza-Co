const callNowButton = document.querySelector('.js-call-now-button');

callNowButton.addEventListener('click', () => {
  const contactSection = document.getElementById('contact-section-id');
  contactSection.scrollIntoView({ behavior: 'smooth' });
});