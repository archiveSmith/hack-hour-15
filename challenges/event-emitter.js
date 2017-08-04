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
  // Events will be stored as keys
  // Functions will be stored in an array as the value
  this.functionStore = {};
}

// Define a function that should run on an event
EventEmitter.prototype.on = function(funcName, func) {
  // Add the function to the array at the key funcName
  if (!this.functionStore[funcName]) this.functionStore[funcName] = [];
  this.functionStore[funcName].push(func);
};

// Run all functions attached to the event with given args
EventEmitter.prototype.trigger = function(funcName, ...args) {
  // If no functions defined, return
  if (!this.functionStore[funcName]) return;
  // Iterate through functions for the event
  this.functionStore[funcName].forEach(func => func(...args));
};

// Test case
//var instance = new EventEmitter();
//var counter = 0;
//instance.on('increment', function() {
// counter++;
//}); // counter should be 0
//instance.trigger('increment'); // counter should be 1
//console.log(counter, 1);
//instance.trigger('increment'); // counter should be 2
//console.log(counter, 2);

module.exports = EventEmitter;
