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

    // ==========================
    // Submit Event
    // ==========================

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        showStatus("", "");

        const name = nameInput.value.trim();

        const email = emailInput.value.trim();

        const subject = subjectInput.value.trim();

        const message = messageInput.value.trim();

        if (!name || !email || !subject || !message) {

            showStatus("Please fill in all fields.", "error");

            return;

        }

        if (!isValidEmail(email)) {

            showStatus("Please enter a valid email.", "error");

            return;

        }

        setButtonLoading();

        setTimeout(function () {

            showStatus("Message sent successfully.", "success");

            contactForm.reset();

            resetButton();

        }, 2000);

    });

}