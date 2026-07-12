function createFooter() {
  return `
<div class="container">
        <div class="footer-grid">
          <div class="footer-about">
            <h3>Rao Awais</h3>

            <p>
              Building responsive websites, modern web applications, Flutter
              apps and AI-powered solutions with clean code, great performance
              and user-focused design.
            </p>
          </div>

          <div class="footer-links">
            <h3>Quick Links</h3>

            <ul>
              <li><a href="index.html">Home</a></li>

              <li><a href="about.html">About</a></li>

              <li><a href="projects.html">Projects</a></li>

              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>

          <div class="footer-contact">
            <h3>Get In Touch</h3>

            <div class="footer-social">
              <a
                href="https://github.com/rao-awais-18"
                target="_blank"
                aria-label="GitHub"
                title="Visit My GitHub"
              >
                <i class="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/ali-awais-cs"
                aria-label="LinkedIn"
                title="Visit My LinkedIn"
                target="_blank"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>

              <a
                href="mailto:raoawais.dev@gmail.com"
                aria-label="Email"
                title="Write an Email"
                target="_blank"
              >
                <i class="fa-solid fa-envelope"></i>
              </a>
            </div>

            <div class="footer-contact-info">
              <p>
                <i class="fa-solid fa-envelope"></i>
                raoawais.dev@gmail.com
              </p>

              <p>
                <i class="fa-solid fa-location-dot"></i>
                Pakistan
              </p>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© <span id="year"></span> Rao Awais. All Rights Reserved.</p>

          <button id="backToTop">
            <i class="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>
    `;
}

function renderFooter() {
  const footerContainer = document.getElementById("footer-container");

  if (!footerContainer) {
    return;
  }

  footerContainer.innerHTML = createFooter();
}

renderFooter();

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}
