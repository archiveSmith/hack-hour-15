/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];
}
Stack.prototype.add = function(value){
  this.stack.push(value);
}
Stack.prototype.remove = function(){
  return this.stack.pop();
}

Stack.prototype.isEmpty = function(){
  return this.stack.length === 0;
}

//
// class Stack2 {
//   constructor() {
//
//     this.stack = [];
//   }
//
//   add(value){
//     this.stack.push(value);
//   }
//
//   remove(){
//     this.stack.pop();
//   }
// }
/**
* Queue Class
*/


class Queue {
  constructor() {
    this.inQ = new Stack;
    this.outQ = new Stack;
  }
  // FIFO
  enqueue(value){
    this.inQ.add(value);
  }

  dequeue(){
    if (this.outQ.isEmpty()){
      while (!this.inQ.isEmpty()){
      this.outQ.add(this.inQ.remove());
      }
    }
    return this.outQ.remove();
  }

}


module.exports = {Stack: Stack, Queue: Queue};
