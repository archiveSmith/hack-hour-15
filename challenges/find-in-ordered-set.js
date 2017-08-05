/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
*/
var nums = [1, 4, 6, 7, 9, 17, 45, 55]



function findInOrderedSet(arr, target) {
        if (arr.length<=0) return false
        let mid = Math.floor(arr.length/2);
        if (target === arr[mid]) return true;
        if (target<arr[mid]) findInOrderedSet(arr.slice(0,mid), target); 
        else if (target>arr[mid]) findInOrderedSet(arr.slice(mid,arr.length), target);
       
    
     return false;
}
console.log(findInOrderedSet(nums, 4));  
console.log(findInOrderedSet(nums, 2));  
console.log("hi")

module.exports = findInOrderedSet;
