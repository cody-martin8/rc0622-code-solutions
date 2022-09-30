/* exported removeTail */

function removeTail(list) {
  if (list.next === null) return;
  let currentNode = list.next;
  let last = list.data;
  while (currentNode.next !== null) {
    last = currentNode;
    currentNode = currentNode.next;
  }
  last.next = null;
}
