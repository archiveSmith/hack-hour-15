/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 *  - Math.floor the mean
 *  - If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  const numMapping = {};
  let sum = 0;
  let greatestFreq = 0;
  let mode;

  array.forEach((e) => {
    //get the mean
    sum += parseInt(e, 10);

    //get the mode
    numMapping[e] = (numMapping[e] || 0) + 1;
    if (greatestFreq < numMapping[e]) {
        greatestFreq = numMapping[e];
        mode = e;
    }
  });
  const mean = Math.floor(sum / array.length);

  console.log(mean, mode);
  //figure out if they are equivalent and return
  if (mean === mode) return true;
  return false;
}

module.exports = modemean;
