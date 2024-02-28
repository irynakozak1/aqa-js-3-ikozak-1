export default class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string') {
      console.error('Error: Title should be type of string');
      return;
    }

    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (value !== 'string') {
      console.error('Error: Author should be type of string');
      return;
    }

    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== 'number') {
      console.error('Error: Year should be type of number');
      return;
    }

    this._year = value;
  }

  printInfo() {
    console.log(`"${this._title}" is written by ${this._author} and it was published in ${this._year}.`);
  }

  static findOldestBook(books) {
    // eslint-disable-next-line max-len
    return books.reduce((oldestBook, currentBook) => (currentBook.year < oldestBook.year ? currentBook : oldestBook));
  }
}
