// получение на вход двух чисел,макисмума и минимума, вывод случайного значения
//формула нахождения числа взята из https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = (min = '1', max = '2') => {

  if (min >= 0 && max >= 0 && min < max) {

    return Math.floor(Math.random() * (max - min) + min);

  }
};

// Функция для проверки максимальной длины строки.
// Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.

const checkStringLength = (string = 'строка', maxLength = '140') => string.length <= maxLength;

export { getRandomNumber, checkStringLength };
