$(document).ready(function () {
  function areInputsRight() {
    const $inputs = document.querySelectorAll('.user-selector');
    $inputs.forEach(input => {
      if (input.id.contains('author')) {
        /*  */
      } else if (input.id.contains('title')) {
        /*  */
      } else if (input.id.contains('author')) {
        /*  */
      } else if (input.id.contains('status')) {
        /*  */
      } else if (input.id.contains('rating')) {
        /*  */
      }
    });
  }

  /* Event Listener */
  $('.add').click(e => {
    e.preventDefault();
    console.log('HEEEY');

    areInputsRight();
  });
});
