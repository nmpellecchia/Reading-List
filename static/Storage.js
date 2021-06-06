function saveToLocalStorage(element) {
  localStorage.setItem('book', JSON.stringify(element));
}

function getFromLocalStorage(key) {
  /* is stored as an array converted to string */
  const value = JSON.parse(localStorage.getItem(key));
  /* Clear, I don't need it anymore */
  /* clearLocalStorage(); */
  /* Now access the only element inside the array */
  return value[0];
}

function clearLocalStorage() {
  localStorage.clear();
}

export { saveToLocalStorage, getFromLocalStorage };
