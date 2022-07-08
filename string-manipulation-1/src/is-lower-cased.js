/* exported isLowerCased */
// receive word as argument
// create variable that can be assigned a boolean
// create variable that will be used to iterate loop
// create while loop that iterates through each letter of the given word
//   create if statement
//     expression that evaluates if letter is lowercase, if so assign true to variable and increment loop variable
//     use comparison between character and character after toLowerCase() method
//     else statement that assigns false to variable, second line for break from loop
// return boolean variable

function isLowerCased(word) {
  var result;
  var i = 0;
  while (i < word.length) {
    if (word[i] === word[i].toLowerCase()) {
      result = true;
      i++;
    } else {
      result = false;
      break;
    }
  }
  return result;
}

// receive word as argument
// create variable that can be assigned a boolean
// create variable that will be used to iterate loop
// create while loop that iterates through each letter of the given word
//   create if statement
//     expression that evaluates if letter is lowercase, if so assign true to variable and increment loop variable
//     use comparison between character and character after toLowerCase() method
//     else statement that assigns false to variable, second line for break from loop
// return boolean variable
