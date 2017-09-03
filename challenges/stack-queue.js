/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.store = {};
  this.index = 0;
}

Stack.prototype.push = function(val) {
  this.store[this.index++] = val;
}

Stack.prototype.pop = function() {
  return this.index === 0 ? undefined : this.store[this.index-- -1];
}


/**
* Queue Class
*/


function Queue() {
  this.store = {};
  this.index = 0;
}

Queue.prototype.enqueue = function(val) {
  this.store[this.index] = new Stack();
  this.store[this.index++].push(val);
}

Queue.prototype.dequeue = function(val) {
  if(this.index === 0) return undefined;
  let tmp = this.store[0];
  let i = 1;
  while(i < this.index) {
    this.store[i-1] = this.store[i++];
  }
  this.index--;
  return tmp.pop();
}

module.exports = {Stack: Stack, Queue: Queue};
