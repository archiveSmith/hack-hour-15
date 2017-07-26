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
  let add1 = l1;
  let add2 = l2;
  let carry = 0;
  let sum = null;
  let node;
  while (add1 || add2 || carry) {
    let add = carry;
    carry = 0;
    if(add1) {
      console.log(add);
      add += add1.value;
      add1 = add1.next
    }
    if(add2) {
      console.log(add);
      add += add2.value;
      add2 = add2.next;
    }

    console.log(add);
    if (add >= 10) {
      carry = Math.floor(add / 10);
      add = add % 10;
    }

    if (sum === null) node = sum = new Node(add);
    else {
      node.next = new Node(add);
      node = node.next
    }
  }
  return sum;
}

// const a = new Node(2);
// const b = new Node(1);
// const c = new Node(5);
// const d = new Node(5);
// const e = new Node(9);
// const f = new Node(2);
//
// b.next = c;
// a.next = b;
// e.next = f;
// d.next = e;
//
// console.log(addLinkedList(a, d))

module.exports = {Node: Node, addLinkedList: addLinkedList};
