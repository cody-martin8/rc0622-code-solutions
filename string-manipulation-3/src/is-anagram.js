/* exported isAnagram */
// receive firstString and secondString as arguments
// use string.replace on both strings to remove ' ' and replace with ''
// create a variable to receive the manipulated string
// create a for loop that iterates through the firstString
//   using firstString.charAt[i], select for the position of char using secondString.indexOf
//     set result equal to index variable
//   create an if statement that evaluates whether index variable !== -1
//     concatenate the character at the given index to the manipulated string
// create an if statement that evaluates whether firstString is equivalent to manipulated string\
//   if so, return true
//   if not, return false

function isAnagram(firstString, secondString) {
  var first = firstString.split('').sort().join('').trim();
  var second = secondString.split('').sort().join('').trim();
  if (first === second) {
    return true;
  } else {
    return false;
  }
}

// receive firstString and secondString as arguments
// split each string using empty quotes, then use the sort method
//   then join them with empty quotes, and use trim to discard empty spaces
//   assign result to a new variable for each string
// create an if statement that evaluates whether each string variable is equivalent
//   if yes, return true
//   if no, return false
