$(document).ready(function () {
  function areInputsRight() {
    const $selectors = document.querySelectorAll('.user-selector');
    const emptyValues = $selectors.forEach(selector => {
      console.log(selector.value);
      return isSelectorValid(selector.value);
    });
    return emptyValues;
  }

  function isSelectorValid(value) {
    let emptyValue = false;
    if (value.trim() == '') {
      emptyValue = !emptyValue;
      return true;
    }
  }

  function showErrorMsg() {
    alert('There are empty values!');
  }

  /* Event Listener */
  $('.add').click(e => {
    console.log('HEEEY');

    const emptyValues = areInputsRight();
    if (emptyValues) {
      showErrorMsg();
      e.preventDefault();
    }
  });
});
