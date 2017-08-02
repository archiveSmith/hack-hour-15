/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

<<<<<<< HEAD
 //find the maximum sum of consecutive integers 

function maxSubarray(arr) {
	//edge case
	if(!Array.isArray(arr)) return undefined;
	if(arr.length === 1) return arr[0];
	if(!arr.length) throw new Error('Cannot sum empty array');
	
	//create a sumArr 
	//pushing the sum of different subArray
	//increasing the subArr length for each loop
	//index is the length of the subArr
	
	let subArrays = [];
	for(let i = 0; i < arr.length; i++) {
	  //i is the length
	  for(let j = 0; j < arr.length - i; j++) {
	    //j is the starting index of the subArray
	    subArrays.push(arr.slice(j,j+i+1));
	  }
	}
	let sumArr = subArrays.map((subArr, index) => {
	  return subArr.reduce((sum, curr, index) => {
	    return sum + curr;
	  }, 0);
	});
	return Math.max(...sumArr);
}



module.exports = maxSubarray;
=======
function maxSubarray(arr) {

}

module.exports = maxSubarray;
>>>>>>> 92e4c1d34b7c264735bcde781bd76848b0443954
