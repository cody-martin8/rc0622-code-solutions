/* exported truncate */
// receive length and string as arguments
// create variable to receive string result
// create variable to iterate through loop starting from 0
// create while loop that will iterate through the given length of the given string
//   or through the length of the given string
//   create an if statement that checks for available letters in the given string
//     if undefined, return the string result variable
//   create an else statement for the following code:
//     select each letter in the array using the iterative variable
//     concatenate the selected letter with the string result variable
//     return the string result variable
// concatenate an ellipsis to the end of the string result variable
// return the string result variable

function truncate(length, string) {
  var truncatedString = '';
  var i = 0;
  if (string === undefined) {
    return truncatedString;
  } else {
    while (i < length && i < string.length) {
      truncatedString += string[i];
      i++;
    }
  }
  truncatedString += '...';
  return truncatedString;
}

// receive length and string as arguments
// create variable to receive string result, assigning an empty string
// create variable to iterate through loop starting from 0
// create an if statement that checks for available letters in the given string
//   if undefined, return the string result variable
//   create an else statement for the following code:
//     create while loop that will iterate through the given length of the given string
//       and through the length of the given string
//     select each letter in the array using the iterative variable
//     concatenate the selected letter with the string result variable
//     increment the iterative variable
// concatenate an ellipsis to the end of the string result variable
// return the string result variable
