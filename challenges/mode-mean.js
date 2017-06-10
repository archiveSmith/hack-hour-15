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
  let sum = 0;
  const modes = array.reduce((mode, val) => {
    if(mode.hasOwnProperty(val)){
      mode[val]++;
    } else {
      mode[val] = 1;
    }
    sum += val;
    return mode;
  }, {});
  const maxMode = Object.keys(modes).reduce((currentMax, key) => {
    if(modes[currentMax] < modes[key]) {
      currentMax = key;
    }
    return currentMax;
  });
  return maxMode == Math.floor(sum / array.length);
}


module.exports = modemean;
