/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

 function Node(val) {
  this.value = val;
  this.next = null;
}

function KthToLast(k, head) {
  if (k === isNaN || k < 1) return undefined;

  const nodeValues = [];

  while (head !== null) {
    nodeValues.push(head.values);
    head = head.next;
  }
  return nodeValues[nodeValues.length - 1];
}



module.exports = {Node: Node, kthToLastNode: kthToLastNode};
