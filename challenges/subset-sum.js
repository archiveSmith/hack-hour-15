/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target, sum = 0) {
  // base case
  // check if target has been hit
  if (sum === target) return true;
  // check if out of array elems to use
  else if (array.length === 0) return false;
  // // return if there is a way to get to exact target amount
  for (let i = 0; i < array.length; i += 1) {
    array.reduce(function(acc, val) {
      return acc + val;
    }, 0);
    // if array i is last element in array, shift
    if (array[i] === array[array.length - 1]) array.shift();
    else array.pop();
     
  }
}

 console.log(subsetSum([3, 7, 4, 2], 5)) // true, 3 + 2 = 5
 console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) // true, 3 + 12 + 5 + 12 = 32
 console.log(subsetSum([8, 2, 4, 12], 13)) // false
 console.log(subsetSum([8, -2, 1, -3], 6)) // true, 8 + 1 + (-3) = 6
 
module.exports = subsetSum;


  // let currentSum;
  // for (let i = 0; i < array.length; i += 1) {
  //   currentSum = array[i];
  //   for (let j = 0; j < array.length; j += 1) {
  //     // console.log(currentSum)
  //     if (i !== j) {
  //       if (currentSum === target) return true;
  //       // if distance from sum is closer than current sum
  //       if (((array[i] + array[j]) - target) < Math.abs((currentSum - target))) {
  //         currentSum = array[i] + array[j];
  //         // console.log(currentSum)
  //         // console.log('made it to if')
  //       }
  //     }
  //   }
  // }
  // return false;