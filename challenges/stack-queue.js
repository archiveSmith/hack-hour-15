/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = [];
  this.index = 0;
}

Stack.prototype.addStack = function(value) {
  this.storage[this.index] = value;
  this.index++;
  return value;
}

Stack.prototype.removeStack = function() {
  let removed = this.storage[this.index-1];
  delete this.storage[this.index--];
  return removed;
}



/**
* Queue Class
*/


function Queue() {
  this.incomingStack = new Stack();
  this.goingOutStack = new Stack();
}

Queue.prototype.addQueue = function(value) {
  this.incomingStack.push(value)
  return value;
}

Queue.prototype.removeQueue = function() {
  if(this.goingOutStack.index === 0) {
    if(this.incomingStack.index === 0) return undefined;
    while(this.incomingStack.index > 0) {
      this.goingOutStack.push(this.incomingStack.pop())  		
    }
  }
  return this.goingOutStack.pop();
}

module.exports = {Stack: Stack, Queue: Queue};



