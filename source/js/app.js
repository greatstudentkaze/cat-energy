const mainNav = document.querySelector('.main-nav'),
  mainNavButton = mainNav.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

mainNavButton.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--opened');
});
