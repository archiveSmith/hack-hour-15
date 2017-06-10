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
  const mean = Math.floor(array.reduce((acc, val) => acc + val, 0) / array.length);

  const valueCount = {};
  array.forEach(val => valueCount[val] ? valueCount[val] += 1 : valueCount[val] = 1);

  const mode = Object.keys(valueCount).reduce((acc, key) => {
    if (valueCount[acc] === valueCount[key]) return Math.max(acc, key);
    else if (valueCount[acc] < valueCount[key]) return Number(key);
    else return Number(acc);
  }, array[0]);

  return mean === mode;
}

module.exports = modemean;