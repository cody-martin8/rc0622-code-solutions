/* exported intersection */
// receive first and second as arguments
// create a variable for a new array
// create a for loop that iterates through the first array
//   create an if statement that evaluates whether a value in the first array appears in the second array
//   if so, push the value into the new array
// return the new array

function intersection(first, second) {
  var intersectionArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      intersectionArray.push(first[i]);
    }
  }
  return intersectionArray;
}

// receive first and second as arguments
// create a variable for a new array
// create a for loop that iterates through the first array
//   create an if statement that evaluates whether a value in the first array appears in the second array
//   if so, push the value into the new array
// return the new array
