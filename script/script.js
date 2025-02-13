const library = [];

const addBtn = document.querySelector(".addBtn");
const dia = document.querySelector(".dia");
const bookForm = document.querySelector(".bookForm")

addBtn.addEventListener("click", ()=> {
    dia.showModal();
})

bookForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const fd = extractFormData(new FormData(bookForm));
    const book = new Book(fd.title, fd.author, fd.pages, fd.read);
    library.push(book);
    newBook();
    dia.close();
})

function extractFormData(formData) {
    const title = formData.get("title");
    const author = formData.get("author");
    const pages = formData.get("pages");
    const read = formData.get("read");
    return {title, author, pages, read};
}

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



const main = document.querySelector(".main");
function newBook() {
    const book = library[library.length-1];
    console.log(book);
    const tbody = document.querySelector(".library");
    const title = "Title " + book.title;
    const author = "Author: " + book.author;
    const pages = "Pages: " + book.pages;
    const read = book.read;
    const entry = document.createElement("div");
    const divTitle = document.createElement("p");
    const divAuthor = document.createElement("p");
    const divPages = document.createElement("p");
    const divRead = document.createElement("input");
    const divReadQ = document.createElement("div");
    divReadQ.innerText = "Read? ";
    divRead.setAttribute("type", "checkbox");
    
    divTitle.innerText = title;
    divAuthor.innerText = author;
    divPages.innerText = pages;
    if (read == "on") {
        divRead.checked = true;
    } else {
        divRead.checked = false;
    }
    divReadQ.appendChild(divRead);
    entry.appendChild(divTitle);
    entry.appendChild(divAuthor);
    entry.appendChild(divPages);
    entry.appendChild(divReadQ);
    entry.classList.add("card");
    tbody.appendChild(entry);

};

