/* Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements. */




class Book {
    constructor(title, author) { // properties for each book
        this.title = title;
        this.author = author;
    }
   
}

class Menu {
    constructor(){
        this.books =[]; // here is the array to store my books
    }
    start() { //this programs the actual menu
        let selection = this.showMainMenuOptions(); //this allows the program to use user input
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.addBook();
                    break;
                case '2':
                    this.viewBooks();
                    break;
                case '3': 
                    this.deleteBook();
                case '4':
                    selection = 0;
            }
            selection = this.showMainMenuOptions(); // if not 0 or non-option it will return here
        }
        alert('Goodbye!'); // shows if they select zero or non-option to exit menu
    }
    //show the menu
    showMainMenuOptions(){ //what the menu looks like for the user (abstraction at work!)
        return prompt(`
            0) exit
            1) add new book
            2) view books
            3) delete a book
            `)
    }
    //add books to the array with a title and author
    addBook() {
        let bookTitle = prompt('Enter book title here:');
        let bookAuthor = prompt('Enter book author here:');
        this.books.push(new Book(bookTitle, bookAuthor)); //adds to the array
    }

    //show all of the books in the array
    viewBooks() {
        let bookString = '';
        for(let i = 0; i < this.books.length; i++) {
            bookString += `${this.books[i].title} by ${this.books[i].author}, `
        }
        alert(bookString); //calls a list
    }
    deleteBook() {
        let bookIndex = prompt('Enter the index of the book you would like to delete:');
        if (bookIndex > -1 && bookIndex < this.books.length) {
            this.books.splice(bookIndex, 1); //gets the location of the book and then 1 is to remove only one
        }
    }
}

let menu = new Menu();
menu.start(); 