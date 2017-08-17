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

function kthToLastNode(k, head) {
  let countFromHead = [];
  // traverse all nodes until tail, store all values in order, and return kth value from last node
  for (let i = head; i !== null; i = i.next) {
    countFromHead.push(i.value);
  }
  return countFromHead[countFromHead.length - k];
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
