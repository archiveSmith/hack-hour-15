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

Node.prototype.printLL= (list) => {
  let head = list;
  let str = "";
  while (head.value != null){
      str = str + head.value + '->';
      console.log(str);
      head = head.next;
  }
}

function addLinkedList(l1, l2) {

}

let l1 = new Node(2);
let l1Head = l1;
l1.next = new Node(1);
l1Head = l1.next;
l1Head.next = 5;
console.log("this", l1Head.next)
//l1.next.next.next = 6;
let l2 = new Node(5);
l2.next = 9;
l2.next.next = 2;
console.log(l1);
console.log(l2);
l1.printLL(l1);
//console.log(addLinkedList(l1, l2));

module.exports = {Node: Node, addLinkedList: addLinkedList};