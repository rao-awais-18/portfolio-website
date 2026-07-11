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

// tech-icon mapping helper function
function getTechnologyData(technology) {
  switch (technology) {
    case "HTML5":
      return {
        icon: "fa-brands fa-html5",
        className: "html5-tech",
      };

    case "CSS3":
      return {
        icon: "fa-brands fa-css3-alt",
        className: "css3-tech",
      };

    case "JavaScript":
      return {
        icon: "fa-brands fa-js",
        className: "javascript-tech",
      };

    case "Bootstrap":
      return {
        icon: "fa-brands fa-bootstrap",
        className: "bootstrap-tech",
      };

    case "Font Awesome":
      return {
        icon: "fa-solid fa-font-awesome",
        className: "fontawesome-tech",
      };

    // agr aur technologies hain to unke liye bhi case add kar sakte hain, icon aur className ke saath(icon-name from font awesome website)
    // data model mein tech name add karo, switch mein aik aur case add karo, aur css mein issi classname k sath usska color do.
    default:
      return {
        icon: "fa-solid fa-code",
        className: "default-tech",
      };
  }
}

function renderTechnologies() {
  const technologiesContainer = document.getElementById("project-technologies");

  if (!technologiesContainer) {
    return;
  }

  let cards = "";

  currentProject.technologies.forEach(function (technology) {
    const tech = getTechnologyData(technology);

    cards += `

<div class="technology-card glass-card">

    <i class="${tech.icon} ${tech.className}"></i>

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

// -------------------- render Features --------------------
function renderFeatures() {
  const featuresContainer = document.getElementById("project-features");

  if (!featuresContainer) {
    return;
  }

  let cards = "";

  currentProject.features.forEach(function (feature) {
    cards += `

            <div class="feature-card glass-card">

                <i class="${getFeatureIcon(feature)}"></i>

                <h3>${feature}</h3>

            </div>

        `;
  });

  featuresContainer.innerHTML = `

        <div class="section-heading">

            <h2>Key Features</h2>

        </div>

        <div class="features-grid">

            ${cards}

        </div>

    `;
}
renderFeatures();

// helper function for features section
function getFeatureIcon(feature) {
  switch (feature) {
    case "Fully Responsive Layout":
      return "fa-solid fa-mobile-screen-button";

    case "Dynamic Project Rendering":
      return "fa-solid fa-layer-group";

    case "Dynamic Skills Rendering":
      return "fa-solid fa-code";

    case "Animated Hero Section":
      return "fa-solid fa-wand-magic-sparkles";

    case "Glassmorphism UI":
      return "fa-solid fa-cubes";

    case "Project Detail Page":
      return "fa-solid fa-file-lines";

    // agr aur features hain to unke liye bhi case add kar sakte hain, case mein feature name aur return mein uss ky lie suited icon
    //  aur data model mein feature name add karo,
    default:
      return "fa-solid fa-circle-check";
  }
}


// -------------------- render Project Information --------------------
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
        key: "year",
        label: "Year",
        value: year,
    },

    {
        key: "duration",
        label: "Duration",
        value: duration,
    },

    {
        key: "status",
        label: "Status",
        value: status,
    },

    {
        key: "role",
        label: "Role",
        value: role,
    },

    {
        key: "client",
        label: "Client",
        value: client,
    },

    {
        key: "platform",
        label: "Platform",
        value: platform,
    },

    {
        key: "version",
        label: "Version",
        value: version,
    },

    {
        key: "lastUpdated",
        label: "Last Updated",
        value: lastUpdated,
    },

];

  let informationHTML = "";

  projectInformation.forEach(function (item) {
    informationHTML += `

<div class="info-item glass-card">

    <i class="${getInfoIcon(item.key)}"></i>

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

// function renderProjectInformation(){

//     const container =
//         document.getElementById("project-information");

//     if(!container){

//         return;

//     }

//     const information = [

//         ["Year", currentProject.year],

//         ["Duration", currentProject.duration],

//         ["Status", currentProject.status],

//         ["Role", currentProject.role],

//         ["Client", currentProject.client],

//         ["Version", currentProject.version],

//         ["Last Updated", currentProject.lastUpdated],

//         ["Platform", currentProject.platform]

//     ];

//     let cards = "";

//     information.forEach(function(item){

//         cards += `

//             <div class="info-card glass-card">

//                 <i class="${getInfoIcon(item[0])}"></i>

//                 <h3>${item[0]}</h3>

//                 <p>${item[1]}</p>

//             </div>

//         `;

//     });

//     container.innerHTML = `

//         <div class="section-heading">

//             <h2>Project Information</h2>

//         </div>

//         <div class="information-grid">

//             ${cards}

//         </div>

//     `;

// }

renderProjectInformation();

// helper fuction
function getInfoIcon(key){

    switch(key){

        case "year":
            return "fa-regular fa-calendar";

        case "duration":
            return "fa-regular fa-clock";

        case "status":
            return "fa-solid fa-circle-check";

        case "role":
            return "fa-solid fa-user";

        case "client":
            return "fa-solid fa-building";

        case "platform":
            return "fa-solid fa-desktop";

        case "version":
            return "fa-solid fa-code-branch";

        case "lastUpdated":
            return "fa-solid fa-rotate";

        default:
            return "fa-solid fa-circle-info";

    }

}

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
