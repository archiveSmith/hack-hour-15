/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.length = 0; 
  this.storage = {};
  this.sorted = {};
}

Stack.prototype.push = function(item) {
	this.storage[this.length] = item;
	if (this.length === 0) {
		this.sorted[this.length] = item;
	} else {
		let y = this.sorted[this.length - 1]; 
		let x = y > item ? y : item; 
		this.sorted[this.length] = x; 
	} 
	this.length++; 
	return this.length; 
}

Stack.prototype.pop = function() {
	if (this.length < 1) return; 
	const result = this.storage[this.length - 1];
	delete this.storage[this.length - 1];
	delete this.sorted[this.length - 1];
	this.length--; 
	return result; 
}

Stack.prototype.getMax = function() {
	if (this.length < 1) return undefined; 
	return this.sorted[this.length - 1];
}



module.exports = Stack;