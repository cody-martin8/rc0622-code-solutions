/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  const appendList = new LinkedList(value);
  let currentNode = list.next;
  let last = list.data;
  while (currentNode !== null) {
    last = currentNode;
    currentNode = currentNode.next;
  }
  last.next = appendList;
}
