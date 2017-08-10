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
1. Update the next of the current tail to point to the new node
2. Set the prev of the new node to point to the old tail
3. Update the tail to point to the new node
 */
LinkedList.prototype.add = function(val) {
  const newNode = new Node(val);
  // If no tail, set the new node to the head and tail
  if (!this.tail) this.head = this.tail = newNode;
  else {
    // Set the tail's next to new node
    this.tail.next = newNode;
    // Set the new node's prev to the tail
    newNode.prev = this.tail;
    // Set the tail to the new node
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
1. Find the first node with val
2. Set found's next's prev to founds' prev
3. Set found's prev's next to found's next
 */
LinkedList.prototype.remove = function(val) {
  // Iterate through the list
  let cur;
  for (cur = this.head; cur && cur.val !== val; cur = cur.next) {}
  if (cur) {
    // Set found's next's prev to founds' prev
    cur.next.prev = cur.prev;
    // Set found's prev's next to found's next
    cur.prev.next = cur.next;
  }
};

// Tests
// const ll  = new LinkedList();
// ll.add(1);
// ll.add(2);
// ll.add(3);
// ll.remove(2);
// console.log(ll);

module.exports = LinkedList;
