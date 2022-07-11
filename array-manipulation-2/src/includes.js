/* exported includes */
// receive array and value as arguments
// create a variable to assign a boolean
// create a variable to iterate through a while loop
// create an if statement
//   expression: check against empty arrays using undefined as a comparison
//   if true, return false
// create an else statement that runs the following:
//   create a while loop that iterates through the length of the array
//     create if statement
//       expression: check each element in the array, using the iterative variable, for equality with the given value
//       if true, assign true to the boolean variable
//       break
//     create an else statement
//       if false, assign false to the boolean variable, and increment the iterative variable
//   return boolean variable

function includes(array, value) {
  var result;
  var i = 0;
  if (array[0] === undefined) {
    return false;
  } else {
    while (i < array.length) {
      if (array[i] === value) {
        result = true;
        break;
      } else {
        result = false;
        i++;
      }
    }
    return result;
  }
}

// receive array and value as arguments
// create a variable to assign a boolean
// create a variable to iterate through a while loop
// create an if statement
//   expression: check against empty arrays using undefined as a comparison
//   if true, return false
// create an else statement that runs the following:
//   create a while loop that iterates through the length of the array
//     create if statement
//       expression: check each element in the array, using the iterative variable, for equality with the given value
//       if true, assign true to the boolean variable
//       break
//     create an else statement
//       if false, assign false to the boolean variable, and increment the iterative variable
//   return boolean variable
