/* exported reverseWord */
// receive word as argument
// create variable that will receive new word
// create variable to iterate through while loop
// create while loop that will iterate for each character in the word, starting with the end of the word
//   select character with position of the iterative variable
//   concatenate and assign each character to the new word variable
//   decrement the iterative variable
// return new word variable

function reverseWord(word) {
  var reversedWord = '';
  var i = word.length - 1;
  while (i >= 0) {
    reversedWord += word[i];
    i--;
  }
  return reversedWord;
}

// receive word as argument
// create variable that will receive new word
//   assign an empty string to the new word variable
// create variable to iterate through while loop
// create while loop that will iterate for each character in the word, starting with the end of the word
//   select character with position of the iterative variable
//   concatenate and assign each character to the new word variable
//   decrement the iterative variable
// return new word variable
