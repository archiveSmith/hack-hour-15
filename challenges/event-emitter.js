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
  this.funcStore = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  if (typeof funcName !== 'string') return 'NOT A FUNCTION NAME';
  if (typeof func !== 'function') return 'NOT A FUNCTION';  
  
  if (this.funcStore[funcName] === undefined) this.funcStore[funcName] = [];
  this.funcStore[funcName].push(func);
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
  if (typeof funcName !== 'string') return 'NOT A FUNCTION NAME';
  this.funcStore[funcName].forEach((func) => {
    func();
  })
};


module.exports = EventEmitter;
