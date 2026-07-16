const contactForm = document.getElementById("contact-form");

if (contactForm) {

    const nameInput = document.getElementById("name");

    const emailInput = document.getElementById("email");

    const subjectInput = document.getElementById("subject");

    const messageInput = document.getElementById("message");

    const submitButton = contactForm.querySelector("button");

    const formStatus = document.querySelector(".form-status");

    const buttonHTML = submitButton.innerHTML;

    function isValidEmail(email) {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailPattern.test(email);

    }

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        formStatus.textContent = "";

        formStatus.className = "form-status";

        const name = nameInput.value.trim();

        const email = emailInput.value.trim();

        const subject = subjectInput.value.trim();

        const message = messageInput.value.trim();

        if (!name || !email || !subject || !message) {

            formStatus.textContent = "Please fill in all fields.";

            formStatus.className = "form-status error";

            return;

        }

        if (!isValidEmail(email)) {

            formStatus.textContent = "Please enter a valid email.";

            formStatus.className = "form-status error";

            return;

        }

        function showStatus(message, type) {

    formStatus.textContent = message;

    formStatus.className = `form-status ${type}`;

}

        submitButton.disabled = true;

        submitButton.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Sending...
        `;

        setTimeout(function () {

            formStatus.textContent = "Message sent successfully.";

            formStatus.className = "form-status success";

            contactForm.reset();

            submitButton.disabled = false;

            submitButton.innerHTML = buttonHTML;

        }, 2000);

    });

}