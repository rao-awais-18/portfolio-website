// ================================
// Get Project
// ================================

const params = new URLSearchParams(window.location.search);

const projectId = Number(params.get("id"));

const currentProject = projects.find(function (project) {
  return project.id === projectId;
});

const { detailedDescription, overviewHeading } = currentProject;

// ================================
// Render Functions
// ================================

function renderProjectHero() {
  document.title = `${currentProject.title} | Projects | Rao Awais`;
  const hero = document.getElementById("project-hero");

  if (!hero) {
    return;
  }

  const {
    title,

    category,

    thumbnail,

    shortDescription,

    badges,

    github,

    liveDemo,
  } = currentProject;

  let badgesHTML = "";

  badges.forEach(function (badge) {
    badgesHTML += `

            <span class="project-status">

                ${badge}

            </span>

        `;
  });

  hero.innerHTML = `

    <div class="project-hero-wrapper">    
       

    
        <div class="project-hero-content">

           

            <h1 class = "project-title gradient-text">

                ${title}

            </h1>

             <span class="project-category">

                ${category}

            </span>

            <p>

                ${shortDescription}

            </p>

            <div class="hero-buttons">

                <a href="${liveDemo}"

                   class="btn btn-primary"

                   target="_blank">

                    Live Demo

                </a>

                <a href="${github}"

                   class="btn btn-secondary"

                   target="_blank">

                    GitHub

                </a>

            </div>

        </div>

<div class="project-hero-image">

            <img src="${thumbnail}" alt="${title}">

            <div class="project-badges">

                ${badgesHTML}

            </div>

        </div>

        </div>

    `;
}

renderProjectHero();

function renderOverview() {
  const overview = document.getElementById("project-overview");

  if (!overview) {
    return;
  }

  const { detailedDescription } = currentProject;

  overview.innerHTML = `

  <div class="overview-wrapper">

        <span class="project-details-page-section-label">
            PROJECT OVERVIEW
        </span>

       <h2 class="gradient-text">
      ${overviewHeading}
       </h2>

        <div class="overview-divider"></div>

        <blockquote class="overview-description">

            <span class="quote-start">“</span>

            <p>
                ${detailedDescription}
            </p>

            <span class="quote-end">”</span>

        </blockquote>

  </div>

    `;
}

renderOverview();

function renderGallery() {
  const gallery = document.getElementById("project-gallery");

  if (!gallery) {
    return;
  }

  const {
    screenshots,

    title,
  } = currentProject;

  let screenshotsHTML = "";

  screenshots.forEach(function (image, index) {
    screenshotsHTML += `

            <div class="gallery-item" data-index="${index}">

                <img src="${image}" alt="${title} Screenshot" data-index="${index}">

<div class="gallery-overlay" aria-label="view image">

        <i class="fa-solid fa-eye"></i>

        <span>View Image</span>

    </div>


            </div>

        `;
  });

  gallery.innerHTML = `

        <div class="project-details-page-section-header">

    <span class="project-details-page-section-label">
        VISUAL SHOWCASE
    </span>

    <h2 class="gradient-text">
        Project Gallery
    </h2>

    <p>
        Explore the interface, design decisions and key screens that bring this project to life.
    </p>

    

</div>

        <div class="gallery-grid">

            ${screenshotsHTML}

        </div>

    `;
}

renderGallery();

function initializeGallery() {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach(function (item) {
    item.addEventListener("click", function () {
      openLightbox(Number(this.dataset.index));
    });
  });
}
initializeGallery();

/* ==========================
   Lightbox
========================== */

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const lightboxCounter = document.getElementById("lightbox-counter");

const closeButton = document.getElementById("lightbox-close");

const previousButton = document.getElementById("lightbox-prev");

const nextButton = document.getElementById("lightbox-next");

let currentScreenshotIndex = 0;

// open lightbox
function openLightbox(index) {
  currentScreenshotIndex = index;

  updateLightbox();

  lightbox.classList.add("active");

  document.body.style.overflow = "hidden";
}

// close lightbox
function closeLightbox() {
  lightbox.classList.remove("active");

  document.body.style.overflow = "";
}

closeButton.addEventListener("click", function () {
  closeLightbox();
});

// update lightbox content
function updateLightbox() {
  lightboxImage.src = currentProject.screenshots[currentScreenshotIndex];

  lightboxCounter.textContent = `viewing ${currentScreenshotIndex + 1} of ${currentProject.screenshots.length}`;
}

// move to next image
function nextImage() {
  currentScreenshotIndex++;

  if (currentScreenshotIndex >= currentProject.screenshots.length) {
    currentScreenshotIndex = 0;
  }

  updateLightbox();
}

// listen for next button click
nextButton.addEventListener("click", function () {
  nextImage();
});

// move to previous image
function previousImage() {
  currentScreenshotIndex--;

  if (currentScreenshotIndex < 0) {
    currentScreenshotIndex = currentProject.screenshots.length - 1;
  }

  updateLightbox();
}
// listen for previous button click
previousButton.addEventListener("click", function () {
  previousImage();
});

// keyboard navigation for lightbox
document.addEventListener("keydown", function (event) {
  if (!lightbox.classList.contains("active")) {
    return;
  }

  if (event.key === "Escape") {
    closeLightbox();
  }

  if (event.key === "ArrowRight") {
    nextImage();
  }

  if (event.key === "ArrowLeft") {
    previousImage();
  }
});

lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

