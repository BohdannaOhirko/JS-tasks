// Завдання:

// Створіть масив з трьох імен. Додайте нове ім'я до кінця масиву і виведіть його.

const names = ["Nina", "Ben", "Mike"];
names.push("Lilya");
console.log(names);

// Видаліть перший елемент масиву і виведіть його.
names.shift();
console.log(names);

// Знайдіть індекс елемента зі значенням "John" в масиві ["Mike", "John", "Sara"].
const arr = ["Mike", "John", "Sara"];
let indexName = arr.indexOf("John");
console.log(indexName);
