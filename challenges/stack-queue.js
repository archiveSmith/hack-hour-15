/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = [];
}

// Has the Push and Pop Methods already available

/**
* Queue Class
*/


function Queue() {
    this.inboundStack = new Stack();
    this.outboundStack = new Stack();
}
// Push
// Pop

Queue.prototype.push = function(value) {
    this.inboundStack.push(value);
}

Queue.prototype.pop = function() {
    if (this.outboundStack.length === 0) {
        for (let i = 0; i < this.inboundStack.length; i += 1) {
            let currentStack = this.inboundStack.pop();
            this.outboundStack.push(currentStack);
        }
    } else {
        return this.outboundStack.pop();
    }
}


module.exports = {Stack: Stack, Queue: Queue};
