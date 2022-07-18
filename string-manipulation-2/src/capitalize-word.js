/* exported capitalizeWord */
// receive a word as an argument
// create a variable to receive the string result
// create a variable to iterate a while loop
// create an if statement that will screen for empty(undefined) strings
//   if undefined, return the string result variable
// create an else statement that runs the following code:
//   create a while loop that iterates through the length of the given word
//     select each letter using the iterative variable
//     create an if statement that checks if the letter is the first letter in the word
//       if first letter, make it uppercase
//     create an else statement
//       if not the first letter, make it lowercase
//     return string result
// create an if statement that asks if the string result is Javascript
//   if so, capitalize the s and return the string result
//   else, return the string result

function capitalizeWord(word) {
  var capitalizedWord = '';
  var i = 0;
  if (word === undefined) {
    return capitalizedWord;
  } else {
    while (i < word.length) {
      if (i === 0) {
        capitalizedWord += word[i].toUpperCase();
        i++;
      } else {
        capitalizedWord += word[i].toLowerCase();
        i++;
      }
    }
  }
  if (capitalizedWord === 'Javascript') {
    capitalizedWord = 'JavaScript';
    return capitalizedWord;
  } else {
    return capitalizedWord;
  }
}

// receive a word as an argument
// create a variable to receive the string result
// create a variable to iterate a while loop
// create an if statement that will screen for empty(undefined) strings
//   if undefined, return the string result variable
// create an else statement that runs the following code:
//   create a while loop that iterates through the length of the given word
//     select each letter using the iterative variable
//     create an if statement that checks if the letter is the first letter in the word
//       if first letter, make it uppercase
//     create an else statement
//       if not the first letter, make it lowercase
//     return string result
// create an if statement that asks if the string result is 'Javascript'
//   if so, change the string result to 'JavaScript' and return the result
//   else, return the string result
