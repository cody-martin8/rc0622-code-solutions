/* exported drop */
// receive array and count as arguments
// create a variable for a new array
// create a variable to iterate a while loop
// create an if statement that checks whether the given array has any elements, using comparison with undefined
//   if true, return dropArray
// create else statement that runs the following:
//   create while loop that iterates through the length of the array starting from the iterative variable
//     select each element in the array using the iterative variable
//     push each selected element into the new array
//     increment the iterative variable
//   return the new array

function drop(array, count) {
  var dropArray = [];
  var i = count;
  if (array[0] === undefined) {
    return dropArray;
  } else {
    while (i < array.length) {
      dropArray.push(array[i]);
      i++;
    }
    return dropArray;
  }
}

// receive array and count as arguments
// create a variable for a new array
// create a variable to iterate a while loop
// create an if statement that checks whether the given array has any elements, using comparison with undefined
//   if true, return dropArray
// create else statement that runs the following:
//   create while loop that iterates through the length of the array starting from the iterative variable
//     select each element in the array using the iterative variable
//     push each selected element into the new array
//     increment the iterative variable
//   return the new array
