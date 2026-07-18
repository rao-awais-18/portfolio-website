const searchInput = document.getElementById("project-search");
const projectsGrid = document.getElementById("projects-grid");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        console.log(this.value);

    });

}



if (projectsGrid){

    renderProjects(projects, projectsGrid);

    enableProjectCardClick();

}