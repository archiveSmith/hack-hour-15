/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
let stackArr = []; //pushes and pops off end
return stackArr;
}


/**
* Queue Class
*/


// function Queue() {
//     let inStack = new Stack(); // 1,2,3,4,5
//     let outStack = new Stack(); // 5,4,3,2,1
//     let queue = [];


//     // fill outstack from front, not back
    
//     return inStack;
// }

class Queue {
  constructor() {
    this.inStack = new Stack(); // 1,2,3,4,5
    this.outStack = new Stack(); // 5,4,3,2,1
  }

    enqueue(val){
        // just pushes onto instack
        this.inStack.push(val);

  }

    dequeue(){
        // pops like normal arr until none then refills from instack
      if (this.outstack){
      return this.outstack.pop()
      }
  }

}

console.log(Queue());
module.exports = {Stack: Stack, Queue: Queue};
