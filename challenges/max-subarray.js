/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
function maxSubarray(arr) {
  //  handle edge cases
  if(arr === null) return;
  //  create variable for counter and array of subarrays
  let currMax;
  let finalMax = -Infiniti; //because we could potentially start with a neg number
  //  iterate and add to a sum counter, if counter decreases below curr value
  //  save that value, reset, and begin counting from next element.
  //  return the values that equal sum of largest consecutive sum.
  for(let i=0; i<arr.length;i+=1){
    //  set currmax to 0
    currMax = 0;

    //  slice arr from i to end
    //  for each item in subarray, add item to currmax
    //  if currmax larger than finalMax, set it to new currMax
    arr.slice(i).forEach(item) => {
      currMax += item;
      if(currMax > finalMax) finalMax = currMax;
    }
  }
  return finalMax;
}


//  other solution

let finalMax = -Infiniti;
let currMax = -Infiniti;
//  loop through arr using forEach()
arr.forEach((item) => {
  //  each iteration, compare current element to currMax + curr element
  //  set currMax to the larger num of the two
  currMax = Math.max(item, currMax + item);
  //  compare finalMax v currMax
  //  set finalMax to the larger num of the two
  finalMax = Math.max(finalMax, currMax);

})
module.exports = maxSubarray;
