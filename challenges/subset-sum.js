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

  let ary = array.slice(); //leave data immutable
  let len = ary.length; //get length of array for math.

        //function to call recursively to make the math easier.
    function isSum(array, len, target){
      if (target > 0 && len <= 0) return false; //base case - target hasn't zeroed out, so no way to reach sum here.
      if (target === 0) return true; // if 0, we've found a subset sum.
      if (array[len -1] > target) return isSum(array, len - 1, target); //if the element is too big, ignore it.
      return isSum(array, len - 1, target) || isSum(array, len - 1, target - array[len - 1])
        // check with fewer elements of the array, and check with the same array while removing some numbers from the target.
    }

  return isSum(ary, len, target)
}

module.exports = subsetSum;
