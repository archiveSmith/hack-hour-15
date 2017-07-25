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

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let newVal = // just first digit of l1.value + l2.value
  let carry = // trailing digits of l1.value + l2.value
  
  let newList = new Node(newVal);

  let lst1 = l1.next;
  let lst2 = l2.next;

  while (lst1 || lst2) {
    newVal = // just first digit of lst1.value + lst2.value + carry
    carry = // trailing digits of lst1.value + lst2.value + carry

    newList.next = newNode(newVal);
  }

  // if lst1 || lst2 , add them as newList.next
  return newList
}

module.exports = {Node: Node, addLinkedList: addLinkedList};