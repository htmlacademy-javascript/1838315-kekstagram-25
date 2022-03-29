import { createArrayObject } from './data.js';

const similarMiniatureTemplate = document.querySelector('#picture').content.querySelector('.picture'); //темплейт
const similarMiniatureList = document.querySelector('.pictures'); // блок куда вставляю миниатюры

const similarMiniatur = createArrayObject(); // обьект с случайными данными

const similarListFragment = document.createDocumentFragment();
const Miniaturefucntion = function () {
  similarMiniatur.forEach(({ url, likes, comments }) => {
    const miniatureElement = similarMiniatureTemplate.cloneNode(true);
    miniatureElement.querySelector('.picture__img').src = url;
    miniatureElement.querySelector('.picture__likes').textContent = likes;
    miniatureElement.querySelector('.picture__comments').textContent = comments.length;
    similarListFragment.appendChild(miniatureElement); // Заполняю обьект и вставляю в docFragment
  });

  similarMiniatureList.appendChild(similarListFragment); // Вставляю из фрагмента в блок
};


export { Miniaturefucntion };
