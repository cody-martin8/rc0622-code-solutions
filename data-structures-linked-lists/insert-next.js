/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const next = new LinkedList(value);
  const secondHalf = list.next;
  list.next = next;
  list.next.next = secondHalf;
}
