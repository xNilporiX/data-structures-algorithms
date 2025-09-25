/**
 * Finds the index of the target specified within the unsorted array.
 * @param {*} arr
 * @param {*} target
 */
function linearSearch(arr, target) {
  if (!arr.length) return -1;
  for (const [index, item] of arr.entries()) {
    if (item === target) return index;
  }

  return -1;
}

console.log(linearSearch([1, 5, 63, 5, 8, 9, 45], 8));
console.log(linearSearch([10, 15, 20, 25, 30], 15));
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
console.log(linearSearch([100], 100));
console.log(linearSearch([1, 2, 3, 4, 5], 6));
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10));
console.log(linearSearch([100], 200));
