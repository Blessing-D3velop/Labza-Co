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
