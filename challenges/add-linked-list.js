/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let carry = 0; 
  let list = new Node(); 
  let result = list;
  let sum; 
  while (l1) {
	sum = l1.value + l2.value + carry; 
  	if (sum >= 10) {
  		sum -= 10;
  		carry = 1;  
  	} else {
  		carry = 0; 
  	}
  	result.value = sum; 
  	if (l1.next || carry > 0) result.next = new Node(); 
  	result = result.next; 
  	l1 = l1.next; 
  	l2 = l2.next; 
  }

  if (carry > 0) {
    result.value = 1; 
  }
  return list; 
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
