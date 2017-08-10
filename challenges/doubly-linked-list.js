/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  const node = new Node(val); 
  // Check if empty or one node 
  if (this.head === null)  this.head = this.tail = node; 

  if (this.tail !== null) {
    this.tail.next = node; 
    node.prev = this.tail; 
    this.tail = node; 
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
    // traverse through Doubly Linked List to find the value: 

    let traverse = this.head; 

    while (traverse !== null) {

      // consider edge cases at the head and tail
      if (traverse.val === val && traverse === this.head) {
        this.head = this.head.next; 
        traverse.next = null; 
        this.head.prev = null; 
        traverse = this.head; 
      }

      // tail: 
      if ( traverse.val === val && traverse === this.tail ) {
        this.tail = this.tail.prev; 
        traverse.prev = null 
        this.tail.next = null 
        // done traversing 
      }

      // value found somewhere in the middle. 
      if (traverse.val === val) {
        traverse.prev.next = traverse.next; 
        traverse.next.prev = traverse.prev; 
        // Done traversing, set traverse prev & next values equal to null 
        // for garbage colleciton
        traverse.next = traverse.prev = null; 
      }
      traverse = traverse.next; 
    }
};

module.exports = LinkedList;
