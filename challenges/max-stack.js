/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
this.count = 0;
this.storage = {}
}

Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
    return this.count;
}
  
Stack.prototype.pop = function() {
    if (this.count === 0) {
        return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}

Stack.prototype.getMax = function() {
  let max = -Infinity;
  for (prop in this.storage){
    if (this.storage[prop]>max){
      max = this.storage[prop]
    }
  }
  return max;
}
let myStack = new Stack;
myStack.push(5);
myStack.push(2);
myStack.push(7);

console.log(myStack);
console.log(myStack.push(9));
console.log(myStack.pop());
console.log(myStack.getMax());
module.exports = Stack;