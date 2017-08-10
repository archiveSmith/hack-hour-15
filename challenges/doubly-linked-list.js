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

  if(this.head === null) this.head = newNode;
  
  if (this.tail) this.tail.next = newNode;
  newNode.prev = this.tail;

  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let cur = this.head;
  while (cur.next) {
    if (cur.val === val) {
      cur.next.prev = cur.prev;
      cur.prev.next = cur.next;
      break;
    } else {
      cur = cur.next;
    }
  }
};

const list = new LinkedList();

module.exports = LinkedList;
