/* exported take */
// receive array and count as arguments
// create variable for new array
// create variable for while loop that iterates from 0
// create while loop that iterates through the count of the length of the array
//   select each element in the array using the iterative variable
//   push each selected element into the new array
//   increment the iterative variable
// return the new array

function take(array, count) {
  var takeArray = [];
  var i = 0;
  if (array[0] === undefined) {
    return takeArray;
  } else {
    while (i < count) {
      takeArray.push(array[i]);
      i++;
    }
    return takeArray;
  }
}

// receive array and count as arguments
// create variable for new array
// create variable for while loop that iterates from 0
// create if statement
//   expression that checks whether there are any elements in the given array, using undefined in the comparison
//   if true, return takeArray as an empty array
// create else statement that runs the following:
//   create while loop that iterates through the count of the length of the array
//     select each element in the array using the iterative variable
//     push each selected element into the new array
//     increment the iterative variable
//   return the new array
