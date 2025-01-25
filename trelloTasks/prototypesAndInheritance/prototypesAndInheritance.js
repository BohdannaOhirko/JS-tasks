// Завдання:

// Реалізуйте систему управління бібліотекою книг. Створіть конструктор Book, який має властивості title, author,
// і year.
// Потім створіть конструктор EBook, який наслідує Book і
//  додає властивість fileSize та метод для завантаження книги.
// Додайте метод для виведення інформації про книгу (title і author)
//  в прототип Book і переконайтесь, що EBook успадковує цей метод.

// Вимоги:

// Використовуйте прототипи для наслідування.

// Додайте метод для виведення інформації про книгу до прототипу Book.

// Створіть метод для завантаження електронної книги в конструкторі EBook.

// Переконайтесь, що метод для виведення інформації про книгу працює для об'єктів EBook.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class EBook extends Book {
  constructor(title, author, year, fileSize) {
    super(title, author, year);
    this.fileSize = fileSize;
  }
  downloadBook() {
    return `${this.title} is downloaded of ${this.fileSize} pages`;
  }
}
Book.prototype.showInfo = function () {
  return `The book ${this.title} of ${this.year} by ${this.author}`;
};
const myEBook = new EBook("'Essentialism'", "Greg Mckeown", 2014, 270);
const myEBook2 = new EBook("'Essentialism'", "Greg Mckeown", 2014, 270);
const myBook = new Book("'Brave New World '", "Aldous Huxley", 1932);

console.log(myBook.showInfo());

console.log(myEBook.showInfo());
console.log(myEBook2.showInfo());
console.log(myEBook.downloadBook());
