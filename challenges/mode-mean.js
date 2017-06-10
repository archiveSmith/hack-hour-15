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

 // Create storage object
 // Create a variable for our mode times repeated
 // Create a variable for our mode value
 // Create a variable for our array total
 // Loop through array
 // increment array total
 // See if item is in object
 // If yes, increment it's value. 
 // If no, put it in the storage object with a value of one. 
 // Check if number times is > mode times, if yes, update mode vars
 // Check if number times = mode times, if yes, compare values, and update accordingly

 // Loop finishes
 // Calculate array average via our array total
 // Compare array average against mode value



function modemean(array) {
  const obj = {}; 
  let modeVal; 
  let modeTimes = 0;  
  let total = 0;
  array.forEach(num => {	
    total += num;
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1; 
    }
    if (obj[num] > modeTimes) {
      modeTimes++; 
    	modeVal = num;
    } else if (obj[num] === modeTimes) {
    	if (obj[num] > modeVal) {
    	  modeVal = num;
    	}
    }
  });
  
  const average = Math.floor(total / array.length); 
  return (average === modeVal);
}

module.exports = modemean;
