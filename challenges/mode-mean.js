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
  array.sort();
  
  let half = Math.floor(array.length/2);

  let mode = array[half];

  let total = array.reduce((acc, inp) => {return acc+inp;})
  let mean = Math.floor(total/array.length);

  return mode === mean;
}

module.exports = modemean;
