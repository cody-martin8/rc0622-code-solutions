/* exported getIndexes */
function getIndexes(array) {
  var i = 0;
  var indexArray = [];
  while (i < array.length) {
    indexArray.push(i);
    i++;
  }
  return indexArray;
}
