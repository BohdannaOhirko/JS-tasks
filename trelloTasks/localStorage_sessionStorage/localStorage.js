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

// https://github.com/vitaliysummer2022/js/tree/main/switchMode
// https://www.freecodecamp.org/news/use-local-storage-in-modern-applications/
// https://www.youtube.com/watch?v=Zrpy0B3dYJA
// https://javascript.org.ua/yak-sinhronizuvati-dani-mizh-kilkoma-vkladkami-brauzera-za-dopomogoyu-javascript/
const stateUser = {
  theme: "dark",
  language: "english",
  loginStatus: true,
};
localStorage.setItem("user", JSON.stringify(stateUser));
window.addEventListener("storage", () => {
  document.querySelector(".out").textContent = localStorage.getItem("user");
});
