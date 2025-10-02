/**
 * Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. 
 * This function should return true if the pair exists or false if it does not.
 * @param {*} array 
 * @param {*} diff 
 * @returns 
 */
function findPair(array, diff) {
  // The idea is simple.
  // First we sort the array in ascending order.

  const sortedArray = array.sort((a, b) => a - b);

  // Add two pointers at the start and at the end
  let first = 0;
  let second = 1;

  while (second < array.length) {
    // We have two pointers at index 0 and index 1 which will compare between the two number within the sorted array. If match is found, true, otherwise increment both the indexes and compare until a match is found.
    const diffArray = sortedArray[second] - sortedArray[first];
    if (Math.abs(diffArray) === Math.abs(diff)) {
      return true;
    } else {
      first++, second++;
    }
  }

  return false;
}

console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair([], 0)); // false
console.log(findPair([5, 5], 0)); // true
console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true
console.log(findPair([1, 3, 4, 6], -2)); // true
console.log(findPair([0, 1, 3, 4, 6], -2)); // true
console.log(findPair([1, 2, 3], 0)); // false
