import { getRandomNumber } from './util.js';

const sms = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
// Массив с сообщениями для фотографии
const names = [
  'Артем', 'Дмитрий', 'Алексей', 'Егор', 'Лиза', 'Михаил', 'Александр', 'Света'
];

//массив с именами

const createRandomAvatar = () => {
  const i = getRandomNumber(1, 7);
  return `img/avatar-${i}.svg`;
};

const createRandomName = () => {
  const i = getRandomNumber(1, 8);
  return names[i];
};
const createRandomSms = () => {
  const i = getRandomNumber(1, 6);
  return sms[i];
};

const createComment = () => ({
  id: getRandomNumber(1, 1000000),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: sms[getRandomNumber(0, 5)],
  name: names[getRandomNumber(0, 6)]
});

const createObject = () => ({
  id: getRandomNumber(1, 25),
  url: `photos/${getRandomNumber(1, 25)}.jpg`,
  description: 'Строка, описание фотографии',
  likes: getRandomNumber(15, 200),
  comments: Array.from({ length: getRandomNumber(1, 100) }, createComment)
});

const SIMILAR_OBJECT_COUNT = 4;

const createArrayObject = () => Array.from({ length: SIMILAR_OBJECT_COUNT }, createObject);

export { createArrayObject, createRandomAvatar, createRandomName, createRandomSms };

