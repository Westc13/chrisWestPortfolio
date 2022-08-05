// Hamburger menu rom codepen.io
//https://codepen.io/sitanotern1337/pen/xyQppZ?editors=0110
const hamburger = document.querySelector('.hamburger');
const hiddenNav = document.querySelector('.navBar');
const burgerBox = document.querySelector('.burgerContainer');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('isactive');
    hiddenNav.classList.toggle('active');
});

// Project slides carousel

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}


// Typewriter effect learned from codepen.io
// https://codepen.io/Danielgroen/pen/VeRPOq
// document.addEventListener('DOMContentLoaded', function (event) {
//     const dataText = [
//         'Curious.', 'Creative.', 'Confident.', 'Passionate.', 'Tenacious.'
//     ];
//     function typeWriter(text, i, fnCallback) {
//         if (i < (text.length)) {
//             document.querySelector('h2').innerText = text.substring(0, i + 1) + `<span aria-hidden='true'></span>`;

//             setTimeout(function () {
//                 typeWriter(text, i + 1, fnCallback)
//             }, 100);
            
//         } else if (typeOf fnCallback == 'function') {
//     setTimeout(fnCallback, 700);
//         }
//     }
// function startTextAnimation(i) {
//     if (typeof dataText[i] == 'undefined') {
//         setTimeout(function () {
//             startTextAnimation(0);
//         }, 20000);
//     }
//     if (i < dataText[i].length) {
//         typeWriter(dataText[i], 0, function () {
//             startTextAnimation(i + 1);
//         });
//     }
// }
// startTextAnimation(0);
// });