/**
 *  Write a function called constructNote, which accepts two strings, a message and some letters. 
 *  The function should return true if the message can be built with the letters that you are given, or it should return false.
    
    Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

    Bonus Constraints:
    If M is the length of message and N is the length of letters:
    Time Complexity: O(M+N)
    Space Complexity: O(N)
 * @param {*} message 
 * @param {*} letters 
 * @returns 
 */
function constructNote(message, letters) {
  // Return true, if the message can be formed from the letters, otherwise false;

  //   create a lookup of the letters first
  var lookup = {};
  for (var item of letters) {
    lookup[item] ? (lookup[item] += 1) : (lookup[item] = 1);
  }

  //  Look thru the message and use the letters to see if the conditioon can be fulfilled
  for (var item of message) {
    if (!lookup[item]) return false;

    if (lookup[item]) lookup[item] -= 1;
  }

  return true;
}

console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
