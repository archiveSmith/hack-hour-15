/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  const stack = {};
  stack.length = 0;

  stack.push = (value) => {
    stack[stack.length] = value;
    stack.length += 1;
    return stack.length;
  }

  stack.pop = () => {
    if (stack.length === 0) return;
    const popVal = stack[stack.length];
    delete stack[stack.length];
    stack.length -= 1;
    return popVal;
  }

  return stack;
}


/**
 * Queue Class
 */


function Queue() {
  const stack = Stack();
  let queue = Stack();

  queue.enqueue = (val) => {
    // push all items from queue to stack
    // add enqueue value to queue
    // enqueue all items from stack to queue

    for (let i = queue.length - 1; i >= 0; i -= 1) stack.push(queue.pop(queue.length));
    queue.push(val);
     for (let i = queue.length - 1; i >= 0; i -= 1) queue.push(stack.pop(stack.length));
  }

  queue.dequeue = queue.pop;

  return queue;
}

const myQ = Queue();

myQ.enqueue(5);
myQ.enqueue(8);
myQ.enqueue(3);
myQ.enqueue(1);
console.log(myQ);


module.exports = { Stack: Stack, Queue: Queue };
