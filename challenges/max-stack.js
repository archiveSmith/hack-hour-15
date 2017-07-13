/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  const data = {};
  let sorted = [];
  
  this.length = 0;
  
  // Returns the top element in the stack
  this.pop = () => {
    if (this.length > 0) {
      // sort the array
      sortStack();
      
      return data[--this.length];
      
    }
  }
  
  // Adds element to the top of the stack
  this.push = (val) => {
    data[this.length++] = val;
    
    // sort the array
    sortStack();
    
    return this.length;
  }
  
  // Created a stack of sorted values
  const sortStack = () => {
    // Sort the data
    sorted = [];
    for (let i = 0; i < this.length; i += 1) {
      sorted.push(data[i]);
    }
    sorted.sort((a,b) => a - b);
  }
  
  this.getMax = () => {
    if (this.length > 0) return sorted[this.length - 1];
  }
}

// Test cases
//const stack = new Stack();
//stack.push(4);
//console.log(stack.getMax(), 'should be 4')
//console.log(stack.pop(), 'should be 4')
//console.log(stack.push(2), 'should be 1')
//console.log(stack.getMax(), 'should be 2')

module.exports = Stack;