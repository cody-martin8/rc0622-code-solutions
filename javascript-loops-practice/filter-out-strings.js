/* exported filterOutStrings */
function filterOutStrings(values) {
  var i = 0;
  var noStringsArray = [];
  while (i < values.length) {
    if ((values[i] + 5) - 5 === values[i]) {
      noStringsArray.push(values[i]);
      i++;
    } else {
      i++;
    }
  }
  return noStringsArray;
}
