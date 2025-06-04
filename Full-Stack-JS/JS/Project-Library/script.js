const myLibrary = [];

// Book Constructor
function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Toggle read status method on prototype
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

// Add book to library
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

// Display books
function displayBooks() {
  const display = document.getElementById('book-display');
  display.innerHTML = '';

  myLibrary.forEach((book) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-id', book.id);

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.read ? 'Read' : 'Not Read'}</p>
      <button class="remove-btn">Remove</button>
      <button class="toggle-btn">Toggle Read</button>
    `;

    display.appendChild(card);
  });

  // Add event listeners for remove and toggle buttons
  document.querySelectorAll('.remove-btn').forEach((btn) =>
    btn.addEventListener('click', function () {
      const id = this.parentElement.getAttribute('data-id');
      removeBook(id);
    })
  );

  document.querySelectorAll('.toggle-btn').forEach((btn) =>
    btn.addEventListener('click', function () {
      const id = this.parentElement.getAttribute('data-id');
      toggleReadStatus(id);
    })
  );
}

// Remove book
function removeBook(id) {
  const index = myLibrary.findIndex((book) => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBooks();
  }
}

// Toggle read status
function toggleReadStatus(id) {
  const book = myLibrary.find((book) => book.id === id);
  if (book) {
    book.toggleRead();
    displayBooks();
  }
}

// Show/hide form
document.getElementById('new-book-btn').addEventListener('click', () => {
  const form = document.getElementById('book-form');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

// Handle form submission
document.getElementById('book-form').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  addBookToLibrary(title, author, pages, read);

  // Reset form
  e.target.reset();
  e.target.style.display = 'none';
});

// Optional: Add some books to test
addBookToLibrary('1984', 'George Orwell', 328, true);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
