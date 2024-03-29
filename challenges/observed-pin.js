/*
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. 
We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to 
this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the 
PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually 
be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it 
could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they 
never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array 
of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs. 
But please note that all PINs, the observed one and also the results, must be strings, because of 
potentially leading '0's. Don't worry about the order of the array.

Detective, we count on you!

expectations = {
  "8": ["5", "7", "8", "9", "0"],
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"],
}

*/




function getPINs(observed) {
  // Loop through each index, trying all adjacents
  // -> for each adjacent, loop through each other index, trying all of its adjacents

  for (let i = 0; i < observed.length; i += 1) {
    let adjacents = getAdjacents(parseInt(observed.charAt(i)));

  }

}

const loopThroughAdjacents = (string, index) => {
  const combos = [];
  const adjacents = getAdjacents(parseInt(string.charAt(index)));

  for (let i = 0; i < adjacents.length; i += 1) {
    combos.push(string.slice(0, index - 1) + adjacents[i] + string.slice(index));
  }

  return combos;
}

const getAdjacents = (num) => {
  if (num === 0) return [0, 8].map(elem => elem.toString());
  else if (num === 8) return [7, 8, 9, 0].map(elem => elem.toString());
  const adjacents = [];

  adjacents.push(num);
  if (num - 3 > 0) adjacents.push(num - 3);
  if (num + 3 < 10) adjacents.push(num + 3);
  if (num - 1 % 3 !== 0) adjacents.push(num - 1);
  if (num % 3 !== 0) adjacents.push(num + 1);

  return adjacents.map(elem => elem.toString());
}

// const getAdjacents = (num) => {
//   if (num === 0) return [0, 8];
//   const adjacents = [];

//   let verticalPoint;
//   for (let i = num; i >= 1; i -= 3) verticalPoint = i;
//   for (let i = verticalPoint; i <= 10; i += 3) adjacents.push(i % 10);

//   let horizontalPoint;
//   for (let i = num - 1; i % 3 !== 0; i -= 1) horizontalPoint = i;
//   for (let i = horizontalPoint; true; i += 1) {
//     adjacents.push(i % 10);
//     if (i % 3 === 0) break;
//   }

//   return adjacents;
// }

console.log(loopThroughAdjacents('1325', 1));

module.exports = getPINs
