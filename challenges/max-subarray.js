/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
function maxSubarray(arr) {
  let max = 0; // return value
  let tempMax = 0; // temp value to hold current array sum.
  // let posMax = 0; // holds possible maxes until array has been traversed.

  // arr.forEach((e)=> {
  //   if (tempMax === -Infinity) {
  //     max = tempMax = posMax = e;
  //   } else if (tempMax + e > posMax) {
  //     tempMax = posMax = tempMax + e;
  //   } else {
  //     tempMax = tempMax + e;
  //   }
  //
  //
  //   if (tempMax > posMax) {
  //     posMax = tempMax;
  //   } else if (tempMax < posMax) {
  //     max = posMax;
  //     tempMax = posMax = 0;
  //   }
  //
  //   if (posMax > max) {
  //     max = posMax;
  //   }
  // });

  for (let i = 0; i < arr.length; i++) {
    tempMax = 0;
    for (let j = i; j < arr.length; j++) {
      if (tempMax === 0) {
        tempMax = arr[j];
      } else {
        tempMax += arr[j];
      }

      if (tempMax > max) {
        max = tempMax;
      }
    }
  }
  return max;
}
// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
// console.log('should have been 18');
module.exports = maxSubarray;
