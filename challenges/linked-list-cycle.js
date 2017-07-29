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


var Node = function(value) {
  this.value = value;
  this.next = null;
}

//check if head is valid
//as you go through the list, you need to keep a track of the values 
//check whether the head.next value matches any of the previous values
//return true/false

function hasCycle(head) {
  //set two pointers
  let prev = head;
  let curr = head.next; 
  
  while(true) {
    //if there is no current value or next value, it's false
    if(!curr || !curr.next) return false;
    //if the current value or the current next value matches a previous value, it's true;
    else if(curr === prev || curr.next === prev) return true;
    //traverse through the list and reassign prev and current 
    else prev = prev.next; curr = curr.next.next;
  }
  
}

module.exports = {Node: Node, hasCycle: hasCycle}








