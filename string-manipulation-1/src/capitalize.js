/* exported capitalize */
// receive word as argument
// create variable to receive edited word
// create variable for incrementing while loop, beginning at second character of word
// select first character of word using bracket notation
//   use toUpperCase method to capitalize selected character
//   assign to created variable
// create while loop that runs the duration of the length of the word after the first character
//   use incrementing variable as selector when using bracket notation to select for character in word
//   use toLowerCase method on each selected character
//     assign to created variable
// return new word variable

function capitalize(word) {
  var capitalizedWord;
  var i = 1;
  capitalizedWord = word[0].toUpperCase();
  while (i < word.length) {
    capitalizedWord += word[i].toLowerCase();
    i++;
  }
  return capitalizedWord;
}

// receive word as argument
// create variable to receive edited word
// create variable for incrementing while loop, beginning at second character of word
// select first character of word using bracket notation
//   use toUpperCase method to capitalize selected character
//   assign to created variable
// create while loop that runs the duration of the length of the word after the first character
//   use incrementing variable as selector when using bracket notation to select for character in word
//   use toLowerCase method on each selected character
//     use += to concatenate and assign to created variable
// return new word variable
