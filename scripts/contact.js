const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('.contact-form input[type="text"]').value;

  const inputs = document.querySelectorAll('.contact-form input');
  const phone = inputs[1].value;

  const message = document.querySelector('.contact-form textarea').value;

  if(name === '' || phone === '' || message === ''){
    alert('Please fill in all fields.');
    return;
  }

  const whatsappNumber = '27607900668';

  const whatsappMessage =
`Hello Labza Co Services,

Name: ${name}
Phone: ${phone}

Project Details:
${message}`;

  const encodedMessage = encodeURIComponent(whatsappMessage);

  const whatsappURL =
`https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');

  contactForm.reset();
});