import { getAllBooks } from './api.js';
import { populateBookList } from './uix.js';

async function initialize() {
  const bookList = await getAllBooks();
  populateBookList(bookList);
}

initialize();
