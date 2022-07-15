/* exported lastChars */
// receive length and string as arguments
// create a variable to receive the new string
// create a for loop that iterates the given length or the length of the string, whichever is lesser
//   select each character using the iterative variable and concatenate with the new string variable
// return the new string variable

function lastChars(length, string) {
  var lastCharacters = '';
  for (var i = 0; i < length; i++) {
    if (string.length + i >= length) {
      lastCharacters += string[string.length - length + i];
    }
  }
  return lastCharacters;
}

// receive length and string as arguments
// create a variable to receive the new string
// create a for loop that iterates the length of the string
//   create an if statement that screens for length that is greater than the length of the string
//     select each character using the iterative variable and concatenate with the new string variable
// return the new string variable
