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
  if (this.head !== null) {
    this.head = this.tail = new Node(val);
    return;
  }
  let currentNode = this.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  currentNode.next = new Node(val);
  currentNode.next.prev = currentNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.val === val) {
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
    }
    currentNode = currentNode.next;
  }
};

module.exports = LinkedList;
