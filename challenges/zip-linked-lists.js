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
  let l3;
  // iterate until we're out of l2s, then l1 should fall in place.
  while (l2){
    let l3 = Object.assign({},l1.next);
    l1.next = Object.assign({},l2);
    l1.next.next = l3;
    l1 = l1.next.next;
    l2 = l2.next;
  }
};




module.exports = {Node: Node, zip: zip};
