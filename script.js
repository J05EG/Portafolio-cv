
const username = 'J05EG';

const languageLogos = {
  HTML: 'images/html-5.png',
  CSS: 'images/css-3.png',
  Java: 'images/java.png',
  PHP: 'images/php.png',
};

async function fetchProjects() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const projects = await response.json();
    displayProjects(projects);
  } catch (error) {
    console.log('Error:', error);
  }
}

function displayProjects(projects) {
  const container = document.getElementById('projects-container');

  projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    const title = document.createElement('h3');
    title.textContent = project.name;

    const description = document.createElement('p');
    description.textContent = project.description

    const logo = document.createElement('img');
    logo.src = languageLogos[project.language];
    logo.alt = project.language;

    const link = document.createElement('a');
    link.href = project.html_url;
    link.textContent = 'Ver en GitHub';

    projectElement.appendChild(title);
    projectElement.appendChild(description);
    projectElement.appendChild(logo);
    projectElement.appendChild(link);

    container.appendChild(projectElement);
  });
}

fetchProjects();