/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.storage = {};
	this.length = 0;
	this.push = (el) => {
		this.storage[this.length++] = el;
		return this.storage
	};
	this.pop = () => {
		if(!this.length) return undefined;
		this.length--;
		return this.storage[this.length];
	};
}

function Queue() {
  this.in = new Stack();
  this.out = new Stack();
  	this.storage = {};
	this.length = 0;
	this.enqueue = (el) => {
		this.in.push(el);
    this.length++;
    return this.in;
	};
	this.dequeue = () => {
		if(!this.length) return undefined;
		if(!this.out.length) {
			while(this.in.length) {
				this.out.push(this.in.pop());
			}
		}
		this.length--;
		return this.out.pop();
	};
}
	




module.exports = {Stack: Stack, Queue: Queue};
