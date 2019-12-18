const form = document.querySelector('.main__form');
const fieldWrapper = form.querySelector('.main__form-wrapper');
const generateBtn = fieldWrapper.querySelector('.main__button--token');
const submitBtn = form.querySelector('.main__button--submit');
const tokenField = fieldWrapper.querySelector('#token');
const fieldError = fieldWrapper.querySelector('.main__field-error');
const fieldErrorMessage = fieldError.querySelector('p');
tokenField.readOnly = true;
tokenField.required = true;

let startToken = '';

generateBtn.addEventListener('click', () => {
  if (tokenField.style.borderColor === 'red') {
    tokenField.style.borderColor = 'green';
  }

  const rand = () => {
    return Math.random().toString(36).substr(2); // remove `0.`
  };

  const token = () => {
    return rand() + rand(); // to make it longer
  };

  const userToken = token();

  tokenField.value = userToken;
  startToken = userToken;

  if (tokenField.value) fieldError.classList.add('hidden');

  generateBtn.disabled = true;
  return startToken;
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (!tokenField.value) {
    tokenField.style.borderColor = 'red';
    fieldErrorMessage.textContent = 'Сгенерируйте токен';
    fieldError.classList.remove('hidden');

    console.log('Форма не отправлена');
    return false;
  }

  if (startToken !== tokenField.value) {
    tokenField.style.borderColor = 'red';
    fieldErrorMessage.textContent = 'Ну что шутник. Исправляй давай';
    fieldError.classList.remove('hidden');
    generateBtn.disabled = false;
    submitBtn.disabled = false;

    console.log('Форма не отправлена');
    return false;
  }

  generateBtn.disabled = true;
  submitBtn.disabled = true;

  console.log('Форма отправлена');
});

submitBtn.addEventListener('click', () => {
  if (startToken === tokenField.value) {
    fieldError.classList.add('hidden');
    tokenField.style.borderColor = 'black';
  }
});
