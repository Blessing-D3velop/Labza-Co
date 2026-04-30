import {projectsData} from './data/projects-data.js';

const projectsContainer = document.querySelector('.js-projects-container');

const renderProjects = (projectsData) => {
  projectsContainer.innerHTML = "";
  projectsData.forEach(project => {
  const projectHTML = `
    <div class="project-container">
      <p>${project.title}</p>
      <div class="images">
        ${project.images.map(img => `<img src="${img}" alt="${project.title}">`).join("")}
      </div>
    </div>
  `;

  projectsContainer.innerHTML += projectHTML;
});
};

renderProjects(projectsData);

const modal = document.querySelector(".js-image-modal");
const modalImg = document.querySelector(".js-modal-image");
const closeModal = document.querySelector(".js-close-modal");

// OPEN IMAGE
document.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG" && e.target.closest(".project-container")) {
    modal.style.display = "flex";
    modalImg.src = e.target.src;
  }
});

// CLOSE IMAGE
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// CLOSE when clicking outside image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});