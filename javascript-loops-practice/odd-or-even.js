/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddOrEvenArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      oddOrEvenArray.push('odd');
    } else {
      oddOrEvenArray.push('even');
    }
  }
  return oddOrEvenArray;
}
