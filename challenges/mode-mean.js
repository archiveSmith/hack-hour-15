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
   const arrayMode = mode(array);
   const arrayMean = mean(array);
   return arrayMode === arrayMean;
 }

 function mean(array) {
   const sum = array.reduce(((element, sum) => sum += element), 0);
   return sum / array.length;
 }

 function mode(array) {
   const modeStorage = {};
   for (let i = 0; i < array.length; i += 1) {
     modeStorage[array[i]] = 0;
     for (let j = 0; j < array.length; j += 1) {
       if (array[i] === array[j]) {
         modeStorage[array[i]] += 1;
       }
     }
   }

   const modeNum = Object.keys(modeStorage).reduce((element, max) => {
     if (modeStorage[element] > modeStorage[max]) {
       return element;
     } else if (modeStorage[element] === modeStorage[max] && element > max) {
       return element;
     }
     return max;
   });
   return Number(modeNum);
 }

module.exports = modemean;
