/* exported getTail */

function getTail(list) {
  let currentNode = list.next;
  let last = list.data;
  while (currentNode !== null) {
    last = currentNode.data;
    currentNode = currentNode.next;
  }
  return last;
}
