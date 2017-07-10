/**
 * Create a stack.Then create a queue using two stacks.
 */

//
function Stack() {
	this.storage = {};
	this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index]=value;
  this.index++;
};

Stack.prototype.pop = function() {
	this.index--;
	const oldVal = this.storage[this.index];
	delete this.storage[this.index];
	return oldVal; 
}


/**
* Queue Class
*/


function Queue() {
  this.storage = {};
  this.length = 0;
}

Queue.prototype.enqueue = function(value) {
    this.storage[this.length] = value;
    this.length++;

};

Queue.prototype.dequeue = function() {
    if (this.length ===0){
        return undefined;
    } else {
    const result = this.storage[0];
    const newObj = {};
    delete this.storage[0];

    for (let i=1; i<this.length; i++){
        newObj[i-1]=this.storage[i];
    }
    this.length--;
    this.storage = newObj;
    return result;
    }

};




module.exports = {Stack: Stack, Queue: Queue};
