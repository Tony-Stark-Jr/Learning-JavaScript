// Create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookName,user)
// returnBook(bookName)

class Library {
    constructor(booksName) {
        this.books = booksName;
    }

    getBookList() {
        return this.books;
    }

    issueBook(bookName, user) {
        return `${user} take ${bookName} book`
    }

    book(rbook) {
        return this.rbook = rbook;
    }
}

const schoolLibrary = new Library(["physics", "chemistry", "math", "computer", "nepali", "english", "history", "economic", "geopolitic"])
console.log(schoolLibrary);

console.log(schoolLibrary.getBookList());
console.log(schoolLibrary.issueBook("physics", "Santosh"));
console.log(schoolLibrary.book('math'));