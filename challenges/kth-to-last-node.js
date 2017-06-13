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
  if (k === 0) k = 1;
  let length = getLength(head)-k;
  if (length < 0) return head.value;
  let currNode = head;
  while (length) {
    currNode = currNode.next;
    length -= 1;
  }
  return currNode.value;
}

function getLength(head) {
  let length = 0;
  let currNode = head;
  while(currNode) {
    length++;
    currNode = currNode.next;
  }
  return length;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(kthToLastNode(10, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
