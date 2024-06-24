const myLibrary = []

function Book(id, title, author, pages, read){
    this.id = id;
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


const addButton = document.querySelector(".add-btn");
const deleteButton = document.querySelector(".delete-btn");
const fetchBookTitle = document.querySelector("#title");
const fetchBookAuthor = document.querySelector("#author");
const fetchBookPages = document.querySelector("#pages");
const fetchBookRead = document.querySelector("input[name=read]:checked");
let bookObject, bookTitleValue, bookAuthorValue, bookPagesValue, bookReadValue, id = 0 ;

addButton.addEventListener('click', () => {
    bookTitleValue = fetchBookTitle.value;
    bookAuthorValue = fetchBookAuthor.value;
    bookPagesValue = fetchBookPages.value;
    bookReadValue = fetchBookRead.value;
    id++;
    bookObject = new Book(id,bookTitleValue, bookAuthorValue, bookPagesValue, bookReadValue);
    myLibrary.push(bookObject);
})