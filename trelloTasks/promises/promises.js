//Завдання
// Створіть проміс, який резолвиться через 2 секунди з повідомленням "Promise resolved!".

let promiseResolve = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Promise resolved!"), 2000);
});

// Використовуйте then для виведення повідомлення, коли проміс буде резолвлено.

promiseResolve.then(console.log);

// Створіть проміс, який відхиляється з помилкою "Promise rejected!" та обробіть цю помилку за допомогою catch.
let promiseReject = new Promise((_, reject) =>
  reject("Promise rejected!")
).catch(console.log);

// or

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise resolved!");
    reject("Promise rejected!");
  }, 2000);
})
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
