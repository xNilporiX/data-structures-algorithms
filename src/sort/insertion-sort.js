/**
 * Insertion Sort.
 * @param {*} arr
 * @returns
 */
function insertionSort(arr) {
  // The left side is always sorted. Thus we start from i=1;
  for (var i = 1; i < arr.length; i++) {
    // Compare currentVal value with previous element (sorted left side element).
    var currentVal = arr[i];
    // Inner Sorted loop
    // If currentVal is less than the sorted value on the left.
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      //  Shift the value on the left, to the right to make space for currentVal value.
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1]));
console.log(insertionSort([7, 5, 3, 1]));
var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(insertionSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
