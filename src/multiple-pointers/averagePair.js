/**
 * Write a function called averagePair. 
 * Given a sorted array of integers and a target average, 
 * determine if there is a pair of values in the array where the average of the pair equals the target average. 
 * 
 * There may be more than one pair that matches the average target.
 * @param {*} array
 * @param {*} target
 * @returns {boolean}
 */
function averagePair(array, target) {
  if (!array.length) return false;

  //   We need two pointers that point to two values and keep comparing them to see if they match
  let min = 0;
  let max = array.length - 1;

  while (min < max) {
    const average = (array[min] + array[max]) / 2;
    if (average > target) {
      max--;
    } else if (average < target) {
      min++;
    } else {
      return true;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
