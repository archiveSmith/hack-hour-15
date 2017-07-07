/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function getPerms(str) {
	const permutations = [];
	permutations.push(str[0]);
	str = str.slice(1);
	while (str.length > 0) {
		const toPerm = [];
		while (permutations.length > 0) {
			let chunk = permutations.pop();
			for (let i = 0; i <= chunk.length; i += 1) {
				toPerm.push(chunk.slice(0, i) + str[0] + chunk.slice(i));
			}
		}
		permutations.push(...toPerm);
		str = str.slice(1);
	}

	return permutations;
}

function isPalin(str) {
	for (let i = 0; i < str.length; i += 1) {
		if (str[i] !== str[str.length - 1 - i]) return false;
	}
	return true;
}

function permPalin(str) {
	const allPerms = getPerms(str);
	for (let i = 0; i < allPerms.length; i += 1) {
		if (isPalin(allPerms[i])) return true;
	}
	return false;
}

console.log(permPalin('c'))

module.exports = permPalin;
