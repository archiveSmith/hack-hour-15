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

// Best Solution
  // Create 2 pointers that start at the beginning of the linked list
  // Pointer A has 2x the speed of Pointer B
  // If the Pointers overlap, this is a cyclical linked list
    // Otherwise, it is not.
  // What happens if the next position does not exist?
/*








*/

  
var Node = function(value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {
  let pointerA = head.next;
  let pointerB = head.next.next;
  while (pointerA && pointerB) {
    if (pointerA === pointerB) return true;
    pointerA = pointerA.next;
    if (pointerB.next) {
    pointerB = pointerB.next.next;
    } else {
      break;
    }
  }
  return false;
}

// Problem -> we are not breaking out of the loop!

var node1 = new Node('1');
var node2 = node1.next = new Node('2');
var node3 = node2.next = new Node('3');
var node4 = node3.next = new Node('4');
var node5 = node4.next = new Node('5');
// console.log(hasCycle(node1)); // => false
node5.next = node2; 
console.log(hasCycle(node1)); // => true

module.exports = {Node: Node, hasCycle: hasCycle}

// Compare objects by reference, using the equality operator to check if variables point to the same object
  // Iterate through the linked list
  // Check if the current node against all the other nodes in the list
    // A -> B, C, D, E
    // B -> C, D, E
    // C -> D, E
    // D -> E

  // This would be a n^2 solution




  function hasCycle(head) {
    if (!head || !head.next) return false;

    let tortoise = head;
    let hare = head.next;

    // Conditional for hare.next instead of tortoise and hare
    while (hare && hare.next) {
      if (tortoise === hare) return true;
      tortoise = tortoise.next;
      hare = hare.next.next;
    }
    return false;
  }