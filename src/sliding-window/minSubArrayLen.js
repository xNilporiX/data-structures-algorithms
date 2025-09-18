/**
 *  Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

    This function should return the minimal length of a contiguous subarray of which the 
    sum is greater than or equal to the integer passed to the function. 
    
    If there isn't one, return 0 instead.
 * @param {*} array 
 * @param {*} target 
 */
function minSubArrayLen(array, target) {
  //  The array is positive integers and the target is to find the minimal length of array
  //  elemnents summed needed to be equal or greater than the target.

  // Left and Right Pointer to create a window
  let left = 0;
  let right = 0;

  //  Current window size, default to 1
  let currentLen = 1;

  // Set Min Len to Infinity
  let minLen = Infinity;
  let sum = 0;

  while (right < array.length) {
    //  If there already is a value within the array greater than or equal to target, just return 1.
    if (array[right] >= target) return 1;

    // Otherwise add sum to the array of the right pointer.
    sum = sum + array[right];

    // Keep looping to decrease the sum from the left as long as the condition is satisfied.
    while (sum >= target) {
      currentLen = right - left + 1;
      minLen = Math.min(currentLen, minLen);
      sum = sum - array[left];
      left++;
    }
    
    // If the sum is less than target, expand the window and increase the window size.
    right++;
    currentLen++;
  }

  return minLen !== Infinity ? minLen : 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
