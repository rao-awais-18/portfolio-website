// typing animation eefect
const words = [
  "Full Stack Developer",

  "Flutter Developer",

  "Web Developer",

  "AI Enthusiast",

  "Open Source Contributor",

  "Tech Blogger",
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {

if (!typingText) return;

  currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex);

    charIndex++;

    if (charIndex > currentWord.length) {
      isDeleting = true;

      setTimeout(typeEffect, 1200);

      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex);

    charIndex--;

    if (charIndex < 0) {
      isDeleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }

      charIndex = 0;
    }
  }

  setTimeout(typeEffect, isDeleting ? 70 : 120);
}

typeEffect();

const skillsGrid = document.getElementById("skills-grid"); // to modify an html struture we have accessed that html element in this skillsGrid variable

/*----------------------------------------------
dynamic skill cards logic
-----------------------------------------------*/

// helper function to make a card
function createSkillCard(skill) {

    return `

        <div class="skill-card">

            <div class="skill-content">

                <i class="${skill.icon}"></i>

                <h3>${skill.name}</h3>

                <p>${skill.description}</p>

            </div>

            <a href="skill-details.html?id=${skill.id}" class="skill-overlay">

                <i class="fa-solid fa-eye"></i>

                <span>Explore Skill</span>

            </a>

        </div>

    `;
}

// render skill cards
function renderSkills(

    skillList = skills.filter(skill => skill.showOnHome),

    container = skillsGrid

) {

    let cards = "";

    skillList.forEach(function (skill) {

        cards += createSkillCard(skill);

    });

    container.innerHTML = cards;

}

if (skillsGrid && typeof skills !== "undefined") {

    renderSkills();

}

/* ----------------------------------------------
for dyamic projet cards 
-------------------------------------------------*/

//dynamic badges
function createBadges(badges) {
  let badgesHTML = "";

  badges.forEach((badge) => {
    badgesHTML += `
        
            <span class="project-status">

                ${badge}

            </span>

        `;
  });

  return badgesHTML;
}

// helper function for tech bages
function createTechnologyBadges(technologies) {
  let techHTML = "";

  const maxVisible = 4;

  technologies.slice(0, maxVisible).forEach((tech) => {
    techHTML += `
            <span>${tech}</span>
        `;
  });

  const remaining = technologies.length - maxVisible;

  if (remaining > 0) {
    techHTML += `
            <span>+${remaining}</span>
        `;
  }

  return techHTML;
}

// project cards creation
function createProjectCard(project) {
  return `

        <div class="project-card" data-id="${project.id}">

            <div class="project-image">

                <img
                    src="${project.thumbnail}"
                    alt="${project.title}"
                />

                <a href="project-details.html?id=${project.id}" class="project-overlay">

                    <i class="fa-solid fa-eye"></i>

                    View Details

                </a>

                ${createBadges(project.badges)}

            </div>

            <span class="project-category">

                ${project.category}

            </span>

            <div class="project-info">

                <h3>

                    ${project.title}

                </h3>

                <p>

                    ${project.shortDescription}

                </p>

                <div class="tech-stack">

                 ${createTechnologyBadges(project.technologies)}

                </div>

                <div class="project-links">

                    <a href="${project.liveDemo}">

                        <i class="fa-solid fa-arrow-up-right-from-square"></i>

                        Live Demo

                    </a>

                    <a href="${project.github}">

                        <i class="fa-brands fa-github"></i>

                        GitHub

                    </a>

                </div>

            </div>

        </div>

    `;
}

// render projects
function renderProjects(projectList, container) {

  if (!container) return;

  let cards = "";

  projectList.forEach(function(project){

    cards += createProjectCard(project);

  });

  container.innerHTML = cards;

}

// fuction to make whole project card clickable, click event
function enableProjectCardClick() {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("click", (event) => {
      const clickedLink = event.target.closest("a");

      if (clickedLink) {
        return;
      }
      const projectId = card.dataset.id;

      window.location.href = `project-details.html?id=${projectId}`;
    });
  });
}

const homeProjectsGrid = document.getElementById("projects-grid");

if (homeProjectsGrid) {

    renderProjects(

        projects.filter(project => project.showOnHome),

        homeProjectsGrid

    );

    enableProjectCardClick();

}

