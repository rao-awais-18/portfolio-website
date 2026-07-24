function createNavbar() {
  return `
<nav class="navbar">
 <a href = "index.html" class="logo">Rao Awais</div> </a>
        <button class="menu-toggle" aria-label="Toggle Menu">
    <i class="fa-solid fa-bars"></i>
</button>

<div class="nav-right">

    <ul class="nav-links">

        <li><a href="index.html" data-page="home">Home</a></li>

        <li><a href="about.html" data-page="about">About</a></li>

        <li><a href="skills.html" data-page="skills">Skills</a></li>

        <li><a href="projects.html" data-page="projects">Projects</a></li>

        <li><a href="contact.html" data-page="contact">Contact</a></li>

    </ul>

    <a href="resume/resume.pdf" class="cv-btn" download>

        Download CV

    </a>

</div>

      </nav>
    `;
}

function renderNavbar() {
  const navbarContainer = document.getElementById("navbar-container");
  // defensive check to avoid js error if any page don't contain navbar
  if (!navbarContainer) {
    return;
  }

  navbarContainer.innerHTML = createNavbar();
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop();

  const pageMap = {
    "": "home", // Agar website root se open ho

    "index.html": "home",

    "about.html": "about",

    "projects.html": "projects",

    "project-details.html": "projects",

    "skills.html": "skills",

    "skill-details.html": "skills",

    "contact.html": "contact",
  };

  const activePage = pageMap[currentPage];

  const navLinks = document.querySelectorAll("[data-page]");

  navLinks.forEach(function (link) {
    link.classList.remove("active");

    if (link.dataset.page === activePage) {
      link.classList.add("active");
    }
  });
}

//---------------- function calls -------------------------
renderNavbar();

setActiveNavLink();
