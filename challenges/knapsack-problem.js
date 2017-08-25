/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

// Input
  // An array, items, of objects with properties:
    // weight: integer
    // value: integer
  // An integer, representing the maxumum weight to carry
// Output
  // An integer, representing the maximum sum of values of items that have a sum of weights under the weightAvailable

function solveKnapsack(items, weightAvailable) {
  // Map and sort the items by a ratio of weights to values
  sortedItems = items
    .map(item => Object.assign(item, {ratio: item.value / item.weight}))
    .sort((a,b) => a.ratio - b.ratio);

  // Track the sum of values and weights
  let values = 0;
  let weights = 0;
  // Iterate through sorted items
  for (let curItem = sortedItems.pop(); weights + curItem.weight <= weightAvailable; curItem = sortedItems.pop()) {
    // Increment values and weights
    values += curItem.value;
    weights += curItem.weight;
  }
  // Return the sum of values
  return values;
};

// test
items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
console.log(solveKnapsack(items, 3), 7); // returns 7 (from items[0] and items[1])
console.log(solveKnapsack(items, 5), 9); // returns 9 (from items[1] and items[2])

module.exports = solveKnapsack;
