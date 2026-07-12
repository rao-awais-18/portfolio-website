const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");

        const cards = entry.target.querySelectorAll(
          ".skill-card, .project-card, .feature-card",
        );

        cards.forEach(function (card, index) {
          card.style.transitionDelay = `${index * 100}ms`;
        });

        entry.target.style.willChange = "auto";
        observer.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.15,

    rootMargin: "0px 0px -60px 0px",
  },
);

revealElements.forEach(function (element) {
  observer.observe(element);
});
