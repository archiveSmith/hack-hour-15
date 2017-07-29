/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */


 // possibilities:
 /*
    save a single reference value and loop for awhile before saving a new reference value.
    this would no longer be truly n time because we'd need at least two sets of loops


 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {
  let list = '';
  let pointer = head;

  while (pointer) {
    if (list.indexOf(pointer.value) > -1) {
      if (pointer.next && list.indexOf(pointer.next.value) > -1) {
        return true;
      }

    }
    list += (pointer.value);
    pointer = pointer.next;
  }
  return false;
}

// var node1 = new Node('1');
// var node2 = node1.next = new Node('2');
// var node3 = node2.next = new Node('3');
// var node4 = node3.next = new Node('4');
// var node5 = node4.next = new Node('5');
// console.log(hasCycle(node1)); // => false
// var node6 = node5.next = new Node('2');
// console.log(hasCycle(node1)); // => true
//
//
//


module.exports = {Node: Node, hasCycle: hasCycle}
