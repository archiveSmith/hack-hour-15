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
    const doubles = {};  // Not O(1) space 
    array.forEach( (ele, i) => {
        if (doubles[ele]) doubles[ele] += 1; 
        else doubles[ele] = 1; 
    }); 
    
    for (key in doubles) {
        if(doubles[key] === 1) return key; 
    }

    return 0; // if no numbers appear once 
}

module.exports = uniqueNumber;
