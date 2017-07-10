/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
  let popped = this.storage[this.index-1];
  delete this.storage[this.index-1];
  this.index--;
  return popped;
};

/**
* Queue Class
*/


function Queue() {
  this.in = new Stack();
  this.out = new Stack();
}

Queue.prototype.enqueue = function(value) {
  this.in.push(value);
};

Queue.prototype.dequeue = function() {
  if (Object.keys(this.out.storage).length === 0) {
    while (Object.keys(this.in.storage).length !== 0) {
      this.out.push(this.in.pop());
    }
  }
  return this.out.pop();
};

module.exports = {Stack: Stack, Queue: Queue};
