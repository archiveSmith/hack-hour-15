/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */
  // O(1) space O(n^2) time
// function repeatNumbers(array) {
//     let num = Number;
//   // array.forEach((ele, idx, ary) => {
//   //   if (ary.indexOf(ele, idx + 1) > idx) num = ele;
//   // });
//
//   for (let i = 0; i < array.length; i++) {
//     const ele = array[i];
//     if (array.indexOf(ele, i + 1) > i) {
//       num = ele;
//       break;
//     }
//   }
//   return num;
// }
  //meets bonus criteria;
// function repeatNumbers(array) {
//     let num = Number;
//
//   for (let i = 0; i < array.length; i++) {
//       //check to see if the value at array[number, positive] is > 0
//     if (array[Math.abs(array[i])] >= 0) {
//       //if yes, make it negative (why?);
//       array[Math.abs(array[i])] = -array[Math.abs(array[i])];
//     } else {
//       //if not, thats the repeating number.
//       num = Math.abs(array[i]);
//     }
//
//     // console.log('iteration: ', i);
//     // console.log('array: ', array);
//     // console.log('weird math: ', array[Math.abs(array[i])]);
//     // console.log('num: ', num);
//
//   }
//   return num;
// }

// function repeatNumbers(array) {
//   var result = 0;
//
//   for (var i = 0; i < array.length; i ++) {
//     result = result ^ i ^ array[i];
//     // console.log(result);
//   }
//
//   return result;
// }

// O(n) time, O(1) space
function repeatNumbers(array) {
  var expected = ( ( array.length - 1 ) * array.length ) / 2;
  console.log('expected: ', expected);
  var actual = 0;

  for (var i = 0; i < array.length; i ++) {
      actual += array[i];
      console.log(actual);
  }

  return actual - expected;
}


console.log("final: ", repeatNumbers([16,1,2,16,5,0]));

module.exports = repeatNumbers;
