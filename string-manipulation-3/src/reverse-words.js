/* exported reverseWords */
// receive string as an argument
// split the string at each space, then split each string with '' within the array
// create a for loop that runs the length of the outer array
//   create a for loop that runs the length of each inner array
//     reverse the order of the array
// use join('') on the inner arrays to put the words back together
// use join(' ') to put the string back together

function reverseWords(string) {
  var stringArray = string.split(' ');
  for (var i = 0; i < stringArray.length; i++) {
    var wordArray = stringArray[i].split('');
    var newWord = [];
    for (var n = 0; n < wordArray.length; n++) {
      newWord.push(wordArray[wordArray.length - n - 1]);
    }
    newWord = newWord.join('');
    stringArray[i] = newWord;
  }
  stringArray = stringArray.join(' ');
  return stringArray;
}

// receive string as an argument
// split the string at each space
// create a for loop that runs the length of the outer array
//   split each smaller string with '' within the array
//   create a variable that can hold the manipulated word
//   create a for loop that runs the length of each inner array
//     reverse the order of the array and push to the new variable
//   use join on the new variable to put the word back together
//   assign the new variable to the current position in the string array
// use join(' ') to put the string back together
