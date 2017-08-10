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
  if (this.head && this.tail) {
    // make a new node
    const newNode = new Node(val);
    // set the tail to it's previous
    newNode.prev = this.tail;
    // set the tail's next to it
    this.tail.next = newNode;
    // set it as the new tail
    this.tail = this.tail.next;
  } else {
    this.head = this.tail = new Node(val);
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currentNode = this.head;
  // loop thru and check the values
  while (currentNode) {
    if (currentNode.val === val) {
      console.log('value match:', val)
      if (currentNode.prev) currentNode.prev.next = currentNode.next ? currentNode.next : null
      else this.head = currentNode.next
      
      if (currentNode.next) currentNode.next.prev = currentNode.prev ? currentNode.prev : null
      else this.tail = currentNode.prev
        
      break
    }
    currentNode = currentNode.next
  }
};

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
list.add(4);

console.log(list.head.val);
console.log(list.tail.val);

list.remove(4);

console.log(list.head.val);
console.log(list.tail.val);


module.exports = LinkedList;
