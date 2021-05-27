function capitalizeString(str) {
  return str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
}

function convertToLowercase(str) {
  return str.toLowerCase();
}

function stripWhitespace(str) {
  $.trim(str);
}

export { capitalizeString, convertToLowercase, stripWhitespace };
