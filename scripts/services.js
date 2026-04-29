import { servicesData } from "./data/services-data.js";

const servicesContainer = document.querySelector(".js-services-container");

const renderServices = () => {

  servicesContainer.innerHTML = "";
  
  servicesData.forEach((service) => {
    let html = `
        <div class="service-card">
          <div class="service-icon-container">
            <img src="${service.svg}" alt="${service.title}-icon" class="service-icon">
          </div>
            <h4>${service.title}</h4>
            <p>
              ${service.description}
            </p>
        </div>
      `
    servicesContainer.innerHTML += html;
  });
};

renderServices(servicesData);