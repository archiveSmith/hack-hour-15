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

// Input
  // Positive integer

// Ouput
  // String containing the integer in Roman numeral form

function romanNumeral(n) {
  const converstions = [
    {letter: 'M', val: 1000},
    {letter: 'D', val: 500},
    {letter: 'C', val: 100},
    {letter: 'L', val: 50},
    {letter: 'X', val: 10},
    {letter: 'V', val: 5},
    {letter: 'I', val: 1},
  ];
  
  // Set the current number to the input value
  let cur = n;
  
  // Create an empty output string
  let output = '';
  
  // Iterate through the conversions array
  converstions.forEach((numeral, i) => {
    console.log(cur, numeral);
    // Store how many times the value goes into the current number
    const factor = Math.floor(cur / numeral.val);
    
    // if the factor is 4, then append the letter once and the next highest letter once
    if (factor === 4) output += numeral.letter + converstions[i - 1].letter;
    
    // Append the letter that many times to the output string
    else for (let j = 0; j < factor; j += 1) {output += numeral.letter}
    
    // Set the current number to remainder (current % value)
    cur = cur % numeral.val;
  });
  
  // Return the output string
  return output;
}

// Test cases
console.log(romanNumeral(1)); // I
console.log(romanNumeral(5)); // V
console.log(romanNumeral(115)); // CXV
console.log(romanNumeral(90)); // XC
console.log(romanNumeral(4)); // XC

module.exports = romanNumeral;
