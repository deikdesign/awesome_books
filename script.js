/* eslint-disable no-unused-vars */
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
      let bgColor;
      if (i % 2 === 0) {
        bgColor = 'bg-white';
      } else {
        bgColor = 'bg-dark bg-opacity-10';
      }
      document.getElementById('book-list').innerHTML += `
    <li class="book-card d-flex justify-content-between align-items-center w-100 ${bgColor}">
      <div class="d-flex justify-content-between mx-4">
        <p class="m-3 mx-1 d-flex align-items-center">"${this.books[i].title}" by</p>
        <p class="m-3 mx-0 d-flex align-items-center">${this.books[i].author}</p>
      </div>
        <div class="mx-3"><button id="remove${this.books[i].id}"class="remove d-flex px-3 btn btn-danger" onclick="removeB()">Remove</button></div>
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
  const removeId = parseInt(window.event.target.id.replace('remove', ''), 10);
  myShelf.removeBook(removeId);
}

function displayPage(link) {
  const listPage = document.getElementById('all-books');
  const addNewPage = document.getElementById('add-new-page');
  const contactPage = document.getElementById('contact-page');
  if (link === 'list') {
    listPage.classList.remove('hide');
    contactPage.classList.remove('d-flex');
    contactPage.classList.add('hide');
    addNewPage.classList.remove('d-flex');
    addNewPage.classList.add('hide');
  } else if (link === 'add-new') {
    addNewPage.classList.remove('hide');
    listPage.classList.remove('d-flex');
    listPage.classList.add('hide');
    contactPage.classList.remove('d-flex');
    contactPage.classList.add('hide');
  } else if (link === 'contact') {
    contactPage.classList.remove('hide');
    contactPage.classList.add('d-flex');
    listPage.classList.remove('d-flex');
    listPage.classList.add('hide');
    addNewPage.classList.remove('d-flex');
    addNewPage.classList.add('hide');
  }
}
displayPage('list');
