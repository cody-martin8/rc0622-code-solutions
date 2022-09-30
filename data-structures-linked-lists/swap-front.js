/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const next = list.data;
  list.data = list.next.data;
  list.next.data = next;
  return list;
}
