/**
 * Write a function called findLongestSubstring, which accepts a string and
 * returns the length of the longest substring with all distinct characters.
 */
function findLongestSubstring(longstring) {
  if (!longstring) return 0;

  // We need to create a window left-> [ .... ] <- right
  let left = 0;
  let right = 0;

  let currentLen = 0;
  let maxLen = 0;

  // Creating a unique set to detect dups.
  const lookup = new Set();

  while (right < longstring.length) {
    // It checks the lookup for the character, if it doesn't find it, meaning unique, we store it and expand the window.
    if (!lookup.has(longstring[right])) {
      lookup.add(longstring[right]);
      right++;
      currentLen++;
    // Since we only care about the longest length of substring and not the current window length, we compare and store the max.
      maxLen = Math.max(maxLen, currentLen);
    } else {
     // If there is a duplicate, we shift the window to the left and we need to delete that character from the set.
    //   we keep moving the left pointer until there is no duplicates
      lookup.delete(longstring[left]);
      left++;
      currentLen--;
    }
  }

  return maxLen;
}

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
