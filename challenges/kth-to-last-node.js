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
  if (!head || typeof k !== 'number') return;
  let currentNode = head;
  let previousNode = currentNode;
  let nextNode = currentNode.next;

  // Apply .before and Get last node
  while (nextNode) {
    currentNode = nextNode;
    currentNode.before = previousNode;
    previousNode = currentNode;
    nextNode = currentNode.next;
  }

  // Loop backwards
  for (let i = 1; i < k; i += 1) {
    if (!currentNode.before) return currentNode.value;
    currentNode = currentNode.before;
  }

  return currentNode.value;
}

module.exports = {
  Node: Node,
  kthToLastNode: kthToLastNode
};