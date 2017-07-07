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
// a->b->c->d->e

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  // change k
let thisK = k-1;

//assign values to array
let newArr = [];
let i = 1;
while (head.next){
  newArr[i] = head.value;
  head = head.next;
  i++;
}

//return kth from last of array
let ind = newArr.length - thisK;
return newArr[ind];

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};


  const a = new Node('A');
  const b = new Node('B');
  const c = new Node('C');
  const d = new Node('D');
  const e = new Node('E');
  const f = new Node('F');
  const g = new Node('G');


  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;
  f.next = g;

  console.log(kthToLastNode(2, a));