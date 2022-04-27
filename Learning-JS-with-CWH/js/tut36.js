// Create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookName,user)
// returnBook(bookName)

// Solution by Harry Bhi

class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname, user) {
        if (this.issuedBooks[bookname] == undefined) {
            this.issuedBooks[bookname] = user;
        }
        else {
            console.log("This book is already issued!");
        }
    }

    returnBook(bookName) {
        delete this.issuedBooks[bookName]
    }
}


let harryLib = new Library(['Legend harry', 'Legend sonu', 'Legend rohan'])
console.log(harryLib.issueBook('Legend harry', 'harry'));
console.log(harryLib.issueBook('Legend harry', 'harry'));


