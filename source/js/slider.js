const slider = document.querySelector('.slider'),
  sliderToggleBefore = slider.querySelector('.slider__toggle--before'),
  sliderToggleAfter = slider.querySelector('.slider__toggle--after'),
  sliderImageBefore = slider.querySelector('.slider__image--before'),
  sliderImageAfter = slider.querySelector('.slider__image--after'),
  sliderTrack = slider.querySelector('.slider__track'),
  sliderThumb = slider.querySelector('.slider__thumb');

sliderToggleBefore.addEventListener('click', () => {
  sliderImageAfter.style.display = 'none';
  sliderImageBefore.style.display = 'block';
  sliderThumb.style.marginLeft = '0';
});

sliderToggleAfter.addEventListener('click', () => {
  sliderImageBefore.style.display = 'none';
  sliderImageAfter.style.display = 'block';

  if (window.innerWidth >= 768) {
    sliderThumb.style.marginLeft = `calc(100% - ${sliderThumb.offsetWidth}px)`;
  } else {
    sliderThumb.style.marginLeft = '36px';
  }
});
