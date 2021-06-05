function saveToLocalStorage(element) {
  localStorage.setItem('book', JSON.stringify(element));
}

function clearLocalStorage() {
  localStorage.clear();
}

export { saveToLocalStorage, clearLocalStorage };
