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
<<<<<<< HEAD
  let node = head;
  let nodesAry = [node];
  if (k === 0) return 'Too Small';
  while (node.next) {
    node = node.next;
    nodesAry.push(node);
  }

  if (k > nodesAry.length) {
    return "Too Big";
  }

  return nodesAry[nodesAry.length - k].value;
=======

>>>>>>> 8eb902e5120eef32caf218fce6d338ec5d4c2fe8
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
