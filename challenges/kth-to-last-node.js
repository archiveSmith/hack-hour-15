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

function linkedList(val) {
  this.head;
  this.tail;
} 

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  const newNode = new node();

  if (head === null) {
  	this.head = newNode;
  	this.tail = newNode;
  	return this.value
  } else if (k === 0 || k === undefined) {
  	return  = this.value;
  } else {
  	 this.value = searchNodeAt((linkedList.length) - k)
  	 return this.value;
  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
