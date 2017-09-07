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
  const numerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  const values = [1, 5, 10, 50, 100, 500, 1000];

  const getNumeral = (num) => {
    if (num === 0) return '';
    for (let i = values.length - 1; i >= 0; i -= 1) {
      const valI = values[i];
      const numI = numerals[i];
      if (num / values[i] === 1) return numerals[i];
      if (values[i] - num <= values[i] - values[i - 1]) {
        return numerals[i - 1] + numerals[i] + getNumeral(num - values[i - 1]);
      } else if (num / values[i] > 1) {
        return numerals[i] + getNumerals(num - values[i - 1]);
      }
    }
  }

  return getNumeral(n);
}

console.log(romanNumeral(40));

module.exports = romanNumeral;