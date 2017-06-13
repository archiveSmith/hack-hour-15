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
  let temp = head;
  let length;
  let i;

  //initiate length variable to count the number of nodes 
  while(temp !== null) {
    temp = temp.next;
    length++;
  }
  //make sure the k is less than the length
  if(length < k) return;
  temp = head;
  
  //start to find specified node from the beginning
  for(i = 1; i <= length-k; i++) {
    temp = temp.next;
  }
  return temp.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
