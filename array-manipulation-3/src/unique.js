/* exported unique */
// receive array as an argument
// create a variable for the new array
// create a variable for the index of the new array
// create a for loop that iterates through the given array
//   create an if statement that evaluates the indexOf for each value in the given array
//     if indexOf === -1, assign the value to the current index of the new array
//       increment the index variable
// return the new array

function unique(array) {
  var uniqueArray = [];
  var uniqueIndex = 0;
  for (var i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray[uniqueIndex] = array[i];
      uniqueIndex++;
    }
  }
  return uniqueArray;
}

// receive array as an argument
// create a variable for the new array
// create a variable for the index of the new array
// create a for loop that iterates through the given array
//   create an if statement that evaluates the indexOf for each value in the given array
//     if indexOf === -1, assign the value to the current index of the new array
//       increment the index variable
// return the new array
