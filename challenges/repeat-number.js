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
function repeatNumbers(array) {
    let num = Number;

  for (let i = 0; i < array.length; i++) {

    if (array[Math.abs(array[i])] >= 0) {
      array[Math.abs(array[i])] = -array[Math.abs(array[i])];
    } else {
      num = Math.abs(array[i]);
    }

    // console.log('iteration: ', i);
    // console.log('array: ', array);
    // console.log('weird math: ', array[Math.abs(array[i])]);
    // console.log('num: ', num);

  }
  return num;
}

// console.log(repeatNumbers([16,1,2,16,0,5]));

module.exports = repeatNumbers;
