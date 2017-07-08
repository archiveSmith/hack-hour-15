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
  // Create new linked list
  let lNew;
  let curNew;
  
  // Store current nodes and ticker (1 or 2)
  let cur1 = l1;
  let cur2 = l2;
  let tick = 1;
  
  // Loop through lists while there is at least one node left
  while (cur1 || cur2) {
  
    // if ticker is 1
    if (tick === 1) {
  
      // Add current node 1 to new list
      if (!lNew) {
        lNew = cur1;
        curNew = lNew
      }
      else {
        curNew.next = cur1;
        curNew = cur1;
      }
  
      // Increment current node 1
      cur1 = cur1.next;
  
      // If there are more node 2's, set ticker to 2
      if (cur2) tick = 2;
  
    }
    // if ticker is 2
    else if (tick === 2) {
  
      // Add current node 2 to new list
      if (!lNew) {
        lNew = cur2;
        curNew = lNew
      }
      else {
        curNew.next = cur2;
        curNew = cur2;
      }
  
      // Increment current node 2
      cur2 = cur2.next;
  
      // If there are more node 1's, set ticker to 1
      if (cur1) tick = 1;
      
    }
  }
    
  // return new list
  return lNew;
};

module.exports = {Node: Node, zip: zip};
