/**
 * Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer.
 * The function should return the index of the integer in the array. If the value is not found, return -1.
 * @param {*} arr
 * @param {*} target
 */
function findRotatedIndex(arr, target) {
  if (!arr.length) return -1;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // If the middle element of the array matches, just return index.
    if (arr[mid] === target) {
      return mid;
    }

    // If array at the left side is less than the mid.
    if (arr[left] <= arr[mid]) {
      if (arr[left] <= target && target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      // Otherwise if array at left is more than the mid, we look at the right portion
    } else {
      // If array at mid is less than the target and the target is less than arr of right
      if (arr[mid] < target && target <= arr[right]) {
        left = mid + 1;
      }
      // Otherwise decrease from the right
      else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5
