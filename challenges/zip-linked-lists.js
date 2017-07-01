/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

// Given 2 linked lists, add nodes so that their nodes alternate
    // Edge Cases
      // l1 or l2 are missing
    // Counter is 0
    // Start with 1st Linked List.
    // Store next node to a variable
    // Link LL1 to LL2
    // Change currNode to the next node
    // Counter is 1
    // Store next node to a variable
    // Link LL2 to lL


    // On the 2nd Node of Linked List, reassign the next node to head of 1st Linked List
    // Store the Linked Lists in variables, so they are easily accessible
      // Reassign the head of the linkedList to the node we cut off
    // Use a while loop to iterate through both linkedLists
      // Use a counter to determine if we should be adding a l1 node or l2 node

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let counter = 0;
  let output = l1;
  let currNode = output;
  let modifiedl1 = l1;
  let modifiedl2 = l2;
  function zipLinkedLists(output, modifiedl1, modifiedl2) {
    // Add l2 node
    if (counter % 2 === 0) {
      // Base Case
      if (modifiedl2 === null) return output;
      else {
        modifiedl1 = currNode.next;
        currNode.next = modifiedl2;
        currNode = currNode.next;
      }
    // Add l1 node
    } else if (counter % 2 === 1) {
      if (modifiedl1 === null) return output;
      else {
        modifiedl2 = currNode.next;
        currNode.next = modifiedl1;
        currNode = currNode.next;
      }
    }
    counter++;
  }
  return zipLinkedLists(l1, modifiedl1, modifiedl2);
};

module.exports = {Node: Node, zip: zip};
