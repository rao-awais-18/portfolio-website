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

    const totalTechnologies = selectedSkill.technologies.length;

    const totalCapabilities = selectedSkill.capabilities.length;

    const totalProjects = selectedSkill.projects.length;

    skillHero.innerHTML = `

        <div class="skill-hero-content">

            <div class="hero-left">

                <span class="section-tag">

                    <h2>${selectedSkill.category}</h2>

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
// Containers
// ==========================

const skillOverview = document.getElementById("skill-overview");

const skillTechnologies = document.getElementById("skill-technologies");

const skillCapabilities = document.getElementById("skill-capabilities");

const learningJourney = document.getElementById("learning-journey");

const skillNavigation = document.getElementById("skill-navigation");

// ==========================
// Render Overview
// ==========================

function renderOverview() {

    let overviewItems = "";

    selectedSkill.overview.forEach(function(item){

        overviewItems += `

            <li>

<i class="fa-solid fa-angle-right"></i>

                <span>${item}</span>

            </li>

        `;

    });

    skillOverview.innerHTML = `

        <div class="section-header">

            <span class="section-tag">

                <h2>Overview</h2>

            </span>

            <h3>

                Why ${selectedSkill.name}?

            </h3>

            <p class="overview-description">

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

            <li>

                <i class="fa-solid fa-code"></i>

                <span>${technology}</span>

            </li>

        `;

    });

    skillTechnologies.innerHTML = `

        <div class="section-header">

            <span class="section-tag">

                <h2>Technologies</h2>

            </span>

            <h3>

                Technologies & Concepts

            </h3>

            <p>

                These are the core technologies, concepts, and best practices I use while working with ${selectedSkill.name}.

            </p>

        </div>

        <ul class="technology-list">

            ${technologiesHTML}

        </ul>

    `;

}

// ==========================
// Render Capabilities
// ==========================

function renderCapabilities() {

    let capabilitiesHTML = "";

    selectedSkill.capabilities.forEach(function(capability,index){

        capabilitiesHTML += `

            <div class="capability-item">

                <div class="capability-number">

                    ${(index+1).toString().padStart(2,"0")}

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

        <div class="section-header">

            <span class="section-tag">

                <h2>Capabilities</h2>

            </span>

            <h3>

                Core Capabilities I Have

            </h3>

            <p>

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

function renderLearningJourney() {

    learningJourney.innerHTML = `

        <div class="section-heading">

            <span class="section-tag">

                <h2>Journey</h2>

            </span>

            <h4>

                Learning Journey

            </h4>

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

    renderCapabilities();

    renderLearningJourney();

    // renderNavigation();

}

renderPage();