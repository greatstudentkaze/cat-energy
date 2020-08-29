const planForm = document.querySelector('.plan__form'),
  planFormSubmit = planForm.querySelector('.plan__submit'),
  requiredInputs = planForm.querySelectorAll('.js-required-input');

const isValidForm = () => {
  return [...requiredInputs].every(item => item.value.trim());
};

const checkInput = () => {
  requiredInputs.forEach(item => {
    if (!item.value.trim()) {
      item.classList.add('plan__input--invalid');
    } else {
      item.classList.remove('plan__input--invalid');
    }
  });
};

planForm.addEventListener('submit', evt => {
  if (!isValidForm()) {
    evt.preventDefault();
    checkInput();
    planForm.addEventListener('input', checkInput);

    planFormSubmit.classList.remove('plan__submit--error');
    planFormSubmit.offsetWidth = planFormSubmit.offsetWidth;
    planFormSubmit.classList.add('plan__submit--error');
  }
});
