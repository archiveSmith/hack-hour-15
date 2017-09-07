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
  let node1 = l1;
  let node2 = l2;
  let carry = 0;
  let currentSum;
  const newLinkedList = new Node(null);
  let currentNode = newLinkedList;

  while (node1 || node2) {
    currentSum = carry + (node1 ? node1.value : 0) + (node2 ? node2.value : 0);
    carry = Math.floor(currentSum / 10)
    currentNode.value = currentSum % 10;
    node1 = node1.next ? node1.next : 0;
    node2 = node2.next ? node2.next : 0;
    currentNode.next = new Node(null);
    currentNode = currentNode.next;
  }

  currentNode.next = null;

  return newLinkedList;
};

const ll = new Node(2);
ll.next = new Node(1);
ll.next.next = new Node(5);

const ll2 = new Node(5);
ll2.next = new Node(9);
ll2.next.next = new Node(2);

console.log(addLinkedList(ll, ll2));


module.exports = {Node: Node, addLinkedList: addLinkedList};