/* exported countValues */

function countValues(stack) {
  let values = null;
  let i = -1;
  while (values !== undefined) {
    values = stack.pop();
    i++;
  }
  return i;
}
