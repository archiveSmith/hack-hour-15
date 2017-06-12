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

// const arr = [3, 4, 8, 9, 10]; 
function modemean(array) {
    let mean = 0;  // the average of all numbers 
    let mode = 0;  // the value that appears the most 
    let sum = 0;   // to calculate the mean 

    const modes = {}; // store multiple modes 

    for ( let i = 0; i < array.length; i += 1 ) { 
        sum = sum + array[i]; 

        // Add each unique value in the array to the Mode object and increment 
        //      by one every time we come across the same value
        if(!modes[array[i]]) // mode is not yet in object 
             modes[array[i]] = 1; 

        modes[array[i]] = modes[array[i]] + 1; 
    }
    // console.log("the mode object is: ", modes); 
    mean = Math.floor( sum / array.length ); 
    // console.log("The mean is: ", mean); 

    // if Max Mode is equivalent to the Mean return TRUE otherwsie FALSE 
    let maxMode =  modes[x]; ; 
    for(x in modes) {
        if(maxMode < modes[x]) maxMode = modes[x]; 
    }

    return ( maxMode === mean)

}

module.exports = modemean;
