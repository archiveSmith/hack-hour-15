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
    const pointer = this.tail;
    this.tail.next = new Node(val);
    pointer.next.prev = this.tail;
    this.tail = this.tail.next;
    this.tail.next = null;
  } else {
    this.head = this.tail = new Node(val);
    this.tail.prev = this.head;
    this.head.prev = null;
  }

};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head && this.tail) {
    let node = this.head;
    while (node) {
      if (node.val === val) {
        if (node === this.head) {
          const next = node.next;
          this.head = next;
          this.head.prev = prev;
          return node;
        } else if (node === this.tail) {
          const prev = node.prev;
          this.tail = prev;
          this.tail.next = null;
          return node;
        } else {
          const prev = node.prev;
          const next = node.next;
          prev.next = next;
          next.prev = prev;
          return node;
        }
      }
      node = node.next;
    }
    return undefined;
    // value does not exist in list.
  }
};


// const LL = new LinkedList();
// LL.add(3);
// LL.add(4);
// LL.add(5);
// LL.add(6);
// LL.add(7);
// console.log("before: ", LL);
// console.log("REMOVED NODE: ", LL.remove(7));
// console.log("AFTER: ", LL);

module.exports = LinkedList;
