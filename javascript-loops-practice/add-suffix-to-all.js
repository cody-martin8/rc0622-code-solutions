/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixArray = [];
  var i = 0;
  while (i < words.length) {
    suffixArray.push(words[i] + suffix);
    i++;
  }
  return suffixArray;
}
