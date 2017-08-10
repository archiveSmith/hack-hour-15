/*
Create a doubly linked list with an add and remove method
 */

function LinkedList(val) {
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
  	this.head = newNode; 
  	return; 
  }
  let current; 
  if (this.tail) current = this.tail; 
  else current = this.head; 
  newNode.prev = current; 
  current.next =  newNode; 
  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (!this.head) return; 
  let current = this.head; 
  if (current.val === val) {
  	this.head = this.head.next; 
  	this.head.prev = null; 
  } else if (this.tail.val === val) {
  	this.tail.prev.next = null; 
  	this.tail = this.tail.prev; 
  }
  else {
  	let next = current.next; 
  	while (next) {
  		if (next.val === val) {
  			current.next = next.next;
  			if (current.next) current.next.prev = current; 
  			return;  
  		}
  		next = next.next; 
  		current = current.next; 
  	}
  }
};

module.exports = LinkedList;
