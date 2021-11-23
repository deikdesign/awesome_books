let books = [
  { title: 'Uno Lorem',
    author: 'Testero Testy',
  },
  { title: 'Dos Lorem',
    author: 'Testero Testy2',
  },
];

function displayBooks() {
document.getElementById('book-list').innerHTML = '';
for (let i = 0; i < books.length; i++) {
  document.getElementById('book-list').innerHTML +=`
  <li class="book-card">
    <p>${books[i].title}</p>
    <p>${books[i].author}</p>
    <button id="remove${i}"class="remove" onclick="removeBook(this.id)">Remove</button>
  </li>`;
};
};

function addBook() {
let newBook = {};
newBook.title = document.getElementById('title').value;
newBook.author = document.getElementById('author').value;
if (newBook.title !='' && newBook.author != ''){
books.push(newBook);
document.getElementById('title').value = '';
document.getElementById('author').value = '';
catchValue();
displayBooks();
};
};

function removeBook(id) {
let bookDeleted = id.replace('remove','');
books.splice(bookDeleted,1);
catchValue();
displayBooks();
};

function catchValue() {
const saveCollection = JSON.stringify(books);
localStorage.setItem('books', saveCollection);
};

function getValue() {
if (localStorage.getItem('books')) {
  books = JSON.parse(localStorage.getItem('books'));
  catchValue();
}
};

getValue();
window.onload = getValue;
displayBooks();