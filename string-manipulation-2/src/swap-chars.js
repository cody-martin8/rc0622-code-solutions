/* exported swapChars */
// receive firstIndex, secondIndex, and string as arguments
// create variable to receive new string

function swapChars(firstIndex, secondIndex, string) {
  var swappedCharacters = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swappedCharacters += string[secondIndex];
    } else if (i === secondIndex) {
      swappedCharacters += string[firstIndex];
    } else {
      swappedCharacters += string[i];
    }
  }
  return swappedCharacters;
}

// receive firstIndex, secondIndex, and string as arguments
// create variable to receive new string
// create for loop that iterates through the length of the string
//   create an if statement: is the iterative variable equal to the firstIndex
//     if so, concatenate the secondIndex of string to the new string variable
//   create and else if statement: is the iterative variable equal to the second Index
//     if so, concatenate the firstIndex of string to the new string variable
//   create an else statement that concatenates the other characters to the new string variable
// return new string variable
