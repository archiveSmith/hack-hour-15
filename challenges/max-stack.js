/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.contents = {};
  this.length = 0;
}

Stack.prototype.push = function(item) {
  this.contents[this.length] = item;
  this.length += 1;
  return this.length;
}

Stack.prototype.pop = function() {
  const toReturn = this.contents[--this.length];
  delete this.contents[this.length];
  return toReturn;
}

Stack.prototype.getMax = function() {
  let max = -Infinity;
  for(let item in this.contents) {
    console.log(item);
    max = Math.max(max, this.contents[item]);
  }
  return max;
}

module.exports = Stack;