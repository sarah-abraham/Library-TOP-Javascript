let myLibrary = []

function Book(id, title, author, pages, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(bookObject){
    myLibrary.push(bookObject);
    console.log(myLibrary);
}

function validateForm() {
    if (!fetchBookTitle.value) {
        alert("Please enter the book title.");
        return false;
    }
    if (!fetchBookAuthor.value) {
        alert("Please enter the author.");
        return false;
    }
    if (!fetchBookPages.value) {
        alert("Please enter the number of pages.");
        return false;
    }
    return true;
}

function addBookToCard(mainContainer){
    const bookTitleElement = document.createElement("div");
    const bookAuthorElement = document.createElement("div");
    const bookPagesElement = document.createElement("div");
    const bookReadElement = document.createElement("div");
    const createDeleteButton = document.createElement("button");
    bookReadElement.className = "read-or-not";

    let currentBook = myLibrary[myLibrary.length-1];
    let card = document.createElement("div");
    card.className = "card";
    card.dataset.id = currentBook["id"];
    let h2 = document.createElement("h2");
    h2.textContent = currentBook["title"];
    bookTitleElement.appendChild(h2);
    let pAuthor = document.createElement("p");
    pAuthor.textContent = "By "+currentBook["author"];
    bookAuthorElement.appendChild(pAuthor);
    let pPages = document.createElement("p");
    pPages.textContent = currentBook["pages"]+" pages";
    bookAuthorElement.appendChild(pPages);

    if(currentBook["read"].toLowerCase() === "yes"){
        let checkImg = document.createElement("img");
        checkImg.src = "./assets/check-circle.svg";
        checkImg.className = "card-icon";
        bookReadElement.appendChild(checkImg);
        let pRead = document.createElement("p");
        pRead.textContent = "Already read.";
        bookReadElement.appendChild(pRead);
    }
    else{
        let uncheckImg = document.createElement("img");
        uncheckImg.src = "./assets/alpha-x-circle.svg";
        uncheckImg.className = "card-icon";
        bookReadElement.appendChild(uncheckImg);
        let pRead = document.createElement("p");
        pRead.textContent = "Not read yet.";
        bookReadElement.appendChild(pRead);
    }

    createDeleteButton.className = "delete-btn";
    createDeleteButton.textContent = "Delete Button";
    createDeleteButton.addEventListener(('click'), () => {
        deleteCard(card.dataset.id)
    })

    card.appendChild(bookTitleElement);
    card.appendChild(bookAuthorElement);
    card.appendChild(bookPagesElement);
    card.appendChild(bookReadElement);
    card.appendChild(createDeleteButton);
    mainContainer.append(card);
    console.log("Added");
}

function deleteCard(currentId){
    console.log(currentId)
    myLibrary = myLibrary.filter((book) => book.id !== parseInt(currentId));
    let cardToBeDeleted = document.querySelector(`.card[data-id="${currentId}"]`)
    mainContainer.removeChild(cardToBeDeleted);
    console.log(myLibrary);
    console.log("deleted");
}

const addButton = document.querySelector(".add-btn");
const deleteButton = document.querySelector(".delete-btn");
const fetchBookTitle = document.querySelector("#title");
const fetchBookAuthor = document.querySelector("#author");
const fetchBookPages = document.querySelector("#pages");
const fetchBookRead = document.querySelectorAll('input[name="read"]');
const mainContainer = document.querySelector(".main");

let bookObject, bookTitleValue, bookAuthorValue, bookPagesValue, bookReadValue, id = 0 ;

addButton.addEventListener('click', (event) => {
    event.preventDefault();

    if(!validateForm()){
        return;
    }

    id++;
    bookTitleValue = fetchBookTitle.value;
    bookAuthorValue = fetchBookAuthor.value;
    bookPagesValue = parseInt(fetchBookPages.value);
 

    fetchBookRead.forEach((radio) => {
        if (radio.checked) {
            bookReadValue = radio.value;
            radio.checked = false;
        }
    });

    bookObject = new Book(id,bookTitleValue, bookAuthorValue, bookPagesValue, bookReadValue);
    addBookToLibrary(bookObject);
    addBookToCard(mainContainer);

    fetchBookTitle.value = "";
    fetchBookAuthor.value = "";
    fetchBookPages.value = "";
    fetchBookRead.value = "";
    
})



