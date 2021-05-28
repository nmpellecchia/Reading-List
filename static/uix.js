import { capitalizeString } from './strManipulation.js';

function populateBookList(list) {
  populateHeaders(list[0]);
  populateContent(list);
}

function populateHeaders(object) {
  /* const $header = document.querySelector('.categories-row'); */
  const categories = Object.keys(object);

  for (let i = 0; i <= categories.length - 1; i++) {
    /*  const cell = document.createElement('th');
    cell.innerHTML = categories[i];
    $header.appendChild(cell); */
    $('.categories-row').append(
      `<th scope="col" data-category="${categories[i]}">${capitalizeString(
        categories[i]
      )}</th>`
    );
  }
}

function populateContent(books) {
  const $listBody = $('.list-body');
  let totalBooks = 0;
  /* Loop through all books */
  for (let i = 0; i <= books.length - 1; i++) {
    const $row = $('<tr scope="row"></tr>');
    /* Loop every category for a book */
    for (const [key, value] of Object.entries(books[i])) {
      key == 'rating'
        ? $row.append(`<td>${value} / 10 </td>`)
        : $row.append(`<td>${value}</td>`);
    }
    $listBody.append($row);
    totalBooks++;
  }
  $('.book-count').html(`Total Books: ${totalBooks}`);
}

export { populateBookList };
