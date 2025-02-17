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

// Ініціалізація нашого  стану
// Створюємо об’єкт, який містить, наприклад, тему (світлу/темну), мову та статус логіна.
// При завантаженні сторінки перевіряємо, чи є дані у localStorage/sessionStorage. Якщо ні – ініціалізуємо їх.
// Використовуємо localStorage для збереження стану, щоб він зберігався між перезапусками браузера.

const defaultState = {
  theme: "light",
  languages: ["en", "ua", "pl"],
  defaultLanguage: "en",
  isLoggedIn: false,
};
localStorage.setItem("defaultState", JSON.stringify(defaultState.languages));

const btnLang = document.querySelector("#btn");
const text = document.querySelector("#textLang");
const languageSelector = document.querySelector("#select-language");
const btnClear = document.querySelector("#btn2");
btnLang.addEventListener("click", (e) => {
  text.textContent = localStorage.getItem("languages");
  const savedLanguage = localStorage.getItem("languages");
  setLanguage(savedLanguage);
  saveLanguages(e.target.value);
});
languageSelector.addEventListener("change", (e) => {
  const selectedLanguage = e.target.value;
  setLanguage(selectedLanguage);
});
btnClear.addEventListener("click", () => {
  clearStorage();
});

function setLanguage(lang) {
  if (defaultState.languages.includes(lang)) {
    console.log(`${lang}`);
    localStorage.setItem("languages", lang);
  } else {
    console.log(`${defaultState.defaultLanguage}`);
    localStorage.setItem("languages", defaultState.defaultLanguage);
  }
}

// Обробляємо випадок перевищення його через try catch

function saveLanguages() {
  try {
    let languages = defaultState.languages;
    localStorage.setItem("selectedLanguage", languages);
    console.log("languages saved");
    return true;
  } catch (e) {
    if (e.name === "QuotaExceededError") {
      console.error("limit is exceeded");
    } else {
      console.error("error", e);
    }
    return false;
  }
}

// Очистити сховище
function clearStorage() {
  const languages = defaultState.languages;
  const selectLang = Array.from(languageSelector.options).map(
    (option) => option.value
  );
  for (key of languages) {
    if (selectLang.includes(key)) {
      setTimeout(() => {
        localStorage.removeItem("languages");
        console.log("localstorage is cleared", key);
      }, 1000);
    } else {
      console.log("try again");
    }
  }
}
