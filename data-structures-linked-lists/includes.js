/* exported includes */

function includes(list, value) {
  let currentNode = list;
  let include = false;
  while (currentNode !== null) {
    if (currentNode.data === value) {
      include = true;
    }
    currentNode = currentNode.next;
  }
  return include;
}
