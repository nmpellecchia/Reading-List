$(document).ready(function () {
  function areInputsRight() {
    const $selectors = document.querySelectorAll('.user-selector');
    let emptyValues = false;

    $selectors.forEach(selector => {
      const value = selector.value;
      console.log(value.trim());
      console.log(value.trim() == '');

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

    if (areInputsRight()) {
      showErrorMsg();
      e.preventDefault();
    } else {
      console.log('ALL OK');
      e.preventDefault();
    }
  });
});
