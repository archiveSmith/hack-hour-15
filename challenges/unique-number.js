/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
    if(!Array.isArray(array)) return 'invalid argument'

    const table = {};

    array.forEach(function(element) {
        if(!table[element]) table[element] = 1
        else table[element]++
    }, this);

    let key;

    for (key in table) {
        if (table[key] === 1 ) return key;
    }
}

module.exports = uniqueNumber;
