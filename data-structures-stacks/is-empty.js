/* exported isEmpty */

function isEmpty(stack) {
  const isEmpty = (stack.peek() === undefined);
  return isEmpty;
}
