import { addBook, deleteBook } from './api.js';
import { populateInputs } from './uixEditor.js';

$(document).ready(function () {
  /* In case the user wanted to edit an existent book, see if there is anything inside the localstorage */
  /* Could doo localStorage == null. But this method also takes into acount undefined,false,0,etc. */
  if (localStorage['book']) {
    console.log('We have a book bois');
    populateInputs();
  }
  /* Functions regarding the addition or deletion of a book */
  function areEmptyValues() {
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

    if (areEmptyValues()) {
      showErrorMsg();
      e.preventDefault();
    } else {
      console.log('ALL OK');
      addBook(e);
      e.preventDefault();
    }
  });

  $('.delete').click(e => {
    console.log('WOHOO');
    deleteBook(e);
    e.preventDefault();
  });
});
