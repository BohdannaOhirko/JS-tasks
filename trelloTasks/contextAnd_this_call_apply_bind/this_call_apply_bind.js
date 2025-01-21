// Завдання

// Реалізуйте систему бронювання номерів у готелі.
// Вона повинна дозволяти створювати номери, бронювати номери і виводити інформацію про заброньовані номери.
// Використовуйте правильне прив'язування контексту this в методах класу.

// Підказка:

// Використовуй bind, call, або apply для прив'язування контексту.

const bookingRoom = [
  { room: 1, price: 100 },
  { room: 2, price: 200 },
];

for (let i = 0; i < bookingRoom.length; i++) {
  (function (i) {
    this.displayInfo = function () {
      console.log(`Booked room №${this.room} at price ${this.price}$`);
    };

    this.displayInfo();
  }).call(bookingRoom[i], i);
}
const roomType = ["standard", "junior-suite", "suite"];
const bookingHotelRoom = {
  arrivalDate: new Date(),
  departureDate: new Date(),
  createBooking() {
    console.log(`You have booked '${this.roomType[2]}`);
  },
};

// bookingHotelRoom.apply(this, [roomType]);
// https://ru.stackoverflow.com/questions/1472449/%D0%9A%D0%B0%D0%BA-%D1%81%D0%B4%D0%B5%D0%BB%D0%B0%D1%82%D1%8C-%D0%BA%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D1%8C-%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BD%D0%B0-js-html-css
//https://www.freecodecamp.org/ukrainian/news/posibnyk-z-masyvu-ob-yektiv-javascript-yak-stvoryuvaty-onovlyuvaty-ta-perehlyadaty-ob-yekty-za-dopomohoyu-metodiv-masyvu-js/
