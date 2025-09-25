/**
 * Write a recursive function called capitalizeWords.
 * Given an array of words, return a new array containing each word capitalized.
 * @param {*} arr
 */
function capitalizeWords(arr) {
  if (arr.length === 0) return arr;

  let capitalWords = [];

  capitalWords = [arr[0].toUpperCase()];

  return capitalWords.concat(capitalizeWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
