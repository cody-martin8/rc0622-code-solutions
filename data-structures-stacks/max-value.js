/* exported maxValue */

function maxValue(stack) {
  let max = -Infinity;
  let value = null;
  while (value !== undefined) {
    value = stack.pop();
    if (max < value) {
      max = value;
    }
  }
  return max;
}
