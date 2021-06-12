import { capitalizeString } from './strManipulation.js';

function populateBookList(list) {
  populateHeaders(list[0]);
  populateContent(list);
}

function populateHeaders(object) {
  /* const $header = document.querySelector('.categories-row'); */
  const categories = Object.keys(object);
  /* Don't use length - 1 because I want to create ampther element after */
  for (let i = 0; i <= categories.length; i++) {
    /*  const cell = document.createElement('th');
    cell.innerHTML = categories[i];
    $header.appendChild(cell); */
    $('.categories-row').append(
      categories[i]
        ? `<th scope="col" data-category="${categories[i]}">${capitalizeString(
            categories[i]
          )}</th>`
        : `<th scope="col" data-category="edit}"></th>`
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
        ? $row.append(`<td data-index="${i}" id="${key}">${value} / 10 </td>`)
        : $row.append(
            `<td data-index="${i}" id="${key}">${capitalizeString(value)}</td>`
          );
    }
    /* $row.append('<a href="#" class="edit-btn">Edit</a>'); */
    $row.append(
      `<button type="submit" data-target="/edit" data-index="${i}" class="btn btn-outline-danger edit-btn">Edit</button>`
    );
    $listBody.append($row);
    totalBooks++;
  }
  $('.book-count').html(`Total Books: ${totalBooks}`);
}

export { populateBookList };
