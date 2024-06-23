const myLibrary = []

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        if(this.read.toLowerCase() === 'yes'){
            return `${this.title} by ${this.author}, ${this.pages} pages, have read it.`
        }
        else{
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`
        }
    }
}

function addBookToLibrary(bookObject){
    myLibrary.push(bookObject);
}

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "no");
// console.log(theHobbit.info());