/* exported filterOutNulls */
function filterOutNulls(values) {
  var i = 0;
  var noNullsArray = [];
  while (i < values.length) {
    if (values[i] != null) {
      noNullsArray.push(values[i]);
      i++;
    } else {
      i++;
    }
  }
  return noNullsArray;
}
