/**
 * Create a stack.Then create a queue using two stacks.
 */

// Push adds element to top of stack
// Pop removes an returns element from top of stack
function Stack() {
  const data = [];
  
  this.length = 0;
  
  this.push = (val) => {
    data[this.length] = val;
    this.length += 1;
  }
  
  this.pop = () => {
    if (this.length > 0) {
      this.length -= 1;
      return data.splice(this.length)[0];
    }
    else return undefined;
  }
}


/**
* Queue Class
*/


1,2,3,4

4,3,2,1,0
  
// Push adds element to end of queue
// Shift removes and returns element from front of queue
function Queue() {
  let data = new Stack();
  
  this.length = 0;
  
  this.push = (val) => {
    const stack = new Stack();
    
    // Push all elements of data into a stack
    for (let i = 0; i < this.length; i += 1) {
      stack.push(data.pop());
    }
    
    // Push the new value
    stack.push(val);
    this.length += 1;
    
    // Push all elements back into data
    for (let i = 0; i < this.length; i += 1) {
      data.push(stack.pop());
    }
  }
  
  this.shift = () => {
    if (this.length > 0) {
      this.length -= 1;
      return data.pop();
    }
  }
}

// Testing the stack
//const stack = new Stack();
//stack.push(0);
//console.log(stack.length, 'should be 1');
//stack.push(1);
//stack.push(2);
//console.log(stack.length, 'should be 3');
//console.log(stack.pop(), 'should be 2');
//console.log(stack.length, 'should be 2');

// Testing the queue
//const q = new Queue();
//q.push(0);
//console.log(q.length, 'should be 1');
//q.push(1);
//q.push(2);
//console.log(q.length, 'should be 3');
//console.log(q.shift(), 'should be 0');
//console.log(q.length, 'should be 2');


module.exports = {Stack: Stack, Queue: Queue};
