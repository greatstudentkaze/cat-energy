const mainNav = document.querySelector('.main-nav'),
  mainNavButton = mainNav.querySelector('.main-nav__toggle'),
  slider = document.querySelector('.slider'),
  sliderToggleBefore = slider.querySelector('.slider__toggle--before'),
  sliderToggleAfter = slider.querySelector('.slider__toggle--after'),
  sliderImageBefore = slider.querySelector('.slider__image--before'),
  sliderImageAfter = slider.querySelector('.slider__image--after'),
  sliderTrack = slider.querySelector('.slider__track'),
  sliderThumb = slider.querySelector('.slider__thumb');

mainNav.classList.remove('main-nav--nojs');

mainNavButton.addEventListener('click', () => {
  mainNav.classList.toggle('main-nav--opened');
});

sliderToggleBefore.addEventListener('click', () => {
  sliderImageAfter.style.display = 'none';
  sliderImageBefore.style.display = 'block';
  sliderThumb.style.marginLeft = '0';
});

sliderToggleAfter.addEventListener('click', () => {
  sliderImageBefore.style.display = 'none';
  sliderImageAfter.style.display = 'block';
  sliderThumb.style.marginLeft = '35px';
});
