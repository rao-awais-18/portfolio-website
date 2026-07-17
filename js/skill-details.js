// ==========================
// Get Skill ID From URL
// ==========================

const urlParams = new URLSearchParams(window.location.search);

const skillId = urlParams.get("id");

// ==========================
// Find Skill
// ==========================

const selectedSkill = skills.find(function (skill) {

    return skill.id === skillId;

});

console.log(selectedSkill);

// ==========================
// Invalid Skill
// ==========================

if (!selectedSkill) {

    document.body.innerHTML = `

        <h1>

            Skill not found.

        </h1>

    `;

    throw new Error("Invalid Skill ID");

}