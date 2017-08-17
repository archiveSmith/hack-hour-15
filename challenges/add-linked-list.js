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
  // head pointer
  let addedList = null;
  let currentNode;
  let tempVal;
  let carryOver = 0;
  // start adding head, store any extra 1s over 9
  // stop adding when it reaches end of one of the lists
  while (l1 !== null && l2 !== null) {
    console.log('in while');
    if (l1.value !== null && l2.value !== null) {
      tempVal = l1.value + l2.value + carryOver;
      if (tempVal > 9) {
        tempVal = tempVal - 10;
        carryOver = 1;
      } else {
        carryOver = 0;
      }
    }
    else if (l1.value !== null) tempVal = l1.value;
    else if (l2.value !== null) tempVal = l2.value;
    console.log(addedList);
    currentNode = new Node(tempVal);
    console.log('current node', currentNode)
    if (addedList === null) {
      console.log('modified addedlist')
      addedList = currentNode;
    }
    console.log(addedList);
    currentNode = currentNode.next;
    l1 = l1.next;
    l2 = l2.next;
  }
  return addedList;
}

let list1 = new Node(2);
list1.next = new Node(1);
list1.next.next = new Node(5);

let list2 = new Node(5);
list2.next = new Node(9);
list2.next.next = new Node(2);

console.log(addLinkedList(list1, list2));
module.exports = {Node: Node, addLinkedList: addLinkedList};
