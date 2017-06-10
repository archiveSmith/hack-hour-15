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
  let modeObj = {};
  let modeMaxCount = 0;
  let modeMax;
  // MEAN
  let sum = array.reduce((sum, val) => {
    return sum + val;
  })
  let mean = sum / array.length;

  // MODE
  // store number element as key and count as value
  for (let i = 0; i < array.length; i += 1) {
    if (!modeObj[array[i]]) {
      let count = 1;
      modeObj[array[i]] = count;
    } else {
      modeObj[array[i]] += 1;
    }
  }
  for (let key in modeObj) {
    if (modeObj[key] > modeMaxCount) {
      modeMaxCount = modeObj[key];
      modeMax = parseInt(key);
    }
  }
  return Math.floor(mean) === modeMax;
}

module.exports = modemean;
