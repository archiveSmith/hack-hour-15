/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
// [1, 2, 6, 9, 4, 10] > 6 * 9 * 10
// sort nums, split to positive and negative groups.
// count negatives, discard if less than two.
function highestProduct(array) {
  if (array.length <= 3) return 0;

  array = array.sort((a,b)=> a - b);
  let negs = array.filter((a,b) => a < 0);
  let pos = array.filter((a,b) => b > 0);
  let maxPos = 0;
  if (pos.length <= 2){
    //negatives dominate.
     maxPos = array.reduce((a,b) => a*b,1);
    console.log(maxPos);
  } else{
    maxPos = array.slice((array.length - 3)).reduce((a,b) => a*b);
  }
    // no need to check negatives.
  if (negs.length < 2) return maxPos;

  let maxNeg = negs[0] * negs[1];
  let subPos = pos[pos.length - 2] * pos[pos.length - 3];
  if (maxNeg > subPos) return maxNeg * array[array.length - 1];
  else return maxPos;

}

let test1 = highestProduct([-15, -2, 6, -9, -4, 10]);
console.log(test1, "Test 1");
console.log(15*9*10)

module.exports = highestProduct;
