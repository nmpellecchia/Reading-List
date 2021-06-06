import { standardizeString } from './strManipulation.js';

async function getAllBooks() {
  const JSONBookList = await $.get('/book-data', resp => {
    return resp;
  });
  /* I don't like the order the data is sent. So I will change it */
  const orderedList = orderList(JSONBookList.response);
  return orderedList;
}

async function addBook() {
  const $selectors = document.querySelectorAll('.user-selector');
  const bookToAdd = [];

  $selectors.forEach(selector => {
    let bookProperty = standardizeString(selector.value);

    bookToAdd.push(bookProperty);
  });

  $.ajax({
    type: 'POST',
    url: '/change-data',
    data: JSON.stringify(bookToAdd.toString()),
    contentType: 'application/json',
    success: function (result) {
      console.log(result);
    },
  });
}

async function deleteBook() {
  const $bookTitle = $('#book-title');
  const bookToDelete = standardizeString($bookTitle.val());

  $.ajax({
    type: 'DELETE',
    url: '/change-data',
    cache: false,
    data: JSON.stringify(bookToDelete),
    contentType: 'application/json',
    success: function (result) {
      console.log(result);
    },
  });
}

async function getBook(bookToGet) {
  /* As this project will contain a small amount of data this method is viable */
  const fullBookList = await getAllBooks();
  /* grep will filter the array and only return the book that the user needs */
  const userBook = $.grep(fullBookList, book => {
    return book.title == bookToGet;
  });

  return userBook;
}

/* This would have to be refactored manually if keys are added or deleted later */
/* But for this simple case I think is more than enough */
function orderList(listToOrder) {
  const orderedList = [];
  /* Iterate the array and order the keys inside the objects */
  listToOrder.forEach(object => {
    /* Create a new object  */
    const orderedObject = {
      title: object.title,
      author: object.author,
      status: object.status,
      rating: object.rating,
    };
    orderedList.push(orderedObject);
  });
  return orderedList;
}

export { getAllBooks, addBook, deleteBook, getBook };
