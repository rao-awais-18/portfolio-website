const filterButtons = document.getElementById("filter-buttons");
const searchInput = document.getElementById("project-search");
const projectsGrid = document.getElementById("projects-grid");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        console.log(this.value);

    });

}



if (projectsGrid){

    renderFilters();
    renderProjects(projects, projectsGrid);

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