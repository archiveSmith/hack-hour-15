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

//Nodes make a LinkedList
//Each node: this.val, this.next, this.prev
//Last node: this.val, this.next === null, this.prev = 

/*
Adds a node to the end of the list
 */

 LinkedList.prototype.add = function(val) {
	let newNode = new Node(val);
  if(!this.head) {
    this.tail = newNode;
    this.head = this.tail;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

// //recursive 
// lNode.prototype.add = function(val) {
// 	let newNode = new lNode(val);
// 	if(this.next === null) {
		
// 	}
// }

/*
Removes the first node with the inputted value
 */

LinkedList.prototype.remove = function(val) {

  	let currNode = this.head;
  	while(currNode) {
  		if(currNode.val === val) {
  			if(this.tail === currNode) {
  				this.tail = currNode.prev;
  				this.tail.next = null;
  			} else if(this.head === currNode) {
  				this.head = this.head.next;
  				this.head .prev = null;
  			} else {
  				currNode.prev.next = currNode.next;
  				currNode.next.prev = currNode.prev;
  			}
  			return;
  		}
  		
  		currNode = currNode.next;
  	}
  	

};


module.exports = LinkedList;
