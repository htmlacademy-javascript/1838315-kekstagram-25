import { createArrayObject } from './data.js';
import { fillPopup } from './popup.js';
const similarMiniatureTemplate = document.querySelector('#picture').content.querySelector('.picture'); //темплейт
const similarMiniatureList = document.querySelector('.pictures'); // блок куда вставляю миниатюры
const similarMiniatur = createArrayObject(); // обьект с случайными данными
const similarListFragment = document.createDocumentFragment();
const closeButton = document.querySelector('.big-picture__cancel');
const popup = document.querySelector('.big-picture');
const bodyElement = document.body;


const Miniaturefucntion = function () {


  similarMiniatur.forEach(({ url, likes, commentsLength, description }) => {
    const miniatureElement = similarMiniatureTemplate.cloneNode(true);
    miniatureElement.querySelector('.picture__img').src = url;
    miniatureElement.querySelector('.picture__likes').textContent = likes;
    miniatureElement.querySelector('.picture__comments').textContent = commentsLength;
    similarListFragment.appendChild(miniatureElement); // Заполняю обьект и вставляю в docFragment
    miniatureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      fillPopup(url, commentsLength, likes, description);
      closeButton.addEventListener('click', () => { // при нажатии кнопки появляется hidden и убирается modal-open
        bodyElement.classList.remove('modal-open');
        popup.classList.add('hidden');
      });
      miniatureElement.addEventListener('keydown', (e) => {
        if (e.key === 27) {
          bodyElement.classList.remove('modal-open');
          popup.classList.add('hidden');
        }
      });
    });
  });

  similarMiniatureList.appendChild(similarListFragment); // Вставляю из фрагмента в блок
};

export { Miniaturefucntion };
