/* exported firstChars */
// receive length and string as arguments
// create a variable to receive new string
// create an if statement to screen for empty strings
// create a for loop that iterates 'length' times through the given string
//   select each character using the iterative variable, and concatenate with the new string variable
// return new string

function firstChars(length, string) {
  var firstCharacters = '';
  for (var i = 0; i < length && i < string.length; i++) {
    firstCharacters += string[i];
  }
  return firstCharacters;
}

// receive length and string as arguments
// create a variable to receive new string
// create a for loop that iterates 'length' times through the given string or through the length of the string, whichever is lesser
//   select each character using the iterative variable, and concatenate with the new string variable
// return new string
