// Завдання

// Реалізуйте систему бронювання номерів у готелі.
// Вона повинна дозволяти створювати номери, бронювати номери і виводити інформацію про заброньовані номери.
// Використовуйте правильне прив'язування контексту this в методах класу.

// Підказка:

// Використовуй bind, call, або apply для прив'язування контексту.

const user = {
  name: "Alice",
  bookings: [],
  bookRoom(roomNumber, price, checkIn, checkOut) {
    const booking = {
      roomNumber,
      price,
      checkIn,
      checkOut,
    };
    this.bookings.push(booking);
    console.log(`Room ${roomNumber} booked for ${this.name} at ${price}$`);
    return this;
  },
};

const user2 = {
  name: "Bob",
  bookings: [],
};
const user3 = {
  name: "Nina",
  bookings: [],
};
// console.log(user.bookRoom(101, 200, "2025-01-01", "2025-01-02"));

user.bookRoom.call(user2, 101, 200, "2025-01-15", "2025-01-20");

const bookForBob = user.bookRoom.bind(user3);
bookForBob(202, 300, "2025-02-01", "2025-02-05");

console.log(user.bookings);
console.log(user2.bookings);
console.log(user3.bookings);

// У user є метод bookRoom, який створює об'єкт бронювання і додає його в масив booking
// потім ми викликаємо bookRoom для іншого об'єкта user2 і за допомогою call одразу передаємо аргументи
// а за допомогою bind створюємо функцію, яка завжди працює з контекстом user3
