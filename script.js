let books = [
  {
    title: 'Uno Lorem',
    author: 'Testero Testy',
    id: 570968217,
  },
  {
    title: 'Dos Lorem',
    author: 'Testero Testy2',
    id: 570968218,
  },
];

function displayBooks() {
  document.getElementById('book-list').innerHTML = '';
  for (let i = 0; i < books.length; i += 1) {
    document.getElementById('book-list').innerHTML += `
  <li class="book-card">
    <p>${books[i].title}</p>
    <p>${books[i].author}</p>
    <button id="remove${books[i].id}"class="remove" onclick="removeBook(this.id)">Remove</button>
  </li>`;
  }
}

function catchValue() {
  const saveCollection = JSON.stringify(books);
  localStorage.setItem('books', saveCollection);
}
/* eslint-disable no-unused-vars */
function addBook() {
  const newBook = {};
  newBook.title = document.getElementById('title').value;
  newBook.author = document.getElementById('author').value;
  newBook.id = parseInt(Math.random() * 1000000000, 10);
  if (newBook.title !== '' && newBook.author !== '') {
    books.push(newBook);
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    catchValue();
    displayBooks();
  }
}

/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable radix */
function removeBook(id) {
  const bookDeleted = parseInt(id.replace('remove', ''));
  let newBooks = books.filter((item) => item.id !== bookDeleted);
  books = newBooks;
  catchValue();
  displayBooks();
}

function getValue() {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
    catchValue();
  }
}

getValue();
window.onload = getValue;
displayBooks();
