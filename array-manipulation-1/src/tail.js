/* exported tail */
// receive array as argument
// within function, create new array that will receive input from push
// create loop that will select all elements in the received array except for position 0
//   push each selected element into created array
// return created array

function tail(array) {
  var tailArray = [];
  var i = 1;
  while (i < array.length) {
    tailArray.push(array[i]);
    i++;
  }
  return tailArray;
}

// receive array as argument
// within function, create new array that will receive input from push
// create while loop that runs as long as the length of the array
//   start the loop from position 1 (i = 1) to exclude the first element
//   select each element with their position i in the given array
//   push each selected element into created array
//   increment i by 1
// return created array
