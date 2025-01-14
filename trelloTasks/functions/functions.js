// Завдання:

// Напишіть функцію, яка приймає два числа і повертає їх суму.
const sum = function (numb1, numb2) {
  if ((typeof numb1 === "number") & (typeof numb2 === "number")) {
    return numb1 + numb2;
  } else {
    return "Аргументи не є числами";
  }
};
console.log(sum(10, 7));
// Напишіть функцію, яка приймає рядок і повертає його в верхньому регістрі.

const doUpperLetters = function (str) {
  return typeof str === "string" ? str.toUpperCase() : "Аргумент не є рядком";
};
console.log(doUpperLetters("string"));

// Напишіть функцію, яка приймає масив чисел і повертає новий масив з квадратами цих чисел.
// 1.
const arr = [1, 2, 3, 4, 5, 6, 7];
const pow = function (arr) {
  arr = arr.map((el) => el ** 2);
  return arr;
};
console.log(pow(arr));

// 2.
// const pow = function (arr) {
//   for (let i in arr) {
//     arr[i] = arr[i] ** 2;
//   }
//   return arr;
// };
// console.log(pow(arr));
