/**
 *  Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
    
    Your solution MUST have the following complexities:
    Time: O(N)
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function sameFrequency(num1, num2) {
  // Empty object
  let lookup = {};

  // We look thru the first argument, store the values in an object
  for (var item of String(num1)) {
    lookup[item] ? (lookup[item] += 1) : (lookup[item] = 1);
  }

  console.log(lookup);
  // Another loop to compare with num2
  for (var item of String(num2)) {
    if (!lookup[item]) return false;

    if (lookup[item]) lookup[item] -= 1;
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
