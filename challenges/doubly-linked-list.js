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
  let newNode = new Node(val);
  if (!this.head) {
    this.head = this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = this.tail.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currNode = this.head;
  let tempPrev;
  let tempNext;
  if (currNode.val = val) {
    this.head = currNode.next;
    this.head.prev = null;
  }
  while ((currNode.val != val) && ((urrNode.next!=null))) {currNode = currNode.next;
  }
  if (currNode.next!=null) {
    tempPrev = currNode.prev;
    tempNext = currNode.next;
    tempNext.prev = tempPrev;
    tempPrev.next = tempNext;
    console.log("removed from middle");
  } else if (currNode.val === val) {
    currNode = currNode.prev;
    currNode.next = null;
    this.tail = currNode;
    console.log("removed last one");
  } else {
    return "no matching val to remove";
  }
};

module.exports = LinkedList;

let myList = new LinkedList();
myList.add(5);
myList.add(6);
myList.add(7);
myList.remove(1);
console.log(myList);