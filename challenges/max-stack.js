/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

// Push method
  // have an array and index
  // set the value equal to the last index of that array
  // increment index

// Pop method
  // if index is 0, array is empty and return
  // else return array[index -= 1]

// getMax method
  // return max variable

function Stack() {
  this.store = [];
  this.index = 0;
  this.max = -Infinity;

  this.push = (val) => {
    this.store[this.index++] = val;
    if (val  > this.max) this.max = val;
    return;
  }

  this.pop = () => {
    return this.index === 0 ? undefined : this.store[--this.index];
  }

  this.getMax = () => {
    return this.max;
  }
  
}

module.exports = Stack;