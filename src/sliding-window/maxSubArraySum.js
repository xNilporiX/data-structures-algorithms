/**
 * Given an array of integers and a number, write a function called maxSubarraySum, 
 * which finds the maximum sum of a subarray with the length of the number passed to the function.
   Note that a subarray must consist of consecutive elements from the original array. 
   In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
 * @param {*} array 
 * @param {*} n 
 * @returns 
 */
function maxSubarraySum(array, n) {
  //   return the maximum amount of n elements within the array.
  // The idea is we will create a window within the array and move it along as required.
  //  Handle empty values
  if (array.length < n) return null;

  let tempSum = 0;
  let maxSum = 0;

  // Add all the numbers upto n.
  for (let i = 0; i < n; i++) {
    maxSum += array[i];
  }
  // console.log(tempSum);
  tempSum = maxSum;

  // Create a window
  for (let i = n; i < array.length; i++) {
    tempSum = tempSum - array[i - n] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
