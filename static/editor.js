import { addBook, deleteBook } from './api.js';

$(document).ready(function () {
  function areEMptyValues() {
    const $selectors = document.querySelectorAll('.user-selector');
    let emptyValues = false;

    $selectors.forEach(selector => {
      const value = selector.value;

      if (value.trim() == '') {
        emptyValues = true;
        return true;
      }
    });

    return emptyValues;
  }

  function showErrorMsg() {
    alert('There are empty values!');
  }

  /* Event Listener */
  $('.add').click(e => {
    console.log('HEEEY');

    /* if (areEmptyValues()) {
      showErrorMsg();
      e.preventDefault();
    } else {
      console.log('ALL OK');
      addBook(e);
      e.preventDefault();
    } */

    addBook(e);
    deleteBook(e);
    e.preventDefault();
  });
});
