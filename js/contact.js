const contactForm = document.getElementById("contact-form");

if (contactForm) {

    const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const subjectInput = document.getElementById("subject");

const messageInput = document.getElementById("message");

const submitButton = contactForm.querySelector("button");

const formStatus = document.querySelector(".form-status");

function isValidEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}

contactForm.addEventListener("submit", function (event) {

    const name = nameInput.value.trim();

const email = emailInput.value.trim();

const subject = subjectInput.value.trim();

const message = messageInput.value.trim();

if (

    !name ||

    !email ||

    !subject ||

    !message

) {

    alert("Please fill in all fields.");

    return;

}

if (!isValidEmail(email)) {

    alert("Please enter a valid email address.");

    return;

}

alert("Form validation successful.");
    event.preventDefault();

});



}