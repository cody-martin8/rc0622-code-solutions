/* exported reverse */
// receive array as argument
// create variable for new array
// create variable to increment in while loop, set equal to length of the given array
// create while loop that runs duration of the length of the given array
//   for the expression of the loop, increment down from the length of the array
//     to 0 to create an inverse order
//   select elements in the given array using their position at i
//   push selected elements into new array
//   decrement i by 1
// return new array

function reverse(array) {
  var reverseArray = [];
  var i = array.length - 1;
  while (i >= 0) {
    reverseArray.push(array[i]);
    i--;
  }
  return reverseArray;
}

// receive array as argument
// create variable for new array
// create variable to increment in while loop, set equal to length of the given array
//   make sure that this is length - 1, to show the last element in the array
// create while loop that runs duration of the length of the given array
//   for the expression of the loop, increment down from the length of the array
//     to 0 to create an inverse order
//   select elements in the given array using their position at i
//   push selected elements into new array
//   decrement i by 1
// return new array
