/**
 * Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array
 * @param {*} arr
 * @param {*} target
 */
function sortedFrequency(array, target) {
  let firstIndex = findBound(array, target, true);
  let lastIndex = findBound(array, target, false);

  return firstIndex === -1 ? -1 : lastIndex - firstIndex + 1;
}

/**
 * Helper function to find the first or last index of the target.
 * @param {*} arr 
 * @param {*} target 
 * @param {*} isFirst 
 * @returns 
 */
function findBound(arr, target, isFirst) {
  let left = 0;
  let right = arr.length - 1;
  let bound = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // If there is a match, we store the index and move left or right based on isFirst flag
    if (arr[mid] === target) {
      bound = mid;
      // if isFirst is true, we move left to find the first occurrence
      if (isFirst) right = mid - 1;
      // if isFirst is false, we move right to find the last occurrences
      else left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return bound;
}

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
