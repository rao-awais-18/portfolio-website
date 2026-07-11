// ================================
// Get Project
// ================================

const params = new URLSearchParams(window.location.search);

const projectId = Number(params.get("id"));

const currentProject = projects.find(function (project) {
  return project.id === projectId;
});

// ================================
// Render Functions
// ================================

function renderProjectHero() {
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

           

            <h1>

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

        <div class="section-heading">

            <h2>

                Project Overview

            </h2>

        </div>

        <div class="project-overview-content glass-card">

            <p>

                ${detailedDescription}

            </p>

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

<div class="gallery-overlay">

        <i class="fa-solid fa-eye"></i>

        <span>View Image</span>

    </div>


            </div>

        `;
  });

  gallery.innerHTML = `

        <div class="section-heading">

            <h2>

                Project Gallery

            </h2>

        </div>

        <div class="gallery-grid">

            ${screenshotsHTML}

        </div>

    `;
}

renderGallery();

function initializeGallery() {

    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach(function(item){

        item.addEventListener("click", function(){

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

closeButton.addEventListener("click", function(){

    closeLightbox();

});

// update lightbox content
function updateLightbox() {

    lightboxImage.src =

        currentProject.screenshots[currentScreenshotIndex];

    lightboxCounter.textContent =

        `viewing ${currentScreenshotIndex + 1} of ${currentProject.screenshots.length}`;

}

// move to next image
function nextImage(){

    currentScreenshotIndex++;

    if(currentScreenshotIndex >= currentProject.screenshots.length){

        currentScreenshotIndex = 0;

    }

    updateLightbox();

}

// listen for next button click
nextButton.addEventListener("click", function(){

    nextImage();

});

// move to previous image
function previousImage(){

    currentScreenshotIndex--;

    if(currentScreenshotIndex < 0){

        currentScreenshotIndex =

        currentProject.screenshots.length - 1;

    }

    updateLightbox();

}
// listen for previous button click
previousButton.addEventListener("click", function(){

    previousImage();

});

// keyboard navigation for lightbox
document.addEventListener("keydown", function(event){

    if(!lightbox.classList.contains("active")){

        return;

    }

    if(event.key === "Escape"){

        closeLightbox();

    }

    if(event.key === "ArrowRight"){

    nextImage();

}

if(event.key === "ArrowLeft"){

    previousImage();

}

});

lightbox.addEventListener("click", function(event){

    if(event.target === lightbox){

        closeLightbox();

    }

});


// render Technologies
function renderTechnologies() {

  const technologiesContainer =
    document.getElementById("project-technologies");

  if (!technologiesContainer) {

    return;

  }

  let cards = "";

  currentProject.technologies.forEach(function (technology) {

    cards += `

      <div class="technology-card glass-card">

          <i class="${getTechnologyIcon(technology)}"></i>

          <h3>${technology}</h3>

      </div>

    `;

  });

  technologiesContainer.innerHTML = `

    <div class="section-heading">

        <h2>Technologies Used</h2>

    </div>

    <div class="technologies-grid">

        ${cards}

    </div>

  `;

}

renderTechnologies();

// tech-icon mapping function
function getTechnologyIcon(technology) {

  switch (technology) {

    case "HTML5":
      return "fa-brands fa-html5";

    case "CSS3":
      return "fa-brands fa-css3-alt";

    case "JavaScript":
      return "fa-brands fa-js";

    case "Bootstrap":
      return "fa-brands fa-bootstrap";

    case "Font Awesome":
      return "fa-solid fa-font-awesome";

    default:
      return "fa-solid fa-code";

  }

}




function renderFeatures() {
  const featuresContainer = document.getElementById("project-features");

  if (!featuresContainer) {
    return;
  }

  const { features } = currentProject;

  let featuresHTML = "";

  features.forEach(function (feature) {
    featuresHTML += `

            <div class="feature-card"> 

                <i class="fa-solid fa-check"></i>

                <span>

                    ${feature}

                </span>

            </div>

        `;
  });

  featuresContainer.innerHTML = `

        <div class="section-heading">

            <h2>

                Key Features

            </h2>

        </div>

        <div class="features-grid">

            ${featuresHTML}

        </div>

    `;
}

renderFeatures();

function renderProjectInformation() {
  const informationContainer = document.getElementById("project-information");

  if (!informationContainer) {
    return;
  }

  const {
    year,

    duration,

    status,

    role,

    client,

    version,

    lastUpdated,

    platform,
  } = currentProject;

  const projectInformation = [
    {
      label: "Year",

      value: year,
    },

    {
      label: "Duration",

      value: duration,
    },

    {
      label: "Status",

      value: status,
    },

    {
      label: "Role",

      value: role,
    },

    {
      label: "Client",

      value: client,
    },

    {
      label: "Platform",

      value: platform,
    },

    {
      label: "Version",

      value: version,
    },

    {
      label: "Last Updated",

      value: lastUpdated,
    },
  ];

  let informationHTML = "";

  projectInformation.forEach(function (item) {
    informationHTML += `

            <div class="info-item">

                <span class="info-label">

                    ${item.label}

                </span>

                <span class="info-value">

                    ${item.value}

                </span>

            </div>

        `;
  });

  informationContainer.innerHTML = `

        <div class="section-heading">

            <h2>

                Project Information

            </h2>

        </div>

        <div class="project-information-grid">

            ${informationHTML}

        </div>

    `;
}

renderProjectInformation();

function renderProjectNavigation() {
  const navigation = document.getElementById("project-navigation");

  if (!navigation) {
    return;
  }

  const currentIndex = projects.findIndex(function (project) {
    return project.id === projectId;
  });

  const previousIndex = (currentIndex - 1 + projects.length) % projects.length;

  const nextIndex = (currentIndex + 1) % projects.length;

  const previousProject = projects[previousIndex];

  const nextProject = projects[nextIndex];

  navigation.innerHTML = `

        <a href="project-details.html?id=${previousProject.id}"

           class="project-nav-card">

            <small>

                Previous Project

            </small>

            <h3>

                ${previousProject.title}

            </h3>

        </a>

        <a href="project-details.html?id=${nextProject.id}"

           class="project-nav-card">

            <small>

                Next Project

            </small>

            <h3>

                ${nextProject.title}

            </h3>

        </a>

    `;
}

renderProjectNavigation();

//console.log(currentProject);
