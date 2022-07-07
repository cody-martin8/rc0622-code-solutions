/* exported countdown */
function countdown(number) {
  var numberReturn = [];
  for (var i = number; i >= 0; i--) {
    numberReturn.push(i);
  }
  return numberReturn;
}
