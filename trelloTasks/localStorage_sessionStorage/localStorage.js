// Завдання: Розробка мульти-табової синхронізації стану за допомогою LocalStorage/SessionStorage
// Мета: Розробити систему, яка дозволяє синхронізувати стан користувача між кількома вкладками браузера в реальному часі, використовуючи LocalStorage та/або SessionStorage.

// Технічні вимоги:
// Ініціалізація стану:

// Створіть простий об'єкт стану, який може включати користувацькі налаштування, такі як тема інтерфейсу, мовні налаштування, або статус логіна.

// Ініціалізуйте цей стан у LocalStorage або SessionStorage при першому відкритті вкладки.

// Синхронізація стану між вкладками:

// Реалізуйте механізм, який слухає зміни у LocalStorage або SessionStorage (використовуючи події storage).

// При зміні даних у одній вкладці автоматично оновлюйте стан у всіх інших відкритих вкладках.

// Інтерфейс користувача:

// Розробіть простий інтерфейс користувача, де можна змінювати стан (наприклад, змінити тему або мову).

// Відобразіть актуальний стан у всіх вкладках браузера в реальному часі.

// Обробка помилок і обмежень:

// Забезпечте обробку помилок, наприклад, коли LocalStorage досягає ліміту квоти.

// Реалізуйте fallback для старіших браузерів, які можливо не підтримують LocalStorage або SessionStorage.

// Додаткові завдання для розширення проекту:
// Автоматичне видалення старих даних: Розробіть механізм для очищення застарілих або неактивних даних зі сховища.

// Захист даних: Впровадіть шифрування даних перед їх зберіганням у LocalStorage/SessionStorage для підвищення безпеки.

const stateUser = {
  language: "english",
  loginStatus: true,
};
localStorage.setItem("user", JSON.stringify(stateUser));

const body = document.body;
const toggle = document.querySelector("button");
const out = document.querySelector(".out");
let mode = "light";

window.addEventListener("storage", () => {
  body.classList.toggle("dark-mode");
  out.textContent = localStorage.getItem("user");
});

if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", mode);
} else {
  mode = localStorage.getItem("mode");
}
if (mode === "dark") {
  changeToggle(mode);
}
function changeToggle(newMode) {
  if (newMode === "dark") {
    body.className = "dark-mode";
    mode = "dark";
    toggle.title = "Змінити на світлу тему";
  } else {
    body.className = "";
    mode = "light";
    toggle.title = "Змінити на темну тему";
  }
  localStorage.setItem("mode", mode);
}
toggle.addEventListener("click", () => {
  if (mode === "light") {
    changeToggle("dark");
  } else {
    changeToggle("light");
  }
});
