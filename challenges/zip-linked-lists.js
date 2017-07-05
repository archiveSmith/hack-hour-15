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
  if(!l1) return l2;
  if(!l2) return l1;
  
  let head = l1;
  let temp = l1;
  
  l1 = l1.next; //don't want to start at the head
  //l1 to keep the list
  
  while(l1 && l2) {
    temp.next = l2;
    //keep l2
    l2 = l2.next;
    temp = temp.next;
    temp.next = l1;
    l1 = l1.next;
    temp = l1;
    
  }
  temp.next = l2 ? l2 : l1; 
  return head
}

let list1a = new Node(1);
let list1b = new Node(3);
let list1c = new Node(5);
let list2a = new Node(2);
// let list2b = new Node(4);
// let list2c = new Node(6);

list1a.next = list1b;
list1b.next = list1c;
// list2a.next = list2b;
// list2b.next = list2c;

console.log(zip(list1a, list2a));
// console.log(list2a);

module.exports = {Node: Node, zip: zip};
