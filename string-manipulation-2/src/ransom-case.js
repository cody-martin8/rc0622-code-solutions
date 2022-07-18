/* exported ransomCase */
// receive string as an argument
// create variable to iterate through a while loop
// create a variable to assign a new string
// create an if statement that screens for empty strings (undefined)
//   if empty, return the new string variable
// create an else statement with the following code:
//   create a while loop that iterates through the length of the word
//     create an if statement that checks whether the iterative variable is even
//       if even, select the character located at the iterative variable position and make it lowerCase
//         concatenate with the existing new string variable
//       if odd, select the character located at the iterative variable position and make it upperCase
//         concatenate with the existing new string variable

function ransomCase(string) {
  var i = 0;
  var ransomString = '';
  if (string === undefined) {
    return ransomString;
  } else {
    while (i < string.length) {
      if (i % 2 === 0) {
        ransomString += string[i].toLowerCase();
        i++;
      } else {
        ransomString += string[i].toUpperCase();
        i++;
      }
    }
    return ransomString;
  }
}

// receive string as an argument
// create variable to iterate through a while loop
// create a variable to assign a new string
// create an if statement that screens for empty strings (undefined)
//   if empty, return the new string variable
// create an else statement with the following code:
//   create a while loop that iterates through the length of the word
//     create an if statement that checks whether the iterative variable is even
//       if even, select the character located at the iterative variable position and make it lowerCase
//         concatenate with the existing new string variable
//       if odd, select the character located at the iterative variable position and make it upperCase
//         concatenate with the existing new string variable
