async function getAllBooks() {
  const JSONBookList = await $.get('/book-data', resp => {
    return resp;
  });
  /* I don't like the order the data is sent. So I will change it */
  const orderedList = orderList(JSONBookList.response);
  return orderedList;
}

async function addBook(e) {
  e.preventDefault();

  /* const userInput = document.querySelector('#add-book');
  const value = userInput.value; */
  const value = 'words of radiance,brandon sanderson,reading,7';

  console.log('adding: ' + value);
  /* const fetchRequest = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(value),
  };
  // connect with API
  const bookToPost = await fetch('/change-data', fetchRequest); */
  $.ajax({
    type: 'POST',
    url: '/change-data',
    data: JSON.stringify(value),
    contentType: 'application/json',
    success: function (result) {
      console.log(result);
    },
  });
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

export { getAllBooks, addBook };
