import { capitalizeString } from './strManipulation.js';

function populateBookList(list) {
  populateHeaders(list[0]);
  /* populateContent(); */
}

function populateHeaders(object) {
  /* const $header = document.querySelector('.categories-row'); */
  const categories = Object.keys(object);

  for (let i = 0; i <= categories.length - 1; i++) {
    /*  const cell = document.createElement('th');
    cell.innerHTML = categories[i];
    $header.appendChild(cell); */
    $('.categories-row').append(`<th>${capitalizeString(categories[i])}</th>`);
  }
}

export { populateBookList };
