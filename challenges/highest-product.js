/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */


// tricks -- maybe if two negatives??  
function highestProduct(array) {
  if(array.length < 3) return undefined;
  
  array.sort((a, b) => { return b - a;});

  const negs = array.filter(x => {return x < 0}).reverse();

  if (negs.length > 1  &&  (negs[0] * negs[1]) > (array[0] * array[1])) return negs[0] * negs[1] * array[0];

  return array[0] * array[1] * array[2]; 
};


module.exports = highestProduct;
