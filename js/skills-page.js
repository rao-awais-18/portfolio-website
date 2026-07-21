// DOM
// const skillsGrid = document.getElementById("skills-grid");

const skillsCount = document.getElementById("skills-count");

const skillsFilters = document.getElementById("skills-filters");

const searchInput = document.getElementById("skills-search-input");

const sortSkills = document.getElementById("sort-skills");

const resetSkills = document.getElementById("reset-skills");

const heroContainer = document.getElementById("skills-hero");

// state variables
let currentCategory = "All";

let currentSearch = "";

let currentSort = "default";

let searchTimeout;


function renderSearch() {

    const searchContainer = document.getElementById("skills-search-bar");

    searchContainer.innerHTML = `

        <div class="search-box">

            <i class="fa-solid fa-magnifying-glass"></i>

            <input

                type="text"

                id="skills-search-input"

                placeholder="Search skills..."

            >

        </div>

    `;

}

function enableSearch() {

    const input = document.getElementById("skills-search-input");

    input.addEventListener("input", function () {

        currentSearch = this.value.trim();

        clearTimeout(searchTimeout);

        searchTimeout = setTimeout(function () {

            updateSkills();

        }, 250);

    });

}

// temp function to clear console errors
function updateSkills() {

    renderSkills(

        skills,

        skillsGrid

    );

}

if (skillsGrid && typeof skills !== "undefined") {

    renderSearch();

    enableSearch();

    updateSkills();

}