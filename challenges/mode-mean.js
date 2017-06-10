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
	let mode = 0;
	let mean = 0;

	if (array.length === 0) {
		return false;
	}
	for (let i = 0; i < array.length; i += 1) {
		mean += array[i];

	}

	let mf = 1; //default maximum frequency
    let m = 0;  //counter
     
    for (var i = 0; i < array.length; i++)    //select element (current element)
{
        for (var j = i; j < array.length; j++)   //loop through next elements in array to compare calculate frequency of current element
        {
                if (array[i] == array[j])    //see if element occurs again in the array
                 m++;   //increment counter if it does
                if (mf < m)   //compare current items frequency with maximum frequency
                {
                  mf = m;      //if m>mf store m in mf for upcoming elements
                  mean = array[i];   // store the current element.
                }
        }
        m = 0;   // make counter 0 for next element.
   }
   if ( mean === mode) return true;
   return false;
}


module.exports = modemean;
