// DOM
const projectsCount = document.getElementById("projects-count");
const filterButtons = document.getElementById("filter-buttons");
const searchInput = document.getElementById("project-search");
const projectsGrid = document.getElementById("projects-grid");

// state variables
let currentCategory = "All";
let currentSearch = "";

if (searchInput) {

    searchInput.addEventListener("input", function () {

        currentSearch = this.value.trim();

updateProjects();

    });

}



if (projectsGrid){

    renderFilters();
    updateProjects();

}

function renderFilters() {

    const categories = [

        "All",

        ...new Set(

            projects.map(project => project.category)

        )

    ];

    let buttons = "";

    categories.forEach(function(category){

        buttons += `

            <button

                class="filter-btn ${category === "All" ? "active" : ""}"

                data-category="${category}"

            >

                ${category}

            </button>

        `;

    });

    filterButtons.innerHTML = buttons;

}

filterButtons.addEventListener("click", function(event){

    const button = event.target.closest(".filter-btn");

    if(!button) return;

    document.querySelectorAll(".filter-btn").forEach(function(btn){

        btn.classList.remove("active");

    });

    button.classList.add("active");

    currentCategory = button.dataset.category;

    updateProjects();

});


function updateProjects() {

    let filteredProjects = projects.filter(function(project){

        const matchesCategory =

            currentCategory === "All" ||

            project.category === currentCategory;

        const search = currentSearch.toLowerCase();

const matchesSearch =

    (project.title || "")
        .toLowerCase()
        .includes(search)

    ||

    (project.shortDescription || "")
        .toLowerCase()
        .includes(search)

    ||

    (project.category || "")
        .toLowerCase()
        .includes(search);

      project.technologies.some(function(tech){

        return tech.toLowerCase().includes(search);

    });  

        return matchesCategory && matchesSearch;

    });

    projectsCount.textContent =

`Showing ${filteredProjects.length} Project${filteredProjects.length === 1 ? "" : "s"}`;

    if (filteredProjects.length === 0) {

    projectsGrid.innerHTML = `

        <div class="empty-state">

            <i class="fa-solid fa-folder-open"></i>

            <h3>No Projects Found</h3>

            <p>

                Try changing the search keyword or selecting another category.

            </p>

        </div>

    `;

    return;

}

renderProjects(filteredProjects, projectsGrid);

enableProjectCardClick();

}