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
	//if adding the first node;
	if(this.tail === null) {
		this.tail = new Node(val);
		this.head = this.tail
	} else {
		let temp = new Node(val);
		temp.prev = this.tail;
		//point the next value to temp
		this.tail.next = temp;
		//poing the tail to temp
		this.tail = temp;
	}
};

/*
Removes the first node with the inputted value
 */
 
LinkedList.prototype.remove = function(val) {
  	let removed = null;
  	if(this.head !== null) {
  		removed = this.head.val;
  		if(this.head === this.tail) {
  			this.head = null;
  			this.tail = null;
  		} else {
  			this.head = this.head.next;
  			this.head.prev = null;
  		}
  	}

  	return removed;

};


module.exports = LinkedList;
