export default class Book {

    constructor(title, author, year) {
        this._title = title
        this._author = author
        this._year = year
    }

    get title(){
        return this._title
    }

    set title(value){
        if(typeof value !== "string"){
            console.error("Error: Title should be type of string")
            return
        }

        this._title = value
    }

    get author(){
        return this._author
    }

    set author(value){
        if(value !== "string"){
            console.error("Error: Author should be type of string")
            return
        }

        this._author = value
    }

    get year(){
        return this._year
    }

    set year(value){
        if(typeof value !== "number"){
            console.error("Error: Year should be type of number")
            return
        }

        this._year = value
    }

    printInfo () {
        console.log(`"${this._title}" is written by ${this._author} and it was published in ${this._year}.`)
    }

    static findOldestBook(books) {
        let oldestBook = books[0];
        for (let i = 1; i < books.length; i++) {
            if (books[i].year < oldestBook.year) {
                oldestBook = books[i];
            }
        }
        return oldestBook;
    }
}