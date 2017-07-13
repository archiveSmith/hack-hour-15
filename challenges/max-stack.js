/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.contents = [];
  this.length = 0;
} 

Stack.prototype.push = function(val) {
  this.contents[this.length] = val
  this.contents.length = this.length+1
  this.length++;
  return this.contents;
}

Stack.prototype.pop = function() {
  let poppedValue = this.contents[this.length]
  this.contents.length = this.length-1
  this.length--;
  return poppedValue;
}

Stack.prototype.getMax = function() {
  let array = this.contents
  return Math.max(...array)
}

module.exports = Stack;