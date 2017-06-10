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

//mode is The number which appears most often in a set of numbers
//iterate on numbers, pushing them in to their own array if they match.
//return the array with the longest length

//mean is the average of the number set

function modemean(array) {
  // mode
  //
  // for (let i=0; i<array.length; i++){
  //     let valueArray = [];
  //     let numVal = abs.array[i]
  //
  //       if (numVal === valueArray[0]){
  //         valueArray.push(array[i])
  //       } else {
  //         new valueArray()
  //         valueArray.push(array[i])
  //       }
  // }
  //
  // }
  //
  // mean

  function mean(array) {
    let sum = array.reduce(function(a, b) { return a + b; }, 0);
    let mean = sum / array.length;

  }
mean(array);
console.log('this is the sum' + sum);
console.log('this is the mean' + mean);

}

module.exports = modemean;
