// Завдання: Розробка кешувального проксі-сервера за допомогою Service Worker

// Мета: Розробити кешувальний проксі-сервер з використанням Service Worker для оптимізації мережевих запитів до різних API.

// Технічні вимоги:

// Настройка Service Worker:

// Ініціалізуйте та зареєструйте Service Worker у вашому додатку.

// Реалізуйте обробку подій fetch у Service Worker для перехоплення всіх вихідних HTTP запитів.

// Розробка алгоритму кешування:

// Створіть алгоритм, який визначає, коли відповідь на запит слід кешувати, і коли її слід повторно використовувати.

// Використовуйте Cache API для зберігання і керування кешованими відповідями.

// Розробіть стратегію кешування,
//  яка оптимально підходить для вашого додатка (наприклад, Cache First, Network First, Stale While Revalidate).

// Обробка запитів та відповідей:

// Реалізуйте логіку для перевірки наявності даних у кеші перед відправленням запиту до мережі.

// Забезпечте можливість обробки помилок та таймаутів запитів,
// щоб забезпечити стабільність додатка навіть при нестабільному інтернет-з'єднанні.

// Додаткові завдання для розширення проекту:

// Динамічне управління кешем: Розробіть інтерфейс для динамічного управління ресурсами у кеші
// (додавання, видалення, оновлення).

// Аналітика використання кешу: Впровадіть збір метрик для аналізу ефективності кешування,
// наприклад, відсоток запитів, обслужених з кешу.

// Service Workers і Web Workers – це фонові скрипти,
// які дозволяють виконувати задачі без блокування основного потоку браузера.
// Service Workers працюють з кешуванням та офлайн-доступом, а Web Workers – з важкими обчисленнями.

const registerBtn = document.getElementById("sw-register");
const unregisterBtn = document.getElementById("sw-unregister");
const loadUsersBtn = document.getElementById("load-users");
let swInstance; // will save instances of Service workers

const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      swInstance = await navigator.serviceWorker.register("sw.js");
      console.log(`sw is registered, entry path ${swInstance.scope}`);
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

const renderUsers = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    const users = data.users;
    if (users.length) {
      const count = document.createElement("p");
      count.textContent = `Users: ${users.length}`;
      document.body.appendChild(count);
    }
  } catch (e) {
    console.log(`Error while loading users ${e}`);
  }
};

const setServiceWorkerInstance = () => {
  navigator.serviceWorker.ready.then(function (sw) {
    if (sw.active) {
      swInstance = sw;
    }
  });
};
const unregisterServiceWorker = async () => {
  try {
    const isUnregisted = await swInstance.unregister();
    console.log(`sw is unregistered: ${isUnregisted}`);
  } catch (error) {
    console.error(`Unregistered failed with ${error}`);
  }
};

window.onload = () => {
  setServiceWorkerInstance();
};
registerBtn.addEventListener("click", registerServiceWorker);
unregisterBtn.addEventListener("click", unregisterServiceWorker);
loadUsersBtn.addEventListener("click", renderUsers);
loadUsersBtn.addEventListener("click", renderUsers);
