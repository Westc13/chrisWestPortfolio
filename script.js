// Hamburger menu rom codepen.io
//https://codepen.io/sitanotern1337/pen/xyQppZ?editors=0110
const hamburger = document.querySelector(".hamburger");
const slideOutUl = document.querySelector(".mobileNavBar ul");
const burgerBox = document.querySelector(".burgerContainer");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("isactive");
  burgerBox.classList.toggle("active");
});
slideOutUl.addEventListener("click", function () {
  hamburger.classList.toggle("isactive");
  burgerBox.classList.toggle("active");
});

// Project slides carousel
// learned from https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Typerwriter effect learned from youtube
// https://www.youtube.com/watch?v=9T4YTUeDgwU&t=8s
function typeWriterEffect() {
  const words = [
    "creative",
    "passionate",
    "curious",
    "tenacious",
    "articulate",
  ];

  let wordCount = 0;
  let letterCount = 0;

  let currentText = "";
  let currentWord = "";

  let timeOut = 400;

  let isDeleting = false;

  function type() {
    if (wordCount === words.length) {
      wordCount = 0;
    }
    currentWord = words[wordCount];

    if (isDeleting) {
      currentText = currentWord.slice(0, --letterCount);
    } else {
      currentText = currentWord.slice(0, ++letterCount);
    }

    document.querySelector(".typewrite").textContent = currentText;

    timeOut = isDeleting ? 200 : 400;

    if (!isDeleting && currentText.length === currentWord.length) {
      timeOut = 2000;
      isDeleting = true;
    } else if (isDeleting && currentText.length === 0) {
      timeOut = 1000;
      isDeleting = false;
      wordCount++;
    }
    setTimeout(type, timeOut);
  }
  type();
}
typeWriterEffect();
