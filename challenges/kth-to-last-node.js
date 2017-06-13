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
  if (!head){ return undefined }
  const list = []
  let curNode = head
  while(curNode){
    list.push(curNode)
    curNode = curNode.next
  }
  let index = list.length - k
  let targetNode = list[index]
  return (targetNode) ? targetNode.value : undefined
}

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// const f = new Node('F')
// console.log(kthToLastNode(2, b)) // D
// console.log(kthToLastNode(2, f)) // undefined
// console.log(kthToLastNode(1, f)) // F

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
