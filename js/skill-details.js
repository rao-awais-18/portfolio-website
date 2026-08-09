// ==========================
// Get Skill ID From URL
// ==========================

const urlParams = new URLSearchParams(window.location.search);

const skillId = urlParams.get("id");

// ==========================
// Find Skill
// ==========================

const selectedSkill = skills.find(function (skill) {
  return skill.id === skillId;
});

// ==========================
// Invalid Skill
// ==========================

if (!selectedSkill) {
  document.body.innerHTML = `

        <h1>

            Skill not found.

        </h1>

    `;

  throw new Error("Invalid Skill ID");
}

// ==========================
// Hero Container
// ==========================

const skillHero = document.getElementById("skill-hero");

// ==========================
// Render Hero
// ==========================

function renderHero() {
  document.title = `${selectedSkill.name} | Skills | Rao Awais`;

  const totalTechnologies = selectedSkill.technologies.length;

  const totalCapabilities = selectedSkill.capabilities.length;

  const totalProjects = selectedSkill.projects.length;

  skillHero.innerHTML = `

        <div class="skill-hero-content">

            <div class="hero-left">

<div class="skill-details-page-section-header">

    <span class="skill-details-page-section-label">

        ${selectedSkill.category}

    </span>

    <h1 class="skill-hero-title gradient-text">

        ${selectedSkill.name}

    </h1>

    <p>

        ${selectedSkill.description}

    </p>

</div>
                <div class="info-grid">

                    <div class="info-card">

                        <h3>${totalTechnologies}</h3>

                        <span>Technologies</span>

                    </div>

                    <div class="info-card">

                        <h3>${totalCapabilities}</h3>

                        <span>Capabilities</span>

                    </div>

                    <div class="info-card">

                        <h3>${totalProjects}</h3>

                        <span>Projects</span>

                    </div>

                </div>

            </div>

            <div class="hero-right">

                <div class="hero-icon">

                    <i class="${selectedSkill.icon}"></i>

                </div>

            </div>

        </div>

    `;
}

// ==========================
// Containers DOM
// ==========================

const skillOverview = document.getElementById("skill-overview");

const skillTechnologies = document.getElementById("skill-technologies");

const skillCapabilities = document.getElementById("skill-capabilities");

const skillLearning = document.getElementById("skill-learning");

const skillNavigation = document.getElementById("skill-navigation");

// ==========================
// Render Overview
// ==========================

function renderOverview() {
  let overviewItems = "";

  selectedSkill.overview.forEach(function (item) {
    overviewItems += `

            <li>

<i class="fa-solid fa-angle-right"></i>

                <span>${item}</span>

            </li>

        `;
  });

  skillOverview.innerHTML = `

<div class="skill-dp-header">

    <span class="skill-dp-section-title">

        Overview

    </span>

    <h2 class="gradient-text">

        Why ${selectedSkill.name} Matters

    </h2>

    <p class="skill-dp-section-description">

        ${selectedSkill.Longdescription}

    </p>

</div>

        <div class="overview-content">

            <ul class="overview-list">

                ${overviewItems}

            </ul>

        </div>

    `;
}

// ==========================
// Render Technologies
// ==========================

function renderTechnologies() {
  let technologiesHTML = "";

  selectedSkill.technologies.forEach(function (technology) {
    technologiesHTML += `

<div class="technology-chip">

    <span>${technology}</span>

</div>

`;
  });

  skillTechnologies.innerHTML = `

        <div class="skill-dp-header">

            <span class="skill-dp-section-title">

                Technologies

            </span>

            <h2 class="gradient-text">

                Technologies & Concepts

            </h2>

            <p class="skill-dp-section-description">

                These are the core technologies, concepts, and best practices I use while working with ${selectedSkill.name}.

            </p>

        </div>

        <ul class="technology-stack">

            ${technologiesHTML}

        </ul>

    `;
}

// ==========================
// Render Capabilities
// ==========================

function renderCapabilities() {
  let capabilitiesHTML = "";

  selectedSkill.capabilities.forEach(function (capability, index) {
    capabilitiesHTML += `

            <div class="capability-item">

                <div class="capability-number">

                    ${(index + 1).toString().padStart(2, "0")}

                </div>

                <div class="capability-content">

                    <h3>

                        ${capability.title}

                    </h3>

                    <p>

                        ${capability.description}

                    </p>

                </div>

            </div>

        `;
  });

  skillCapabilities.innerHTML = `

        <div class="skill-dp-header">

            <span class="skill-dp-section-title">

                Capabilities

            </span>

            <h2 class="gradient-text">

                Core Capabilities I Have

            </h2>

            <p class="skill-dp-section-description">

                Key development capabilities gained through hands-on experience with ${selectedSkill.name}.

            </p>

        </div>

        <div class="capability-list">

            ${capabilitiesHTML}

        </div>

    `;
}

// ==========================
// Render Learning
// ==========================

function renderLearning() {
  skillLearning.innerHTML = `

        <div class="skill-dp-header">

            <span class="skill-dp-section-title">

                Reflection

            </span>

            <h2 class="gradient-text">

               Learning Journey 

            </h2>

            <p class="skill-dp-section-description">

                Every technology teaches something beyond syntax. Here's what I learned while working with ${selectedSkill.name}.

            </p>

        </div>

        <div class="learning-reflection">

            <i class="fa-solid fa-quote-left"></i>

            <p>

                ${selectedSkill.learning}

            </p>

        </div>

    `;
}

// ==========================
// Render Navigation
// ==========================

function renderNavigation() {
  const currentIndex = skills.findIndex(function (skill) {
    return skill.id === selectedSkill.id;
  });

  const previousSkill = skills[currentIndex - 1];

  const nextSkill = skills[currentIndex + 1];

  skillNavigation.innerHTML = `

        <div class="navigation-buttons">

            ${
              previousSkill
                ? `<a
                    href="skill-details.html?id=${previousSkill.id}"
                    class="nav-btn"
                    title="Previous Skill"
                >

                    <i class="fa-solid fa-chevron-left gradient-text"></i>

                </a>`
                : ""
            }

            ${
              nextSkill
                ? `<a
                    href="skill-details.html?id=${nextSkill.id}"
                    class="nav-btn"
                    title="Next Skill"
                >

                    <i class="fa-solid fa-chevron-right gradient-text"></i>

                </a>`
                : ""
            }

        </div>

    `;
}

// function calls
function renderPage() {
  renderHero();

  renderOverview();

  renderTechnologies();

  renderCapabilities();

  renderLearning();

  renderNavigation();
}

renderPage();
