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
    let mean = (array.reduce(function(a, ele) {
        return a + ele;
    })) / array.length;
    mean = Math.floor(mean);
    let mode = [];
    let len;
    array.forEach(function(element, index) {
        len = (array.slice(index).filter(function(el) {
            return el === element
        })).length;
        mode.push(len);
    });
    let max = Math.max.apply(null, mode);
    if (max === mean) {
        return true;
    }
    return false;

}

console.log(modemean([1, 2, 3, 4, 1, 4, 1]));
module.exports = modemean;