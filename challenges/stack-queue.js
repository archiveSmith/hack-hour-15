/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = []
  this.pushToStack = function (x){
    stack.push()
    return stack
  }
  this.popFromStack = function (){
    return stack.shift()
  }
}

// Shape.prototype.setLocation = function(x, y) {
//     this.x = x;
//     this.y = y;
// };

function Queue() {
  this.queue = []
  this.stack1 = Stack()
  this.stack2 = Stack()
  // declare two stack 
  this.enqueue = function (x){
    // push to stack2
    stack2.push(x)
    // if stack1 is empty
    if (stack1.stack.length === 0){
    // if stack1 is empty
    // while stack2 is not empty,
      while (stack2.stack.length > 0){
      // pop and element from stack2 and push that element to stack1
        let tmp = stack2.pop()
        stack1.push(tmp)
      }
    }
  }
  this.dequeue = function (x){
    if (stack1.stack.length === 0) return undefined
    return stack1.pop()
    // if stack1 is empty, return undefined
    // else pop from stack1
  }
}

module.exports = {Stack: Stack, Queue: Queue};
