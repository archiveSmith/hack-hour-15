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
  const newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // Traverse through nodes
  let pointer = this.head;
  while (pointer !== null) {
    // find match with val
    if (pointer.val === val) {
      // if head is val to be removed
      if (pointer.prev === null) {
        this.head = this.head.next;
        this.head.prev = null;
        return pointer.val;
      } else if (pointer.next === null) {
        this.tail = this.tail.prev;
        this.tail.next = null;
        return pointer.val;
      } else {
      // connect prev next with current.next
        pointer.prev.next = pointer.next;
        pointer.next.prev = pointer.prev;
        return pointer.val;
      }
    }
    pointer = pointer.next;
  }
  return false;
};

// let list = new LinkedList();
// list.add(5);
// list.add(10);
// list.add(15);

// console.log(list);
// list.remove(15);
// console.log(list)

module.exports = LinkedList;
