/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.maxVal;
  this.stack = {};
  this.length = 0;
  this.getMax = () => {
    return this.maxVal;
  };
  this.newMax = () => {
    this.maxVal = undefined;
    for (i in this.stack) {
      if (this.maxVal === undefined || this.maxVal < this.stack[i]){
        this.maxVal = this.stack[i];
      }
    }
  }
  this.push = (val) => {
    if (this.maxVal === undefined || this.maxVal < val) this.maxVal = val;
    this.stack[this.length]= val;
    return ++this.length;
  }
  this.pop = () => {
    if (this.length === 0) {
      this.maxVal = undefined;
      return;
    }
    const tmp = this.stack[--this.length];
    delete this.stack[this.length];
    if (this.maxVal >= tmp) this.newMax();
    return tmp;
  }
}

// const stack = new Stack();
// stack.push(7);
// console.log(stack.getMax());
// stack.push(100);
// console.log(stack.getMax());
// stack.push(8);
// console.log(stack.stack);
// console.log(stack.getMax());
// console.log(stack.pop());
// console.log(stack.getMax());
// console.log(stack.pop());
// console.log(stack.getMax());
// console.log(stack.pop());
// console.log(stack.getMax());
// console.log(stack.pop());

module.exports = Stack;
