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
LinkedList.prototype.add = function (val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    return newNode;
  }

  let currentNode = this.head;
  while (currentNode.next) currentNode = currentNode.next;
  currentNode.next = newNode;
  newNode.prev = currentNode;
  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  if (!this.head) return;

  // If removing head or tail
  if (this.head.val === val) {
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    return;
  } else if (this.tail.val === val) {
    this.tail = this.tail.prev;
    this.tail.next = null
    return;
  }

  let currentNode = this.head;

  while (currentNode) {
    if (currentNode.val === val) {
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
      return;
    }

    currentNode = currentNode.next;
  }
};

module.exports = LinkedList;
