import Book from "./Book.js"

export default class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat
    }

    get fileFormat(){
        return this._fileFormat
    }

    set fileFormat(value){
        if(value !== "string"){
            console.error("Error: File format should be type of string")
            return
        }

        this._fileFormat = value
    }

    printInfo () {
        console.log(`"${this.title}" is written by ${this.author} and it was published in ${this.year}. Book format is: ${this._fileFormat}.`)
    }

    static fromBookAndFileFormat(book, fileFormat){
        return new EBook(book.title, book.author, book.year, fileFormat)
    }
}

