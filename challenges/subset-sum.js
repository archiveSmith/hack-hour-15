/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  const obj = array.reduce((acc, elem) =>{
    acc[elem] = true;
    return acc;
  },{});
  console.log(obj)

  for (let i = 0; i < array.length; i++) {
    let diff = target - array[i];
    if (obj[diff]) return true;
    obj[diff] = true;
  }
  return false;
}

console.log(subsetSum([8, -2, 1, -3], 6))

module.exports = subsetSum;
