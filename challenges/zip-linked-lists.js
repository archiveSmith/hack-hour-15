/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */
let newl;

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (l1){ 
  newl = l1;
  } else {
    return l2;
  }
 while(l1 && l2){
  newl = newl.next
  l1 = l1.next;
  newl.next = l2;
  l2 = l2.next;
  newl.next = l1;
 }
 return newl;
};

module.exports = {Node: Node, zip: zip};
node1 = new Node("A");
node2 = new Node("B");
node1.next =node2;

node11 = new Node("AA");
node22 = new Node("BB")
node11.next = node22;

let l1 = node1;
let l2 = node11;

console.log(zip(l1, l2))
