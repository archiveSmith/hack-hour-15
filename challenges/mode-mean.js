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
    let cache = {}
    let mean = (array.reduce(function(acc, val) {return acc + val;}, 0)) / array.length
    for (let i = 0; i<array.length; i++) {
        if(!cache[array[i]]) cache[array[i]] = 1;
        else cache[array[i]] ++;
    }
    let mode = Object.keys(cache).reduce(function(a, b){ return cache[a] > cache[b] ? a : b });
    return parseInt(mode,10) === mean ? true : false
}


module.exports = modemean;
