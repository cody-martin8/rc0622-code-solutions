/* exported capitalizeWords */
// receive string as an argument
// create variable to receive new string
// create if statement that screens for empty strings
//   if empty, return new string variable
//   else, run the following code:
//     create for loop that iterates through the length of the string
//       create if statement that checks whether the previous character is a ' '
//         if true, capitalize the current character and concatenate to new string variable
//         if false, lowercase the current character and concatenate to new string variable
// return new string variable

function capitalizeWords(string) {
  var capitalizedWords = '';
  if (string === undefined) {
    return capitalizedWords;
  } else {
    for (var i = 0; i < string.length; i++) {
      if (string[i - 1] === ' ') {
        capitalizedWords += string[i].toUpperCase();
      } else if (i === 0) {
        capitalizedWords += string[i].toUpperCase();
      } else {
        capitalizedWords += string[i].toLowerCase();
      }
    }
    return capitalizedWords;
  }
}

// receive string as an argument
// create variable to receive new string
// create if statement that screens for empty strings
//   if empty, return new string variable
//   else, run the following code:
//     create for loop that iterates through the length of the string
//       create if statement that checks whether the previous character is a ' '
//         if true, capitalize the current character and concatenate to new string variable
//         else if the selected character is the first character in the string, capitalize and concatenate
//         if false, lowercase the current character and concatenate to new string variable
// return new string variable
