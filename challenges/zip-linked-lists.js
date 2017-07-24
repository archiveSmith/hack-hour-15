/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

 function LinkedList(){
   this.head = null;
   
 }

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  //edge case
  if (!l1 || !l2){
    return('Please enter two valid node values')
  }
  //if l1 and l2 exist, set l1 and l2 as initial nodes in respective lists
  if (l1 && l2){
    l1 = new Node;
    l2 = new Node;
    //define their next values as their respective .next.next
    l1.next = l2.next.next;
    l2.next = l2.next.next;
  }
};

module.exports = {Node: Node, zip: zip};
