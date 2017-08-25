/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  let counter = weightAvailable
  let weightObject = []
  let valueCounter = 0
  items.forEach(function(element) {
    if(!weightObject.includes(Object.val(element)[0])) {
      weightObject.push(Object.val(element)[0]) = 1
      if(counter - Object.val(element)[0] !== 0) {
        counter -= Object.val(element)[0]
        valueCounter += Object.val(element)[1]
      }
    } else {
      
    }
  }, this);

};

module.exports = solveKnapsack;
