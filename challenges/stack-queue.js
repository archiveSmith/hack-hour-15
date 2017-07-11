/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  const storage = [];
  push(item) {
    storage.push(item);
  }

  pop() {
    return storage.pop();
  }
}


/**
* Queue Class
*/


function Queue() {
  const input = [];
  const output = [];
  enqueue(item) {
    input.push(item);
  }

  dequeue() {
    if (output.count == 0)
    {
      while (input.count != 0)
      {
        output.push(input.pop());
      }
    }
    return output.pop();
  }
}

module.exports = {Stack: Stack, Queue: Queue};
