/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 * @param {*} string
 */
function reverse(val) {
  if (val.length === 0) return val;

  return val.slice(-1) + reverse(val.slice(0, -1));
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); //'loohcsmhtir'
