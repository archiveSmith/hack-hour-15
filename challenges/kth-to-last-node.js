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
<<<<<<< HEAD

 *
 */
 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');
 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
=======
 */
>>>>>>> 5c4b9ad33d4a403859d225df0b325e000ae9b49d

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
<<<<<<< HEAD
  let nodeVals = [];
  let node = head;

  if(!head){
    return undefined;
  }

  nodeVals.push(head.value);

  while(node.next != null){
    node = node.next;
    nodeVals.push(node.value);
  }

  let kthItem = nodeVals[nodeVals.length - k];

  return kthItem;

}
console.log(kthToLastNode(2, a));
=======

}
>>>>>>> 5c4b9ad33d4a403859d225df0b325e000ae9b49d

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
