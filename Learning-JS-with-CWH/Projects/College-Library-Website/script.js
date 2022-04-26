// To do
// 1. Store all data to the localStroage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view


// Constructor
function Book(name, author, type) {
    this.name = name,
        this.author = author,
        this.type = type;
}

// Diplay Constructor
function Display() {

}


// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log('Adding to ui');
    const tableBody = document.getElementById('tableBody')
    let uiString = `<tr>
                          <td>${book.name}</td>
                          <td>${book.author}</td>
                          <td>${book.type}</td>
    
                    </tr>

    `;
    tableBody.innerHTML += uiString;
}

// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm')
    libraryForm.reset();
}

// Implement the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    } else {
        return true;
    }
}


Display.prototype.show = function (type, displaymessage) {
    let message = document.getElementById('message');
    message.innerHTML = `
<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>Message!</strong> ${displaymessage}
  <button type="button" class="btn-close" data-bs-dismiss="alert"      aria-label="Close"></button>
</div>
`
    setTimeout(() => {
        message.innerHTML = 'blank'
    }, 2000);
}


// Add submit event listener to form libraryForm


let libraryForm = document.getElementById('libraryForm')
libraryForm.addEventListener('submit', libraryFormSubmit)


function libraryFormSubmit(e) {
    console.log('You have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;

    if (fiction.checked) {
        type = fiction.value
    }
    else if (programming.checked) {
        type.programming.value
    }
    else if (cooking.checked) {
        type = cooking.value
    }

    let book = new Book(name, author, type)
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear()
        display.show('success', "Your book has been sucessfully added")
    } else {
        // Show error to the user
        display.show('danger', "Sorry you can't add this book.")
    }

    e.preventDefault();

}




