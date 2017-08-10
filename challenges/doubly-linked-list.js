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
  if (this.head === null) {
    this.head = this.tail = new Node(val);
  } else {
    this.tail.next = new Node(val);
    [this.tail.next.prev, this.tail] = [this.tail, this.tail.next];
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head === null) return;
  else if (this.head.val === val && this.head === this.tail) {
    this.head = this.tail = null;
  } else if (this.head.val === val) {
    [this.head.next.prev, this.head] = [this.head.prev, this.head.next];
  } else if (this.tail.val === val) {
    [this.tail.prev.next, this.tail] = [this.tail.next, this.tail.prev]
  } else {
    let current = this.head;
    while (current && current.val !== val) current = current.next;
    if (current.val === val) {
      [current.next.prev, current.prev.next] = [current.prev, current.next];
    }
  }
};

// const ll = new LinkedList();
// ll.add(3);
// console.log('first ',ll);
// ll.add(4);
// console.log('second', ll);
// ll.add(5);
// console.log('third', ll)
// ll.remove(4)
// console.log('fourth' , ll)
// ll.remove(5)
// console.log('fifth', ll)

module.exports = LinkedList;
