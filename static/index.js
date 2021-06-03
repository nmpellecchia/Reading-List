import { getAllBooks, getBook } from './api.js';
import { populateBookList } from './uix.js';

$(document).ready(function () {
  async function initialize() {
    const bookList = await getAllBooks();
    populateBookList(bookList);
  }

  initialize();

  /* Test code */
  getBook('1984');
});
