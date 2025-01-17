// Завдання:

// Створіть інтерактивну форму реєстрації користувача.
// Форма повинна включати поля для імені, електронної пошти, та пароля.
//  Реалізуйте наступні функціональності:

// Валідація полів форми при натисканні кнопки "Submit".

// Відображення повідомлень про помилки під відповідними полями.

// Динамічне відображення підказок при фокусуванні на поле вводу.

// Відправка даних форми за допомогою події submit, якщо всі поля пройшли валідацію.

// Вимоги:

// Використовуйте події focus, blur, input та submit для управління взаємодією користувача.

// Забезпечте динамічну валідацію даних в полях форми.

// Відображайте та приховуйте повідомлення про помилки та підказки залежно від взаємодії користувача.
// const form = document.forms[0];
const form = document.getElementById("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const errorElement = document.querySelector(".error__output");
const successElement = document.querySelector(".success__output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
passwordInput.addEventListener("focus", () => {
  successElement.style.display = "block";
});
passwordInput.addEventListener("blur", () => {
  successElement.style.display = "block";
});

const validateInputs = () => {
  // let pattern = "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  if (nameInput.value === "" || nameInput.value == null) {
    displayError(nameInput, "Name is required!");
  } else {
    setSuccess(nameInput);
  }
  if (emailInput.value === "" || emailInput.value == null) {
    displayError(emailInput, "Email is required!");
  } else {
    setSuccess(emailInput);
  }
  if (passwordInput.value.length < 6) {
    displayError(passwordInput, "Enter your password");
  } else {
    setSuccess(passwordInput);
  }
};

const displayError = (element, msg) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error__output");
  errorDisplay.innerText = msg;
  element.classList.add("invalid");
  element.classList.remove("valid");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error__output");
  errorDisplay.innerText = "";
  element.classList.add("valid");
  element.classList.remove("invalid");
};

//Розібрати цей код!!!!
// passwordInput.onkeyup = function () {
//   // checking uppercase letters
//   let uppercaseRegex = /[A-Z]/g;
//   if (passwordInput.value.match(uppercaseRegex)) {
//       passwordMessageItems[1].classList.remove("invalid");
//       passwordMessageItems[1].classList.add("valid");
//   } else {
//       passwordMessageItems[1].classList.remove("valid");
//       passwordMessageItems[1].classList.add("invalid");
//   }

//   // checking lowercase letters
//   let lowercaseRegex = /[a-z]/g;
//   if (passwordInput.value.match(lowercaseRegex)) {
//       passwordMessageItems[0].classList.remove("invalid");
//       passwordMessageItems[0].classList.add("valid");
//   } else {
//       passwordMessageItems[0].classList.remove("valid");
//       passwordMessageItems[0].classList.add("invalid");
//   }

//   // checking the number
//   let numbersRegex = /[0-9]/g;
//   if (passwordInput.value.match(numbersRegex)) {
//       passwordMessageItems[2].classList.remove("invalid");
//       passwordMessageItems[2].classList.add("valid");
//   } else {
//       passwordMessageItems[2].classList.remove("valid");
//       passwordMessageItems[2].classList.add("invalid");
//   }

//   // Checking length of the password
//   if (passwordInput.value.length >= 8) {
//       passwordMessageItems[3].classList.remove("invalid");
//       passwordMessageItems[3].classList.add("valid");
//   } else {
//       passwordMessageItems[3].classList.remove("valid");
//       passwordMessageItems[3].classList.add("invalid");
//   }
// }
