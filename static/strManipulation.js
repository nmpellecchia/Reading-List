function capitalizeString(str) {
  return str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());
}

function convertToLowercase(str) {
  return str.toLowerCase();
}

function stripWhitespace(str) {
  return str.trim();
}

function standardizeString(str) {
  let newStr = stripWhitespace(str);
  newStr = convertToLowercase(str);
  return newStr;
}

export { capitalizeString, convertToLowercase, standardizeString };
