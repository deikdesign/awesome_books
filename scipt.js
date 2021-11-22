const titleInput = document.getElementById("title").value;
const authorInput = document.getElementById("author").value;

class Book {
    constructor (title, author){
        this.title = title;
        this.author = author;
    }
};

const books = [
    { title: 'Uno Lorem',
      author: 'Testero Testy',
    },
    { title: 'Dos Lorem',
      author: 'Testero Testy2',
    },
];

function addBook() {
    let newBook = new Book();
    newBook.title = 'Tres Ipsum';
    newBook.author = 'Testero Testy';
    books.push(newBook);
    console.log(books);
};

for (let i =0; i < books.length; i++) {
    document.getElementById('book-list').innerHTML +=`
    <li class="book-card">
      <p>${books[i].title}</p>
      <p>${books[i].author}</p>
      <button>Remove</button>
    </li>`;
};



