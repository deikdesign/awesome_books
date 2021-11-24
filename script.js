/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable radix */
/* eslint-disable max-classes-per-file */

class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

class Shelf {
  constructor() {
    this.books = [];
  }

  // Store book array
  saveValue() {
    const saveCollection = JSON.stringify(this.books);
    localStorage.setItem('books', saveCollection);
  }

  // Get book array
  getValue() {
    if (localStorage.getItem('books')) {
      this.books = JSON.parse(localStorage.getItem('books'));
      this.saveValue();
    }
  }

  // Add book to array
  addBook(title, author) {
    const currentBook = new Book(title, author);
    currentBook.id = parseInt(Math.random() * 1000000000, 10);
    if (currentBook.title !== '' && currentBook.author !== '') {
      this.books.push(currentBook);
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      this.saveValue();
      this.displayBooks();
    }
  }

  // Remove book from array
  removeBook(id) {
    const newBooks = this.books.filter((book) => book.id !== id);
    this.books = newBooks;
    this.saveValue();
    this.displayBooks();
  }

  // Display books
  displayBooks() {
    document.getElementById('book-list').innerHTML = '';
    for (let i = 0; i < this.books.length; i += 1) {
      document.getElementById('book-list').innerHTML += `
    <li class="book-card">
      <p>${this.books[i].title}</p>
      <p>${this.books[i].author}</p>
      <button id="remove${this.books[i].id}"class="remove" onclick="removeB()">Remove</button>
    </li>`;
    }
  }
}

const myShelf = new Shelf();
const addNewBook = new Book('title uno', 'author uno', 570968217);
const addNewBook2 = new Book('title dos', 'author dos', 570668217);
const addNewBook3 = new Book('title tres', 'author tres', 570963217);
myShelf.books.push(addNewBook);
myShelf.books.push(addNewBook2);
myShelf.books.push(addNewBook3);

myShelf.getValue();
myShelf.displayBooks();

const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () => {
  const currentTitle = document.querySelector('#title').value;
  const currentAuthor = document.querySelector('#author').value;
  myShelf.addBook(currentTitle, currentAuthor);
});

function removeB() {
  const removeId = parseInt(window.event.target.id.replace('remove', ''));
  myShelf.removeBook(removeId);
}
