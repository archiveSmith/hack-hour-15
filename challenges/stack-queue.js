/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.items = [];
}
Stack.prototype.pushStack = (item) => {
  this.items.push(item);
}
Stack.prototype.popStack = () => {
  return this.items.pop()
}


/**
* Queue Class
*/


function Queue() {
  this.inflow = new Stack();
  this.outflow = new Stack();
}
Queue.prototype.add = (item) => {
  this.inflow.pushStack()
}
Queue.prototype.next = () => {

}

module.exports = {Stack: Stack, Queue: Queue};
