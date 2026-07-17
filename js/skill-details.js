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

console.log(selectedSkill);

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

    skillHero.innerHTML = `

        <span class="page-tag">

            ${selectedSkill.category}

        </span>

        <div class="skill-title">

            <i class="${selectedSkill.icon}"></i>

            <h1>

                ${selectedSkill.name}

            </h1>

        </div>

        <p>

            ${selectedSkill.description}

        </p>

    `;

}

// ==========================
// Containers
// ==========================

const skillOverview = document.getElementById("skill-overview");

const skillTechnologies = document.getElementById("skill-technologies");

const skillProjects = document.getElementById("skill-projects");

const learningJourney = document.getElementById("learning-journey");

const skillNavigation = document.getElementById("skill-navigation");

// ==========================
// Render Overview
// ==========================

function renderOverview() {

    skillOverview.innerHTML = `

        <div class="section-heading">

            <span class="section-tag">

                Overview

            </span>

            <h2>

                About ${selectedSkill.name}

            </h2>

        </div>

        <p>

            ${selectedSkill.overview}

        </p>

    `;

}

// ==========================
// Render Technologies
// ==========================

function renderTechnologies() {

    let technologiesHTML = "";

    selectedSkill.technologies.forEach(function (technology) {

        technologiesHTML += `

            <span class="tech-badge">

                ${technology}

            </span>

        `;

    });

    skillTechnologies.innerHTML = `

        <div class="section-heading">

            <span class="section-tag">

                Technologies

            </span>

            <h2>

                What I Use

            </h2>

        </div>

        <div class="tech-list">

            ${technologiesHTML}

        </div>

    `;

}

// ==========================
// Render Features
// ==========================

function renderFeatures() {

    let featuresHTML = "";

    selectedSkill.features.forEach(function (feature) {

        featuresHTML += `

            <li>

                ${feature}

            </li>

        `;

    });

    skillProjects.innerHTML = `

        <div class="section-heading">

            <span class="section-tag">

                Capabilities

            </span>

            <h2>

                What I Can Build

            </h2>

        </div>

        <ul class="feature-list">

            ${featuresHTML}

        </ul>

    `;

}

// ==========================
// Render Learning
// ==========================

function renderLearningJourney() {

    learningJourney.innerHTML = `

        <div class="section-heading">

            <span class="section-tag">

                Journey

            </span>

            <h2>

                Learning Journey

            </h2>

        </div>

        <p>

            ${selectedSkill.learning}

        </p>

    `;

}

// function calls
function renderPage() {

    renderHero();

    renderOverview();

    renderTechnologies();

    renderFeatures();

    renderLearningJourney();

    renderNavigation();

}

renderPage();