/* exported union */
// receive first and second as arguments
// create a variable for a new array
// create a for loop to iterate the first array
//   push each value to the new array
// create another for loop for the second array
//   create an if statement that evaluates whether each value in the second array is already present in the new array
//     if not present, push to the new array

function union(first, second) {
  var unionArray = [];
  for (var i = 0; i < first.length; i++) {
    unionArray.push(first[i]);
  }
  for (var n = 0; n < second.length; n++) {
    if (unionArray.indexOf(second[n]) === -1) {
      unionArray.push(second[n]);
    }
  }
  return unionArray;
}

// receive first and second as arguments
// create a variable for a new array
// create a for loop to iterate the first array
//   push each value to the new array
// create another for loop for the second array
//   create an if statement that evaluates whether each value in the second array is already present in the new array
//     if not present, push to the new array
