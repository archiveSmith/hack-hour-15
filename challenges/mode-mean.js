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
  let occurances = 0;
  let total = 0;
  let k;
  let mode = 0;
  let sortedArr = array.slice().sort();
  
  for(let k = 0; k < sortedArr.length; k++) {
    total += sortedArr[k];
  }

  let mean = total/sortedArr.length;
  
  for(let i = 0; i < sortedArr.length; i++) {
    for(let j = 0; j < i; j++) {
      if(sortedArr[j] === sortedArr[i]) {
        mode = sortedArr[j];
        occurances++;
      }
    }
  }

  return (mode === mean) ? true : false;
  
}

module.exports = modemean;
