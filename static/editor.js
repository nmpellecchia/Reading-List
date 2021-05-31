$(document).ready(function () {
  function areInputsRight() {
    const $selectors = document.querySelectorAll('.user-selector');
    $selectors.forEach(selector => {
      /* Could use tagName. But nodeName is less prone to errors */
      /* switch (selector.nodeName) {
        case 'SELECT':
          console.log('Im a select element!' + selector.nodeName);
          console.log('Im a select element!' + selector.value);
          isSelectValid(selector.value);
          break;

        default:
          // Should be an input
          console.log('Im an input!' + selector.nodeName);
          console.log('Im an input!' + selector.value);
          isInputValid(selector.value);
          break;
      } */
      console.log(selector.value);
      isSelectorValid(selector.value);
    });
  }

  function isSelectorValid(value) {
    value ? console.log(true) : console.log(false);
  }

  /* Event Listener */
  $('.add').click(e => {
    e.preventDefault();
    console.log('HEEEY');

    areInputsRight();
  });
});
