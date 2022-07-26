/* exported zip */
// receive first and second as arguments
// create a variable for a new array
// create an if statement that evaluates which given array has a lesser length
//   if first < second, var arrayLength = first
//   if second < first, var arrayLength = second
// create a for loop that iterates the length of arrayLength
//   create a variable for a new temporary array
//   assign the iterative index of each array to the new temporary array
//   assign the new temporary array to the new array
// return the new array

function zip(first, second) {
  var zipArray = [];
  if (first.length <= second.length) {
    var arrayLength = first.length;
  } else {
    arrayLength = second.length;
  }
  for (var i = 0; i < arrayLength; i++) {
    var arrayBox = [first[i], second[i]];
    zipArray[i] = arrayBox;
  }
  return zipArray;
}

// receive first and second as arguments
// create a variable for a new array
// create an if statement that evaluates which given array has a lesser length
//   if first < second, var arrayLength = first
//   if second < first, var arrayLength = second
// create a for loop that iterates the length of arrayLength
//   create a variable for a new temporary array
//   assign the iterative index of each array to the new temporary array
//   assign the new temporary array to the new array
// return the new array
