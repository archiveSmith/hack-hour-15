/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.length = 0;
  this.max;
  this.newMax;
  this.push = (value) => {
    this.storage[this.length] = value;
    if (this.length === 0) {
      this.max = new Node(value);
    }
    if (this.length !== 0 && this.storage[this.length] > this.storage[this.length - 1]) {
      this.newMax = new Node(value)
      this.newMax.next = this.max;
      this.max = this.newMax;
    }
    this.length += 1;
  };
  this.pop = () => {
    let popped = this.storage[this.length - 1];
    if (popped === this.max.value) {
      this.max = this.max.next;
    }
    this.length -= 1;
    return popped;
  };
  this.getMax = () => {
    return (this.length === 0) ? undefined : this.max.value;
  };
}

function Node(val) {
  this.value = val;
  this.next = null;
}

let stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(1);
stack.push(0);
console.log(stack)
console.log(stack.getMax());
module.exports = Stack;