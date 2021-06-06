import { getFromLocalStorage } from './Storage.js';

export function populateInputs() {
  const book = getFromLocalStorage('book');

  $('#book-title').val(book.title);
  $('#book-author').val(book.author);
  $('#book-status').val(book.status);
  $('#book-rating').val(book.rating);
}
