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

const form = document.getElementById("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const errorElement = document.querySelector(".error__output");
const successElement = Array.from(
  document.querySelectorAll(".success__output")
);
const inputArray = Array.from(document.querySelectorAll(".input"));
inputArray.forEach((element) => {
  const giveHint = (e) => {
    const enteredInput = e.target.getAttribute("type");
    const hints = {
      text: "name",
      email: "email",
      password: "password",
    };

    successElement.forEach((e) => {
      e.innerHTML =
        hints[enteredInput] !== undefined
          ? "Please enter your " + `${hints[enteredInput]}`
          : "";
    });
  };
  inputArray.forEach((element) => {
    element.addEventListener("focus", (e) => {
      e.preventDefault();
      giveHint(e);
    });
    element.addEventListener("blur", (e) => {
      e.preventDefault();
      successElement.forEach((e) => {
        e.innerHTML = "";
      });
    });
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
//підказки одночасно виникають у всіх віконцях, чи це емейл, чи це пароль, а треба, щоб відповідно до натиснутого елемента, пробувала таргет, не працює
const validateInputs = () => {
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
  // if (passwordInput.value.length < 6) {
  //   displayError(passwordInput, "Enter your password");
  // } else {
  //   setSuccess(passwordInput);
  // }
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

passwordInput.addEventListener("focus", function (e) {
  e.preventDefault();
  validatePassword();
});

passwordInput.addEventListener("blur", function (e) {
  e.preventDefault();
  //як видалити функцію підказки для паролю
});

//не працює валідація
const validatePassword = (element) => {
  let regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8}$/;
  const validationOutput = document.querySelector("#validation__output");
  validationOutput.innerText =
    "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, and one underscore, and it must be 8 characters long.";
  if (passwordInput.value.match(regex)) {
    element.classList.remove("invalid");
    element.classList.add("valid");
  } else {
    element.classList.remove("valid");
    element.classList.add("invalid");
  }
};
