// DOM
// const skillsGrid = document.getElementById("skills-grid");

const skillsCount = document.getElementById("skills-count");

const skillsFilters = document.getElementById("skills-filters");

const searchInput = document.getElementById("skills-search-input");

const sortSkills = document.getElementById("sort-skills");

const resetSkills = document.getElementById("reset-skills");

const heroContainer = document.getElementById("skills-hero");

const skillsHeroCount = document.getElementById("skills-count-number");

const categoriesHeroCount = document.getElementById("categories-count");



// state variables
let currentCategory = "All";

let currentSearch = "";

let currentSort = "default";

let searchTimeout;

// search bar
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

            <button class="clear-search" type="button" aria-label="Clear Search">

    <i class="fa-solid fa-xmark"></i>

</button>

        </div>

    `;

}

function enableSearch() {

    const input = document.getElementById("skills-search-input");
    const clearBtn = input.parentElement.querySelector(".clear-search");

    input.addEventListener("input", function () {
        clearBtn.classList.toggle("show", this.value.trim() !== "");

        currentSearch = this.value.trim();

        clearTimeout(searchTimeout);

        searchTimeout = setTimeout(function () {

            updateSkills();

        }, 250);

    });

    clearBtn.addEventListener("click", function () {

    input.value = "";

    currentSearch = "";

    clearBtn.classList.remove("show");

    input.focus();

    updateSkills();

});

}

// clear search
function enableClearSearch(inputId) {

    const input = document.getElementById(inputId);

    const clearBtn = input.parentElement.querySelector(".clear-search");

    clearBtn.addEventListener("click", function () {

        input.value = "";

        input.focus();

        clearBtn.classList.remove("show");

    });

}

// render filters
function renderFilters() {

    const categories = [

        "All",

        ...new Set(

            skills.map(function (skill) {

                return skill.category;

            })

        )

    ];

    let buttons = "";

    categories.forEach(function(category){

    let count;

    if(category === "All"){

        count = skills.length;

    }else{

        count = skills.filter(function(skill){

            return skill.category === category;

        }).length;

    }

    buttons += `

        <button
            class="filter-btn ${category === currentCategory ? "active" : ""}"
            data-category="${category}"
        >

            <span>${category}</span>

            <span class="filter-count">${count}</span>

        </button>

    `;

});

    skillsFilters.innerHTML = buttons;

}

// filter events
function enableFilters() {

    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            currentCategory = this.dataset.category;

            renderFilters();

            updateSkills(true);

        });

    });

}

// sorting
function enableSorting() {

    if (!sortSkills) return;

    sortSkills.addEventListener("change", function () {

        currentSort = this.value;

        updateSkills(true);

    });

}


// reset button functionality
function enableReset() {

    if (!resetSkills) return;

    resetSkills.addEventListener("click", function () {

        currentCategory = "All";

        currentSearch = "";

        currentSort = "default";

        document.getElementById("skills-search-input").value = "";

        sortSkills.value = "default";

        renderFilters();

        updateSkills(true);

    });

}

// amination
function animateSkills(filteredSkills) {

    renderSkills(filteredSkills, skillsGrid);

    const cards = document.querySelectorAll(".skill-card");

    cards.forEach(function (card, index) {

        card.style.animationDelay = `${index * 45}ms`;

        card.classList.add("animate-card");

    });

}

// skills and categories count numbers for hero section!
skillsHeroCount.textContent = skills.length;

categoriesHeroCount.textContent = [

    ...new Set(

        skills.map(skill => skill.category)

    )

].length;


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

    if (animate) {

    animateSkills(filteredSkills);

} else {

    renderSkills(filteredSkills, skillsGrid);

}

enableFilters();

}

// SCROLL HINT FADE OUT LOGIC
const scrollHint = document.querySelector(".scroll-hint");

function toggleScrollHint(){

    if(!scrollHint) return;

    if(window.scrollY > 120){

        scrollHint.classList.add("hide");

    }else{

        scrollHint.classList.remove("hide");

    }

}

window.addEventListener("scroll", toggleScrollHint);

toggleScrollHint();
// SCROLL HINT LOGIC ---





if (skillsGrid && typeof skills !== "undefined") {

    renderSearch();

renderFilters();

enableSearch();

enableFilters();

enableSorting();

enableReset();

updateSkills();

}