//-------------------- render Technologies --------------------

function renderTechnologies() {
  const technologiesContainer = document.getElementById("project-technologies");

  if (!technologiesContainer) {
    return;
  }

  let cards = "";

  currentProject.technologies.forEach(function (technology) {
    cards += `

<div class="pdp-technology-item">

<div class="pdp-technology-icon">
    <i class="${technology.icon} ${technology.className}"></i>
</div>

<div class="pdp-technology-info">
    <h3>${technology.name}</h3>
    <span class="technology-type">${technology.role}</span>
</div>
</div>

`;
  });

  technologiesContainer.innerHTML = `

<div class="project-details-page-section-header">

    <span class="project-details-page-section-label">
        TECH STACK
    </span>

    <h2 class="project-details-page-section-title gradient-text">
        Technologies Used
    </h2>
     <p class="project-details-page-section-description">
        Every technology in this project was selected to solve a specific problem efficiently.
    </p>

</div>

<div class="technologies-grid">

    ${cards}

</div>

`;
}
renderTechnologies();

// -------------------- render Features --------------------
function renderFeatures() {
  const featuresContainer = document.getElementById("project-features");

  if (!featuresContainer) return;

  let featuresHTML = "";

  currentProject.features.forEach(function (feature) {
    featuresHTML += `

      <article class="pdp-feature-item">

        <div class="pdp-feature-icon">
          <i class="${feature.icon}"></i>
        </div>

        <div class="pdp-feature-content">

          <h3>${feature.title}</h3>

          <p>${feature.description}</p>

        </div>

      </article>

    `;
  });

  featuresContainer.innerHTML = `

    <div class="project-details-page-section-header">

      <span class="project-details-page-section-label">
        FEATURES
      </span>

      <h2 class="gradient-text">
        What Makes This Project Stand Out
      </h2>

      <p>
        A closer look at the functionality, architecture and user experience implemented throughout this project.
      </p>

    </div>

    <div class="pdp-features-list">

      ${featuresHTML}

    </div>

  `;
}

renderFeatures();

// -------------------- render Project Information --------------------
function renderProjectInformation() {
  const informationContainer = document.getElementById("project-information");

  if (!informationContainer) return;

  let rows = "";

  currentProject.projectInformation.forEach(function (info) {
    rows += `

<article class="pdp-info-row">

    <div class="pdp-info-icon">

        <i class="${info.icon}"></i>

    </div>

    <div class="pdp-info-text">

        <span class="pdp-info-label">

            ${info.label}

        </span>

        <h3 class="pdp-info-value">

            ${info.value}

        </h3>

    </div>

    <div class="pdp-info-dot"></div>

</article>

`;
  });

  informationContainer.innerHTML = `

        <div class="project-details-page-section-header">

            <span class="project-details-page-section-label">

                PROJECT INFORMATION

            </span>

            <h2 class="gradient-text">

                Everything About This Project

            </h2>

            <p>

                Essential details including timeline, development role, project status and technical information.

            </p>

        </div>

        <div class="pdp-information-list">

            ${rows}

        </div>

    `;
}

renderProjectInformation();

// -------------------- Render Navigation --------------------
function renderProjectNavigation() {
  const navigation = document.getElementById("project-navigation");

  if (!navigation) {
    return;
  }

  const currentIndex = projects.findIndex(function (project) {
    return project.id === projectId;
  });

  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;

  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  navigation.innerHTML = `

<div class="project-navigation-wrapper">

    ${
      previousProject
        ? `
        <a href="project-details.html?id=${previousProject.id}"
           class="project-nav previous-project">

            <small>

                <i class="fa-solid fa-arrow-left"></i>

                Previous Project

            </small>

            <div class="tech-stack">

    <span class="tech-badge">

        ${previousProject.title}

    </span>

</div>

        </a>
        `
        : `<div></div>`
    }

    ${
      nextProject
        ? `
        <a href="project-details.html?id=${nextProject.id}"
           class="project-nav next-project">

            <small>

                Next Project

                <i class="fa-solid fa-arrow-right"></i>

            </small>

            <div class="tech-stack">

    <span class="tech-badge">

        ${nextProject.title}

    </span>

</div>
        </a>
        `
        : `<div></div>`
    }

</div>

`;
}
renderProjectNavigation();

// -------------------- Render Project CTA --------------------

function renderProjectCTA() {
  const ctaContainer = document.getElementById("project-cta");

  if (!ctaContainer) {
    return;
  }

  const {
    title,

    resources,
  } = currentProject;

  let buttonsHTML = `

    <a href="contact.html"

       class="btn btn-primary">

        <i class="fa-solid fa-paper-plane"></i>

        Contact Me

    </a>

`;

  if (resources?.length) {
    resources.forEach(function (resource) {
      buttonsHTML += `

            <a href="${resource.url}"

               target="_blank"

               rel="noopener noreferrer"

               class="btn btn-secondary">

                <i class="${resource.icon}"></i>

                ${resource.title}

            </a>

        `;
    });
  }

  ctaContainer.innerHTML = `

        <div class="project-cta-content">

            <h2 class="gradient-text">

    Let's Build Something Great Together

</h2>

<p>

    Inspired by <strong class="highlight-item">${title}</strong>?

    If you're looking for a similar solution or have a completely different idea, I'd be happy to help bring it to life.

</p>

            <div class="project-cta-buttons">

                ${buttonsHTML}

            </div>

        </div>

    `;
}

renderProjectCTA();
