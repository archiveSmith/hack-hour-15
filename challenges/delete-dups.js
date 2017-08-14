/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */
//
// function Node(val) {
//   this.value = val;
//   this.next = null;
// }

function deleteDups(head) {
  const buffer = [ head.value ];
  let node = head;
  while(node.next) {
    if (buffer.indexOf(node.next.value) === -1) {
      buffer.push(node.next.value);
      node = node.next;
    } else {
      const pointer = node.next.next;
      if (pointer) {
        node.next.value = pointer.value;
        node.next.next = pointer.next;
        node.next = node.next;
      } else {
        node.next = null;
      }
    }
  }
  return head;
}

// let l1 = new Node(0);
// let l2 = new Node(0);
// let l3 = new Node(0);
// let l4 = new Node(1);
// let l5 = new Node(0);
//
// l1.next = l2;
// l2.next = l3;
// l3.next = l4;
// l4.next = l5;

// console.log(l1);
//
// const test = JSON.stringify(deleteDups(l1));
// console.log('result: ', test);
// console.log(l1);

module.exports = deleteDups;
