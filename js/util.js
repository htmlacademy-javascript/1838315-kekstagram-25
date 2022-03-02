import { sms, names } from './data.js';
// получение на вход двух чисел,макисмума и минимума, вывод случайного значения
//формула нахождения числа взята из https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = (min = '1', max = '2') => {

  if (min >= 0 && max >= 0 && min < max) {

    return Math.random() * (max - min) + min;
  }
};

// Функция для проверки максимальной длины строки.
// Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.

const checkStringLength = (string = 'строка', maxLength = '140') => string.length <= maxLength;

const createComment = () => ({
  id: getRandomNumber(1, 1000000),
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: sms[getRandomNumber(0, 5)],
  name: names[getRandomNumber(0, 6)]
});

const createObject = () => ({
  id: getRandomNumber(1, 25),
  url: `img/${getRandomNumber(1, 25)}.jpg`,
  description: 'Строка, описание фотографии',
  likes: getRandomNumber(15, 200),
  comments: Array.from({ length: getRandomNumber(1, 100) }, createComment)
});

export { getRandomNumber, checkStringLength, createObject };
