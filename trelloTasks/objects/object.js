// Завдання:

// Створіть об'єкт, який представляє книгу з властивостями title, author та year.

const book = {
  title: 410,
  author: "Stephen King",
  year: 2008,
};

// Додайте нову властивість genre до об'єкта книги.
book.genre = "horror";
console.log(book);

// Видаліть властивість year з об'єкта книги.
delete book.title;
console.log(book);










// const bookDescription = {
//   title: 410,
//   author: "Stephen King",
//   year: 2008,
//   fullDescription: function () {
//     return "Description: " + this.title + "," + this.author + " ," + this.year;
//   },
// };
// let description = bookDescription.fullDescription();
// console.log(description);
