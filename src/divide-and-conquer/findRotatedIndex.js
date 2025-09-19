/**
 * Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer.
 * The function should return the index of the integer in the array. If the value is not found, return -1.
 * @param {*} arr
 * @param {*} target
 */
function findRotatedIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);
    console.log("mid", mid, arr[mid]);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      left = mid+1;
      console.log("Left ->", left, '', arr[left]);
    } else {
      right = mid-1;
      console.log("Right <-", right, arr[right]);
    }
  }

  return -1;
}

// console.log(findRotatedIndex([3,4,1,2],4)) // 1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)) // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
// console.log(findRotatedIndex([37,44,66,102,10,22],14)) // -1
// console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)) // -1
// console.log(findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16)) // 5
