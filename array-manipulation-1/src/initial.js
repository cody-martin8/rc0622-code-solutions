/* exported initial */
// receive array as argument
// create variable for new array
// create variable for i to run while loop
// create while loop that runs the duration of the length of the given array
//   in the expression of the loop, cut the loop prior to the last element in the array
//   use i as position when selecting elements in the array
//   push each selected element into new array
//   increment i by 1
// return the new array

function initial(array) {
  var initialArray = [];
  var i = 0;
  while (i < (array.length - 1)) {
    initialArray.push(array[i]);
    i++;
  }
  return initialArray;
}

// receive array as argument
// create variable for new array
// create variable for i to run while loop
// create while loop that runs the duration of the length of the given array
//   in the expression of the loop, cut the loop prior to the last element in the array
//   use i as position when selecting elements in the array
//   push each selected element into new array
//   increment i by 1
// return the new array
