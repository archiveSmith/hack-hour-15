/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
    if(!Array.isArray(array)) return 'invalid argument'

    const table = {};

    array.forEach(function(element) {
        if(!table[element]) table[element] = 1
        else table[element]++
    }, this);

    let key;

    for (key in table) {
        if (table[key] === 2 ) return key;
    }

}


module.exports = repeatNumbers;
