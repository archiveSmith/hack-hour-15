/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];
  this.push = (elem) => {
      this.stack.push(elem);
    }
  this.pop = () => {
      return this.stack.pop();
    }
  this.peek = () => {
      return this.stack[stack.length - 1];
    }

}


/**
* Queue Class
*/

// const stack = new Stack();
// stack.push(3);
// stack.push(4);
// stack.push(1);
// stack.pop()



function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
  this.queue = this.stack1.stack.length ? this.stack1.stack : this.stack2.stack;
  this.pop = () => {
    const [stack1, stack2] = [this.stack1, this.stack2];
    while (stack1.stack.length) {
      stack2.push(stack1.pop());
    }

    return stack2.pop();
  }
  this.push = (elem) => {
    if (!this.stack2.stack.length) {
      this.stack1.push(elem);
      return;
    }
    const [stack1, stack2] = [this.stack1, this.stack2];

    while (stack2.stack.length > 0) {
      stack1.push(stack2.pop());
    }
    stack1.push(elem);
  }
}
// const queue = new Queue();
// queue.push(3);
// queue.push(5);
// queue.push(9)
// console.log(queue.pop());


// console.log(queue);

module.exports = {Stack: Stack, Queue: Queue};
