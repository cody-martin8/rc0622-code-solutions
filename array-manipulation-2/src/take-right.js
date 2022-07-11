/* exported takeRight */
// receive array and count as arguments
// create variable for a new array
// create a variable to iterate through a while loop
//   use an if statement to ensure that this variable is not less than 0
// create a while loop that iterates through the length of the array starting from the iterative variable value
//   select a value in the array using the iterative variable value as position
//   push the selected value into the new array
//   increment the iterative variable by 1
// return the new array

function takeRight(array, count) {
  var takeRightArray = [];
  var i;
  if (array.length - count < 0) {
    i = 0;
  } else {
    i = array.length - count;
  }
  while (i < array.length) {
    takeRightArray.push(array[i]);
    i++;
  }
  return takeRightArray;
}

// receive array and count as arguments
// create variable for a new array
// create a variable to iterate through a while loop
//   use an if statement to ensure that this variable is not less than 0
//     expression: subtract the count from the length of the array and compare to 0
//     if less than 0, set the iterative variable to 0
//     if greater than 0, set the iterative variable to the value of the expression
// create a while loop that iterates through the length of the array starting from the iterative variable value
//   select a value in the array using the iterative variable value as position
//   push the selected value into the new array
//   increment the iterative variable by 1
// return the new array
