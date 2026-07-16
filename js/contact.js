if (typeof emailjs !== "undefined") {
emailjs.init("wVUpBuwiwUeRdLO8Q"); // public key
}

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    // ==========================
    // Elements
    // ==========================

    const nameInput = document.getElementById("name");

    const emailInput = document.getElementById("email");

    const subjectInput = document.getElementById("subject");

    const messageInput = document.getElementById("message");

    const submitButton = contactForm.querySelector("button");

    const formStatus = document.querySelector(".form-status");

    const buttonHTML = submitButton.innerHTML;

    // ==========================
    // Helper Functions
    // ==========================

    function isValidEmail(email) {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailPattern.test(email);

    }

    function showStatus(message, type) {

        formStatus.textContent = message;

        formStatus.className = `form-status ${type}`;

    }

    function setButtonLoading() {

        submitButton.disabled = true;

        submitButton.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Sending...
        `;

    }

    function resetButton() {

        submitButton.disabled = false;

        submitButton.innerHTML = buttonHTML;

    }

   function showInputError(input) {

    input.classList.remove("input-success");

    input.classList.add("input-error");

}

function clearInputError(input) {

    input.classList.remove("input-error");

    input.classList.remove("input-success");

}

    // ==========================
    // Submit Event
    // ==========================

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        showStatus("", "");

        clearInputError(nameInput);

clearInputError(emailInput);

clearInputError(subjectInput);

clearInputError(messageInput);

        const name = nameInput.value.trim();

        const email = emailInput.value.trim();

        const subject = subjectInput.value.trim();

        const message = messageInput.value.trim();

        if (!name || !email || !subject || !message) {

            if (!name) {

    showInputError(nameInput);

}

if (!email) {

    showInputError(emailInput);

}

if (!subject) {

    showInputError(subjectInput);

}

if (!message) {

    showInputError(messageInput);

}


          showStatus("Please fill in all fields.", "error");

return;

        }

        if (!isValidEmail(email)) {

            showInputError(emailInput);

            showStatus("Please enter a valid email.", "error");

            return;

        }

        setButtonLoading();

emailjs.send(

    "service_2tpwbly",  // service id

    "template_nbjpv9o", // template id

    {

        name: name,

        email: email,

        subject: subject,

        message: message

    }

)

.then(function () {

    showStatus("Message sent successfully.", "success");

    contactForm.reset();

})

.catch(function () {

    showStatus("Something went wrong. Please try again.", "error");

})

.finally(function () {

    resetButton();

});

    });

[nameInput, emailInput, subjectInput, messageInput].forEach(function (input) {

    input.addEventListener("input", function () {

        showStatus("", "");

        if (input === emailInput) {

            if (emailInput.value.trim() === "") {

                clearInputError(emailInput);

            }

            else if (isValidEmail(emailInput.value.trim())) {

                clearInputError(emailInput);

            }

            else {

                showInputError(emailInput);

            }

        }

        else {

            clearInputError(input);

        }

    });

});

}