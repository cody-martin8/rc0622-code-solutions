/* exported dropRight */
// receive array and count as arguments
// create variable for new array
// create variable for while loop
// create if statement that checks whether the given array has any values, using comparison to undefined
//   if true, return dropRightArray
// create else statement that runs the following:
//   create while loop that iterates through the length of the loop, minus the count
//     select each variable using the iterative variable
//     push each selected variable into the new array
//     increment the iterative variable
//   return the new array

function dropRight(array, count) {
  var dropRightArray = [];
  var i = 0;
  if (array[0] === undefined) {
    return dropRightArray;
  } else {
    while (i < array.length - count) {
      dropRightArray.push(array[i]);
      i++;
    }
    return dropRightArray;
  }
}

// receive array and count as arguments
// create variable for new array
// create variable for while loop
// create if statement that checks whether the given array has any values, using comparison to undefined
//   if true, return dropRightArray
// create else statement that runs the following:
//   create while loop that iterates through the length of the loop, minus the count
//     select each variable using the iterative variable
//     push each selected variable into the new array
//     increment the iterative variable
//   return the new array
