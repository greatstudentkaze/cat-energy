const mainNav = document.querySelector('.main-nav'),
  mainNavButton = mainNav.querySelector('.main-nav__toggle');

mainNavButton.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--opened');
});
