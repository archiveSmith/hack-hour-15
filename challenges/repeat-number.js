/**
 * I have an array where every consecutive number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let obj = {};
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] in obj) {
      obj[array[i]] += 1;
    } else {
      obj[array[i]] = 0;
    }
  }
  for (let key in obj) {
    if (obj[key] === 1) return key;
  }
}

// O(n) time, O(n) space

function repeatNumbersOn(array) {
  let store = {};
  
  for(let i = 0; i < array.length; i ++) {
    if (array[i] in store) return array[i];
    store[array[i]] = true;
  }
}

// O(n) time, O(1) space - doesn't work
function repeatNumbersO1(array) {
  let expected = ( ( array.length - 1 ) * array.length ) / 2;
  let actual = 0;
  
  for (let i = 0; i < array.length; i ++) {
      actual += array[i];
  }
  
  return actual - expected;
}

// O(n) time, O(1) space - doesn't work
function repeatNumbersO12(array) {
  let result = 0;
  
  for (let i = 0; i < array.length; i ++) {
    result = result ^ i ^ array[i];
  }
  
  return result;
}

// O(n) time, O(1) space - doesnt work
function repeatNumbersFinal(array) {
  const n = array.length - 1;
  return array.reduce((sum, i) => sum + i) - (n * (n + 1) / 2);
}

console.log(repeatNumbersFinal([1,2,3,4,5,6,8,7,10,8]))

// console.log(repeatNumbers([1,2,3,4,5,1]));
module.exports = repeatNumbers;
