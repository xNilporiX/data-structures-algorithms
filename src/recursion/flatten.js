/**
 * Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 * @param {*} arrOfArrs
 */
function flatten(arrOfArrs) {
  //  The idea is: We have an array of arrays
  //  We will recursively go through the outermost array.
  //  As long as its not an array within the array, we store that value,
  //  Otherwise, we will keep popping that array until the element itself is a number.
  if (arrOfArrs.length === 0) return arrOfArrs;

  function helper(arrOfArrs) {
    if (isNaN(arrOfArrs[0])) {
      arrOfArrs.pop();
    }
  }

  return flatten(arrOfArrs.slice(1));
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
