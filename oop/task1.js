import Book from "./Book.js";
import EBook from "./EBook.js";

console.log("---------Завдання 1.1---------")
const book1 = new Book("Harry Potter", "Joan Rowling", 1997)
const book2 = new Book("Tiger Trappers", "Ivan Bagriany", 1944)
book1.printInfo()
book2.printInfo()

console.log("---------Завдання 1.2---------")
const eBook1 = new EBook("Eneida", "Ivan Kotliarevsky", 1798, "PDF")
eBook1.printInfo()

console.log("---------Завдання 1.3(Example of getters and setters using)---------")
book1.title = "Harry Potter and the Philosopher's Stone"
book2.year = "1944"
console.log(book2.year)
book1.printInfo()
book2.printInfo()

console.log("---------Завдання 1.4(findOldestBook result)---------")
const oldest = Book.findOldestBook([book1, book2, eBook1])
console.log(oldest)

console.log("---------Завдання 1.5(fromBookAndFileFormat result)---------")
const eBook2 = EBook.fromBookAndFileFormat(book2, "PDF")
console.log(eBook2)

