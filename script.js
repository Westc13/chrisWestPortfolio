// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const hiddenNav = document.querySelector('.navBar');
const burgerBox = document.querySelector('.burgerContainer');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('isactive');
    hiddenNav.classList.toggle('active');
});