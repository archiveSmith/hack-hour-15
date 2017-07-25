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
  let list = new Node(null);
  let temp = list.next;
  while(l1 !== null || l2 !== null){
    if(!list.value && l1){
      list.value = l1.val
    }
    else if(!list.value && l2){
      list = l2
      break
    }
    else{
      if(l1){
         
      }
    }
  }
}

module.exports = {
  Node: Node,
  zip: zip
};