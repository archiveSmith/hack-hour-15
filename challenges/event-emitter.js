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
this.eventArr = {};
}

EventEmitter.prototype.on = function(funcName, func) {
this.eventArr[funcName] = func;
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
    // console.log(this.eventArr[funcName]);
return this.eventArr[funcName].apply(null, args);
};

module.exports = EventEmitter;

let consHi = new EventEmitter();
consHi.on("consoleHi", ()=>{console.log("hi")})

// consHi.trigger("consoleHi", null)
consHi.trigger("consoleHi", null)