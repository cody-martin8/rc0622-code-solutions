/* exported isPalindromic */
// receive string as argument
// create variable to receive manipulated string
// create a variable to track the index of the manipulated string variable
// create a for loop that iterates the length of the string
//   create an if statement that filters out ' ' from the string
//   select for each character index in the string starting from the end of the string
//   assign the selected character to the current index of the manipulated string variable
//   iterate the index variable
// create an if statement that evaluates whether the manipulated string variable is equivalent to the given string
//   if yes, return true
//   if no, return false

function isPalindromic(string) {
  var palinString = '';
  var originalString = string.replace(' ', '');
  for (var i = 0; i <= originalString.length; i++) {
    palinString += originalString.charAt(originalString.length - i);
  }
  if (palinString === originalString) {
    return true;
  } else {
    return false;
  }
}

// receive string as argument
// create variable to receive manipulated string
// create a variable to receive a string with ' ' replaced by ''
// create a for loop that iterates the length of the string
//   select for each character index in the replacement string starting from the end
//   concatenate the selected character to the manipulated string
// create an if statement that evaluates whether the manipulated string variable is equivalent to the given string
//   if yes, return true
//   if no, return false
