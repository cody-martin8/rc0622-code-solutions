/* exported flatten */
// receive array as an argument
// create a variable for a new array
// create a variable that tracks the indexes of the new array as values are given to it
// create an if statement that checks whether the given array is empty
// create a for loop that iterates through the length of the given array
//   create an if statement that checks whether each value in the given array is an array
//     if yes, create a for loop that iterates the child array and assigns each value to the current index value
//       increment the index variable
//     if no, assign the value to the new array at the given index
//       increment the index variable
// return the new array

function flatten(array) {
  var flatArray = [];
  var x = 0;
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (var n = 0; n < array[i].length; n++) {
        flatArray[x] = array[i][n];
        x++;
      }
    } else {
      flatArray[x] = array[i];
      x++;
    }
  }
  return flatArray;
}

// receive array as an argument
// create a variable for a new array
// create a variable that tracks the indexes of the new array as values are given to it
// create an if statement that checks whether the given array is empty
// create a for loop that iterates through the length of the given array
//   create an if statement that checks whether each value in the given array is an array
//     if yes, create a for loop that iterates the child array and assigns each value to the current index value
//       increment the index variable
//     if no, assign the value to the new array at the given index
//       increment the index variable
// return the new array
