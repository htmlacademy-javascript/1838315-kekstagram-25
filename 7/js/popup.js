import { createRandomAvatar, createRandomName, createRandomSms } from './data.js';

const bigImgBlock = document.querySelector('.big-picture__img');
const bigImgSrc = bigImgBlock.querySelector('img');
const popup = document.querySelector('.big-picture');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const commentsStorage = document.querySelector('.social__comments');
const imgDescription = document.querySelector('.social__caption');
const commentsSocialCount = popup.querySelector('.social__comment-count');
const commenstLoader = document.querySelector('.comments-loader');
const bodyElement = document.body;

const fillPopup = function (src, comments, likes, description) {
  popup.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  bigImgSrc.src = src;
  likesCount.textContent = String(likes);
  commentsCount.textContent = comments.length;
  imgDescription.textContent = description;
  for (let i = 0; i < comments.length; i++) { // создание комментариев
    const li = document.createElement('li');
    li.classList.add('social__comment');
    commentsStorage.append(li);
    const img = document.createElement('img');
    img.classList.add('social__picture');
    img.src = createRandomAvatar();
    img.alt = createRandomName();
    img.width = 35;
    img.height = 35;
    li.append(img);
    const p = document.createElement('p');
    p.classList.add('.social__text');
    p.textContent = createRandomSms();
    li.append(p);
  }
  commentsSocialCount.classList.add('hidden');
  commenstLoader.classList.add('hidden');
};

export { fillPopup };
