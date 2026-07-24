function createNavbar() {
  return `
<nav class="navbar">
<div class="menu-overlay"></div>
 <a href = "index.html" class="logo">Rao Awais</div> </a>
        <button class="menu-toggle" aria-label="Toggle Menu">
    <i class="fa-solid fa-bars"></i>
</button>

<div class="nav-right">

<button class="menu-close" aria-label="Close Menu">
    <i class="fa-solid fa-xmark"></i>
</button>

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



function enableMobileMenu(){

    const toggle=document.querySelector(".menu-toggle");

    const nav=document.querySelector(".nav-right");

    const overlay=document.querySelector(".menu-overlay");

    const closeBtn=document.querySelector(".menu-close");

    closeBtn.addEventListener("click",closeMenu);

    if(!toggle||!nav||!overlay) return;

    function closeMenu(){

        nav.classList.remove("active");

        overlay.classList.remove("active");

        document.body.classList.remove("menu-open");

        // const icon=toggle.querySelector("i");

       
    }

    toggle.addEventListener("click",function(){

        const open=nav.classList.toggle("active");

        overlay.classList.toggle("active",open);

        document.body.classList.toggle("menu-open",open);

        const icon=toggle.querySelector("i");

        

    });

    overlay.addEventListener("click",closeMenu);

    document.querySelectorAll(".nav-links a,.cv-btn").forEach(function(link){

        link.addEventListener("click",closeMenu);

    });

    document.addEventListener("keydown",function(e){

        if(e.key==="Escape"){

            closeMenu();

        }

    });

}

enableMobileMenu();
