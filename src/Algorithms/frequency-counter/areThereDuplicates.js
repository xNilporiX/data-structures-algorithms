/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
 * and checks whether there are any duplicates among the arguments passed in.
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 * @param  {...any} args 
 * @returns 
 */
function areThereDuplicates(...args) {
  if (!args) return false;

  var lookup = {};
  for (var item of args) {
    lookup[item] ? (lookup[item] += 1) : (lookup[item] = 1);
  }

  for (item in lookup) {
    if (lookup[item] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
