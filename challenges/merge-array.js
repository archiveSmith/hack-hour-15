/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time and O(n) space 
 *
 */

function mergeArrays(arr1, arr2) {
  const mgd = [];
  let i1 = 0;
  let i2 = 0;
  while(mgd.length < ar1.length + ar2.length){
      if(i1 === ar1.length){
          mgd.push(ar2[i2]);
          i2++;
      } else if(i2 === ar2.length){
          mgd.push(ar1[i1]);
          i1++;
      } else if(ar1[i1] < ar2[i2]){
          mgd.push(ar1[i1]);
          i1++;
      } else{
          mgd.push(ar2[i2]);
          i2++;
      }
  }
  return mgd;
}

module.exports = mergeArrays;
