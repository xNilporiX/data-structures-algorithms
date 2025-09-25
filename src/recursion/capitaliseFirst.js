/**
 * Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
 * @param {*} arr
 */
function capitalizeFirst(arr) {
  if (arr.length === 0) return arr;
  let capitalizedArr = [];

  if (arr[0]) {
    capitalizedArr = [arr[0].replace(arr[0][0], arr[0][0].toUpperCase())];
  }

  return capitalizedArr.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
