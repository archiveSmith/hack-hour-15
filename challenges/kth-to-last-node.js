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
  // FIRST option: create array to store values 
  const valuesArr = []; 

  // traverse through list
  if (head === null) return undefined; 
  if (head.next === null) return undefined; 

  let traverse = head; 
  while (traverse.next !== null) {
    valuesArr.push(traverse.value); 
    traverse = traverse.next; 
  }
  valuesArr.push(traverse.value); // makes sure to push the last value in linked list to valuesArr

  // Return value on the second to last node: 
  return valuesArr[valuesArr.length - k]; 
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
