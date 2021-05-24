async function getAllBooks() {
  const JSONBookList = await fetch('/book-data').then(resp => {
    if (resp.status == 201) {
      const r = convertToJSON(resp);
      return r;
    } else {
      return showError();
    }
  });
  console.log(JSONBookList.response);
  return JSONBookList.response;
}

function convertToJSON(data) {
  return data.json();
}

export { getAllBooks };
