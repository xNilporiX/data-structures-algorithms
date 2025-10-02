/**
 * Radix Sort
 *
 * Idea:
 * 1. Sort numbers digit by digit, starting from the rightmost digit (ones place).
 * 2. Use 10 buckets (0-9) to group numbers by the current digit.
 * 3. After each pass, flatten the buckets back into the array to preserve order.
 * 4. Repeat for each digit until the most significant digit of the largest number.
 *
 * Example:
 * [123, 33, 4, 2]
 * - Ones place: bucket[3] => [123, 33], bucket[4] => [4], bucket[2] => [2]
 * - Flatten → [123, 33, 4, 2]
 * - Next digit (tens place) ...
 *
 * @param {number[]} arr - Array of non-negative integers to sort
 * @returns {number[]} - Sorted array
 */
function radixSort(arr) {
  const maxDigits = mostDigits(arr);

  for (var i = 0; i < maxDigits; i++) {
    // Creating 10 empty sub arrays
    let buckets = Array.from({ length: 10 }, () => []);

    for (var j = 0; j < arr.length; j++) {
      // Get the digit of the index i.
      let digit = getDigit(arr[j], i);
      buckets[isNaN(digit) ? 0 : digit].push(arr[j]);
    }

    // After end of each inner loop, concatenate the the buckets into the array to remember the order.
    // Mutating
    arr = [].concat(...buckets);
  }

  return arr;
}

/**
 * Gets the digit of the number by index from the right hand side.
 * @param {*} num
 * @param {*} index
 * @returns
 */
function getDigit(num, index) {
  var item = String(Math.abs(num)).split("").reverse();
  return Number(item[index]);
}

/**
 * Gets the length of the number.
 * @param {*} num
 * @returns
 */
function numLength(num) {
  return String(Math.abs(num)).length;
}

/**
 * Loops through the array to find the maximum digits of any of the elements.
 * @param {*} numArr
 * @param {*} max
 * @returns
 */
function mostDigits(numArr, max = 0) {
  for (var item of numArr) max = Math.max(max, numLength(item));

  return max;
}

console.log(radixSort([3430, 23, 1, 333333]));
