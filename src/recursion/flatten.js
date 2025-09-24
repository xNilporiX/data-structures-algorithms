/**
 * Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 * @param {*} arrOfArrs
 */
function flatten(arrOfArrs) {
  //  The idea is: We have an array of arrays
  //  We will recursively go through the outermost array.
  //  As long as its not an array within the array, we store that value,
  //  Otherwise, we will keep recursively calling that array until the element itself is a number.
  if (arrOfArrs.length === 0) return arrOfArrs;
  let flattenedElement = [];

  //  using [1, 2, 3, [4, 5]] as an example. 
  //  Checks if the Element itself is an array.
  //  We reach a stage where the last element would be the nested array [[4,5]] after we sliced through it.
  if (Array.isArray(arrOfArrs[0])) {
    //  Now that we know [[4,5]] is an array, we call the recursive function again.
    //  But this time we just pass in the array element
    //  [4, 5] -> (not nested anymore), thus skips this if condition and goes to else 
    flattenedElement = flatten(arrOfArrs[0]);
  } else {
    // If there is no nested array, store the element
    // For instance we store [1, 2, 3] without recursively flattening it.
    flattenedElement = [arrOfArrs[0]];
  }

  //  Concatenate the element and slice it.
  //  First iteration should look like this after slicing : [2,3, [4, 5]] and so on. 
  return flattenedElement.concat(flatten(arrOfArrs.slice(1)));
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
