/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.length = 0;
  this.push = (value) => {
    this.storage[this.length++] = value;
    return this.length;
  };
  this.pop = (value) => {
    if (this.length === 0) return;
    const removed = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length--;
    return removed;
  };
  this.getMax = () => {
    const positionOfMax = Object.keys(this.storage).reduce((max, element) => {
      if (this.storage[element] > this.storage[max]) return element;
      else return max;
    });
    return this.storage[positionOfMax];
  };
}

module.exports = Stack;
