'use strict';
/**
 * Make an EventEmitter that
 *
 * Example:
 * var instance = new EventEmitter();
 * var counter = 0;
 * instance.on('increment', function() {
 *   counter++;
 * }); // counter should be 0
 * instance.trigger('increment'); // counter should be 1
 * instance.trigger('increment'); // counter should be 2
 *
 *
 * Caveats:
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function(s) as well. That is to say, we can have multiple
 *   listeners for one event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

function EventEmitter() {
  this.storage = {};
}

// Adds new listener
  // FuncName does not need to be unique
  // If there are multiple items, then we will assign an array
EventEmitter.prototype.on = function(funcName, func) {
  if (this.storage[funcName]) {
    this.storage[funcName] = [this.storage[funcName]];
    this.storage[funcName].push(func);
    // change to an array
  } else {
    this.storage[funcName] = func;
  }
};

// Executes the event listener
EventEmitter.prototype.trigger = function(funcName, ...args) {
  let args = Array.from(arguments).slice(1);
  // Execute all functions in this.storage
  if (this.storage[funcName].length > 1) {
    this.storage[funcName].forEach((func) => {
      func(...args);
    })
  } else {
    // turn array into arguments
    this.storage[funcName](...args);
  }
};


// // Test Case
// var instance = new EventEmitter();
// var counter = 0;
// console.log('beginning', counter);
// instance.on('increment', function() {
//   counter++;
// });
// instance.on('increment', function() {
//   counter++;
// });
// instance.trigger('increment');
// console.log('after trigger', counter);

module.exports = EventEmitter;