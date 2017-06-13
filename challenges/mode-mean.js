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

<<<<<<< HEAD
function modemean(array) {
  // find the sum by using a reduce method
  let summed = array.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);

  // mean is average or sum divided by size
  let mean = Math.floor(summed/array.length);

  // find the mode by creating a tally and setting a variable to keep track of what is the mode
  let mode = 1;

  // create the tally object here using a reduce method and initializing to an object
  const modeTally = array.reduce(function(tally, number) {
    tally[number] = (tally[number] || 0) + 1;
    return tally;
  }, {})

  // loop through the input array to check the cases against the key : value pairs and return the key with the highest value (a.k.a highest tally)
  for (let i = 1; i < array.length; i++) {
   let el = array[i];
   if (modeTally[el] > mode) {
     mode = modeTally[el];
   }
  }

 // returns true or false;
 return mean === mode;
}

modemean([1,2,2,3]); // -> true
modemean([3,2,5,6,3,6,3]); // -> false



=======

function modemean(array) {

}

>>>>>>> 7a60201de4fc9a0c3e8d149fb6135cd334da2ad1
module.exports = modemean;
