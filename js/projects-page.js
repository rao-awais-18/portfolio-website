// DOM
const filterButtons = document.getElementById("filter-buttons");
const searchInput = document.getElementById("project-search");
const projectsGrid = document.getElementById("projects-grid");

// state variables
let currentCategory = "All";
let currentSearch = "";

if (searchInput) {

    searchInput.addEventListener("input", function () {

        currentSearch = this.value;

updateProjects();

    });

}



if (projectsGrid){

    renderFilters();
    updateProjects();

    enableProjectCardClick();

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

        const matchesSearch =

            project.title
                .toLowerCase()
                .includes(currentSearch.toLowerCase());

        return matchesCategory && matchesSearch;

    });

    renderProjects(filteredProjects, projectsGrid);

    enableProjectCardClick();

}