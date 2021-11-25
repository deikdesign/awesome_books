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
      <div class="d-flex justify-content-between">
        <p class="m-2 d-flex align-items-center">"${this.books[i].title}" by</p>
        <p class="m-2 mx-0 d-flex align-items-center">${this.books[i].author}</p>
      </div>
        <div class="mx-1"><button id="remove${this.books[i].id}"class="remove d-flex px-3 bg-white" onclick="removeB()">Remove</button></div>
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

// Clock on click - date and time
   function updateClock() {
        var at = new Date();
        var daname = at.getDay(),
            mont = at.getMonth(),
            denum = at.getDate(),
            yrr = at.getFullYear(),
            hourr = at.getHours(),
            min = at.getMinutes(),
            sec = at.getSeconds(),
            pe = "AM";

            if(hourr >= 12){
            pe = "PM";
          }
          if(hourr == 0){
            hourr = 12;
          }
          if(hourr > 12){
            hourr = hourr - 12;
          }


            Number.prototype.pa = function(digit){
                for(var n = this.toString(); n.length < digit; n = 0 + n);
                return n;
            }

            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var id = ["days", "monthly", "daynumb", "years", "hours", "minutes", "seconds", "ampm"];
            var values = [week[daname], months[mont], denum, yrr, hourr.pa(2), min.pa(2), sec, pe];
            
             for(var i = 0; i < id.length; i++)
             document.getElementById(id[i]).firstChild.nodeValue = values[i];
        }

        function initClock() {
            updateClock();
            window.setInterval("updateClock()", 1);

        }
