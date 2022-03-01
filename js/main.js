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

const someObject = Array.from({ length: 25 }, createObject);
