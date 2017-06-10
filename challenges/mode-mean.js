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


/* Given an array, find if the mean and the mode of the array are equal.

Find the mean by dividing the total by the # of elements in the array
    Total (reduce)
    # of elements (array.length)
    Average (Math.floor(total/# of elements))

Find the mode by creating an object with number/occurrence pairs
Find the highest value in the object and return the keys with that value
    use Math.max if there are multiple modes
*/


function modemean(array) {
 const total = array.reduce((a,b) => a + b);
 const elements = array.length;
 const average = Math.floor(total/elements);
 const occurrences = {};
 for (let i = 0; i < array.length; i++) {
     let num = array[i];
     if (occurrences[num] === undefined) {
         occurrences[num] = 1;
     } else {
         occurrences[num] += 1;
     }
 }
 let maxOccurrences = 0;
 let mode;
 for (let key in occurrences) {
     if (occurrences[key] > maxOccurrences) {
         maxOccurrences = occurrences[key];
         mode = key;
     } else if (occurrences[key] === maxOccurrences) {
        mode = Math.max(mode, key);
     }
 }
 return average === mode;
}

module.exports = modemean;
