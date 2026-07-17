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

    const totalTechnologies = selectedSkill.technologies.length;

    const totalFeatures = selectedSkill.features.length;

    const totalProjects = selectedSkill.projects.length;

    skillHero.innerHTML = `

        <div class="skill-hero-content">

            <div class="hero-left">

                <span class="section-tag">

                    Frontend Development

                </span>

                <h1>

                    ${selectedSkill.name}

                </h1>

                <p>

                    ${selectedSkill.description}

                </p>

                <div class="info-grid">

                    <div class="info-card">

                        <h3>${totalTechnologies}</h3>

                        <span>Technologies</span>

                    </div>

                    <div class="info-card">

                        <h3>${totalFeatures}</h3>

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

            <div class="feature-card">

                ${feature}

            </div>

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

        <div class="feature-grid">

            ${featuresHTML}

        </div>

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

    // renderNavigation();

}

renderPage();