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
    
    // Check for validity
    if (!Array.isArray(array)) return "Invalid array";
    
    return mean(array) === mode(array);
}

function mean(array) {    
    // Sum each element and divide by the length
    return Math.floor(array.reduce((sum, cur) => {
        return sum + cur;
    }, 0) / array.length);
    
}

function mode(array) {
    // Take the count of each value's appearence in the array
    const counts = array.reduce((acc, cur) => {
        // acc: array of two-element arrays [value, count of value]
        
        // if the count is zero
        if (!acc[cur]) acc[cur] = [cur, 0]
        
        // increment count
        acc[cur][1] += 1;
        
        return acc;
    }, [])
    
    // Sort largest to smallest and return the max
    return counts.sort((a, b) => {
        // if the counts are equal, return the larger value
        // else return the larger count
        return b[1] === a[1] ? b[0] - a[0] : b[1] - a[1];
    })[0][0]
}

// Tests
/*const array1 = [1,1,1,1]; // true
const array2 = [1,1,2,2,3,4]; // true
const array3 = [1,2,2,3,4,4,3,1,50]; // false

console.log(modemean(array1), array1);
console.log(modemean(array2), array2);
console.log(modemean(array3), array3);
console.log(modemean("hello"), "hello");*/

module.exports = modemean;
