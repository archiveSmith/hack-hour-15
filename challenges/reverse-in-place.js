'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
    if (array) {
        if (array <= 1) {
            return array;
        }
        let temp;
        if (array.length % 2 == 0) {
            for (let x = 0; x < (array.length / 2); x++) {
                temp = array[x];
                array[x] = array[array.length - 1 - x];
                array[array.length - 1 - x] = temp;
            }
        } else {
            for (let x = 0; x < array.length; x++) {
                if (x !== (array.length - 1 - x)) {
                    temp = array[x];
                    array[x] = array[array.length - 1 - x];
                    array[array.length - 1 - x] = temp;
                } else {
                    break;
                }
            }
        }
        return array;
    }
    return undefined;
}

module.exports = reverseInPlace;