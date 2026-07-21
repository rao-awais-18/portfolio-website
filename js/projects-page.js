// DOM
const projectsCount = document.getElementById("projects-count");
const filterButtons = document.getElementById("filter-buttons");
const searchInput = document.getElementById("project-search");
const projectsGrid = document.getElementById("projects-grid");
const sortProjects = document.getElementById("sort-projects");
let currentSort = "default";
const resetButton = document.getElementById("reset-filters");
const activeFilters = document.getElementById("active-filters");
let searchTimeout;


// state variables
let currentCategory = "All";
let currentSearch = "";


// Events
sortProjects.addEventListener("change",function(){

    currentSort=this.value;

    updateProjects(true); 

});

if (searchInput) {

    searchInput.addEventListener("input", function () {

        currentSearch = this.value.trim();

        clearTimeout(searchTimeout);

        searchTimeout = setTimeout(function () {

            updateProjects();

        }, 250);

    });

}

if(resetButton){

    resetButton.addEventListener("click",function(){

        currentCategory = "All";

        currentSearch = "";

        currentSort = "default";

        searchInput.value = "";

        sortProjects.value = "default";

        document.querySelectorAll(".filter-btn").forEach(function(button){

            button.classList.toggle(

                "active",

                button.dataset.category === "All"

            );

        });

        updateProjects(true); //2

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

    updateProjects(true); //1

});


// helper function to animate projects shuffle
function animateProjects(filteredProjects) {

    renderProjects(filteredProjects, projectsGrid);

    enableProjectCardClick();

    const cards = document.querySelectorAll(".project-card");

    cards.forEach(function(card,index){

        card.style.animationDelay = `${index * 70}ms`;

        card.classList.add("animate-card");

    });

}



function updateProjects(animate = false) {

    let filteredProjects = projects.filter(function(project){

        const matchesCategory =

            currentCategory === "All" ||

            project.category === currentCategory;

        const search = (currentSearch || "").toLowerCase();

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
        .includes(search)

    ||

    project.technologies.some(function (tech) {

        return tech.toLowerCase().includes(search);

    });  

        return matchesCategory && matchesSearch;

    });

    let info = `Showing <strong>${filteredProjects.length}</strong> Project${filteredProjects.length === 1 ? "" : "s"}`;

if (currentCategory !== "All") {

    info += ` • Category:<span class = "highlight"> ${currentCategory}</span>`;

}

if (currentSearch) {

    info += ` • Search:<span class = "highlight"> "${currentSearch}"</span>`;

}

if (currentSort !== "default") {

    const sortLabel =

        currentSort === "az"

            ? "A–Z"

            : "Z–A";

    info += ` • Sort: <span class="highlight">${sortLabel}</span>`;

}

projectsCount.innerHTML = info;

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

if(currentSort==="az"){

    filteredProjects.sort(function(a,b){

        return a.title.localeCompare(b.title);

    });

}

if(currentSort==="za"){

    filteredProjects.sort(function(a,b){

        return b.title.localeCompare(a.title);

    });

}


if (animate) {

    animateProjects(filteredProjects);

} else {

    renderProjects(filteredProjects, projectsGrid);

    enableProjectCardClick();

}

}