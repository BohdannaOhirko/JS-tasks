// Завдання
// Створіть асинхронну функцію, яка повертає "Hello, World!" через 1 секунду.

async function greeting() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("Hello, World!"), 1000);
  });

  let result = await promise; // чекатиме, поки проміс не виконається (*)
  console.log(result);
}

// Викличте цю функцію і виведіть результат в консоль.
greeting();
// Використовуйте try/catch для обробки помилки в асинхронній функції, яка кидає помилку.
try {
  greeting(result);
} catch (err) {
  console.log("Це невалідний код, рушій його не зрозуміє");
}
