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

	const l = array.length;
	const middle = l / 2;
	let i = 0;
	let tmp;

	while (i < middle) {
		tmp = array[i];
		array[i] = array[l - i - 1];
		array[l - i - 1] = tmp;
		i += 1;
	}
	return array;
}

module.exports = reverseInPlace;
