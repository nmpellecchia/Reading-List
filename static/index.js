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
    const $bookTitle = $(e.target).parent().siblings('#title');
    console.log($bookTitle);
    const lowercaseTitle = convertToLowercase($bookTitle[0].textContent);
    /* get the book from the database */
    const userBook = await getBook(lowercaseTitle);
    /* Save it  */
    saveToLocalStorage(userBook);
    /* Redirect to the editor */
    location.replace('/edit');
  });
});
