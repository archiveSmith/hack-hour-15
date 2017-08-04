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
  //store relevant bits of the problem here.
  this.listeners = {};
}

EventEmitter.prototype.on = function(funcName, func) {
  // store the callback and the trigger word.
  this.listeners[funcName] = func;
};

EventEmitter.prototype.trigger = function(funcName, ...args) {
    //fire our callback if the trigger word is passed to the EE.
  const listener = this.listeners[funcName];
  if (listener) {
    return listener(args);
  }
};
//
// class EventEmitter {
//   constructor() {
//     this.listeners = {};
//   }
//   on(funcName, func) {
//     this.listeners[funcName] = func;
//   }
//
//   trigger(funcName, ...args) {
//     //fire our callback if the trigger word is passed to the EE.
//     const listener = this.listeners[funcName];
//     if (listener) {
//       return listener(args);
//     }
//   }
// }



// const test = new EventEmitter();
// let counter = 0;
// test.on('codesmith', ()=> counter++);
// test.on('sentance', ()=> console.log('blah blah blah'));
// test.on('words', args => console.log(...args));
// test.on('math', (args) => args.map(a => 'I am a Taco'));
// console.log(counter);
// test.trigger('codesmith');
// console.log(counter);
// test.trigger('codesmith');
// console.log(counter);
// test.trigger('sentance');
// test.trigger('codesmith');
// console.log(counter);
// test.trigger('sentance');
// test.trigger('words', 'fuck', 'shit', 'piss');
// const mth = test.trigger('math', 1, 2, 3, 4, 5);
// console.log(mth);


module.exports = EventEmitter;
