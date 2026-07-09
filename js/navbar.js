function createNavbar() {
  return `
<nav class="navbar">
        <div class="logo">Rao Awais</div>

        <ul class="nav-links">
          <li><a href="index.html" data-page="home" >Home</a></li>

          <li><a href="about.html" data-page="about" >About</a></li>

          <li><a href="skills.html" data-page="skills" >Skills</a></li>

          <li><a href="projects.html" data-page="projects" >Projects</a></li>

          <li><a href="contact.html" data-page="contact" >Contact</a></li>
        </ul>

        <a href="resume/resume.pdf" class="cv-btn" download> Download CV </a>
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

function setActiveNavLink(){

}

//---------------- function calls -------------------------
renderNavbar();

setActiveNavLink();
