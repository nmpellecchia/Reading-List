async function getAllBooks() {
  const JSONBookList = await fetch('/book-data').then(resp => {
    if (resp.status == 201) {
      return convertToJSON(resp);
    } else {
      return showError();
    }
  });
  console.log(JSONBookList);
}

function convertToJSON(data) {
  return data.json();
}

export { getAllBooks };
