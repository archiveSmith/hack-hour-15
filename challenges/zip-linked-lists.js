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
  // If one of the linked lists does not exist, return the other
  if (!l1) return l2; 
  if (!l2) return l1; 
  // If none of them exist, return undefined
  if (!l1 && !l2) return undefined; 

  // If both linked lists exist, proceed to make zipped list: 
  let head = l1; 
  let traverse1 = l1.next; 
  let traverse2 = l2.next; 

  // Build zipped linke list as long as none of the traverse points to null
  while( traverse1 && traverse2 ) { 
    l1 = traverse1; 
    traverse1 = traverse1.next; 
    l1.next = traverse2; 
    l2 = traverse2; 
    traverse2 = traverse2.next; 
  }

  return head; // Head now points to the beginning of the zipped linked list 
};

module.exports = {Node: Node, zip: zip};
