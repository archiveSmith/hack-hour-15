/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  // find mean, find mode, compare.
    // mode > most repeated number.
    // mean > avg.
const mean = Math.floor(array.reduce((a,b) => a + b) / array.length);

const nums = {};
array.forEach((ele) => {
  let str = '' + ele;
  if (nums.hasOwnProperty(str)){
    nums[str] += 1;
  } else {
    nums[str] = 1;
  }
});

const mode = Object.keys(nums).reduce((mode,b) => {
  mode = nums[b] > mode ? nums[b] : mode;
  return mode;
});

  return mean === Number(mode);
}


module.exports = modemean;
