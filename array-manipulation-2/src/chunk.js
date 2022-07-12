/* exported chunk */
// receive array and size as arguments
// create variable for new array
// create variable for while loop
// create variable for inner while loop
// create while loop that iterates through the length of the array
//   create variable for array chunk
//   create while loop that iterates through the size
//     select elements in the array, push them into the array chunk
//     increment both loops
//   push the array chunk into the new array
//   reset the count for the inner loop
// return the new array

function chunk(array, size) {
  var i = 0;
  var n = 0;
  var chunkArray = [];
  while (n < array.length) {
    var chunkSubArray = [];
    while (i < size && n < array.length) {
      chunkSubArray.push(array[n]);
      i++;
      n++;
    }
    chunkArray.push(chunkSubArray);
    i = 0;
  }
  return chunkArray;
}

// receive array and size as arguments
// create variable for new array
// create variable for while loop
// create variable for inner while loop
// create while loop that iterates through the length of the array
//   create variable for array chunk
//   create while loop that iterates through the size
//     make sure that this while loop also has a condition for the length of the array
//     select elements in the array, push them into the array chunk
//     increment both loops
//   push the array chunk into the new array
//   reset the count for the inner loop
// return the new array
