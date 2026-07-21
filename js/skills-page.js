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

function updateSkills(animate = false) {

    let filteredSkills = skills.filter(function (skill) {

        const matchesCategory =

            currentCategory === "All" ||

            skill.category === currentCategory;

        const search = (currentSearch || "").toLowerCase();

        const matchesSearch =

            (skill.name || "")
                .toLowerCase()
                .includes(search)

            ||

            (skill.description || "")
                .toLowerCase()
                .includes(search)

            ||

            (skill.category || "")
                .toLowerCase()
                .includes(search)

            ||

            skill.technologies.some(function (tech) {

                return tech.toLowerCase().includes(search);

            });

        return matchesCategory && matchesSearch;

    });

    // skills count
    let info = `Showing <strong>${filteredSkills.length}</strong> Skill${filteredSkills.length === 1 ? "" : "s"}`;

if (currentCategory !== "All") {

    info += ` • Category: <span class="highlight">${currentCategory}</span>`;

}

if (currentSearch) {

    info += ` • Search: <span class="highlight">"${currentSearch}"</span>`;

}

if (currentSort !== "default") {

    const sortLabel = currentSort === "az"

        ? "A–Z"

        : "Z–A";

    info += ` • Sort: <span class="highlight">${sortLabel}</span>`;

}

skillsCount.innerHTML = info;

    /* ---------- Sorting ---------- */

    if (currentSort === "az") {

        filteredSkills.sort(function (a, b) {

            return a.name.localeCompare(b.name);

        });

    }

    if (currentSort === "za") {

        filteredSkills.sort(function (a, b) {

            return b.name.localeCompare(a.name);

        });

    }

    // empty state management for no results of search
    if (filteredSkills.length === 0) {

    skillsGrid.innerHTML = `

        <div class="empty-state">

            <i class="fa-solid fa-code"></i>

            <h3>No Skills Found</h3>

            <p>

                Try changing the search keyword or selecting another category.

            </p>

        </div>

    `;

    return;

}

    /* ---------- Render ---------- */

    renderSkills(

        filteredSkills,

        skillsGrid

    );

}

if (skillsGrid && typeof skills !== "undefined") {

    renderSearch();

    enableSearch();

    updateSkills();

}