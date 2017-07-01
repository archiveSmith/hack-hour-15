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
  //currentNode
  //tempNode
  //!li return l2
  //!l2 return l1
  //!li && !l2 return null
  let currentNode1 = l1;
  let currentNode2 = l2;
  let tempNode1 = l1;;
  let tempNode2 = l2;
  
  while(currentNode1 && currentNode2) {
  //assign the moving node to the next
  if(tempNode1) {
    tempNode1 = tempNode1.next;
  }
  if(tempNode2) {
    tempNode2 = tempNode2.next;
  }

  //zip zip
  currentNode1.next = currentNode2;
  if(tempNode1) {
    currentNode2.next = tempNode1;
  }
  //
  [currentNode1, currentNode2] = [tempNode1, tempNode2];
}
return l1 ? l1 : l2;

};

module.exports = {Node: Node, zip: zip};
