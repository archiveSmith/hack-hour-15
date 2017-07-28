/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

// Input
  // An array of arrays, where each array is a start time and an end time of a meeting
// Output
  // An array of arrays, where each continuous meeting from the input is described as one meeting

//// Brute forcey
//function mergeRanges(array) {
//  // Create output array
//  
//  // Iterate through meeting times
//  
//    // Iterate through output
//  
//      // if the output start or end times are within the current start or end times, merge the two and break
//  
//    // Add the time to the output
//}

// Still brute forcey
function mergeRanges(array) {
  // Create storage object, min start time and max end time
  const meetings = {};
  let min = Infinity;
  let max = -Infinity;
  
  // Iterate through meeting times
  array.forEach(meeting => {
    // If the meeting does exist in storage object, store the start time as the key and end time as a value
    if (meetings[meeting[0]] === undefined) meetings[meeting[0]] = meeting[1];
    // If the start time exists in the storage object and the end time is greater than the existing end time, then overwrite the existing end time
    else if (meeting[1] > meetings[meeting[0]]) meetings[meeting[0]] = meeting[1];
  
    // Update min/max
    if (meeting[0] < min) min = meeting[0];
    if (meeting[1] > max) max = meeting[1];
  });
  
  // Create current start time and end time variables, and output array
  const output = [];
  let start = null;
  let end = null;
  
  // Iterate from the min start time to max end time
  for (let i = min; i <= max; i += 1) {
  
    // If end time exists and i > end time, create start, end pair in output array
    if (end !== null && i > end) {
      output.push([start, end]);
      start = null;
      end = null;
    }
    
    // If no current start time and there is a key in the object that matches i, store i as the current start time
    if (start == null && meetings[i]) {
      start = i;
      end = meetings[i];
    }
    
    // If start time, and there is a key that matches i, and the value at that key is greater than the current end time, update the current end time
    if (start !== null && meetings[i] && meetings[i] > end) end = meetings[i];
  }
  
  // If one of these is true and not the other, something broke
  if (start !== null && end !== null) output.push([start, end]);
  
  // Return the output
  return output;
}

// Test cases
//var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
//console.log(mergeRanges(times));

module.exports = mergeRanges;
