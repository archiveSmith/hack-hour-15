/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let nodeStoreL1 = l1.next;
  let nodeStoreL2 = l2;
  let pointer = l1.next;
  console.log('l1 ', l1);
  console.log('l2', l2);

  // while (pointer !== null) {
  //   // set l1.next to l2
  //   pointer = nodeStoreL2;
  //   // set pointer.next to stored l1
  //   pointer.next = nodeStoreL1;
  //   pointer = pointer.next;
  //   console.log('pointer ', pointer);
  // }
  // console.log('zipped ', l1)
  return l1;
  // return l1 zipped
};

// let list1 = new Node(5);
// let list2 = new Node(4);
// list1.next = new Node(3);
// list1.next.next = new Node(1);
// list2.next = new Node(2);
// list2.next.next = new Node(0);

// console.log(list1, list2);
// console.log(zip(list1, list2))
module.exports = {Node: Node, zip: zip};
