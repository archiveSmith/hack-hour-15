/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    // Holds the data
    const data = []; 

    // pushes an item into the stack 
    function pushInto(el) {
        data.push(el); 
    }

    // returns the last element that was pushed into the data stack
    function popOut() {
        return data.pop(); 
    }
}


/**
* Queue Class
*/
function Queue() {
    // First stack will represent the "front" of the queue
    const front = new Stack(); 

    // Second stack will represent the "back" part of the queue 
    const back = new Stack(); 

    function insert(el) {
        front.push(el); 
    }

    function remove() {
        back.push(front.shift()); 
        return back.pop(); 
    }
}

module.exports = {Stack: Stack, Queue: Queue};
