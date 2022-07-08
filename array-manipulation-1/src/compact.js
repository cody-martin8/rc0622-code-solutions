/* exported compact */
// function cannot have the following:
//   false, null, NaN, 0, -0, undefined, ''
//   and it must maintain the order of truthy elements
// receive array as argument
// create variable for new array
// create variable for incrementing through the length of the given array
// create while loop w/ expression that spans the length of the given array
//   create if statement with several expressions separated by 'or'
//   if iteration of loop satisfies one of these expressions:
//     simply increment by 1 to move on to next iteration
//   if iteration does not satisfy any of the above expressions:
//     continue to else statement:
//       use incrementing variable to select element in array
//       push selected element into new array
//       increment by 1 to move on to next iteration
// return new array

function compact(array) {
  var compactArray = [];
  var i = 0;
  while (i < array.length) {
    if (array[i] === false || Number.isNaN(array[i]) === true || array[i] === null || array[i] === 0 || array[i] === 1 / -Infinity || array[i] === undefined || array[i] === '') {
      i++;
    } else {
      compactArray.push(array[i]);
      i++;
    }
  }
  return compactArray;
}

// function cannot have the following:
//   false, null, NaN, 0, -0, undefined, ''
//   and it must maintain the order of truthy elements
// receive array as argument
// create variable for new array
// create variable for incrementing through the length of the given array
// create while loop w/ expression that spans the length of the given array
//   create if statement with several expressions separated by 'or'
//     for false, null, 0, undefined, and '':
//       compare selected element to value using strictly equals
//     for NaN:
//       use Number.isNaN method to check if true
//     for -0, compare selected element to an expression that evaluates to -0, as -0 itself creates an error in comparisons
//   if iteration of loop satisfies one of these expressions:
//     simply increment by 1 to move on to next iteration
//   if iteration does not satisfy any of the above expressions:
//     continue to else statement:
//       use incrementing variable to select element in array
//       push selected element into new array
//       increment by 1 to move on to next iteration
// return new array
