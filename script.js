class newBook {
  constructor(title, author, idBook) {
    this.title = title;
    this.author = author;
    this.idBook = idBook;
  }
}

class books {
  constructor() {
    this.books = [];
  }
  // Store book array
  saveValue() {
    const saveCollection = JSON.stringify(books);
    localStorage.setItem("books", saveCollection);
  }
  // Get book array
  getValue() {
    if (localStorage.getItem("books")) {
      this.books = JSON.parse(localStorage.getItem("books"));
      catchValue();
    }
  }
  // Add book to array
  addBook(title, author) {
    const currentBook = new newBook(title, author);
    currentBook.idBook = this.books.length + 1;
    if (currentBook.title !== "" && currentBook.author !== "") {
      this.books.push(currentBook);
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
      this.displayBooks();
    }
  }
  // Remove book from array
  removeBook(idBook) {
    this.books = this.books.filter((id) => id !== idBook);
    this.displayBooks();
  }
  // Display books
  displayBooks() {
    document.getElementById("book-list").innerHTML = "";
    for (let i = 0; i < this.books.length; i += 1) {
      document.getElementById("book-list").innerHTML += `
    <li class="book-card">
      <p>${this.books[i].title}</p>
      <p>${this.books[i].author}</p>
      <button id="remove${this.books[i].idBook}"class="remove">Remove</button>
    </li>`;
    }
  }
}

const myBooks = new books();
const addNewBook = new newBook("title uno", "author uno", "1");
const addNewBook2 = new newBook("title dos", "author dos", "2");
myBooks.books.push(addNewBook);
myBooks.books.push(addNewBook2);

myBooks.displayBooks();

const removeButtons = document.querySelectorAll(".remove");

document.querySelectorAll(".remove").forEach((item) => {
  item.addEventListener("click", () => {
    console.log(myBooks.books);
  });
});

const addBtn = document.querySelector("#add");
addBtn.addEventListener("click", () => {
  let currentTitle = document.querySelector("#title").value;
  let currentAuthor = document.querySelector("#author").value;
  myBooks.addBook(currentTitle, currentAuthor);
});

let arr = [1, 2, 3, 4,5,6,7];
const idx = 3;

arr = arr.filter((id) => id !== idx);
