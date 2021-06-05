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
    console.log('it works?' + e.target.className);

    const $bookTitle = $(e.target).siblings('#title');
    const lowercaseTitle = convertToLowercase($bookTitle[0].textContent);
    console.log($bookTitle[0].textContent);

    const userBook = await getBook(lowercaseTitle);
    console.log('userBook');
    console.log(userBook);
    saveToLocalStorage(userBook);
    /* e.preventDefault();
    var url = $(this).data('target');
    location.replace(url); */
  });
  /* Test code */
  getBook('1984');
});
