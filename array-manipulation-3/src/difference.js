/* exported difference */
// receive first and second as arguments
// create a variable for a new array
// create a for loop that iterates through the first array
//   create an if statement that evaluates the indexOf for each value
//     if second.indexOf() for each value in the first array === -1, push the value to the new array
// create another for loop that iterates the length of the second array
//   create another if statement that does the same for the second array
// return the new array

function difference(first, second) {
  var differenceArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      differenceArray.push(first[i]);
    }
  }
  for (var n = 0; n < second.length; n++) {
    if (first.indexOf(second[n]) === -1) {
      differenceArray.push(second[n]);
    }
  }
  return differenceArray;
}

// receive first and second as arguments
// create a variable for a new array
// create a for loop that iterates through the first array
//   create an if statement that evaluates the indexOf for each value
//     if second.indexOf() for each value in the first array === -1, push the value to the new array
// create another for loop that iterates the length of the second array
//   create another if statement that does the same for the second array
// return the new array
