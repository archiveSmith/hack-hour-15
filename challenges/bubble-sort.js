// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  const ret = array;
  let swapped
  do {
    swapped = false
    for (let i = 1; i < ret.length; ++i) {
      if (ret[i - 1] > ret[i]) {
        [ret[i], ret[i - 1]] = [ret[i - 1], ret[i]]
        swapped = true
      }
    }
  } while (swapped)
  return ret
}

module.exports = bubbleSort;

console.log(bubbleSort([9,2,14,3,2,7,8]))