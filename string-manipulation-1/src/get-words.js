/* exported getWords */
// receive string as argument
// create variable for new array
// use split method on string directing at space characters
//   assign result of method to new array
// return new array

function getWords(string) {
  var wordsArray = [];
  var i = 0;
  var words = string.split(' ');
  while (i < words.length) {
    if (words[i] === '') {
      i++;
    } else {
      wordsArray.push(words[i]);
      i++;
    }
  }
  return wordsArray;
}

// receive string as argument
// create variable for new array
// create variable for iterating while loop
// use split method on string directing at space characters, assign to new variable
// create while loop that iterates through the length of the array in the new variable
//   create if statement with expression that runs a comparison between each element in the array and ''
//     this will filter out any empty strings from the array
//   increment the iterative variable
//   create an else statement that pushes each non-empty string to the new array variable that was created
//   increment the iterative variable
// return new array
