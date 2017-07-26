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
// iterate through lists and add numbers. if an addition is greater than 10, carry the one over to l1's next value.

function addLinkedList(l1, l2) {
  const l3 = new Node(0);
  let pointer = l3;

  while (l1 && l2){
    let value = l1.value + l2.value;
    let temp = 0;

    if (value >= 10) {
      temp = 1;
      value = value - 10;
      if (l1.next) {
        l1.next.value += 1;
      } else {
        l1.next = new Node(1);
        l2.next = l2.next || new Node(0);
      }
    }

    pointer.value = value;
    l1 = l1.next;
    l2 = l2.next;

    if (l1 && l2) {
      pointer.next = new Node(0);
    } else {
      // console.log("l1, l2: ", l1, l2);
      pointer.next = l1 ? l1 : l2;
      // console.log("pointer: ", pointer);
    }
    pointer = pointer.next;
  }

  return l3;
}

// const l1 = new Node(5);
// l1.next = new Node(1);
// l1.next.next = new Node(4);
// const l2 = new Node(5);
// l2.next = new Node(6);
// l2.next.next = new Node(6);
// l2.next.next.next = new Node(1);
// l2.next.next.next.next = new Node (3);
// // 0 8 0 2 3 null
// // 7 7 0 2 3 null
// console.log("l3: ", JSON.stringify(addLinkedList(l1, l2)));
