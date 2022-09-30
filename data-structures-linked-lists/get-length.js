/* exported getLength */

function getLength(list) {
  let i = 1;
  let currentNode = list.next;
  while (currentNode !== null) {
    currentNode = currentNode.next;
    i++;
  }
  return i;
}
