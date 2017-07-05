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
  var my_array = [3,4,6,10,11,15,21];
  var another_array = [1,5,8,12,14,19];
  
function mergeArrays(arr1, arr2) {

var newArr = [];

//console.log(arr1.shift());
while (arr1[0] && arr2[0]){
    arr1[0]<arr2[0] ? (newArr.push(arr1[0]), arr1.shift()) : (newArr.push(arr2[0]), arr2.shift())
}

if (arr1.length>0){
    newArr = newArr.concat(arr1);
} else if (arr2.length>0) {
    newArr = newArr.concat(arr2);
}
return newArr;
}
console.log(mergeArrays(my_array, another_array));

module.exports = mergeArrays;
