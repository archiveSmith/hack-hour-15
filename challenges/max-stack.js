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

  this.pop = function(){
    if (this.length){
      const element = this.storage[this.length];
      this.storage[this.length] = null;
      this.length--;
      if (element === this.max) this.assignMax();
      return element;
    }
    return undefined;
  }

  this.push = function (value){
    this.length++;
    this.storage[this.length] = value;
    this.max = value > this.max ? value : this.max;
    return this.length;
  }

  this.getMax = function() {
    return this.max === null? undefined: this.max;
  }

  this.assignMax = function() {
    let keys = Object.keys(this.storage);
    this.max = null;
    keys.forEach((ele) => {
      this.max = this.storage[ele] > this.max ? this.storage[ele] : this.max;
    });
  }


}
// astack = new Stack;
//
// console.log(astack.push(1));
// console.log(astack.push(2));
// console.log("max, pushed 1 2: ", astack.getMax());
// console.log(astack.push(1));
// console.log(astack.pop());
// console.log("max, popped 2: ",astack.getMax());
// console.log(astack.pop());
// console.log(astack.pop());
// console.log(astack.storage);
// console.log(astack.push(3));
// console.log(astack.push(6));
// console.log(astack.storage);
// console.log(astack.push(6));
// console.log("max doulbe 6: ", astack.getMax());
// console.log(astack.storage);
// console.log(astack.pop());
// console.log(astack.storage);
// console.log("last max: ", astack.getMax());
// console.log(astack.pop());
// console.log(astack.pop());
// console.log(astack.pop());
// console.log(astack.pop());
// console.log(astack.pop());
// console.log(astack.pop());
// console.log("max: ", astack.getMax());
module.exports = Stack;
