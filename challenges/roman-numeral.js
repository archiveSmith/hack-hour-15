/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
	let result = ''; 
	while (n > 0) {
		if (n >= 1000) {
			result += 'M';
			n -= 1000; 
			continue; 
		}

		if (n >= 900) {
			result += 'CM';
			n -= 900; 
			continue; 
		}

		if (n >= 500) {
			result += 'D';
			n -= 500; 
			continue; 
		}

		if (n >= 400) {
			result += 'CD';
			n -= 400; 
			continue; 
		}

		if (n >= 100) {
			result += 'C';
			n -= 100; 
			continue; 
		}

		if (n >= 90) {
			result += 'XC';
			n -= 90; 
			continue; 
		}

		if (n >= 50) {
			result += 'L';
			n -= 50; 
			continue; 
		}

		if (n >= 40) {
			result += 'XL';
			n -= 40; 
			continue; 
		}

		if (n >= 10) {
			result += 'X';
			n -= 10; 
			continue; 
		}

		if (n >= 9) {
			result += 'IX';
			n -= 9; 
			continue; 
		}

		if (n >= 5) {
			result += 'V';
			n -= 5; 
			continue; 
		}

		if (n >= 4) {
			result += 'IV';
			n -= 4; 
			continue; 
		}

		if (n >= 1) {
			result += 'I';
			n -= 1; 
			continue; 
		}
	}
	return result; 
}

module.exports = romanNumeral;
