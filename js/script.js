const words = [
  "Full Stack Developer",

  "Flutter Developer",

  "Web Developer",

  "AI Enthusiast",
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {
  currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex);

    charIndex++;

    if (charIndex > currentWord.length) {
      isDeleting = true;

      setTimeout(typeEffect, 1200);

      return;
    }
  } else {
    typingText.textContent = currentWord.substring(0, charIndex);

    charIndex--;

    if (charIndex < 0) {
      isDeleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }

      charIndex = 0;
    }
  }

  setTimeout(typeEffect, isDeleting ? 70 : 120);
}

typeEffect();
