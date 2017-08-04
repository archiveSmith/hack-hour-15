'use strict';
/**
Make an EventEmitter that
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
  this.funcStore = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  if (!this.funcStore[funcName]) this.funcStore[funcName] = [];
  this.funcStore[funcName].push(func);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  if (!this.funcStore[funcName]) return;
  this.funcStore[funcName].forEach(el => el.apply(this, ...args));
};

// var instance = new EventEmitter();
// var counter = 0;
// instance.on('increment', function() {
//   console.log('old func')
//   counter++;
// }); // counter should be 0
// instance.on('incrementby3', function() {
//   counter += 3;
// }); // counter should be 0
// instance.trigger('increment'); // counter should be 4
// console.log('storage', instance.funcStore)
// console.log('should be 1 ', counter)
// instance.trigger('incrementby3'); // counter should be 8
// console.log('should be 2 ', counter)

module.exports = EventEmitter;
