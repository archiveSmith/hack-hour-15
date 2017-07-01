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
  if (!l2) return l1;
  // holding var
  let l3;
  let head = l1;
  // iterate until we're out of l2s, then l1 should fall in place.
  while (l2){

    let l3 = Object.assign({},l1.next);
    console.log("l3: ", l3);
    l1.next = Object.assign({},l2);
    l1.next.next = l3;
    l1 = l1.next.next;
    l2 = l2.next;
  }

  return head;
};


// let l1 = new Node(1);
// l1.next = new Node(3);
// l1.next.next = new Node(5);
// l1.next.next.next = new Node(7);
// // l2 = new Node(2);
// // l2.next = new Node(4);
// // l2.next.next = new Node(6);
// // l2.next.next.next = new Node(8);
//
//
// zip(l1,l2);
// let values2 = [];
// while (l1){
//   if (l1.value !== undefined){
//     values2.push(l1.value);
//   }
//   l1 = l1.next;
// }
// console.log("AFTER THE ZIP: ");
// console.log(values2);
//
//


module.exports = {Node: Node, zip: zip};
