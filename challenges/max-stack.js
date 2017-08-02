/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

// Push
// Pop
// getMax
  // retrieves the maximum value from the stack

function Stack() {
  this.data = {};
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this.data[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function() {
  if (this.length > 0) {
    const poppedEle = this.data[this.length - 1];
    this.length--;
    return poppedEle;
  }
  return undefined;
};

Stack.prototype.getMax = function() {
  const values = Object.values(this.data);
  return Math.max(...values);
};

// const testStack = new Stack;
// testStack.push(2);
// testStack.push(5);
// testStack.push(10);
// testStack.getMax();
// testStack.pop();
// testStack.pop();
// testStack.pop();
// testStack.pop();

module.exports = Stack;

// We create an array for our maxStack
// Check to see if our maxStack is empty
// Object with the # and the corresponding index
