/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

// Test cases
//const t1 = new Node(2);
//t1.next = new Node(1);
////t1.next.next = new Node(5);
//
//const t2 = new Node(5);
//t2.next = new Node(9);
//t2.next.next = new Node(2);
//
//console.log(addLinkedList(t1, t2));

// Input
  // Two linked lists, where the linked lists contain the digits of an integer, starting with the ones digit
// Output
  // A linked list representing the sum of the two inputs

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  // Create sum linked list, carryover
  const sum = new Node();
  let carryover = 0;
  
  // Set current nodes of linked lists
  let c_sum = sum;
  let c_l1 = l1;
  let c_l2 = l2;
  
  // Iterate through the linked lists
  while (c_l1 && c_l2) {
    
    // Find the sum of the current nodes + carryover
    const s = c_l1.value + c_l2.value + carryover;
  
    // Set the current node of the sum linked list to the ones digit of the sum
    c_sum.value = s % 10;
  
    // Set the carryover
    carryover = Math.floor(s / 10);
  
    // Increment the nodes
    c_l1 = c_l1.next;
    c_l2 = c_l2.next;
    
    c_sum.next = c_l1 && c_l2 ? 
      new Node() : 
      c_l1 ?
        c_l1 :
        c_l2;
    
    c_sum = c_sum.next;
    
  }
  
  // Return the sum linked list
  return sum;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};