// получение на вход двух чисел,макисмума и минимума, вывод случайного значения
//формула нахождения числа взята из https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomNumber = (min, max) => {

  if(min >= 0 && max >= 0) {

    return Math.random() * (max - min) + min;
  }
  else {
    return 'введенные числа меньше 0';
  }
};

// Функция для проверки максимальной длины строки.
// Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.

const getStringLength = (string, maxLength) => {
  if(string.length > maxLength) {
    return true;
  }
  else {
    return false;
  }
};

getRandomNumber(1,10);
getStringLength('Привет, я строка, я не более 140 симвлолв', 140);
