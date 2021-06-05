import { getAllBooks, getBook } from './api.js';
import { saveToLocalStorage } from './Storage.js';
import { convertToLowercase } from './strManipulation.js';
import { populateBookList } from './uix.js';

$(document).ready(function () {
  async function initialize() {
    const bookList = await getAllBooks();
    populateBookList(bookList);
  }

  initialize();

  $(document).on('click', '.edit-btn', async function (e) {
    /* get the title inside the table */
    const $bookTitle = $(e.target).siblings('#title');
    const lowercaseTitle = convertToLowercase($bookTitle[0].textContent);
    /* get the book from the database */
    const userBook = await getBook(lowercaseTitle);
    console.log('userBook');
    console.log(userBook);
    /* Save it  */
    saveToLocalStorage(userBook);
    /* Redirect to the edit page */
    /* e.preventDefault();
    var url = $(this).data('target'); */
    location.replace('/edit');
  });
  /* Test code */
  getBook('1984');
});
