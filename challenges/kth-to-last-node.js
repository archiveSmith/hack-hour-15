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

// kth to last node

function kthToLastNode(k, head) {
  // Find the length of the linked list
  const lengthOfLL = findLengthOfLL(head);
  // Given the integer, k, and the head of a singly linked list
  // Find what kth to the last node is
  const numOfDesiredNode = lengthOfLL - k + 1;
  if (lengthOfLL >= numOfDesiredNode) {
    let currNode = head;
    let counter = 1;
    // Iterate through the linked list to return the value
    while (counter < numOfDesiredNode) {
      counter++;
      currNode = currNode.next;
    }
    return currNode.value;
  } else {
    return undefined;
  }
}

function findLengthOfLL(head) {
  let counter = 0;
  let currNode = head;
  while (currNode) {
    counter++;
    currNode = currNode.next;
  }
  return counter;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
