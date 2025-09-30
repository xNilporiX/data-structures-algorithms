/**
 * Bubble sort. The idea is: the largest value should move to the right most position after every inner loop execution.
 * Example: [5, 4, 3, 2, 1]
 * [ 4, 3, 2, 1, 5 ]
 * [ 3, 2, 1, 4, 5 ]
 * [ 2, 1, 3, 4, 5 ]
 * [ 1, 2, 3, 4, 5 ]
 * [ 1, 2, 3, 4, 5 ]
 * 
 * As we know the largest value is always gonna be at the end, there is no need to compare with the end elements.
 * Hence, on the outer loop, we decrement the array, so that it is optimised.
 * @param {*} arr 
 * @returns 
 */
function bubbleSort(arr) {
  let temp = 0;
  // We can optimise this even further, if the array is already sorted while looping, we can break.   
  let noSwaps = false;
  for (var i = arr.length - 1; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort([25, 100, 33, 22, 121]));
