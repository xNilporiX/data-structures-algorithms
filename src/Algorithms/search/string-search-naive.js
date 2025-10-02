/**
 * Naive search on the string to find matching patterns. If there is a matching pattern, increment the count and return it.
 * @param {*} string
 * @param {*} pattern
 * @param {*} count
 * @returns
 */
function naiveSearch(string, pattern, count = 0) {
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (string[i + j] !== pattern[j]) break;
      if (j === pattern.length - 1) count++;
    }
  }

  return count;
}

console.log(naiveSearch("thisisathis", "is"));
