import { addBook, deleteBook } from './api.js';
import { populateInputs } from './uixEditor.js';

$(document).ready(function () {
  /* In case the user wanted to edit an existent book, see if there is anything inside the localstorage */
  /* Could doo localStorage == null. But this method also takes into acount undefined,false,0,etc. */
  if (localStorage['book']) {
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
  $('.add').click(() => {
    if (areEmptyValues()) {
      showErrorMsg();
    } else {
      console.log('This should not appear');
      /* Delete the book from the database*/
      deleteBook();
      /* Now add with the new values */
      addBook();
      window.location.href = '/';
    }
  });

  $('.delete').click(() => {
    deleteBook();
    window.location.href = '/';
  });
});
