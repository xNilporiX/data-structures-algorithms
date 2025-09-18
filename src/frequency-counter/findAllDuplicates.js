/**
 * Given an array of positive integers, some elements appear twice and others appear once. 
 * Find all the elements that appear twice in this array. Note that you can return the elements in any order.
 * @param {*} array 
 * @returns 
 */
function findAllDuplicates(array) {
  //  Create a lookup of items in the array and its frequencies that appears.
  let temp = [];
  var lookup = {};

  for (var item of array) {
    lookup[item] ? (lookup[item] += 1) : (lookup[item] = 1);
  }

  for (item in lookup) {
    if (lookup[item] > 1) temp.push(Number(item));
  }

  return temp;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array
