import { createArrayObject } from './data.js';

const similarMiniatureTemplate = document.querySelector('#picture').content.querySelector('.picture'); //темплейт
const similarMiniatureList = document.querySelector('.pictures'); // блок куда вставляю миниатюры

const similarMiniatur = createArrayObject(); // обьект с случайными данными

const similarListFragment = document.createDocumentFragment();

similarMiniatur.forEach(({ url, likes, comments }) => {
  const MiniatureElement = similarMiniatureTemplate.cloneNode(true);
  MiniatureElement.querySelector('.picture__img').src = url;
  MiniatureElement.querySelector('.picture__likes').textContent = likes;
  MiniatureElement.querySelector('.picture__comments').textContent = comments.length;
  similarListFragment.appendChild(MiniatureElement); // Заполняю обьект и вставляю в docFragment
});

similarMiniatureList.appendChild(similarListFragment); // Вставляю из фрагмента в блок
