import { getAllBooks } from './api.js';

async function initialize() {
  const bookList = getAllBooks();
  /* populateBookList(bookList); */
}

initialize();
