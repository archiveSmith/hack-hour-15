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
  // if(l1)
  let rl = new Node(l1.value);
  rl.next = new Node(l2.value);
  let rlref = rl.next;
  let l1ref = l1.next;
  let l2ref  =l2.next;

  while(l1ref.next || l2ref.next) {
    rlref.next = new Node(l1ref.value);
    rlref = rlref.next;
    rlref.next = new Node(l2ref.value);
    if(l1ref.next) l1ref = l1ref.next;
    if(l2ref.next) l2ref = l2ref.next;
  }

  return rl;
};

module.exports = {Node: Node, zip: zip};
