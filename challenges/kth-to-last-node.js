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
// first find length of the list
// then navigate to index of length - k
  if (!head) return undefined;
  let currentNode = head;
  console.log(currentNode.value);
  let length = 0;
  while (currentNode) {
    currentNode = currentNode.next;
    length += 1;
  }
  if (length === 0 || k > length) return undefined;
  currentNode = head;
  let count = 0;
  while (count < length - k) {
    currentNode = currentNode.next;
    count += 1;
  }
  return currentNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
