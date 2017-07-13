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
  this.max = null;

  this.push = function (val) {
    this.storage[this.length] = val;
    if (val > this.max || this.max === null) this.max = val;
    this.length += 1;
  }

  this.pop = function () {
    if (this.length === 0) return;
    const valToPop = this.storage[this.length - 1];
    this.length -= 1;
    if (valToPop === this.max) this.setNewMax();
    return valToPop;
  }

  this.setNewMax = function () {
    if (this.length === 0) return this.max = null;

    let max = this.storage[0];
    for (let i = 0; i < this.length; i += 1) {
      if (this.storage[i] > max) max = this.storage[i];
    }

    return this.max = max;
  }
}

module.exports = Stack;
