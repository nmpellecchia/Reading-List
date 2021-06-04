import { getAllBooks, getBook } from './api.js';
import { populateBookList } from './uix.js';

$(document).ready(function () {
  async function initialize() {
    const bookList = await getAllBooks();
    populateBookList(bookList);
  }

  initialize();

  $(document).on('click', '.edit-btn', function (e) {
    console.log('it works?' + e.target.className);

    const $bookTitle = $(e.target).siblings('#title');
    console.log($bookTitle[0].textContent);
    /* e.preventDefault();
    var url = $(this).data('target');
    location.replace(url); */
  });
  /* Test code */
  getBook('1984');
});
