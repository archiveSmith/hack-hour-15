/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body..
  this.size = 0;
  this.storage = {};
  this.maxstorage = [];
}

Stack.prototype.push = function(data)  {
  this.storage[this.size] = data;
  this.size += 1;
  if (!this.maxstorage.length || data > this.maxstorage[this.maxstorage.length-1]) {
    this.maxstorage.push(data)
  }
  return this.size;
}

Stack.prototype.pop = function() {
  let temp = this.storage[this.size];
  delete this.storage[this.size];
  if (temp === this.maxstorage[-1]) {
    this.maxstorage.pop();
  }
  this.size -= 1;
  return temp;
}

Stack.prototype.getMax = function() {
  return this.maxstorage[this.maxstorage.length-1]
}


module.exports = Stack;