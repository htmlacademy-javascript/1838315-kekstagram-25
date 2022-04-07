import { checkStringLength } from './util.js';

const form = document.querySelector('.img-upload__form');
const formInput = document.querySelector('#upload-file');
const closeFormButton = document.querySelector('#upload-cancel');
const hashtaginput = document.querySelector('.text__hashtags');
const formTextarea = document.querySelector('.text__description');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{0,19}$/;

const onWindowFormKeydown = (e) => { // при нажатии на ескейп форма закрывается
  if (e.key === 'Escape') {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    document.body.classList.remove('modoal-open');
    window.removeEventListener('keydown', onWindowFormKeydown);
    formInput.value = '';
  }
};

const onFormInputFocus = () => { // при фокусе на input ескейп не работает
  window.removeEventListener('keydown', onWindowFormKeydown);
};

const onFormInputBlur = () => { // при снятии фокуса с input на ескейп добавляется слушатель
  window.addEventListener('keydown', onWindowFormKeydown);
};

const onInputClick = () => { // при клике на лого появляется форма
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  window.addEventListener('keydown', onWindowFormKeydown);
};

const onCloseButtonClick = () => { // при клике на кнопку закрытия формы она закрывается
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modoal-open');
  window.removeEventListener('keydown', onWindowFormKeydown);
  formInput.value = '';
};
// слушатели на input
hashtaginput.addEventListener('focus', onFormInputFocus);
hashtaginput.addEventListener('blur', onFormInputBlur);
// слушатели на Textarea
formTextarea.addEventListener('focus', onFormInputFocus);
formTextarea.addEventListener('blur', onFormInputBlur);

formInput.addEventListener('change', onInputClick);

closeFormButton.addEventListener('click', onCloseButtonClick);

const pristine = new Pristine(form);

const validateTextarea = function (value) { // проверка textarea на длинну
  return !value.length || (checkStringLength(value, 140));
};

const validateNickname = function (value) { // проверка инпута на хэштеги и длину
  return !value.length || (checkStringLength(value, 40) && re.test(value));
};

pristine.addValidator(hashtaginput, validateNickname);
pristine.addValidator(formTextarea, validateTextarea);

form.addEventListener('submit', (evt) => {

  const isValid = pristine.validate(evt);
  if (!isValid) {
    evt.preventDefault();
    console.log('Форма невалидна');
  }
  if (isValid) {
    console.log('Можно отправлять');
  }
});


