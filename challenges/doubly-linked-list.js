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
  let currNode = new Node(val);
  if (!this.head) {
    this.head = currNode;
    this.tail = currNode;
  } else {
    currNode.prev = this.tail;
    this.tail.next = currNode;
    this.tail = currNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // Find the first instance of node w/ inputted value
  let currNode = this.head;
  while (currNode) {
    if (currNode.val === val) {
      // console.log('this conditional is hit');
      currNode.prev.next = currNode.next;
      return currNode;
    } else {
      currNode = currNode.next;
    }
  }
  return false;

  // Connect the previous node w/ the next node
  
};

// let listOf3 = new LinkedList;
// listOf3.add(1);
// listOf3.add(2);
// listOf3.add(3);

// console.log('remove', listOf3.remove(3));

module.exports = LinkedList;
